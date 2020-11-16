import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public pageName: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    switch (this.folder) {
      case 'fingerprints': {
        this.pageName = 'Banco de digitais cadastradas';
        break;
      }
      case 'fingerprints-exists': {
        this.pageName = 'Consulta de digitais';
        break;
      }
      default: {
        this.pageName = '';
      }
    }
    
  }

}
