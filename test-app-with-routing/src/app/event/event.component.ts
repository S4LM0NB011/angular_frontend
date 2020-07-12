import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  protected events:any = [];

  constructor(private http: HttpClient) { }

  getEvents(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get(url).subscribe((res)=>{
      this.events = res;
      console.log(this.events);
    })
  }

  ngOnInit(): void {
    this.getEvents();
  }

}
