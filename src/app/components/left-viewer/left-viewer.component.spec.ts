import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftViewerComponent } from './left-viewer.component';

describe('LeftViewerComponent', () => {
  let component: LeftViewerComponent;
  let fixture: ComponentFixture<LeftViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
