import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
// Change this component so it receives a message from the parent and displays it.
// Add a button to the child component that allows the user to update the message and show the list of updated messages in the parent component.
// Once you found a solution, do you know if there are other ways to share data between a parent and a child?
export class ChildComponent {

} 