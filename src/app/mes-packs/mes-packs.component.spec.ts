import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPacksComponent } from './mes-packs.component';

describe('MesPacksComponent', () => {
  let component: MesPacksComponent;
  let fixture: ComponentFixture<MesPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
