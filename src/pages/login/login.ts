import { Component } from '@angular/core';
import { App, ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/index.providers';
import { TabsPage } from '../page.index';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  folio:string = "";
  password:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewCtrl:ViewController,
              private _userProvider: UserProvider,
              private appCtrl:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  user_login(){
    this._userProvider.login_user(this.folio, this.password)
    .subscribe(()=>{
      if(this._userProvider.validate_session()){
        this.navCtrl.setRoot(TabsPage);
      }
    })

  }

}
