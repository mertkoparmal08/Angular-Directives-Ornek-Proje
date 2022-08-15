import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage=0;
  
  images =[
    {
      title:'Deniz Kıyı Güneş',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Belgrad Ormanı',
      url:'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9ycmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Maslak',
      url:'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title:'Uludağ',
      url:'https://images.unsplash.com/photo-1601313200014-5cf81ee09c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVsdWRhJUM0JTlGfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
  ]

  PageIndex(index:number){
    return Math.abs(this.currentPage-index)<5;
  }
}
