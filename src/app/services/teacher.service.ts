import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    @Inject('kayrawan-proj') private kayrawanFS: AngularFirestore,
  ) { }

  getSubjects(cls) {
    console.log(cls);
    // change this shit bt
    return this.kayrawanFS.collection("bt").doc(cls)
    .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.payload.data();
          // const id = changes.payload.id;
          // return { data };
        })
      )
  }

  addQuiz() {

  }
}

// .pipe(
//       map(snapshot => {
//           let items = [];
//           snapshot.docs.map(a => {
//               const data = a.data();
//               const id = a.id;
//               items.push({ id, data })
//           })
//           return items
//       })
//     )
