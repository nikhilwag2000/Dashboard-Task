import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTablePaginationComponent } from './bottom-table-pagination.component';

describe('BottomTablePaginationComponent', () => {
  let component: BottomTablePaginationComponent;
  let fixture: ComponentFixture<BottomTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomTablePaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
