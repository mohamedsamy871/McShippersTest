import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form:FormGroup;
  constructor(private http:HttpClient,private _formBuilder:FormBuilder) { 
    this.form = this._formBuilder.group({
      email: [''],
      currentPassword: [''],
      newPassword:['']
    })
  }

  ngOnInit(): void {
  }
  submitForm(){
    var formData: any = new FormData();
    formData.append("email", this.form.get('email.value'));
    formData.append("currentPassword", this.form.get('currentPassword.value'));
    formData.append("newPassword", this.form.get('newPassword.value'));
    this.http.post('https://hiring2021.mcshippers.com/swagger/api/Account/ChangePassword/', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
