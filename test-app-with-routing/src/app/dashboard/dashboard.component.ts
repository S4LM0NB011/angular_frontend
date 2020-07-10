import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  name: any;

  constructor(
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> {
      this.name = params['name'];
    })
  }

}
