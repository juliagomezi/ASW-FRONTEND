import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractBaseListCommentsComponent } from './abstract-base-list-comments.component';

describe('AbstractBaseListCommentsComponent', () => {
  let component: AbstractBaseListCommentsComponent;
  let fixture: ComponentFixture<AbstractBaseListCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractBaseListCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractBaseListCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
