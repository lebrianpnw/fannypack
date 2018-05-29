/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostcardComponent } from './postcard.component';

describe('PostcardComponent', () => {
  let component: PostcardComponent;
  let fixture: ComponentFixture<PostcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
