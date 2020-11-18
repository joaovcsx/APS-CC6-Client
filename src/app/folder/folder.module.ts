import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { IonicModule }        from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage }         from './folder.page';
// Components
import { FingerprintComponent } from '../../pages/fingerprint/fingerprint.component';
import { FingerprintsExistsComponent } from '../../pages/fingerprints-exists/fingerprints-exists.component';
import { CardFingerprintComponent } from '../../componentes/card-fingerprint/card-fingerprint.component';
import { FingerprintFormComponent } from '../../componentes/fingerprint-form/fingerprint-form.component';
// Angular material
import { MatDialogModule }          from '@angular/material/dialog';
import { MatFormFieldModule }       from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  declarations: [
    FolderPage,
    FingerprintComponent,
    CardFingerprintComponent,
    FingerprintsExistsComponent,
    FingerprintFormComponent,
  ]
})
export class FolderPageModule {}
