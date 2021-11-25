import { Injectable } from '@angular/core';
import { SaleLog } from './SaleLog';
import { Observable, ObservedValueOf, of } from 'rxjs';


/**
 * Manages and provides the purchase history of the app.
 */
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: SaleLog[];
  constructor() {
    this.history = [];
  }

  getHistory(): Observable<SaleLog[]> {
    const his = of(this.history);
    return his;
  }

  addHistory(log: SaleLog): void {
    this.history.push(log);
  }

  /**
   * Returns the purchase log with the given id.
   */
  getLog(id: number): SaleLog {
    let log = this.history.find(l => l.id === id);
    return log ? log : null;
  }
}
