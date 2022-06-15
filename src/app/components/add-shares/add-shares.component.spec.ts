import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSharesComponent } from './add-shares.component';

describe('AddSharesComponent', () => {
  let component: AddSharesComponent;
  let fixture: ComponentFixture<AddSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
