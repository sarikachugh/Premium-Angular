import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

import { Insurance } from '../shared/insurance.model';
import { InsuranceService } from '../insurance.service';

@Injectable()
export class InsurancePremiumService {
  insurancesChanged = new EventEmitter<Insurance[]>();
  private insurances: Insurance[] = [
    new Insurance('Norman Gomes', 34, 'Male', 'Overweight', 'Alcohal')
  ];

constructor(private insuranceService: InsuranceService) {}

onInsuranceAdd(insData: {insName: string, insAge: number, insGender: string, insCondition: string, insHabit: string}) {
  this.insurances.push({
    name: insData.insName,
    age: insData.insAge,
    gender: insData.insGender,
    condition: insData.insCondition,
    habit: insData.insHabit
  });
  console.log(this.insurances);
  this.insurancesChanged.emit(this.insurances.slice());

  //On Get request
  this.insuranceService.getInsurances()
  .subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );
}

// onSave(){
//   this.insuranceService.storeInsurances(this.insurances)
//     .subscribe(
//       (response) => console.log(response),
//       (error) => console.log(error)
//     );
// }

}
//On Save or Post request
// this.insuranceService.storeInsurances(this.insurances)
//   .subscribe(
//     (response) => console.log(response),
//     (error) => console.log(error)
//   );
