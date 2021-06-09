import { Component, OnInit } from '@angular/core';
import { DataSet, Network } from 'vis';

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
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: '01', label: 'การเรียนการสอน', fixed: true, x: 300, y: 100, shape: 'box' },
      { id: '01-01', label: 'ช่วยเหลือ COVID-19', fixed: true, x: 150, y: 130 },
    ]);

    var edges = new DataSet([
      { from: '1', to: '2' },
      { from: '01', to: '01-01', arrows: "to" },
      { from: '01', to: '01-02' },
    ]);

    this.graphData["nodes"] = nodes;
    this.graphData["edges"] = edges;
  }

  onClick(){
    console.log();
  }

}
