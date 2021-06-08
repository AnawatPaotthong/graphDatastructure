import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchGraphComponent } from './research-graph.component';

describe('ResearchGraphComponent', () => {
  let component: ResearchGraphComponent;
  let fixture: ComponentFixture<ResearchGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
