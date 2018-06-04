import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperchangepasswordComponent } from './superchangepassword.component';

describe('SuperchangepasswordComponent', () => {
  let component: SuperchangepasswordComponent;
  let fixture: ComponentFixture<SuperchangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperchangepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
