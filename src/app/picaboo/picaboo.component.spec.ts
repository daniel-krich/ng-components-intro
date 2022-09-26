import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicabooComponent } from './picaboo.component';

describe('PicabooComponent', () => {
  let component: PicabooComponent;
  let fixture: ComponentFixture<PicabooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicabooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicabooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
