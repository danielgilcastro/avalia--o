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

  getPolicialByCpf(cpf: string) {
    return this.$http.get(`${this.apiUrl}/${cpf}`).toPromise().then(r=>{
      if(Array.isArray(r)){
        this.policiaisList = r;
      }else{
        this.policiaisList = [r];
      }
    }).catch(e=>{
      alert("Policial não encontrado");
    });
  }

  createPolicial(policial: any) {
    return this.$http.post(this.apiUrl, policial);
  }





}
