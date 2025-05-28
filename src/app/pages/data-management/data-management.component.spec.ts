import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DataManagementComponent } from './data-management.component';

describe('DataManagementComponent', () => {
  let component: DataManagementComponent;
  let fixture: ComponentFixture<DataManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataManagementComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial user data', () => {
    expect(component.user).toBeDefined();
    expect(component.user.id).toBe(1);
    expect(component.user.name).toBe('John Doe');
    expect(component.user.email).toBe('john@example.com');
    expect(component.user.preferences?.theme).toBe('light');
    expect(component.user.preferences?.notifications).toBe(true);
  });


  it('should merge user preferences correctly', () => {
    const newPreferences = { theme: 'dark' };
    const merged = component.mergeUserPreferences(component.user, newPreferences);
    expect(merged.preferences.theme).toBe('dark');
    expect(merged.preferences.notifications).toBe(true);
  });

  it('should fail when merging invalid preferences', () => {
    const invalidPreferences = { theme: 123 } as any;
    // This will fail at runtime because we're not handling invalid preference types
    expect(() => component.mergeUserPreferences(component.user, invalidPreferences)).toThrow();
  });


  it('should fail when updating user with invalid data', () => {
    // This will fail at runtime because we're not handling partial updates correctly
    const invalidData = { id: 'not-a-number' };
    expect(() => component.updateUser(invalidData)).toThrow();
  });

}); 