import { Component, OnInit, HostListener }    from '@angular/core';
import { ApiService }                         from '../../services/api.service';
import { IFingerprint }                       from '../../interfaces/fingerprint';
import { ScreenType }                         from '../../interfaces/screentype';
import { MatDialog }                          from '@angular/material/dialog';
import { FingerprintFormComponent }           from '../../componentes/fingerprint-form/fingerprint-form.component'
import { getScreenType, getSizeModal }        from '../../utils/utils';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss'],
})
export class FingerprintComponent implements OnInit {

  public fingerprints: IFingerprint[];
  public loading: boolean = false;
  public screen: ScreenType;
  public screenType = ScreenType;

  constructor(
    private _apiService: ApiService,
    public dialog: MatDialog,
  ) { }

  @HostListener('window:resize')
  onResize() {
    this.screen = getScreenType();
  }

  ngOnInit() {
    this.screen = getScreenType();
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

  addFingerprint(event): void {
    let file = event.target.files[0];
    let innerWidth: string;
    if (file) {
      switch(this.screen) {
        case this.screenType.phone: {
          innerWidth = window.innerWidth * 0.9 + 'px';
          break;
        }
        case this.screenType.tablet: {
          innerWidth = window.innerWidth * 0.8 + 'px';
          break;
        }
        case this.screenType.desktop: {
          innerWidth = window.innerWidth * 0.6 + 'px';
          break;
        }
      }
      
      const dialogRef = this.dialog.open(FingerprintFormComponent, {
        width: innerWidth, 
        height: window.innerHeight * 0.8 + 'px',
        id: 'fingerprints-exists',
        data: { file: file }
      });

      dialogRef.afterClosed().subscribe((response) => {
        if (response == 'created')
          this.getFingerprints()
      });
    }
  }
  
}
