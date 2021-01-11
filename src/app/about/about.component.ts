import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  team=[{
    id:1,
    image:'../../assets/ceo.jpg',
    name:'Walter White',
    role:'Chief Executive Officer'
  
  },
  {
    id:2,
    image:'../../assets/pmg.jpg',
    name:'Sarah Jhonson',
    role:'Product Manager'
  },
  {
    id:3,
    image:"../../assets/cto.jpg",
    name:'William Anderson',
    role:'Chief Technology Officer'
  },
  {
    id:4,
    image:'../../assets/acc.jpg',
    name:'Amanda Jepson',
    role:'Accaountant'
  },
  {
    id:5,
    image:'../../assets/wdg.jpg',
    name:'Felix Wilson',
    role:'Web Designer'
    },
   
  {
    id:6,
    image:'../../assets/wdp.jpg',
    name:'Louis Smith',
    role:'Web Developer'
    }]
}
