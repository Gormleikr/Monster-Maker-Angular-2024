import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidToolbarComponent } from './mid-toolbar.component';

describe('MidToolbarComponent', () => {
  let component: MidToolbarComponent;
  let fixture: ComponentFixture<MidToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MidToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
