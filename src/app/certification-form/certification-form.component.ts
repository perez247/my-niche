import { NgForm } from '@angular/forms';
import { DisplayService } from './../services/display.service';
import { CertificationService } from './../services/certification.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certification-form',
  templateUrl: './certification-form.component.html',
  styleUrls: ['./certification-form.component.css']
})
export class CertificationFormComponent implements OnInit {
  certifications$;
  certification;

  constructor(
    private certificationService: CertificationService,
    private toaster: DisplayService,
    private modelService: NgbModal) { }

  ngOnInit() {
    this.certifications$ = this.certificationService.all();
  }

  submit(f: NgForm) {
    // console.log(f.value);
    this.certificationService.save(f.value, f.value.key)
      .then(x => { this.toaster.success(); f.reset(); },
      e => this.toaster.error());
    // f.reset();
  }

  displayCertification(certification, content) {
    this.certification = certification;
    this.displayForm(content);
  }

  deleteSelectedCertification(key: string) {
    // console.log(key);
    this.certificationService.delete(key)
      .then(e => this.toaster.success())
      .catch(e => this.toaster.error());
  }

  displayForm(content) {
    this.modelService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }

}
