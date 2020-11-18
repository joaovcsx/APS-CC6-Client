import { Component, OnInit, Inject }    from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService }                   from '../../services/api.service';
import { IParamsFingerprintExists }     from  '../../interfaces/fingerprint'

@Component({
  selector: 'fingerprint-form',
  templateUrl: './fingerprint-form.component.html',
  styleUrls: ['./fingerprint-form.component.scss'],
})
export class FingerprintFormComponent implements OnInit {

  public imgURL: any;
  public name: string;
  public invalid: string;
  public level: number;
  public loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<FingerprintFormComponent>,
    @Inject(MAT_DIALOG_DATA) public userData: {file: File},
    private _apiService: ApiService,
  ) { }

  ngOnInit() {
    let reader = new FileReader();
    reader.readAsDataURL(this.userData.file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  create() {
    if (!this.name || this.name.trim() == '')
      this.invalidFields('"Nome"');
    if (!this.level || !(this.level in [0, 1, 2, 3]))
      this.invalidFields('"Nível"');
    if (this.name && this.level && this.level in [0, 1, 2, 3]) {
      this.loading = true;
      let params: IParamsFingerprintExists = {
        name: this.name.trim(),
        level: this.level,
        uploadFile: this.userData.file
      }
      this._apiService.postFingerprints(params).subscribe(
        response => {
          if (response && response['status'] == 'created')
            this.dialogRef.close('created');
          else if (response && response['status'] == 'error'){
            this.invalid = 'Ocorreu o seguinte erro: ' + response['error'];
              setTimeout(() => {
                this.invalid = ''}, 4000);
          }
          this.loading = false;
        },
        (error) => {
          console.log(error);          
          this.loading = false;
        }
      )
    }
  }

  invalidFields(fielInvalid: string) {
    this.invalid = 'Campo ' + fielInvalid + ' inválido. O nível deve ser entre 0 a 3.';
    setTimeout(() => {
      this.invalid = ''}, 3000);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
