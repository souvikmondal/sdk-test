import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelemetryService, TelemetryFactory, ImpressionType, PageId, Environment } from 'sunbird-sdk-telemetry';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    private telemetryService: TelemetryService,
    private telemetryFactory: TelemetryFactory) {

  }

  ionViewDidEnter() {
    this.telemetryService.save(
      this.telemetryFactory.createImpression(
        ImpressionType.VIEW, "",
        PageId.PROFILE,
        Environment.USER, "", "", "",
        undefined,
        undefined
      )
    );
  }

}
