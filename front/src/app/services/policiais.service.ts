import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PoliciaisService {
  private apiUrl = `${environment.apiUrl}/policiais`;
  
  $http = inject(HttpClient)

  constructor() { }

  policiaisList:any= [];

  getPoliciais() {
    return this.$http.get(this.apiUrl).subscribe((data: any) => {
      this.policiaisList = data;
    });
  }

  createPolicial(policial: any) {
    return this.$http.post(this.apiUrl, policial);
  }





}
