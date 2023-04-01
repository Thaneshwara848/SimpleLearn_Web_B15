import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrubutedirectveComponent } from './attrubutedirectve.component';

describe('AttrubutedirectveComponent', () => {
  let component: AttrubutedirectveComponent;
  let fixture: ComponentFixture<AttrubutedirectveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrubutedirectveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrubutedirectveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
