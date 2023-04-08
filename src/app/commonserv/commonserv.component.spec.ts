import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonservComponent } from './commonserv.component';

describe('CommonservComponent', () => {
  let component: CommonservComponent;
  let fixture: ComponentFixture<CommonservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
