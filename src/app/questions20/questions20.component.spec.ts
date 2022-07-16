import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questions20Component } from './questions20.component';

describe('Questions20Component', () => {
  let component: Questions20Component;
  let fixture: ComponentFixture<Questions20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questions20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questions20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
