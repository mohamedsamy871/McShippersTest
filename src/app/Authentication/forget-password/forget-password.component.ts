import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  form:FormGroup
  constructor(private http:HttpClient,private _formBuilder:FormBuilder) { 
    this.form = this._formBuilder.group({
      email: [''],
      platformType:['']
    })
  }

  ngOnInit(): void {
  }
  submitForm(){
    var formData: any = new FormData();
    formData.append("email", this.form.get('email.value'));
    formData.append("platformType",0);
    this.http.post('https://hiring2021.mcshippers.com/swagger​/api​/Account​/ForgetPassword', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
