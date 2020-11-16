import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { IonicModule }        from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage }         from './folder.page';
import { FingerprintComponent } from '../../pages/fingerprint/fingerprint.component';
import { FingerprintsExistsComponent } from '../../pages/fingerprints-exists/fingerprints-exists.component';
import { CardFingerprintComponent } from '../../componentes/card-fingerprint/card-fingerprint.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule    
  ],
  declarations: [
    FolderPage,
    FingerprintComponent,
    CardFingerprintComponent,
    FingerprintsExistsComponent
  ]
})
export class FolderPageModule {}
