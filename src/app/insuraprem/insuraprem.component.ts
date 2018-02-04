import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { InsurancePremiumService } from './insurance-premium.service';
// import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-insuraprem',
  templateUrl: './insuraprem.component.html',
  styleUrls: ['./insuraprem.component.css']
})
export class InsurapremComponent implements OnInit {
  @ViewChild('nameInput') nameAdded: ElementRef;
  @ViewChild('ageInput') ageAdded: ElementRef;
  @ViewChild('genderInput') genderAdded: ElementRef;
  @ViewChild('conditionInput') conditionAdded: ElementRef;
  @ViewChild('habitInput') habitAdded: ElementRef;

  constructor(private insurancePremiumService: InsurancePremiumService) { }

  // private insuranceService: InsuranceService
  ngOnInit() {
  }

  onAddAge() {
    this.insurancePremiumService.onInsuranceAdd({
        insName: this.nameAdded.nativeElement.value,
        insAge: this.ageAdded.nativeElement.value,
        insGender: this.genderAdded.nativeElement.value,
        insCondition: this.conditionAdded.nativeElement.value,
        insHabit: this.habitAdded.nativeElement.value
    })
  }

  // onSave() {
  //   this.insurancePremiumService.onSave(); {}
  // }

}
