import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSubmissionsComponent } from './favourite-submissions.component';

describe('FavouriteSubmissionsComponent', () => {
  let component: FavouriteSubmissionsComponent;
  let fixture: ComponentFixture<FavouriteSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteSubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
