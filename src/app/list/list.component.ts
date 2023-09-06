import { Component, OnInit } from '@angular/core';



type goodsType = {
  name: string,
  price: number,
  img: string,
  id: string | number
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  goods:Array<goodsType> | [] = [];

  constructor() { 
    
  }
  ngOnInit(): void {
    this.createdGoods()
  }



  // 创建商品
  createdGoods() {
    for (let i = 0; i < 7; i++) {
      const good = {
        name: `商品${i+1}`,
        price: 100 + i * 20,
        img: `../../assets/p(${i}).jpeg`,
        id: i
      }
      this.goods = [...this.goods,good]
    }
  }

  // 删除商品
  deleteGood(id:string|number) {
    const index = this.goods.findIndex((item) => {
      return item.id === id
    })
    this.goods.splice(index, 1)
  }

}
