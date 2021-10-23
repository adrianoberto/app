import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryRegisterComponent } from './entry-register.component';

describe('RegisterComponent', () => {
  let component: EntryRegisterComponent;
  let fixture: ComponentFixture<EntryRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
