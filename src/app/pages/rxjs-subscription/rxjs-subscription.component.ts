import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-subscription.component.html',
  styleUrls: ['./rxjs-subscription.component.scss']
})
// Show the list coming from the data$ subject in the template.
// loadData simulates a call to the server so cannot be changed.
// If I want to add a timestamp to show in template for every element (the Date they are displayed for example), how could I do?
// Is there more than a way to show the data in template coming from an Observable?
export class RxjsSubscriptionComponent {
  data$ = new BehaviorSubject<string[]>([]);
  currentPage = 0;

  ngOnInit() {
    this.loadData(0);
  }

  loadData(page: number) {
    this.currentPage = page;
    const arr = new Array(10).fill(null);
    this.data$.next(arr.map((_, i) => 'Item ' + (i + (page * 10))))
  }
} 