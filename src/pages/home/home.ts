import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserProvider } from '../../providers/index.providers';
import { CheckdayProvider } from '../../providers/index.providers';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fullaname:string = "Jesus Manuel Castro Garcia";
  today:Date = new Date();
  time:Date = new Date();
  subject:string;
  message:string;
  _isCurrentDay:boolean;
  _isAfter:boolean;
  _isBefore:boolean;
  _flag:string;
  _isOut:boolean;

  constructor(public navCtrl: NavController,
              private _userProvider:UserProvider,
              private _checkdayProvider: CheckdayProvider) {
  }

  ionViewDidLoad() {
    this._isCurrentDay = this.isCurrentDay();
    this._flag = this.flagsF();
    this._isOut = this.isOut();

    setInterval(()=>{
      this.time = new Date();
      this._isAfter = this.isAfter();
      this._isBefore = this.isBefore();
    },1000);
    console.log('ionViewDidLoad LoginPage');
  }

  check_day(flag:string){
    this._checkdayProvider.justified = this.subject;
    this._checkdayProvider.check_day_(flag).subscribe(()=>{
        this.navCtrl.setRoot(HomePage);
    });
  }

  private isBefore():boolean{
    let dateF:Date = new Date();
    let date:Date = new Date(dateF.getFullYear().toString()+"/"+ (1 + dateF.getMonth()) +"/"+ dateF.getDate() + " 19:00:00");
    let currentDate = new Date();
    if(currentDate.getTime() < date.getTime()){
      return true;
    }
    return false;
  }

  private isAfter():boolean{
    let dateF:Date = new Date();
    let date:Date = new Date(dateF.getFullYear().toString()+"/"+ (1 + dateF.getMonth()) +"/"+ dateF.getDate() + " 10:00:00");
    let currentDate = new Date();
    if(currentDate.getTime() > date.getTime()){
      return true;
    }
    return false;
  }

  private flagsF():string{
    let aux = "";
      let promise = new Promise((resolve, reject)=>{
      if(this._checkdayProvider.flag == 'E' || this._checkdayProvider.flag == 'O' || this._checkdayProvider.flag == 'R'){
        aux = 'S';
      }else if(this._checkdayProvider.flag == 'B' || this._checkdayProvider.flag == 'S'){
        aux = 'E';
      }

    });
    return aux;
  }

  isCurrentDay():any{
    let axu:boolean;
        if(this._checkdayProvider.day == this.time.getDate()){
          axu = true;
        }else{
          axu = false;
        }
        console.log(axu);
        return axu;
  }

  private isOut():boolean{
    return false;
  }
}
