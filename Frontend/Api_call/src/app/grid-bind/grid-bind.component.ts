import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from '../classes/comments';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-grid-bind',
  templateUrl: './grid-bind.component.html',
  styleUrls: ['./grid-bind.component.css']
})
export class GridBindComponent {
  listcomments: Comments[] = [];
  single:Comments []=[];
  objPosts:any;
  message: string='';
  req : Comments | undefined;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private _api: ApiService, private route:Router) {

  }

  ngOnInit() {
    this._api.getComments().subscribe((resp:any)=>{
this.listcomments=resp;
    });

    this._api.getCommentsbyId(20).subscribe((resp:any)=>{
     this.single = resp;  
    });

  
    // var api_post =new Comments();
    // api_post.user_id = "7"
     
  }

  saveData()
  {
    this.req ={
      user_id :'31',
     
    
        user_first_name: "Ram",
        user_last_name: "patel",
        user_organization_name: "hte",
        user_email: "rp@gmail.com",
        user_photo: null,
        user_created_date: new Date(),
        user_updated_date: null,
        user_created_by: "Raj",
        user_updated_by: null,
        user_status: false,
        user_confirmation_date: null,
        user_confirmation_status: false,
        user_freeze: false

    }
    this._api.post(this.req).subscribe((data: any)=>{
      this.objPosts = data;
      this._api.getComments().subscribe((resp:any)=>{
        this.listcomments=resp;
            });
    });
  }
deleteData(id:any)
{
  this._api.delete(id).subscribe((data: any)=>{
  this.message = "Data deleted successfully";
  this._api.getComments().subscribe((resp:any)=>{
    this.listcomments=resp;
        });
    
});
}
editData(id:any){
  this.route.navigate(['/user/'+id]);
}
}
