import { Component,OnInit  } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app/main/app.component.html',
  styleUrls: ['./app/main/app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  
  ngOnInit() {


  }
  
  
  getParme1():Observable<any>{
    this.title = "�q�\�Ĥ@��";
    return null;
  }
  
  getParme2():Observable<any>{
    this.title="�q�\�ĤG��";
    return null;
  }
  
  
  
}
