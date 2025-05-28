import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})

export class ComponentCommunicationComponent {
  message: string = '';
  receivedMessages: string[] = [];

  onMessageReceived(message: string) {
    this.receivedMessages.push(message);
  }

  updateMessage(newMessage: string) {
    this.message = newMessage;
  }
} 