import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MatchdataService {
  constructor(private http: HttpClient) {
  }
  public getJSON_15_16(): Observable<any> {
    return this.http.get("./assets/json/EPL-2015-16.json")
  }
}
