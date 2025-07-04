import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(private http:HttpClient) { }
  login(m:any): Observable<any>{
      return this.http.post('http://127.0.0.1:8000/api/loginP', m)
    }
}
