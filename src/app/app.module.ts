import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestGraphComponent } from './components/test-graph/test-graph.component';
import { GraphVisDirective } from './components/test-graph/graphvis.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestGraphComponent,
    GraphVisDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
