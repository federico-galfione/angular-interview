import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';
import { ComponentCommunicationComponent } from './component-communication.component';

describe('ComponentCommunicationComponent', () => {
  let component: ComponentCommunicationComponent;
  let fixture: ComponentFixture<ComponentCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCommunicationComponent, ChildComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty message initially', () => {
    expect(component.message).toBe('');
  });

  it('should have empty received messages initially', () => {
    expect(component.receivedMessages).toEqual([]);
  });

  it('should process message queue when receiving messages', () => {
    const childComponent = fixture.debugElement.children[1].componentInstance;
    childComponent.messageReceived.emit('Test message 1');
    childComponent.messageReceived.emit('Test message 2');
    fixture.detectChanges();

    // This will fail until message queue processing is implemented
    expect(component.receivedMessages).toContain('Test message 1');
    expect(component.receivedMessages).toContain('Test message 2');
  });

  it('should sync state between parent and child', () => {
    component.updateMessage('New message');
    fixture.detectChanges();

    const childComponent = fixture.debugElement.children[1].componentInstance;
    // This will fail until state syncing is implemented
    expect(childComponent.message).toBe('New message');
  });

  it('should handle message changes in child component', () => {
    const childComponent = fixture.debugElement.children[1].componentInstance;
    childComponent.message = 'Updated message';
    childComponent.onMessageChange();
    fixture.detectChanges();

    // This will fail until message change handling is implemented
    expect(childComponent.lastProcessedMessage).toBe('Updated message');
  });
}); 