import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteingComponent } from './testeing.component';

describe('TesteingComponent', () => {
  let component: TesteingComponent;
  let fixture: ComponentFixture<TesteingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
