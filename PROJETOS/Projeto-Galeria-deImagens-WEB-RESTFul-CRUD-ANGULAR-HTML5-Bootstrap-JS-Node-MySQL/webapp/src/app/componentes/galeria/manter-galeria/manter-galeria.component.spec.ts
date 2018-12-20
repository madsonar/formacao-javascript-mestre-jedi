import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterGaleriaComponent } from './manter-galeria.component';

describe('ManterGaleriaComponent', () => {
  let component: ManterGaleriaComponent;
  let fixture: ComponentFixture<ManterGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
