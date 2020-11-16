import { Component, OnInit }            from '@angular/core';
import { ApiService }                   from '../../services/api.service';
import { IFingerprint }                 from '../../interfaces/fingerprint';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss'],
})
export class FingerprintComponent implements OnInit {

  public fingerprints: IFingerprint[];
  public loading: boolean = false;
  constructor(
    private _apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getFingerprints();
  }
  
  getFingerprints(): void { 
    this.loading = true;
    this._apiService.getFingerprints().subscribe(
      fingerprints => {
        this.fingerprints = fingerprints
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }
  
}
