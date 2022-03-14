import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Comments } from './classes/comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle:string='';
}