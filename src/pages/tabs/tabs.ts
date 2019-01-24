import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage, HistoryPage, ChartPage, UsersPage} from '../page.index';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  historyRoot:any;
  usersRoot:any;
  chartRoot:any;
  homeRoot:any;

  constructor(public navCtrl: NavController) {
    this.historyRoot = HistoryPage
    this.usersRoot = UsersPage
    this.chartRoot = ChartPage
    this.homeRoot = HomePage
  }

}
