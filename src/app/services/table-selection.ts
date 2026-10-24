import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableSelection {
  selectedTable = '';

  selectTable(tableNumber: string) {
    this.selectedTable = tableNumber;
  }
}