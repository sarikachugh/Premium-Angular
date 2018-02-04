import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Insurance } from './shared/insurance.model';

@Injectable()
export class InsuranceService {
  constructor(private http: Http) {}

//private headers: Headers
  // storeInsurances(insurances: Insurance[]) {
  //   return this.http.post('https://targethealthcareinsurance-100-snapshotjar-leonine-women.cfapps.io/basic', insurances, {headers: headers});
  // }
  getInsurances() {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get('https://targethealthcareinsurance-100-snapshotjar-leonine-women.cfapps.io/basic',
    {headers: headers});
  }

}
// {headers: headers}
// headers.append('Access-Control-Allow-Headers', 'Content-Type');
// headers.append('Access-Control-Allow-Methods', 'GET');
// headers.append('Access-Control-Allow-Origin', '*');
