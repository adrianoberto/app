import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBottomComponent } from './popup-bottom.component';

describe('PopupBottomComponent', () => {
  let component: PopupBottomComponent;
  let fixture: ComponentFixture<PopupBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
