import { Directive, TemplateRef, ViewContainerRef, Input, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
import { Data, Network } from 'vis';

@Directive({
  selector: '[appGraphVis]'
})
export class GraphVisDirective {
  network: any;

  constructor(private el: ElementRef) {}

  @Input() set appGraphVis(graphData: Data){
    console.log('graph data ', graphData);
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
      groups: {
        mainNodes:{
          color: { border: '#ff0000', background: '#ffcccc', highlight: { border: '#cc0088', background: '#ffcccc' } }, font: { color: '#660066', size: 30, face: 'Angsana New' }, margin:{ top: 15, right: 15, left: 15, bottom: 15}
        },
      },
    };

    if(!this.network){
      this.network = new Network(this.el.nativeElement, graphData, options);
      this.network.on("click", (param: any) => {
        this.onNetworkClick.emit(param);
      });
    }
  }

  @Output() onNetworkClick = new EventEmitter<any>();

}