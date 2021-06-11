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
      { id: '01', label: 'การเรียนการสอน', fixed: true, x: 100, y: 100, shape: 'box', group: 'mainNodes' },
      { id: '01-01', label: 'ช่วยเหลือ COVID-19', fixed: true, x: -150, y: 100, color: { border: '#ff0000', background: '#ffffff', highlight: { border: '#ff0000', background: '#ffffff' } }, font: { color: '#cc0000', size: 24, face: 'Angsana New' } },
      { id: '01-01-T', label: '(1.11),(1.12)', fixed: true, x: -150, y: 160, shape: 'text' },
      { id: '01-02', label: 'มาตรฐาน+คุณภาพ', fixed: true, x: -150, y: 1, color: { border: '#ff0000', background: '#b8b894', highlight: { border: '#ff0000', background: '#b8b894' } }, font: { color: '#000000', size: 24, face: 'Angsana New' } },
      { id: '01-02-01', label: 'MC', fixed: true, x: -150, y: -170, color: { border: '#ff0000', background: '#00cc00', highlight: { border: '#ff0000', background: '#00cc00' } }, font: { color: '#000000', size: 24, face: 'Angsana New' } },
      { id: '01-02-01-01', label: 'Other Customers', fixed: true, x: -100, y: -300, color: { border: '#ff0000', background: '#e0e0eb', highlight: { border: '#ff0000', background: '#e0e0eb' } }, font: { color: '#0000e6', size: 24, face: 'Angsana New' } },
      { id: '01-03', label: 'ลูกค้าในปัจจุบัน', fixed: true, x: 10, y: 1, color: { border: '#ff0000', background: '#c2f0c2', highlight: { border: '#ff0000', background: '#c2f0c2' } }, font: { color: '#051405', size: 24, face: 'Angsana New' } },
      { id: '01-04', label: 'ลูกค้าในอนาคต', fixed: true, x: 150, y: -1, color: { border: '#ff0000', background: '#ffd1b3', highlight: { border: '#ff0000', background: '#ffd1b3' } }, font: { color: '#331400', size: 24, face: 'Angsana New' } },
      { id: '01-04-01', label: 'การรับนักศึกษา', fixed: true, x: 150, y: -86, color: { border: '#ff0000', background: '#00cc00', highlight: { border: '#ff0000', background: '#00cc00' } }, font: { color: '#000000', size: 24, face: 'Angsana New' } },
      { id: '01-05', label: 'การพัฒนาอาจารย์', fixed: true, x: 300, y: -1, color: { border: '#ff0000', background: '#ffd1b3', highlight: { border: '#ff0000', background: '#ffd1b3' } }, font: { color: '#331400', size: 24, face: 'Angsana New' } },
      { id: '01-05-01', label: 'WiL', fixed: true, x: 270, y: -85, color: { border: '#ff0000', background: '#ffd1b3', highlight: { border: '#ff0000', background: '#ffd1b3' } }, font: { color: '#331400', size: 24, face: 'Angsana New' } },
      { id: '01-05-02', label: 'PBL', fixed: true, x: 400, y: -80, color: { border: '#ff0000', background: '#ffd1b3', highlight: { border: '#ff0000', background: '#ffd1b3' } }, font: { color: '#331400', size: 24, face: 'Angsana New' } },
      { id: '01-05-03', label: 'Up/ReSkill', fixed: true, x: 350, y: -184, color: { border: '#ff0000', background: '#00cc00', highlight: { border: '#ff0000', background: '#00cc00' } }, font: { color: '#000000', size: 24, face: 'Angsana New' } },
      { id: '01-06', label: 'MC+บัณฑิตพันธุ์ใหม่', fixed: true, x: 450, y: 27, color: { border: '#ff0000', background: '#ffd1b3', highlight: { border: '#ff0000', background: '#ffd1b3' } }, font: { color: '#331400', size: 24, face: 'Angsana New' } },
      { id: '01-06-01', label: 'โครงการรัฐ', fixed: true, x: 494, y: -122, color: { border: '#ff0000', background: '#00cc00', highlight: { border: '#ff0000', background: '#00cc00' } }, font: { color: '#000000', size: 24, face: 'Angsana New' } },
      { id: '01-07', label: 'นวัตกรรม', fixed: true, x: 450, y: 100, color: { border: '#ff0000', background: '#c2f0c2', highlight: { border: '#ff0000', background: '#c2f0c2' } }, font: { color: '#051405', size: 24, face: 'Angsana New' } },
      { id: '02', label: 'การวิจัย', fixed: true, x: 800, y: 100, shape: 'box', group: 'mainNodes'},
      { id: '02-01', label: 'ขยายฐาน', fixed: true, x: 800, y: 11, color: { border: '#ff0000', background: '#ffffb3', highlight: { border: '#ff0000', background: '#ffffb3' } }, font: { color: '#cc0000', size: 24, face: 'Angsana New' } },
      { id: '02-01-01', label: 'นักศึกษา', fixed: true, x: 600, y: 52, color: { border: '#ff0000', background: '#ffffb3', highlight: { border: '#ff0000', background: '#ffffb3' } }, font: { color: '#cc0000', size: 24, face: 'Angsana New' } },
      { id: '02-01-02', label: 'Project', fixed: true, x: 950, y: 25, color: { border: '#ff0000', background: '#ffffb3', highlight: { border: '#ff0000', background: '#ffffb3' } }, font: { color: '#cc0000', size: 24, face: 'Angsana New' } },
      { id: '02-01-03', label: 'อาจารย์', fixed: true, x: 704, y: 72, color: { border: '#ff0000', background: '#ffffb3', highlight: { border: '#ff0000', background: '#ffffb3' } }, font: { color: '#cc0000', size: 24, face: 'Angsana New' } },
      { id: '02-01-04', label: 'Papers+นวัตกรรม+สิ่งประดิษฐ์+สิทธิบัตร+อนุสิทธิบัตร', fixed: true, x: 700, y: -150, color: { border: '#ff0000', background: '#ffffb3', highlight: { border: '#ff0000', background: '#ffffb3' } }, font: { color: '#cc0000', size: 24, face: 'Angsana New' } },
      { id: '02-01-04-01', label: 'เพิ่ม Project', fixed: true, x: 900, y: -250, color: { border: '#ff0000', background: '#d1d1e0', highlight: { border: '#ff0000', background: '#d1d1e0' } }, font: { color: '#e62e00', size: 24, face: 'Angsana New' } },
      { id: '02-01-04-01-01', label: 'Bigger Income/Project', fixed: true, x: 1100, y: -185, color: { border: '#ff0000', background: '#f0f0f5', highlight: { border: '#ff0000', background: '#f0f0f5' } }, font: { color: '#000000', size: 24, face: 'Angsana New' } },
      { id: '02-01-04-02', label: 'ชื่อเสียงและความสามารถในการแข่งขัน', fixed: true, x: 950, y: -80, color: { border: '#ff0000', background: '#ffffff', highlight: { border: '#ff0000', background: '#ffffff' } }, font: { color: '#cc0000', size: 24, face: 'Angsana New' } },
      { id: '03', label: 'การบริการวิชาการ', fixed: true, x: 1200, y: 100, shape: 'box', group: 'mainNodes' },
      { id: '03-01', label: 'เพิ่ม Partners', fixed: true, x: 1200, y: 25, color: { border: '#ff0000', background: '#ffff99', highlight: { border: '#ff0000', background: '#ffff99' } }, font: { color: '#666699', size: 24, face: 'Angsana New' } },
      { id: '03-01-01', label: 'เพิ่ม Project', fixed: true, x: 1200, y: -50, color: { border: '#ff0000', background: '#d1d1e0', highlight: { border: '#ff0000', background: '#d1d1e0' } }, font: { color: '#e62e00', size: 24, face: 'Angsana New' } },
      { id: '04', label: 'ด้านบริหารจัดการ', fixed: true, x: 400, y: 250, shape: 'box', color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
      { id: '04-01', label: 'กลยุทธ์', fixed: true, x: 600, y: 200, shape: 'box', color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
      { id: '04-02', label: 'แผน', fixed: true, x: 600, y: 250, color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
      { id: '04-03', label: 'คน', fixed: true, x: 400, y: 300, color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
      { id: '04-04', label: 'IT', fixed: true, x: 600, y: 350, color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
      { id: '04-05', label: 'เงิน', fixed: true, x: 800, y: 300, color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
      { id: '04-06', label: 'การสื่อสารเชิงกลยุทธ์', fixed: true, x: 900, y: 200, shape: 'box', color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
      { id: '04-07', label: 'EdPEx', fixed: true, x: 900, y: 300, shape: 'box', color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
      { id: '04-08', label: 'ความปลอดภัย', fixed: true, x: 770, y: 380, shape: 'box', color: { border: '#0000FF', background: '#f0f0f5', highlight: { border: '#0000FF', background: '#f0f0f5' } }, font: { color: '#0033cc', size: 24, face: 'Angsana New' } },
    ]);

    var nodeGroups = {
      
    };

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
      { from: '02-01-04', to: '02-01-04-02', dashes: true },
      { from: '03', to: '03-01' },
      { from: '03-01', to: '03-01-01' },
      { from: '03-01-01', to: '02-01-04-01-01' },
      { from: '04-02', to: '04-03' },
      { from: '04-02', to: '04-04' },
      { from: '04-02', to: '04-05' },
      { from: '04-03', to: '04-04' },
    ]);

    this.graphData["nodes"] = nodes;
    this.graphData["edges"] = edges;

  }

  onClick(node: any) {
    console.log(node);
  }

}
