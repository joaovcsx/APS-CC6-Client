import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseService } from '../services/firebase.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = undefined;
  // public appPages = [
  //   {
  //     title: 'Inbox',
  //     url: '/folder/Inbox',
  //     icon: 'mail'
  //   },
  //   {
  //     title: 'Outbox',
  //     url: '/folder/Outbox',
  //     icon: 'paper-plane'
  //   },
  //   {
  //     title: 'Favorites',
  //     url: '/folder/Favorites',
  //     icon: 'heart'
  //   },
  //   {
  //     title: 'Archived',
  //     url: '/folder/Archived',
  //     icon: 'archive'
  //   },
  //   {
  //     title: 'Trash',
  //     url: '/folder/Trash',
  //     icon: 'trash'
  //   },
  //   {
  //     title: 'Spam',
  //     url: '/folder/Spam',
  //     icon: 'warning'
  //   }
  // ];
  public appPages = [
    {
      title: 'Consulta de digitais',
      url: '/folder/fingerprints-exists',
      icon: 'file-tray-full'
    },
    {
      title: 'Banco de digitais',
      url: '/folder/fingerprints',
      icon: 'finger-print'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public labels = [];
  public url: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _fb: FirebaseService,
    private _app: AppService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this._fb.getUrlApiDatabase().subscribe(
        response => {
          this._app.setURL(response.url).subscribe(
            () => this.url = this._app.apiURL())
        })
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
