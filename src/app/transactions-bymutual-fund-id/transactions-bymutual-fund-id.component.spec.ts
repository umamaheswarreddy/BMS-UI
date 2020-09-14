import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsBymutualFundIdComponent } from './transactions-bymutual-fund-id.component';

describe('TransactionsBymutualFundIdComponent', () => {
  let component: TransactionsBymutualFundIdComponent;
  let fixture: ComponentFixture<TransactionsBymutualFundIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsBymutualFundIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsBymutualFundIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
