import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject('kayrawan-proj') private kayrawanFS: AngularFirestore,
  ) { }

  teacherLogin(email: string, password: string) {
    console.log(email, password);

    return this.http.post<any>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnowTTt-juDiyc-ykbgiQeGSVh9j6SWQw',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(catchError(this.handleError))
  }

  private handleError(errorRes) {
    let errorMessage = 'حدث خطأ في الاتصال'

    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_NOT_FOUND":
        errorMessage = 'هذا البريد غير متوفر'
        break;
      case "INVALID_PASSWORD":
        errorMessage = 'كلمة المرور خاطئة'
        break;
    }
    return throwError(errorMessage)
  }

}
