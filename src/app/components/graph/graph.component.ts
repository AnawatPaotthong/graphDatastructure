import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'; 

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {

  }

  centerGraph() {
    this.center$.next(true)
  }

  fitGraph() {
    this.zoomToFit$.next(true)
  }

}