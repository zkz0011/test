import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fkm',
  templateUrl: './fkm.component.html',
  styleUrls: ['./fkm.component.css']
})
export class FKMComponent implements OnInit {

  list:Array<Array<string>> = []

  col:number = 5
  row:number = 7
  allSetRow:number = 4

  constructor() {
    this.createdData()
  }

  ngOnInit(): void {
  }

  createdData() {
    for (let row = 0; row < this.row; row++) {
      const arr = []
      for (let col = 0; col < this.col; col++) {
        if (row === this.allSetRow - 1) {
          arr.push('#')
        } else {
          if (col === 0 || col === this.col - 1) {
            arr.push('#')
          } else {
            arr.push(' ')
          }
        }
      }
      this.list.push(arr)
    }
  }

}
