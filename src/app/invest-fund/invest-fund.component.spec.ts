import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestFundComponent } from './invest-fund.component';

describe('InvestFundComponent', () => {
  let component: InvestFundComponent;
  let fixture: ComponentFixture<InvestFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
