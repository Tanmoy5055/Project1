import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  suggestion:FormGroup;

  constructor(private fbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.suggestion=this.fbuilder.group({
      name: new FormControl,
      email: new FormControl,
      messege: new FormControl
    })
  }

  myKlik(){
    console.log(this.suggestion);
    alert('Your Feedback is submitted');
  }

  
}
