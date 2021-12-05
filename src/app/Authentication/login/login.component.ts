import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //active button switching
  switchingButton ='employer';


  form:FormGroup;
  
  constructor(private http:HttpClient,private _formBuilder:FormBuilder) { 
    this.form = this._formBuilder.group({
      email: [''],
      password: [''],
      platformType:['']
    })
  }

  ngOnInit(): void {
  }
  submitForm(){
    var formData: any = new FormData();
    formData.append("email", this.form.get('email.value'));
    formData.append("password", this.form.get('password.value'));
    formData.append("platformType",0);
    this.http.post('https://hiring2021.mcshippers.com/swagger/api/Account/Login/', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
  employerMode(){
    this.switchingButton = 'employer';
  }
  seekerMode(){
    this.switchingButton = 'seeker';
  }
  
}
