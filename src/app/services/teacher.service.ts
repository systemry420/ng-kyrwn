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

  // // tetsing quiz
  // getQuiz() {
  //   this.kayrawanFS.collection("bt3-nursing").doc("health-care")
  //   .valueChanges().subscribe(data=>{
  //     let date = new Date()
  //     let d = ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()).toString()
  //     console.log(data, d);

  //     Object.keys(data).map((index)=>{
  //       let sub = data[index];
  //       console.log(index);
  //       const name = Object.keys(sub).toString()
  //       const display = Object.values(sub).toString()
  //       if(index == d) {
  //         console.log(sub);

  //       }
  //     })
  //   })
  // }

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
