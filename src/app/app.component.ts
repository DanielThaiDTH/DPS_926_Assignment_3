import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {}

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });
  }
}
