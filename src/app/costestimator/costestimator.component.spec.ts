import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostestimatorComponent } from './costestimator.component';

describe('CostestimatorComponent', () => {
  let component: CostestimatorComponent;
  let fixture: ComponentFixture<CostestimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostestimatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostestimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
