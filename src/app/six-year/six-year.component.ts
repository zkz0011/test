import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six-year',
  templateUrl: './six-year.component.html',
  styleUrls: ['./six-year.component.css']
})
export class SixYearComponent implements OnInit {

  list:Array<string> = []

  constructor() { 
    this.createdDay()
  }

  ngOnInit(): void {
  }
  
  createdDay() {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 6; i++) {
      const year = currentYear - i;
      const lastDayOfMonth = new Date(year, 2, 0).getDate();
      this.list.push(`${year}-2-${lastDayOfMonth}`)
    }
  }

}
