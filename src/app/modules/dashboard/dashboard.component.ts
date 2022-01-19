import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MockapiService } from '../mockapi.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-dashboard-solar',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  generationDaily : string = "";
  generationTotal : string = "";
  savingsDaily : string = "";
  savingsTotal : string = "";

  date : string = "13/12/2021";

  labelDaily : string ="target"
  labelTotal : string = "total"

  targetGenerationDaily : number = 500;
  targetSavingsDaily : number = 80;

  percentageGenerationDaily : number = 0;
  percentageSavingsDaily : number = 0;
  percentageGenerationTotal : number =0;
  percentageSavingsTotal : number = 0;

  constructor(private mockAPI : MockapiService) { }

  ngOnInit(): void {
    this.initData()
  }

  initData(){

    this.mockAPI.getOverallTotalGenerated().then((response:any)=>{
      this.generationTotal = (response.totalWh/1000).toFixed(2) + " kWh";
      let generation = response.totalWh.toFixed(2)
      this.mockAPI.getDayOverallGenerated(this.date).then((res:any)=>{
        this.generationDaily = (res.totalWh/1000).toFixed(2) + " kWh";
        this.percentageGenerationDaily = +(+res.totalWh.toFixed(2)/1000/this.targetGenerationDaily*100).toFixed(2)
        this.percentageGenerationTotal = +(+res.totalWh.toFixed(2)/generation*100).toFixed(2)
      })
      
    })

    this.mockAPI.getOverallTotalSaved().then((response:any)=>{
      this.savingsTotal = response.saved.toFixed(2) + " SGD";
      let savings = response.saved.toFixed(2) 
      this.mockAPI.getDayOverallSaved(this.date).then((res:any)=>{
        console.log(res)
        this.savingsDaily = res.saved.toFixed(2) + " SGD";
        this.percentageSavingsDaily = +(+res.saved.toFixed(2)/this.targetSavingsDaily*100).toFixed(2)
        this.percentageSavingsTotal = +(+res.saved.toFixed(2)/+savings*100).toFixed(2)
      })
    })
  }
  dateSelect(event:any){
    this.date = event;
    this.initData()
  }
}
