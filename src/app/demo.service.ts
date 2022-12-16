import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import  ConfigUrl  from '../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  config = {
        apiUrl : ConfigUrl.apiServer.url
  }
  constructor(private http : HttpClient) {
       this.getJSON().subscribe((data) => {
          this.config.apiUrl = data.apiServer;
          console.log(this.config.apiUrl);
       })
   }

   public getJSON() : Observable<any> {
        return this.http.get('../assets/config.json');
   }

   public getData() : Observable<any> {
      console.log(this.config.apiUrl);
      //return this.http.get(this.config.apiUrl + '/weatherforecast', { responseType: 'text' });
      return this.http.get('http://localhost:4125/weatherforecast', { responseType: 'text' });
      
   }
}
