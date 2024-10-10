import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowlistComponent } from './tvshowlist.component';

describe('TvshowlistComponent', () => {
  let component: TvshowlistComponent;
  let fixture: ComponentFixture<TvshowlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvshowlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
