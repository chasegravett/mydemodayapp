import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questions30Component } from './questions30.component';

describe('Questions30Component', () => {
  let component: Questions30Component;
  let fixture: ComponentFixture<Questions30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questions30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questions30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
