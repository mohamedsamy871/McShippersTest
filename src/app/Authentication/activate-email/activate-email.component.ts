import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activate-email',
  templateUrl: './activate-email.component.html',
  styleUrls: ['./activate-email.component.css']
})
export class ActivateEmailComponent implements OnInit {
  form:FormGroup;
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
    this.http.post('https://hiring2021.mcshippers.com/swagger​/api/Account/ResendActivationEmail/', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
