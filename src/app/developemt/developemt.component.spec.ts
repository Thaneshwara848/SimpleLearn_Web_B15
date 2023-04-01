import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopemtComponent } from './developemt.component';

describe('DevelopemtComponent', () => {
  let component: DevelopemtComponent;
  let fixture: ComponentFixture<DevelopemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopemtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
