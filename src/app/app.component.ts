import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

interface Test {
  path: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container">
      <h1>Angular Interview Tests</h1>
      <p>Each test contains common Angular errors that need to be fixed.</p>

      <div class="tests-grid">
        @for (test of tests; track test.path) {
          <div class="test-card">
            <h2>{{ test.name }}</h2>
            <p>{{ test.description }}</p>
            <a [routerLink]="test.path" class="test-link">Start Test</a>
          </div>
        }
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .tests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }
    .test-card {
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .test-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: #3498db;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 1rem;
    }
    .test-link:hover {
      background: #2980b9;
    }
  `]
})
export class AppComponent {
  tests: Test[] = [
    {
      path: '/component-communication',
      name: 'Component Communication Test',
      description: 'Fix parent-child component communication'
    },
    {
      path: '/form-validation',
      name: 'Form Validation Test',
      description: 'Implement proper form validation and error handling'
    },
    {
      path: '/change-detection',
      name: 'Change Detection Test',
      description: 'Optimize change detection and performance'
    },
    //{
     // path: '/change-detection-2',
     // name: 'Change Detection 2 Test',
      //description: 'Change detection error'
    //},
    {
      path: '/rxjs-subscription',
      name: 'RxJS Subscription Test',
      description: 'Fix RxJS subscription management and error handling'
    },
    {
      path: '/data-management',
      name: 'Data Management Test',
      description: 'Fix data transformation and type safety issues'
    },
  ];
}
