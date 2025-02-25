import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrganizersComponent } from './login-organizers.component';

describe('LoginComponent', () => {
  let component: LoginOrganizersComponent;
  let fixture: ComponentFixture<LoginOrganizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginOrganizersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOrganizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
