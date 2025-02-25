import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaregistreComponent } from './navbaregistre.component';

describe('NavbaregistreComponent', () => {
  let component: NavbaregistreComponent;
  let fixture: ComponentFixture<NavbaregistreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbaregistreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaregistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
