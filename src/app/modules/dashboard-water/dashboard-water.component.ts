import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../mockapi.service';

@Component({
  selector: 'app-dashboard-water',
  templateUrl: './dashboard-water.component.html',
  styleUrls: ['./dashboard-water.component.scss']
})
export class DashboardWaterComponent implements OnInit {

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
      this.generationTotal = (response.totalWh/1000*0.8).toFixed(2) + " ℓ";
      let generation = +(response.totalWh*0.8).toFixed(2)
      this.mockAPI.getDayOverallGenerated(this.date).then((res:any)=>{
        this.generationDaily = (res.totalWh/1000*0.8).toFixed(2) + " ℓ";
        this.percentageGenerationDaily = +(+res.totalWh.toFixed(2)/1000/this.targetGenerationDaily*100).toFixed(2)
        this.percentageGenerationTotal = +(+res.totalWh.toFixed(2)/generation*100).toFixed(2)
      })
      
    })

    this.mockAPI.getOverallTotalSaved().then((response:any)=>{
      this.savingsTotal = (response.saved*0.8).toFixed(2) + " SGD";
      let savings = (response.saved*0.8).toFixed(2) 
      this.mockAPI.getDayOverallSaved(this.date).then((res:any)=>{
        this.savingsDaily = (res.saved.toFixed(2)*0.8) + " SGD";
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
