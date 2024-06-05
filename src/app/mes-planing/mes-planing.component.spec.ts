import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPlaningComponent } from './mes-planing.component';

describe('MesPlaningComponent', () => {
  let component: MesPlaningComponent;
  let fixture: ComponentFixture<MesPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPlaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
