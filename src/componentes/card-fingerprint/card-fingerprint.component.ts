import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IFingerprint } from '../../interfaces/fingerprint';


@Component({
  selector: 'card-fingerprint',
  templateUrl: './card-fingerprint.component.html',
  styleUrls: ['./card-fingerprint.component.scss'],
})
export class CardFingerprintComponent implements OnInit {

  @Input() fingerprint: IFingerprint;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  public name: string = 'Sem registro de nome';
  public level: number = 0;
  public color: string = 'danger';
  public imageDefault: string = 'https://firebasestorage.googleapis.com/v0/b/aps-cc5-communication.appspot.com/o/profile_photo%2FpersonIcon.png-1587776041416?alt=media&token=6e0fec70-b0f6-4b4f-852c-b5cab2c5cbfc';
  
  constructor() { }

  ngOnInit() {
    if (this.fingerprint) {
      this.name = this.fingerprint.name;
      this.level = this.fingerprint.level;
    }
    if (this.level == 1)
      this.color = 'medium'
    else if (this.level == 2)
      this.color = 'tertiary'
    else if (this.level == 3)
      this.color = 'success'
    else {
      this.color = 'danger'
    }
  }

  closeCard() {
    console.log('closecars')
    this.onClose.emit();
  }

}
