import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  drivers = [
    'Aaron',
    'Brad',
    'Chad',
    'Dad'
  ]

  loads = [
    'Load #1',
    'Load #2',
    'Load #3',
    'Yizzz'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
