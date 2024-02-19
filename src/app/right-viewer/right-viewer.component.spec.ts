import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewerComponent } from './right-viewer.component';

describe('RightViewerComponent', () => {
  let component: RightViewerComponent;
  let fixture: ComponentFixture<RightViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
