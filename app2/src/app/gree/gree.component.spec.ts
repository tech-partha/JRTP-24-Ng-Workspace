import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeComponent } from './gree.component';

describe('GreeComponent', () => {
  let component: GreeComponent;
  let fixture: ComponentFixture<GreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
