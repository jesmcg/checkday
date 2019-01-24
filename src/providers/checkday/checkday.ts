import { Http, URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { ToastController } from 'ionic-angular';

//Providers
import { UserProvider } from '../index.providers';
import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';

//plugins
import { URL_SERVICES } from '../../config/url.services';
import { Platform, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@Injectable()
export class CheckdayProvider {

  check_date:string;
  check_time:string;
  latitude:number;
  longitude:number;
  user_id:string;
  token:string;
  flag:string = "S";
  location:string;
  justified:string;
  description:string;
  month:number;
  day:number;

  dateTime:Date = new Date()
  constructor(public http: Http,
              private _userProvider: UserProvider,
              private storage: Storage,
              private platform: Platform,
              private alertCtrl: AlertController,
              private geolocation: Geolocation,
              private toastCtrl: ToastController,
              private geofence:Geofence) {

              this.geofence.initialize()
                           .then(
                             ()=> console.log('Geofence plugin Ready'),
                             (err)=> console.log(err)
                           );

              this.set_location();
              this.load_storage();
              this.month = this.dateTime.getMonth() + 1;
              this.check_date = this.dateTime.getFullYear() + "-" + this.month + "-" + this.dateTime.getDate();
              this.check_time = this.dateTime.getHours() + ":" + this.dateTime.getMinutes() + ":" + this.dateTime.getSeconds();
              console.log('Hello CheckdayProvider Provider');
  }

  check_day_(flag:string){
      let data = new URLSearchParams();
      let url = URL_SERVICES + "/CHECK_DAY_/Create";

      console.log(this._userProvider.user_id);
      console.log(this._userProvider.token);
      console.log(this.latitude);
      console.log(this.longitude);
      console.log(this.location);
      console.log(this.check_date);
      console.log(this.check_time);
      console.log(this.justified);
      console.log(flag);

      data.append("USER_ID", this._userProvider.user_id);
      data.append("TOKEN", this._userProvider.token);
      data.append("CHECK_DATE", this.check_date);
      data.append("CHECK_TIME", this.check_time);
      data.append("LATITUDE", this.latitude.toString());
      data.append("LONGITUDE", this.longitude.toString());
      data.append("LOCATION", this.location);
      data.append("JUSTIFIED", this.justified);
      data.append("FLAG", flag);

      return this.http.post(url, data)
                      .map(resp => {
                        let result = resp.json();
                        console.log(result);

                        if(result.error){
                          this.alertCtrl.create({
                            title:"WARNING",
                            subTitle: result.message,
                            buttons: ["ok"]
                          }).present();
                        }else{
                          this.presentToast(result.message);
                          this.flag = result.flag;

                          if(this.flag == "S" || this.flag == "B"){
                            this.day  = this.dateTime.getDate();
                          }
                          this.save_storage();
                        }
                      });

  }

  public load_storage(){
    let promise = new Promise((resolve, reject) =>{
        if(this.platform.is("cordova")){
          //Device
          this.storage.ready()
                      .then(()=>{
                        this.storage.get("flag")
                        .then((flag)=>{
                          if(flag){
                            this.flag = flag;
                            console.log("Flag " + this.flag);
                          }
                        });
                        if(this.flag == "S" || this.flag == "B"){
                          this.storage.get("day")
                          .then((day)=>{
                            if(day){
                              this.day = day;
                              console.log("Day " + this.day);
                            }
                          });
                        }
                      });
                      resolve();
        }else{
          if(localStorage.getItem("flag")){
            this.flag = localStorage.getItem("flag");
            this.day = parseInt(localStorage.getItem("day"));
            console.log("Flag" + this.flag);
            console.log("Day" + this.day)
          }
        }
    });
  }

  private save_storage(){
    if(this.platform.is("cordova")){
      //Device
      this.storage.set('flag', this.flag);
      if(this.flag == "S" || this.flag == "B"){
        this.storage.set('day', this.day);
      }
    }else{
      if(this.flag){
        localStorage.setItem('flag', this.flag);
        if(this.flag == "S" || this.flag == "B"){
          localStorage.setItem('day',  this.day.toString());
        }
      }else{
        localStorage.removeItem("flag");
        localStorage.removeItem("day");
      }
    }
  }

  private presentToast(message:string){

    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(()=>{
      console.log("Dismised toast");
    });

    toast.present();
  }

  set_location(){
    if(this.platform.is("cordova")){
      this.geolocation.getCurrentPosition().then((resp)=>{
        this.location = resp.coords.latitude +" "+ resp.coords.longitude;
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        console.log(this.latitude);
        console.log(this.longitude);
        console.log(this.location);
      }).catch((error)=>{
        console.log("Error", error);
      });
    }else{
      this.location = "-122.3336106 47.605049";
      this.latitude = -122.3336106;
      this.longitude = 47.605049;
    }
  }
}
