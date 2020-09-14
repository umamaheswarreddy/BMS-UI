import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsByPanAndMutualFundIdComponent } from './transactions-by-pan-and-mutual-fund-id.component';

describe('TransactionsByPanAndMutualFundIdComponent', () => {
  let component: TransactionsByPanAndMutualFundIdComponent;
  let fixture: ComponentFixture<TransactionsByPanAndMutualFundIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsByPanAndMutualFundIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsByPanAndMutualFundIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
