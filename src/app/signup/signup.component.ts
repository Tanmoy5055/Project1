import { Component, OnInit } from '@angular/core';
import { ConctService } from "../conct.service";
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupData:FormGroup;
  user;
  constructor(private service:ConctService, private fbuilder:FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.signupData=this.fbuilder.group(
      {
      firstname: [null,[Validators.required, Validators.minLength(3)]],
      lastname: [null,[Validators.required, Validators.minLength(3)]],
      email: [null,[Validators.required, Validators.pattern("^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$")]],
      password: [null,[Validators.required, Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]]
      }
    )
  }

  myRegister(){
    let formdata=this.signupData.value;
    this.service.postValue(formdata).subscribe(
      Response=>{
        this.user=Response;
        alert(this.user.message);
        console.log(this.user);
      }
    )
  }

}
