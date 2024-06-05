import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilcoachComponent } from './profilcoach.component';

describe('ProfilcoachComponent', () => {
  let component: ProfilcoachComponent;
  let fixture: ComponentFixture<ProfilcoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilcoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
