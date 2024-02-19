import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterViewerComponent } from './center-viewer.component';

describe('CenterViewerComponent', () => {
  let component: CenterViewerComponent;
  let fixture: ComponentFixture<CenterViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
