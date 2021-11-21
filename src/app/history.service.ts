import { Injectable } from '@angular/core';
import { SaleLog } from './SaleLog';
import { Observable, ObservedValueOf, of } from 'rxjs';

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

  getLog(id: number): SaleLog {
    let log = this.history.find(l => l.id === id);
    return log ? log : null;
  }
}
