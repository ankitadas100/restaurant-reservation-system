import { Component } from '@angular/core';
import { TableSelection } from '../../services/table-selection';

@Component({
  selector: 'app-tables',
  imports: [],
  templateUrl: './tables.html',
  styleUrl: './tables.css'
})
export class Tables {
  selectedTable = '';

  constructor(private tableSelection: TableSelection) {}

  selectTable(tableNumber: string) {
    this.selectedTable = tableNumber;
    this.tableSelection.selectTable(tableNumber);
  }
}