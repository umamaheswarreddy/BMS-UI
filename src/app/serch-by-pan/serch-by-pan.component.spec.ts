import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchByPanComponent } from './serch-by-pan.component';

describe('SerchByPanComponent', () => {
  let component: SerchByPanComponent;
  let fixture: ComponentFixture<SerchByPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchByPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchByPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
