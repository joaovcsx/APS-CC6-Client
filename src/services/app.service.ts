import { Injectable } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable }      from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _fb: FirebaseService
  ) { }

  // public url:string = '';
  public url:string = 'https://dd765f9c964c.ngrok.io/v1';

  apiURL(): string {
    return this.url;
  }

  setURL(url: string): Observable<string> {
    this.url = url;
    return new Observable<string>(subscriber => {
      subscriber.next('start')
    });
  }
}
