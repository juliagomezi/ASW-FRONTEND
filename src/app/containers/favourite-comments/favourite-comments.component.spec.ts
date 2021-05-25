import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCommentsComponent } from './favourite-comments.component';

describe('FavouriteCommentsComponent', () => {
  let component: FavouriteCommentsComponent;
  let fixture: ComponentFixture<FavouriteCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
