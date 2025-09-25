import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityHistory } from './city-history';

describe('CityHistory', () => {
  let component: CityHistory;
  let fixture: ComponentFixture<CityHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
