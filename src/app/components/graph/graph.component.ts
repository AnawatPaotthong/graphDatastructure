import { Component, Input, OnInit } from '@angular/core';
import { Edge, NodePosition, Node, Layout } from '@swimlane/ngx-graph';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {
  public nodes: Node[] = [
    {
      id: 'first',
      label: 'IT',
      position: {
        x: 100,
        y: 0,
      }
    },
    {
      id: 'second',
      label: 'Person',
      position: {
        x: 0,
        y: 0,
      }
    },
    {
      id: 'third',
      label: 'Plan',
      position: {
        x: 0,
        y: 0,
      }
    },
    {
      id: 'fourth',
      label: 'Money',
      position: {
        x: 0,
        y: 0,
      }
    }
  ];

  public links: Edge[] = [
    {
      id: 'a',
      source: 'first',
      target: 'second'
    },{
      id: 'a',
      source: 'first',
      target: 'third'
    },{
      id: 'a',
      source: 'first',
      target: 'fourth'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

  nodeClick(node: any){
    console.log(node.label);
  }

}
