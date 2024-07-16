import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrisListComponent } from './gris-list.component';

describe('GrisListComponent', () => {
  let component: GrisListComponent;
  let fixture: ComponentFixture<GrisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrisListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
