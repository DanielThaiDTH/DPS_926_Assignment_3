import { Component, OnInit, Input } from '@angular/core';
import { SaleLog } from '../SaleLog';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from '../history.service';

/**
 * Displays the purchase log using the id from the route query paramaters.
 */
@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  @Input() log: SaleLog;
  querySub: any;

  constructor(private route: ActivatedRoute, private his: HistoryService) { 
  }
  
  ngOnInit() {
    let param = this.route.snapshot.queryParams['logid'];
    if (param && !isNaN(parseInt(param))) {
      this.log = this.his.getLog(parseInt(param));
      if (!this.log)
        this.log = new SaleLog("", 0, 0);
    } else {
      this.log = new SaleLog("", 0, 0);
    }
  }

  ngOnDestroy(): void {
    if (this.querySub)
      this.querySub.unsubscribe();
  }
}
