import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {
private geturl = 'http://localhost:3000/formations';
  constructor(private http: HttpClient) { }
    
    getFormations(){
      return this.http.get(this.geturl);
    }
}
