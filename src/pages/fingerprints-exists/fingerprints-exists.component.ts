import { Component, OnInit } from '@angular/core';
import { ApiService }                   from '../../services/api.service';
import { IFingerprint }                 from '../../interfaces/fingerprint';

@Component({
  selector: 'fingerprints-exists',
  templateUrl: './fingerprints-exists.component.html',
  styleUrls: ['./fingerprints-exists.component.scss'],
})
export class FingerprintsExistsComponent implements OnInit {

  public attachments: File;
  public fingerprint: IFingerprint;
  public loading: boolean = false;
  constructor(
    private _apiService: ApiService,
  ) { }

  ngOnInit() {}

  addAttachment(event) {
    let file = event.target.files[0];
    if (file) {
      let params = {
        'uploadFile': file,
        'name': 'teste',
      }
      this.loading = true;
      this._apiService.postFingerprintsExists(params).subscribe(
        fingerprint => {
          this.fingerprint = fingerprint;
          console.log('caiu');
          console.log(this.fingerprint);
          this.loading = false;
        },
        error => {
          console.log(error)
          this.loading = false;
        }
      );
    }    
  }
  
  clear(): void {
    console.log('casiujf')
    this.fingerprint = undefined;
  }
}
