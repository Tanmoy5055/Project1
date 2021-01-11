import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ConctService } from '../conct.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData:FormGroup;
  user;

  constructor(private service:ConctService, private fbuilder:FormBuilder, private storage:StorageService, private route:Router) { }

  ngOnInit(): void {
    this.loginData=this.fbuilder.group({
      email: [null,[Validators.required, Validators.pattern("^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$")]],
      password: [null,[Validators.required, Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
    })
  }

  mySubmit(){
    let formdata=this.loginData.value;
    this.service.postData(formdata).subscribe(
      Response=>{
        this.user=Response;
        alert(this.user.message);
        this.storage.setData(this.user.email, this.user.full_name, this.user.token, this.user.user_id)
        console.log(this.user);
        this.route.navigate(['../dashboard']);
      },

      error=>{
        console.log(error);
        alert('Invalid Login!!');

      }
    )
  }

}
