import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelemetryService, TelemetryFactory, ImpressionType, PageId, Environment } from 'sunbird-sdk-telemetry';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    private telemetryService: TelemetryService,
    private telemetryFactory: TelemetryFactory) {

  }

  ionViewDidEnter() {
    this.telemetryService.save(
      this.telemetryFactory.createImpression(
        ImpressionType.VIEW, "",
        PageId.ABOUT_APP,
        Environment.USER, "", "", "",
        undefined,
        undefined
      )
    );
  }

}
