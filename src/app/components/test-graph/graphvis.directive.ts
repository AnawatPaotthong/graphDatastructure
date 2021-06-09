import { Directive, TemplateRef, ViewContainerRef, Input, Renderer2, ElementRef } from '@angular/core';
import { Data, Network } from 'vis';

@Directive({
  selector: '[appGraphVis]'
})
export class GraphVisDirective {
  network: any;

  constructor(private el: ElementRef) {}

  @Input() set appGraphVis(graphData: Data){
    console.log('graph data ', graphData);
    var options = {};

    if(!this.network){
      this.network = new Network(this.el.nativeElement, graphData, options);
    }

  }

}