import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MockapiService } from 'src/app/modules/mockapi.service';

@Component({
  selector: 'app-widget-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  @Input() title : string = ""
  @Input() titleSecondary : string = ""

  chartOptions : any = {}

  isChecked : boolean = false

  axisCategories : any = []
  dataSeries : any = [{
    name : 'Energy Generated',
    data : []
  }]

  savingsData : any = []
  expenditureData : any = []
  netEnergyCostData : any = []

  
  constructor(private mockAPI : MockapiService) { }
  Highcharts = Highcharts;

  updateFlag = false;

  ngOnInit(): void {
    this.getChartData()
    this.chartOptions = {   
      chart: {
         type: 'column',
         backgroundColor:  null,
          borderWidth: 0,
          borderRadius: 15,
          marginTop: 50
      },
      title:{
        text: ""
      },
      colors: ["#505080", "	#80232b", "#ddaaaa"],

      legend : {
        itemStyle : {
          color : 'white'
        }
      },
      xAxis:{
         categories: ['13/12/2021', '14/12/2021', '15/12/2021', '16/12/2021', '17/12/2021', '18/12/2021', '19/12/2021'],
         crosshair: true ,
          labels : {
            style : {
              color : 'white',
              font: '12px Roboto, "Helvetica Neue", sans-serif' 
            }
          }
      },     
      yAxis : {
         min: 0,
         title: {
            text: 'Power (kWh)',
            style: {
              color : 'white',
              font: '12px Roboto, "Helvetica Neue", sans-serif' 
            }         
         } ,
         labels : {
          style : {
            color : 'white'
          }
        }   
      },
      tooltip : {
         headerFormat: '<span style = "font-size:14px"><b>{point.key}</b></span><table>',
         pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
            '<td style = "padding:0"><b>{point.y:.1f} kWh</b></td></tr>', 
        footerFormat: '</table>', shared: true, useHTML: true
      },
      plotOptions : {
         column: {
            pointPadding: 0.2,
            borderWidth: 0
         }
      },
      credits : {
        enabled: false,
      },
    
      exporting:{
        enabled : false,
      },
      series : [
        {
          data : [],
          name : "Energy Generated"
        },
        {
          data : [],
          name : "Energy Used"
        },
        {
          data : [],
          name : 'Energy Exported',  
        }
      ],
   };

  }
   getElectricalChartData(){
     this.mockAPI.getOverallData().then((res:any)=>{
       if(res){
        this.axisCategories = []
        this.dataSeries = [
          {
            data : [],
            name : 'Energy Generated',
          },
          {
            data : [],
            name : 'Energy Used',  
          },
          {
            data : [],
            name : 'Energy Exported',  
          }
        ]
        this.savingsData  = []
        this.expenditureData = []
        this.netEnergyCostData = []
        for(let item of res){
          this.axisCategories.push(item.date)
          let energyGenerated = +(item.totalGenerated/1000).toFixed(2)
          let energyUsed = +(item.totalGenerated*0.7/1000).toFixed(2)
          let energyExported = (energyGenerated - energyUsed)
          this.dataSeries[0].data.push(energyGenerated)
          this.dataSeries[1].data.push(energyUsed)
          this.dataSeries[2].data.push(energyExported)

          let savingsCost = +item.costSaved.toFixed(2)
          let expenditureCost = +(item.costSaved).toFixed(2)
          this.savingsData.push(savingsCost)
          this.expenditureData.push(expenditureCost)
          this.netEnergyCostData.push((energyExported)*0.15)
        }
        this.handleElectricalUpdate()
       }
       
     })

   }

   getChartData(){
     if(this.title === "Energy"){
      this.getElectricalChartData()
     }
     else if (this.title === "Water"){
      this.getWaterChartData()
     }
   }

   getWaterChartData(){
    this.mockAPI.getOverallData().then((res:any)=>{
      if(res){
       this.axisCategories = []
       this.dataSeries = [
         {
           data : [],
           name : 'Water Collected',
         },
         {
           data : [],
           name : 'Water Used',  
         },
         {
           data : [],
           name : 'Water Stored',  
         }
       ]
       this.savingsData  = []
       this.expenditureData = []
       this.netEnergyCostData = []
       let waterTotal = 0;
       for(let item of res){
         this.axisCategories.push(item.date)
         let energyGenerated = +(item.totalGenerated/1000).toFixed(2)
         let energyUsed = +(item.totalGenerated*0.9/1000).toFixed(2)
         waterTotal += (energyGenerated - energyUsed)*0.8
         this.dataSeries[0].data.push(energyGenerated*0.8)
         this.dataSeries[1].data.push(energyUsed*0.8)
         this.dataSeries[2].data.push(waterTotal)

         let savingsCost = +item.costSaved.toFixed(2)
         let expenditureCost = +(item.costSaved).toFixed(2)
         this.savingsData.push(savingsCost)
         this.expenditureData.push(expenditureCost)
       }
       this.handleWaterUpdate()
      }
      
    })

  }

  handleWaterUpdate() {
    this.chartOptions.series[0] = {
      type: 'column',
      data: this.dataSeries[0].data.slice(),
      name : "Water Collected"
    }

    this.chartOptions.series[1] = {
      type: 'column',
      data: this.dataSeries[1].data.slice(),
      name : "Water Used"
    }

    this.chartOptions.series[2] = {
      type: 'column',
      data: this.dataSeries[2].data.slice(),
      name : "Water Stored"
    }
    this.chartOptions.xAxis.categories = this.axisCategories
    this.chartOptions.yAxis.title.text = "Liters"
    this.chartOptions.colors = [ "#de425b","#fff59f","#488f31" ]
    this.chartOptions.tooltip.pointFormat = '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
    '<td style = "padding:0"><b>{point.y:.1f} ℓ</b></td></tr>', 
    this.updateFlag = true;
  }

   handleElectricalUpdate() {
    this.chartOptions.series[0] = {
      type: 'column',
      data: this.dataSeries[0].data.slice(),
      name : "Energy Generated"
    }

    this.chartOptions.series[1] = {
      type: 'column',
      data: this.dataSeries[1].data.slice(),
      name : "Energy Used"
    }

    this.chartOptions.series[2] = {
      type: 'column',
      data: this.dataSeries[2].data.slice(),
      name : "Energy Exported"
    }
    this.chartOptions.xAxis.categories = this.axisCategories
    this.chartOptions.yAxis.title.text = "Power (kWh)"
    this.chartOptions.colors = ["#488f31", "#fff59f", "#de425b"]
    this.chartOptions.tooltip.pointFormat = '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
    '<td style = "padding:0"><b>{point.y:.1f} kWh</b></td></tr>', 
    this.updateFlag = true;
  }

  handleElectricalToggle(){
    if(this.isChecked){
      this.chartOptions.series[0] = {
        type: 'column',
        data: this.savingsData.slice(),
        name : "Total Energy Saved"
      }

      this.chartOptions.series[1] = {
        type: 'column',
        data: this.expenditureData.slice(),
        name : "Total Energy Cost"
      }

      this.chartOptions.series[2] = {
        type: 'column',
        data: this.netEnergyCostData.slice(),
        name : "Net Generation Earnings"
      }
      this.chartOptions.colors = ["#ffef2b", "#2f4af4", "#ee1c62"]
      this.chartOptions.yAxis.title.text = "SGD"
      this.chartOptions.tooltip.pointFormat = '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
      '<td style = "padding:0"><b>{point.y:.1f} SGD</b></td></tr>'
      this.updateFlag = true;
    }
    else {
      this.handleElectricalUpdate()
    }

  }

  handleWaterToggle(){
    if(this.isChecked){
      this.chartOptions.series[0] = {
        type: 'column',
        data: this.savingsData.slice(),
        name : "Total Water Savings"
      }

      this.chartOptions.series[1] = {
        type: 'column',
        data: this.expenditureData.slice(),
        name : "Total Water Cost"
      }
      this.chartOptions.series[2] = {
        type: 'column',
        data: [],
        name : "Net Generation Earnings"
      }

      this.chartOptions.colors = ["#ffef2b", "#2f4af4", "#ee1c62"]
      this.chartOptions.yAxis.title.text = "SGD"
      this.chartOptions.tooltip.pointFormat = '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
      '<td style = "padding:0"><b>{point.y:.1f} SGD</b></td></tr>'
      this.updateFlag = true;
    }
    
    else {
      this.handleWaterUpdate()
    }
  }

  handleToggle(){
    if(this.title === "Energy"){
      this.handleElectricalToggle()
    }
    else if (this.title === "Water"){
      this.handleWaterToggle()
    }
  }

}
