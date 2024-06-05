import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSalleComponent } from './register-salle.component';

describe('RegisterSalleComponent', () => {
  let component: RegisterSalleComponent;
  let fixture: ComponentFixture<RegisterSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
