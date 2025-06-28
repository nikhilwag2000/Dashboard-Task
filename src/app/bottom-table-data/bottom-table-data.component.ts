import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgFor, NgIf, NgSwitch } from '@angular/common';
import { BottomTablePaginationComponent } from '../bottom-table-pagination/bottom-table-pagination.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bottom-table-data',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, BottomTablePaginationComponent, NgClass, FormsModule],
  templateUrl: './bottom-table-data.component.html',
  styleUrl: './bottom-table-data.component.scss'
})
export class BottomTableDataComponent {
  loading = true;
  private apiUrl = 'https://01.fy25ey01.64mb.io/';
  data: any[] = [];
  columns: any[] = [];
  selectAll = false;

  selectedName: string | null = null;
  showPopup = false;

  rowToDelete: any = null;
  showDeleteConfirm = false;
  showMultiDeleteConfirm = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const cachedData = localStorage.getItem('teamData');
    if (cachedData) {
      const parsed = JSON.parse(cachedData);
      this.columns = parsed.grid_columns;
      this.data = parsed.grid_data;
      this.loading = false;
    } else {
      this.fetchAndStoreData();
    }
  }

  fetchAndStoreData() {
    this.loading = true;
    this.http.get<any>(this.apiUrl).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.columns = res.grid_columns;
          this.data = res.grid_data.slice(0, 10);
          localStorage.setItem('teamData', JSON.stringify({
            grid_columns: this.columns,
            grid_data: this.data
          }));
          this.loading = false;
        }, 2000);
      },
      error: (err) => {
        console.error('API error:', err);
        this.loading = false;
      }
    });
  }

  // Edit user popup
  onEdit(row: any) {
    this.selectedName = `${row.name.first_name} ${row.name.last_name}`;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  // Single row delete
  onDelete(row: any) {
    this.rowToDelete = row;
    this.showDeleteConfirm = true;
  }

  confirmDelete() {
    if (this.rowToDelete) {
      this.data = this.data.filter(r => r !== this.rowToDelete);
      this.updateLocalStorage();
      this.rowToDelete = null;
      this.showDeleteConfirm = false;
    }
  }

  cancelDelete() {
    this.rowToDelete = null;
    this.showDeleteConfirm = false;
  }

  // Multi delete
  deleteSelectedRows() {
    this.showMultiDeleteConfirm = true;
  }

  cancelMultiDelete() {
    this.showMultiDeleteConfirm = false;
  }

  confirmMultiDelete() {
    this.data = this.data.filter(row => !row.selected);
    this.selectAll = false;
    this.updateLocalStorage();
    this.showMultiDeleteConfirm = false;
  }

  // Checkbox utils
  toggleAllSelection() {
    this.data.forEach(row => row.selected = this.selectAll);
  }

  checkIfAllSelected() {
    this.selectAll = this.data.every(row => row.selected);
  }

  // UI utils
  reloadData() {
    this.fetchAndStoreData();
  }

  updateLocalStorage() {
    localStorage.setItem('teamData', JSON.stringify({
      grid_columns: this.columns,
      grid_data: this.data
    }));
  }

  // Template conditions
  get selectedCount(): number {
    return this.data.filter(row => row.selected).length;
  }

  get anySelected(): boolean {
    return this.selectedCount > 0;
  }
}
