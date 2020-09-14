import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsByPanComponent } from './transactions-by-pan.component';

describe('TransactionsByPanComponent', () => {
  let component: TransactionsByPanComponent;
  let fixture: ComponentFixture<TransactionsByPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsByPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsByPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
