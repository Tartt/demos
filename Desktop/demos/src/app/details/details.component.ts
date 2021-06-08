import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {




  dataItems = [
    {
      codeid:"nb-001",
      nameItems:"ดินสอ",
      priceItems:10,
      numberItems:100,
      detailItems:"แบบเปลี่ยนใส่ แท่งสีแดง",
      imageItems:""

    },
    {
      codeid:"nb-002",
      nameItems:"ปากกา",
      priceItems:20,
      numberItems:150,
      detailItems:"สีน้ำเงิน แท่งสีดำ",
      imageItems:""

    },
    {
      codeid:"nb-003",
      nameItems:"ยางลบ",
      priceItems:5,
      numberItems:200,
      detailItems:"แบบหอม",
      imageItems:""

    }
  ]


  constructor() { }

  ngOnInit(): void {
  }


  removeItems(i:number){
     this.dataItems.splice(i,1)



  }

}
