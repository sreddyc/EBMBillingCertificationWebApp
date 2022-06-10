/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoolpickerComponent } from './poolpicker.component';

describe('PoolpickerComponent', () => {
  let component: PoolpickerComponent;
  let fixture: ComponentFixture<PoolpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
