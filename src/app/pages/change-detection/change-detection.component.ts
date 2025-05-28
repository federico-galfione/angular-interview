import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DataItem {
  id: number;
  name: string;
  value: number;
  lastUpdated: Date;
}

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
// Here there is a big change detection performance issue. Can you spot it?
export class ChangeDetectionComponent {
  items: DataItem[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.random() * 100,
    lastUpdated: new Date()
  }));

  getProcessedData() {
    console.log('Processing data...'); 
    return this.items.map(item => ({
      ...item,
      processedValue: this.heavyComputation(item.value),
      category: this.categorizeValue(item.value)
    }));
  }

  getCurrentTime() {
    return new Date().toLocaleTimeString();
  }

  updateData() {
    this.items = this.items.map(item => ({
      ...item,
      lastUpdated: new Date()
    }));
  }

  private heavyComputation(value: number): number {
    let result = value;
    for (let i = 0; i < 1000000; i++) {
      result = Math.sqrt(result) * Math.sin(result);
    }
    return result;
  }

  private categorizeValue(value: number): string {
    if (value < 25) return 'Low';
    if (value < 50) return 'Medium';
    if (value < 75) return 'High';
    return 'Very High';
  }
} 