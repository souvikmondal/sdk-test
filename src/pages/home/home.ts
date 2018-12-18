import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelemetryService, TelemetryFactory, ImpressionType, PageId, Environment } from 'sunbird-sdk-telemetry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private telemetryService: TelemetryService,
    private telemetryFactory: TelemetryFactory) {

  }

  ionViewDidEnter() {
    this.telemetryService.save(
      this.telemetryFactory.createImpression(
        ImpressionType.VIEW, "",
        PageId.HOME,
        Environment.USER, "", "", "",
        undefined,
        undefined
      )
    );
  }

}
