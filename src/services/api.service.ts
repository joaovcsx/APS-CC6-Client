import { Injectable }                               from '@angular/core';
import { AppService }                               from './app.service'
import { IFingerprint, IParamsFingerprintExists }         from '../interfaces/fingerprint'
import { Observable, Subscriber }                   from 'rxjs';
import { HttpClient, HttpHeaders }      from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _appService: AppService,
    private _http: HttpClient
  ) { }

  public getFingerprints(): Observable<Array<IFingerprint>> {
    return new Observable<Array<IFingerprint>>(subscriber => {
      const url = this._appService.apiURL() + '/fingerprints';
      this._http.get(url).subscribe(
        response => subscriber.next(response as Array<IFingerprint>),
        (error) => subscriber.next(error)         
      );
    });
  }

  public postFingerprintsExists(params: IParamsFingerprintExists): Observable<IFingerprint> {
    return new Observable<IFingerprint>(subscriber => {
      const url = this._appService.apiURL() + '/fingerprint/exists';
      const formData = new FormData();
      formData.append('uploadFile', params.uploadFile);
      this._http.post(url, formData).subscribe(
        response => subscriber.next(response as IFingerprint),
        (error) => subscriber.next(error)         
      );

    });
  }

}
