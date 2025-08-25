import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolciaisListComponent } from './polciais-list.component';

describe('PolciaisListComponent', () => {
  let component: PolciaisListComponent;
  let fixture: ComponentFixture<PolciaisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolciaisListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolciaisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
