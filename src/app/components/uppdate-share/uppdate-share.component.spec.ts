import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppdateShareComponent } from './uppdate-share.component';

describe('UppdateShareComponent', () => {
  let component: UppdateShareComponent;
  let fixture: ComponentFixture<UppdateShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppdateShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppdateShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
