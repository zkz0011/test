import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  active:number = 1

  public btnList = [
    {
      name: '商城',
      id: 1
    },
    {
      name: 'FKM',
      id: 2
    },
    {
      name: '近6年',
      id: 3
    }
  ]

  constructor() {
    this.changeRem()
  }
  
  changeRem() {
    const remNode = document.documentElement
    const autoResponse = (width = 1920) => {
      let size = (remNode.clientWidth / width) * 16
      remNode.style.fontSize = size + 'px'
    }
    autoResponse()
    window.addEventListener('resize', () => autoResponse(), false)
  }

  setActive(id:number) {
    this.active = id
  }

}
