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
          color: {
            border: '#ff0000',
            background: '#ffcccc',
            highlight: { 
            border: '#cc0088',
            background: '#ffcccc' 
            } 
          },
          font: {
            color: '#660066',
            size: 28,
            face: 'TH SarabunPSK' 
          },
          margin: {
            top: 15,
            right: 15,
            left: 15,
            bottom: 15
          }
        },
        secondaryNodes:{
          color: {
            border: '#ff0000',
            background: '#ffd1b3',
            highlight: {
              border: '#ff0000',
              background: '#ffd1b3'
            } 
          }, 
          font: {
            color: '#331400',
            size: 20,
            face: 'TH SarabunPSK' 
          }
        },
        secondaryNodes1:{
          color: { 
            border: '#ff0000',
            background: '#00cc00',
            highlight: {
              border: '#ff0000',
              background: '#00cc00'
            }
          },
          font: {
            color: '#000000',
            size: 20,
            face: 'TH SarabunPSK'
          }
        },
        secondaryNodes2:{
          color: {
            border: '#ff0000',
            background: '#c2f0c2',
            highlight: {
              border: '#ff0000',
              background: '#c2f0c2' 
            }
          },
          font: {
            color: '#051405',
            size: 20,
            face: 'TH SarabunPSK' }
        },
        secondaryNodes3:{
          color: {
            border: '#ff0000',
            background: '#ffffb3',
            highlight: {
              border: '#ff0000',
              background: '#ffffb3'
            }
          },
          font: {
            color: '#cc0000',
            size: 20,
            face: 'TH SarabunPSK'
          }
        },
        bottomNodes:{
          color: {
            border: '#0000FF',
            background: '#f0f0f5',
            highlight: {
              border: '#0000FF',
              background: '#f0f0f5' }
            },
            font: {
              color: '#0033cc',
              size: 20,
              face: 'TH SarabunPSK'
            }
        }
      }
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