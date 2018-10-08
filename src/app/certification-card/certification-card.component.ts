import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DisplayService } from './../services/display.service';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.css']
})
export class CertificationCardComponent implements OnInit {
  @Input('certification') certification;
  @Output('selectedCertification') selectedCertification = new EventEmitter();
  @Output('deleteSelectedCert') deleteSelectedCert = new EventEmitter();

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
  }

  selected(certification) {
    this.selectedCertification.emit(certification);
  }

  deleteCertification(key) {
    // this.certificationService.delete(key);
    this.displayService.notifier.confirm('Are you sure', 'Delete', {
      buttons: [
        {text: 'Nope!', action: (toast) => this.displayService.notifier.remove(toast.id) },
        {text: 'Yes, Please!', action: (toast) => {
          this.deleteSelectedCert.emit(key);
          this.displayService.notifier.remove(toast.id);
        } }
      ]
    });
  }

}
