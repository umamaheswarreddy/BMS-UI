import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountSetupComponent } from './bank-account-setup.component';

describe('BankAccountSetupComponent', () => {
  let component: BankAccountSetupComponent;
  let fixture: ComponentFixture<BankAccountSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
