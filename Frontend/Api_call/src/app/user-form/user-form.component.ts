import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { Comments } from '../classes/comments';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']

})

export class UserFormComponent implements OnInit {
  req : Comments | undefined;
  flag :boolean = false; 
  objPosts: any;
  id: any;
  listcomments: Comments [] = [];
  get registration_form(){
    return this.registrationForm.controls;
  }
  // get user_last_name(){
  //   return this.registrationForm.get('user_last_name');
  // }
  // get user_organization_name(){
  //   return this.registrationForm.get('user_organization_name');
  // }

  // get user_email()
  // {
  //   return this.registrationForm.get('user_email');
  // }
  // get user_created_by(){
  //   return this.registrationForm.get('user_created_by');
  // }
  // get user_freeze(){
  //   return this.registrationForm.get('user_freeze');
  // }

  registrationForm = this.fb.group({
    user_first_name: ['',Validators.required],
    user_last_name: ['',Validators.required], 
    user_organization_name: ['',Validators.required] ,
    user_email: ['',[Validators.required,Validators.email]],
    user_photo: [''],
    user_created_date: [''], 
    user_updated_date: [''],
    user_created_by: ['',Validators.required],
    user_updated_by: [''],
    user_status: ['',Validators.required],
    user_confirmation_date: [''],
    user_confirmation_status: ['',Validators.required],
    user_freeze: ['',Validators.required]
  });

  constructor(private fb : FormBuilder,private _api:ApiService, private route : ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this._api.getCommentsbyId(this.id).subscribe((resp: Comments[]) => {
        resp.forEach((element:Comments) => {
          this.registrationForm.controls['user_first_name'].setValue(element.user_first_name);
          this.registrationForm.controls['user_last_name'].setValue(element.user_last_name);
          this.registrationForm.controls['user_organization_name'].setValue(element.user_organization_name);
          this.registrationForm.controls['user_email'].setValue(element.user_email);
          this.registrationForm.controls['user_created_by'].setValue(element.user_created_by);
          this.registrationForm.controls['user_status'].setValue(element.user_status?'1':'0');
          this.registrationForm.controls['user_confirmation_status'].setValue(element.user_confirmation_status?'1':'0');
          this.registrationForm.controls['user_freeze'].setValue(element.user_freeze?'1':'0');
        }); 
      });
  }

}
  ngOnInit(): void {
    
  }
  saveData()
  {
    debugger;
    this.req ={
        user_id: "",
        user_first_name: this.registrationForm.controls['user_first_name'].value,
        user_last_name: this.registrationForm.controls['user_last_name'].value,
        user_organization_name: this.registrationForm.controls['user_organization_name'].value,
        user_email: this.registrationForm.controls['user_email'].value,
        user_photo: null,
        user_created_date: new Date(),
        user_updated_date: null,
        user_created_by: this.registrationForm.controls['user_created_by'].value,
        user_updated_by: null,
        user_status: this.registrationForm.controls['user_status'].value === '0'? false:true
        ,
        user_confirmation_date: null,
        user_confirmation_status: this.registrationForm.controls['user_confirmation_status'].value === '0'? false:true
        ,
        user_freeze: this.registrationForm.controls['user_freeze'].value === '0'? false:true

    }
    if(this.id){
      this.req.user_id= this.id;
      this._api.put(this.req).subscribe((data: any)=>{
        this.objPosts = data;
        this._api.getComments().subscribe((resp:any)=>{
          this.listcomments=resp;
            this.flag = true;
            this.router.navigate(['/grid']);
              });
      });
    }
    else{
    this._api.post(this.req).subscribe((data: any)=>{
      this.objPosts = data;
      this._api.getComments().subscribe((resp:any)=>{
        this.listcomments=resp;
          this.flag = true;
          this.router.navigate(['/grid']);
            });
    });
  }
}
 
}