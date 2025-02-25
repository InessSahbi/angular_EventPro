import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizersService {

  constructor(private http:HttpClient) { }


  createOrg(m:any) :Observable<any>   {
    return this.http.post('http://127.0.0.1:8000/api/register', m)
  }
  login(m:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/login', m)
  }
}
