import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MockapiService } from './mockapi.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private mockAPI: MockapiService) {}

  bigChart() {
    return [
      {
        name: 'Day 1',
        data: [502, 635, 809, 947, 1402, 3634, 5268],
      },
      {
        name: 'Day 2',
        data: [106, 107, 111, 133, 221, 767, 1766],
      },
      {
        name: 'Day 3',
        data: [163, 203, 276, 408, 547, 729, 628],
      },
      {
        name: 'Day 4',
        data: [18, 31, 54, 156, 339, 818, 1201],
      },
      {
        name: 'Day 5',
        data: [2, 2, 2, 6, 13, 30, 46],
      },
    ];
  }
  cards() {
    return [502, 635, 809, 947, 1402, 3634, 5268];
  }

  pie() {
    return [
      {
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true,
      },
      {
        name: 'Internet Explorer',
        y: 11.84,
      },
      {
        name: 'Firefox',
        y: 10.85,
      },
      {
        name: 'Edge',
        y: 4.67,
      },
      {
        name: 'Safari',
        y: 4.18,
      },
      {
        name: 'Sogou Explorer',
        y: 1.64,
      },
      {
        name: 'Opera',
        y: 1.6,
      },
      {
        name: 'QQ',
        y: 1.2,
      },
      {
        name: 'Other',
        y: 2.61,
      },
    ];
  }

  linechart(){
    return [
      { data: [65, 59, 80, 81, 56, 55, 40,50], label: 'Solar Power Generated' },
      { data: [28, 48, 40, 19, 86, 27, 90,60], label: 'Power Used' }
    ];
  }
}
