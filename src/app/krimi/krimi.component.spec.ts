import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrimiComponent } from './krimi.component';

describe('KrimiComponent', () => {
  let component: KrimiComponent;
  let fixture: ComponentFixture<KrimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrimiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
