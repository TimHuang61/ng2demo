/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestShowComponent } from './test-show.component';

describe('TestShowComponent', () => {
  let component: TestShowComponent;
  let fixture: ComponentFixture<TestShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
