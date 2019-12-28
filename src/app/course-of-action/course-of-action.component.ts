import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Utworzenie sprawy', weight: "2019-09-25", symbol: '9:50'},
  {position: 2, name: 'Dodanie materiału dowodowego', weight: "2019-10-01", symbol: '10:01'},
  {position: 3, name: 'Wygenerowanie pisma procesowego', weight: "2019-10-03", symbol: '19:17'},
  {position: 4, name: 'Data rozprawy ustalona na: data', weight: "2019-12-12", symbol: '22:29'},
  {position: 5, name: 'Dodano rozliczenie za: napisanie pisma procesowego', weight: "2019-12-27", symbol: '08:54'},
];

@Component({
  selector: 'app-course-of-action',
  templateUrl: './course-of-action.component.html',
  styleUrls: ['./course-of-action.component.scss']
})
export class CourseOfActionComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
