import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serv2Component } from './serv2.component';

describe('Serv2Component', () => {
  let component: Serv2Component;
  let fixture: ComponentFixture<Serv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
