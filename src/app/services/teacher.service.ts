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


  addQuiz(cls, subject, questions) {
    let date = new Date()
    let d = (date.getDate() + '-' + (date.getMonth() + 1)  + '-' + date.getFullYear() + date.getTime()).toString();

    return this.kayrawanFS.collection(cls).doc(subject)
    .update(
      {[d]: questions}
    ).then(()=>{
      console.log("added quiz")
    })
    .catch(error => {
      console.log(error);
    })
  }

  // // tetsing quiz
  // getQuiz() {
  //   let date = new Date()
  //   let d = ((date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear()).toString()
  //   this.kayrawanFS.collection("bt3_nursing").doc("health_care/" + d + '/' + d)
  //   .valueChanges().subscribe(data=>{
  //     let date = new Date()
  //     let d = ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()).toString()
  //     console.log(data, d);

  //     Object.keys(data).map((index)=>{
  //       let sub = data[index];
  //       console.log(index);
  //       const name = Object.keys(sub).toString()
  //       const display = Object.values(sub).toString()
  //       console.log(sub);
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
