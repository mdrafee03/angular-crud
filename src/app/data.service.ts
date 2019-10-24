import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(
  private http: HttpClient
) { }
  getAll(): Observable<any> {
    return this.http.get<Data[]>('users');
  }
}
