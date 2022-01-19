import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {
  
  constructor(private http : HttpClient) { }

  getDayData(data : any){
    const body = {date : data};
    return this.http.post<any>(environment.localUrl, body).toPromise()
  }


  getTotal(data : string){
    const body = {date : data};
    return this.http.post<any>(environment.localUrl + "/total", body).toPromise();
  }

  getCostSaved(data : string){
    const body = {date : data};
    return this.http.post<any>(environment.localUrl + "/saved", body).toPromise();
  }

  getOverallData(){
    return this.http.get<any>(environment.localUrl + "/overall").toPromise();
  }

  getDayOverallSaved(data : string){
    const body = {date : data};
    return this.http.post<any>(environment.localUrl + "/overall/savings", body).toPromise();
  }

  getDayOverallGenerated(data : string){
    const body = {date : data};
    return this.http.post<any>(environment.localUrl + "/overall/solar", body).toPromise();
  }

  getOverallTotalSaved(){
    return this.http.get<any>(environment.localUrl + "/overall/total/saved").toPromise();
  }

  getOverallTotalGenerated(){
    return this.http.get<any>(environment.localUrl + "/overall/total/solar").toPromise();
  }
}
