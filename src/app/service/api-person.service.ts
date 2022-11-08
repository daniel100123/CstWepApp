import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../Models/Persona';
import { Response } from '../Models/Response';
const httpOption={

  Headers:new HttpHeaders({
     'Contend-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiPersonService {
  
  url: string='https://jsonplaceholder.typicode.com/todos/1';
  constructor( 
    private http: HttpClient
    ) { }

  
}
