import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advice, Slip } from './advice';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

 public get() {
    return this.http.get<Advice>('https://api.adviceslip.com/advice');
 }
}
