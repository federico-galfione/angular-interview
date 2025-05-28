import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RxjsSubscriptionComponent } from './rxjs-subscription.component';

describe('RxjsSubscriptionComponent', () => {
  let component: RxjsSubscriptionComponent;
  let fixture: ComponentFixture<RxjsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsSubscriptionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty data initially', () => {
    expect(component.data$.value).toEqual([]);
  });
}); 