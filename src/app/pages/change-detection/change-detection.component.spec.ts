import { DatePipe, DecimalPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionComponent } from './change-detection.component';

describe('ChangeDetectionComponent', () => {
  let component: ChangeDetectionComponent;
  let fixture: ComponentFixture<ChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionComponent, DatePipe, DecimalPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT call getProcessedData on every change detection cycle', () => {
    // Spy on getProcessedData
    const getProcessedDataSpy = spyOn(component, 'getProcessedData').and.callThrough();
    
    // Initial render
    fixture.detectChanges();
    expect(getProcessedDataSpy).toHaveBeenCalledTimes(1);

    // Trigger change detection multiple times
    for (let i = 0; i < 5; i++) {
      fixture.detectChanges();
    }

    // getProcessedData should NOT be called on every change detection
    // This will fail until the bug is fixed
    expect(getProcessedDataSpy).toHaveBeenCalledTimes(1);
  });

  it('should NOT perform expensive computations on every change detection', () => {
    // Spy on heavyComputation
    const heavyComputationSpy = spyOn<any>(component, 'heavyComputation').and.callThrough();
    
    // Initial render
    fixture.detectChanges();
    const initialCalls = heavyComputationSpy.calls.count();

    // Trigger change detection
    fixture.detectChanges();

    // heavyComputation should NOT be called on every change detection
    // This will fail until the bug is fixed
    expect(heavyComputationSpy.calls.count()).toBe(initialCalls);
  });

  it('should update all items when updateData is called', () => {
    // Get initial items
    const initialItems = [...component.items];
    const initialTimestamps = initialItems.map(item => item.lastUpdated);

    // Update all items
    component.updateData();

    // Verify all items have new timestamps
    component.items.forEach((item, index) => {
      expect(item.lastUpdated).not.toEqual(initialTimestamps[index]);
    });
  });

  it('should create new array reference when updating items', () => {
    // Get initial array reference
    const initialArray = component.items;

    // Update items
    component.updateData();

    // Verify new array reference is created
    expect(component.items).not.toBe(initialArray);
  });
}); 