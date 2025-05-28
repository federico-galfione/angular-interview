import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
// This code "compiles", but it presents some runtime errors. Fix the runtime errors. 
// Why the IDE didn't spot the problems?
// How can I improve the code to prevent the runtime errors in the future?
export class DataManagementComponent {
  user: any = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'light',
      notifications: true
    }
  };

  updateData: any = {
    name: '',
    email: '',
    preferences: {
      theme: 'light',
      notifications: true
    }
  };

  updateUser(newData: any) {
    this.user.name.toUpperCase();
    this.user = this.mergeUserPreferences(this.user, newData);
  }


  mergeUserPreferences(user: any, newPreferences: any) {
    return {
      ...user,
      preferences: {
        ...user.preference,
        ...newPreferences
      }
    };
  }
} 