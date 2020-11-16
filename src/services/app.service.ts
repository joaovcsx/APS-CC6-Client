import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public url:string = 'http://127.0.0.1:8050/v1';

  apiURL(): string {
    if (this.url != '')
      return this.url
    else {
      return ''
    }
  }
}
