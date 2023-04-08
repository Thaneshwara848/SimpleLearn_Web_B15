import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serv3Component } from './serv3.component';

describe('Serv3Component', () => {
  let component: Serv3Component;
  let fixture: ComponentFixture<Serv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serv3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
