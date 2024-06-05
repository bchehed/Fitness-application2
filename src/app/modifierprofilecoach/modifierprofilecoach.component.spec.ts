import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierprofilecoachComponent } from './modifierprofilecoach.component';

describe('ModifierprofilecoachComponent', () => {
  let component: ModifierprofilecoachComponent;
  let fixture: ComponentFixture<ModifierprofilecoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierprofilecoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierprofilecoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
