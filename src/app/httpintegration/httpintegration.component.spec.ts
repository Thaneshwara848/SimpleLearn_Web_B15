import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpintegrationComponent } from './httpintegration.component';

describe('HttpintegrationComponent', () => {
  let component: HttpintegrationComponent;
  let fixture: ComponentFixture<HttpintegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpintegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
