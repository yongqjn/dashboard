import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import { MockapiService } from 'src/app/modules/mockapi.service';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {default as _rollupMoment} from 'moment';
import { EventEmitter } from '@angular/core';

const moment = _rollupMoment || _moment;
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class LinechartComponent implements OnInit {
  @Input() title : string = ""
  @Output() dateEvent = new EventEmitter();
  data:any = 
  {
    line:[{
      data:[],
      label: ""
    }],
    axis:[

    ],
  };
  initialDate = "13/12/2021"
  public chartLabels: Array<any> = []
  public chartDatasets : Array<any> =[]
  constructor(private mockAPI : MockapiService){}

  ngOnInit(): void {  
    this.getData(this.initialDate)
  }

  public chartType: string = 'line';
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(255,0, 255, 255)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 255, 255, 255)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    scales : {
      xAxes:[{
        // gridLines:{
        //   color: "rgba(255,255,255,200)"
        // },
        scaleLabel: {
          display: true,
          labelString: 'Time',
          fontColor: 'rgba(255,255,255,255)'
        },
        ticks: {
          fontColor: 'white',
        },
      }],
      yAxes:[{
        // gridLines:{
        //   color: "rgba(255,255,255,200)"
        // },
        scaleLabel: {
          display: true,
          labelString: 'Wh',
          fontColor: 'rgba(255,255,255,255)'
        },
        ticks: {
          fontColor: 'white',
        },
      }]
    },
    legend:{
      labels:{
        fontColor:'white'
      }
    }
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  getData(date: any){
    this.data = 
    {
      line:[{
        data:[],
        label: ""
      },
      {
        data:[],
        label: ""
      }
    
    ],
      axis:[
  
      ],
    };
    if(this.title === "Energy"){
      this.getElectricalData(date)
    }
    else if (this.title === "Water"){
      this.getWaterData(date)
    }
    
  }

  getElectricalData(date:any){
    this.mockAPI.getDayData(date).then((res:any)=>{
      if(res){
        // this.data.line[0].label = date;
        this.data.line[0].label = "Energy Generated";
        this.data.line[1].label = "Energy Used";
        for(let i = 0; i < res.length; i++){
          this.data.line[0].data.push(res[i].wh)
          this.data.line[1].data.push(Math.random()*(2000) + 10000)
          this.data.axis.push(res[i].time) 
        }

        this.chartLabels = this.data.axis;
        this.chartDatasets  = this.data.line;
        this.chartOptions.scales.yAxes[0].scaleLabel.labelString = "Wh"
        
      }  
      
    }
    )
  }

  getWaterData(date:any){
    this.mockAPI.getDayData(date).then((res:any)=>{
      if(res){
        // this.data.line[0].label = date;
        this.data.line[0].label = "Water Collected";
        this.data.line[1].label = "Water Used";
        for(let i = 0; i < res.length; i++){
          this.data.line[0].data.push(+res[i].wh/1000)
          this.data.line[1].data.push(Math.random()*(5) +10)
          this.data.axis.push(res[i].time) 
        }

        this.chartLabels = this.data.axis;
        this.chartDatasets  = this.data.line;
        this.chartOptions.scales.yAxes[0].scaleLabel.labelString = "Liters"
      } 
    }
    )
  }

  public date = new FormControl(moment([2021,12,12]));

  dateSelect(){    
    let newDate = (this.dateFormatter(this.date.value._i))
    this.getData(newDate)
    this.dateEvent.emit(newDate)
  }

  dateFormatter(date: any){
    return (date.date + "/" + (date.month + 1) + "/" + date.year)
  }

}
