import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {DBContext, DBMigration, DBService} from 'sunbird-module-db';
import { getAppMigrationList } from '../migration/app.migrations';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbService: DBService) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}

export class SunbirdDBContext implements DBContext{

  getAppMigrationList(): Array<DBMigration> {
    return getAppMigrationList();
  }

  getDBName(): string {
    return "sunbird_db";
  }

  getDBVersion(): number {
    return 1;
  }


}
