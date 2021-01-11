import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  services=[{
    id:1,
    icon:'../../assets/dev1.jpg',
    name:'Web Development',
    details:'We provide you the best and easy ways to learn any Programming language.'
  
  },
  {
    id:2,
    icon:'../assets/wds.jpg',
    name:'Web Design',
    details:'Learn responsive and attractive web designs with us and make your own website.'
  },
  {
    id:3,
    icon:"../../assets/gds.jpg",
    name:'Graphic Design',
    details:'Learn about graphic designing by our proffessionals and design a Game yourself.'
  },
  {
    id:4,
    icon:'../../assets/ped.jpg',
    name:'Photo Editing',
    details:'We provide you the best ways and tricks to make an ordinary picture to a beast.'
  },
  {
    id:5,
    icon:'../../assets/pgy.jpg',
    name:'Photography',
    details:'Learn to capture any moment in a perfect shot, we will love teach you.'
    },
   
  {
    id:6,
    icon:'../../assets/ved.jpg',
    name:'Video Editing',
    details:'We help you to be the best in video editing using advanced and easy to use tools.'
    }]
  
  }



