import { Component, OnInit } from '@angular/core';
import { DataSet } from 'vis';

@Component({
  selector: 'app-test-graph',
  templateUrl: './test-graph.component.html',
  styleUrls: ['./test-graph.component.css']
})
export class TestGraphComponent implements OnInit {
  graphData: any = {};

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    var nodes = new DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'}
    ]);

    var edges = new DataSet([
      {from: '1', to: '2'}
    ]);

    this.graphData["nodes"] = nodes;
    this.graphData["edges"] = edges;
  }

}
