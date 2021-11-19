import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { SaleLog } from '../SaleLog';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history: SaleLog[];
  constructor(private his_serv: HistoryService) { }

  ngOnInit() {
    let his = this.his_serv.getHistory();
    his.subscribe(res => this.history = res);
  }

}
