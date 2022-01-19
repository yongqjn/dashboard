import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() labelLeft:string ='';
  @Input() percentage:number = 0;
  @Input() energyBool = false;
  @Input() labelRight : string = ''
  @Input() lowerLabel : string = ""
  @Input() type : string = ""
  @Input() ifAir : boolean = false;
  @Input() tempDescription : string = ""

  generationDaily : string = "";
  generationTotal : string = "";
  savingsDaily : string = "";
  savingsTotal : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  initData(){
  }

}
