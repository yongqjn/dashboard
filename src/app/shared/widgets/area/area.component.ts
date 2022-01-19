import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions = {}
  Highcharts = Highcharts;
  @Input() data:any =[]

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      colors: ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee", 
		"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],

      chart: {
          type: 'area',
          backgroundColor:  null,
          borderWidth: 0,
          borderRadius: 15,
		      className: 'dark-container',
          plotShadow: false,
          plotBorderWidth: 0
        
      },
      
      title: {
          text: 'Generated Energy'
      },
      subtitle: {
          text: 'Queen Astrid Park'
      },
      tooltip: {
          split: true,
          valueSuffix: 'kwH'
      },
      xAxis:{
        title: {
          text : "xAxis"
        }
      },
      yAxis:{
        title: {
          text : "kwH Generated"
        }
      },
      credits : {
        enabled: false,
      },
      exporting : {
        enabled : true,
      },
      plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
      series: this.data
  }
  this.Highcharts.setOptions({
    title: {
      style: {
        color: 'green'
      }
    }
  });
  HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    )
  }, 300)
  }

}
