import { Component, Input, OnInit } from '@angular/core';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';

export class NodeName{
  id!: string;
  name!: string;
  backgroundColor!: string;
}

@Component({
  selector: 'app-ngx-graph',
  templateUrl: './ngx-graph.component.html',
  styleUrls: ['./ngx-graph.component.css']
})

export class NgxGraphComponent implements OnInit {
  @Input() nodeName: NodeName[] = [];
  public nodes: Node[] = [];
  public links: Edge[] = [];
  public layoutSettings = {
    orientation: 'TB'
  };
  // public curve: any = shape.curveLinear;
  // public layout: Layout = new DagreNodesOnlyLayout();

  constructor() {
    this.nodeName = [
      {
        id: '1',
        name: 'Plan',
        backgroundColor: '#DC143C'
      },
      {
        id: '2',
        name: 'Money',
        backgroundColor: '#DC143C'
      },
      {
        id: '3',
        name: 'IT',
        backgroundColor: '#DC143C'
      },
      {
        id: '4',
        name: 'People',
        backgroundColor: '#DC143C'
      },
    ]
  }

  ngOnInit(): void {
    for(const allNode of this.nodeName){
      const node: Node = {
        id: allNode.id,
        label: allNode.name,
        data: {
          backgroundColor: allNode.backgroundColor
        }
      };
      this.nodes.push(node);
    }

    for(const allNode of this.nodeName){
      const edge: Edge = {
        source: allNode.id,
        target: allNode.id,
      };
      this.links.push(edge);
    }
  }
  public getStyles(node: Node): any {
    return {
      'background-color': node.data.backgroundColor
    };
  }
}
