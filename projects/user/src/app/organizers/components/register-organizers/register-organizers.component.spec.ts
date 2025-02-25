import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrganizersComponent } from './register-organizers.component';

describe('RegisterComponent', () => {
  let component: RegisterOrganizersComponent;
  let fixture: ComponentFixture<RegisterOrganizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterOrganizersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOrganizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
