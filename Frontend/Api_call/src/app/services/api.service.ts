import { Comments } from './../classes/comments';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getComments(): Observable<any>{
    return this.httpClient.get("http://localhost:5000/getAllUsers")
  }

  getCommentsbyId(id : number): Observable<Comments[]>{
    
    return this.httpClient.get<Comments[]>("http://localhost:5000/getUserById/"+id)

  }
  
  post(api_post:Comments): Observable<any>{
    return this.httpClient.post("http://localhost:5000/addUser",api_post);
  }
  put(api_post:Comments): Observable<any>{
    return this.httpClient.put("http://localhost:5000/editUser/"+api_post.user_id, api_post);
  }
  
  delete(id:any): Observable<any>{
    return this.httpClient.delete("http://localhost:5000/deleteUser/"+ id);
  }
  constructor(private httpClient: HttpClient) { }
}
