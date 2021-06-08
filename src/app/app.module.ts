import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { NgxGraphComponent } from './components/ngx-graph/ngx-graph.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { EduGraphComponent } from './components/edu-graph/edu-graph.component';
import { ResearchGraphComponent } from './components/research-graph/research-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NgxGraphComponent,
    EduGraphComponent,
    ResearchGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
