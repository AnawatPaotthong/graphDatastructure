import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduGraphComponent } from './edu-graph.component';

describe('EduGraphComponent', () => {
  let component: EduGraphComponent;
  let fixture: ComponentFixture<EduGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
