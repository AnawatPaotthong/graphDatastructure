import { Component, OnInit } from '@angular/core';
import * as vis from 'vis';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';
import { DataSet, Network } from 'vis';

@Component({
  selector: 'app-test-graph',
  templateUrl: './test-graph.component.html',
  styleUrls: ['./test-graph.component.css']
})
export class TestGraphComponent implements OnInit {
  graphData: any = {};
  node!: any;
  public nodes: Node[] = [];
  public links: Edge[] = [];

  constructor() { }
  ngOnInit(): void {
    var nodes = new DataSet([
      { id: '01', label: 'การเรียนการสอน', fixed: false, x: 300, y: 100, shape: 'box'},
      { id: '01-01', label: 'ช่วยเหลือ COVID-19', fixed: true, x: 150, y: 130 },
      { id: '01-01-T', label: '(1.11),(1.12)', fixed: true, x: 150, y: 150, shape: 'text' },
      { id: '01-02', label: 'มาตรฐาน+คุณภาพ', fixed: true, x: 136, y: 74 },
      { id: '01-02-01', label: 'MC', fixed: true, x: 205, y: -189 },
      { id: '01-02-01-01', label: 'Other Customers', fixed: true, x: 285, y: -234 },
      { id: '01-03', label: 'ลูกค้าในปัจจุบัน', fixed: true, x: 156, y: 27 },
      { id: '01-04', label: 'ลูกค้าในอนาคต', fixed: true, x: 238, y: -11 },
      { id: '01-04-01', label: 'การรับนักศึกษา', fixed: true, x: 130, y: -86 },
      { id: '01-05', label: 'การพัฒนาอาจารย์', fixed: true, x: 360, y: -11 },
      { id: '01-05-01', label: 'WiL', fixed: true, x: 388, y: -85 },
      { id: '01-05-02', label: 'PBL', fixed: true, x: 429, y: -54 },
      { id: '01-05-03', label: 'Up/ReSkill', fixed: true, x: 346, y: -184 },
      { id: '01-06', label: 'MC+บัณฑิตพันธุ์ใหม่', fixed: true, x: 428, y: 27 },
      { id: '01-06-01', label: 'โครงการรัฐ', fixed: true, x: 494, y: -122 },
      { id: '01-07', label: 'นวัตกรรม', fixed: true, x: 430, y: 100 },
      { id: '02', label: 'การวิจัย', fixed: true, x: 600, y: 100, shape: 'box' },
      { id: '02-01', label: 'ขยายฐาน', fixed: true, x: 600, y: 11 },
      { id: '02-01-01', label: 'นักศึกษา', fixed: true, x: 530, y: 52 },
      { id: '02-01-02', label: 'Project', fixed: true, x: 691, y: 25 },
      { id: '02-01-03', label: 'อาจารย์', fixed: true, x: 704, y: 72 },
      { id: '02-01-04', label: 'Papers+นวัตกรรม+สิ่งประดิษฐ์+สิทธิบัตร+อนุสิทธิบัตร', fixed: true, x: 700, y: -60 },
      { id: '02-01-04-01', label: 'เพิ่ม Project', fixed: true, x: 600, y: -154 },
      { id: '02-01-04-01-01', label: 'Bigger Income/Project', fixed: true, x: 760, y: -185 },
      { id: '02-01-04-02', label: 'ชื่อเสียงและความสามารถในการแข่งขัน', fixed: true, x: 760, y: -115 },
      { id: '03', label: 'การบริการวิชาการ', fixed: true, x: 900, y: 100, shape: 'box' },
      { id: '03-01', label: 'เพิ่ม Partners', fixed: true, x: 900, y: 25 },
      { id: '03-01-01', label: 'เพิ่ม Project', fixed: true, x: 900, y: -50 },
      { id: '04', label: 'ด้านบริหารจัดการ', fixed: true, x: 400, y: 250, shape: 'box' },
      { id: '04-01', label: 'กลยุทธ์', fixed: true, x: 600, y: 200, shape: 'box' },
      { id: '04-02', label: 'แผน', fixed: true, x: 600, y: 250, color: {border: '#0000FF'} },
      { id: '04-03', label: 'คน', fixed: true, x: 400, y: 300 },
      { id: '04-04', label: 'IT', fixed: true, x: 600, y: 350 },
      { id: '04-05', label: 'เงิน', fixed: true, x: 800, y: 300 },
      { id: '04-06', label: 'การสื่อสารเชิงกลยุทธ์', fixed: true, x: 900, y: 200, shape: 'box' },
      { id: '04-07', label: 'EdPEx', fixed: true, x: 900, y: 300, shape: 'box' },
      { id: '04-08', label: 'ความปลอดภัย', fixed: true, x: 770, y: 380, shape: 'box' },
    ]);

    var edges = new DataSet([
      { from: '1', to: '2' },
      { from: '01', to: '01-01', arrows: "to" },
      { from: '01', to: '01-02' },
      { from: '01', to: '01-03' },
      { from: '01', to: '01-04' },
      { from: '01', to: '01-05' },
      { from: '01', to: '01-06' },
      { from: '01', to: '01-07' },
      { from: '01-02', to: '01-02-01' },
      { from: '01-02-01-01', to: '01-02-01' },
      { from: '01-02-01-01', to: '01-05-03' },
      { from: '01-04', to: '01-04-01' },
      { from: '01-05', to: '01-05-01' },
      { from: '01-05', to: '01-05-02' },
      { from: '01-05', to: '01-05-03' },
      { from: '01-06', to: '01-06-01' },
      { from: '02', to: '02-01' },
      { from: '02-01', to: '02-01-01' },
      { from: '02-01', to: '02-01-02' },
      { from: '02-01', to: '02-01-03' },
      { from: '02-01', to: '02-01-04' },
      { from: '02-01-04', to: '02-01-04-01' },
      { from: '02-01-04-01', to: '02-01-04-01-01' },
      { from: '02-01-04', to: '02-01-04-02' },
      { from: '03', to: '03-01' },
      { from: '03-01', to: '03-01-01' },
      { from: '03-01-01', to: '02-01-04-01-01' },
      { from: '04-02', to: '04-03' },
      { from: '04-02', to: '04-04' },
      { from: '04-02', to: '04-05' },
      { from: '04-03', to: '04-04' },
    ]);

    var container = document.getElementById("mynetwork")!;

    var options = {
      physics: {
        enabled: false,
        stabilization: true
      },
      nodes: {
        fixed: false,
        widthConstraint: {
          minimum: 50,
          maximum: 150
        }
      },
      edges: {
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 0.5
          }
        }
      },
    };

    var data = {
      nodes: nodes,
      edges: edges,
    };

    this.graphData["nodes"] = nodes;
    this.graphData["edges"] = edges;

    var network = new Network(container, data, options);

    network.on("click", function(properties){
      console.log(properties.nodes);
    });

  }

  onClick(node: any) {
    console.log(node);
  }

}
