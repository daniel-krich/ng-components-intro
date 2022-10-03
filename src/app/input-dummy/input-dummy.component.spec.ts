import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDummyComponent } from './input-dummy.component';

describe('InputDummyComponent', () => {
  let component: InputDummyComponent;
  let fixture: ComponentFixture<InputDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
