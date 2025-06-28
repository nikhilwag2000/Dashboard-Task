import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTableDataComponent } from './bottom-table-data.component';

describe('BottomTableDataComponent', () => {
  let component: BottomTableDataComponent;
  let fixture: ComponentFixture<BottomTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomTableDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
