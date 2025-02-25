import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../../../../user/src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  clicked=false
  getEventSearch(toS: string){
    return this.http.get(Environment.baseApi+'getEventSearch/'+toS)
  }
  getAllEventsExternesByType(type: string){
    return this.http.get(Environment.baseApi+'getAllEventsExternesByType/'+type)
  }
}
