import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBindComponent } from './grid-bind.component';

describe('GridBindComponent', () => {
  let component: GridBindComponent;
  let fixture: ComponentFixture<GridBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
