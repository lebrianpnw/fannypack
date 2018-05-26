import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardGridComponent } from './postcard-grid.component';

describe('PostcardGridComponent', () => {
  let component: PostcardGridComponent;
  let fixture: ComponentFixture<PostcardGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcardGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
