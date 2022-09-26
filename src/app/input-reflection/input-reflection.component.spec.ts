import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReflectionComponent } from './input-reflection.component';

describe('InputReflectionComponent', () => {
  let component: InputReflectionComponent;
  let fixture: ComponentFixture<InputReflectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReflectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
