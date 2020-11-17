import { Injectable } from '@angular/core';
// import { AngularFirestore }     from '@angular/fire/firestore';
// import { Observable }           from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    // private _fb: AngularFirestore,
  ) { }

  // getUrlApiDatabase(): Observable<{url: string}> {
  //   return new Observable<{url: string}>(subscriber => {
  //     this._fb.collection('parameters').valueChanges().subscribe(
  //       response => subscriber.next({url: response[0]['url']})
  //     );
  //   });
  // }

}
