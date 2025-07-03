import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCard } from './sample-card';

describe('SampleCard', () => {
  let component: SampleCard;
  let fixture: ComponentFixture<SampleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
