import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercoachComponent } from './registercoach.component';

describe('RegistercoachComponent', () => {
  let component: RegistercoachComponent;
  let fixture: ComponentFixture<RegistercoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
