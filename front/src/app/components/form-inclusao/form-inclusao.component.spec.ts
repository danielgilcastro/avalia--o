import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInclusaoComponent } from './form-inclusao.component';

describe('FormInclusaoComponent', () => {
  let component: FormInclusaoComponent;
  let fixture: ComponentFixture<FormInclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInclusaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
