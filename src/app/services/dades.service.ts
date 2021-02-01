import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DadesService {
  apiUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
  
  constructor(private _http: HttpClient) { }

  getAliments(){

    return this._http.get<User[]>(this.apiUrl);

  }
}
