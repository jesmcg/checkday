import { Http, URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

import { URL_SERVICES } from '../../config/url.services';
import { Platform, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';

import { USER_ } from '../../interfaces/user.interface';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider implements USER_{

  user_:USER_;

  user_id:string;
  folio:string;
  password:string;
  macaddress_device:string;
  token:string;
  name:string;
  lastname:string;
  area:string;

  constructor(public http:Http,
              private alertCtrl:AlertController,
              private platform:Platform,
              private storage:Storage,
              private device:Device) {

    this.load_storage();
    console.log('Hello UserProvider Provider');
  }


  login_user(folio:string, password:string){
    let data = new URLSearchParams();
    let url = URL_SERVICES + "/USER_/ValidateUser";

    data.append("FOLIO", folio);
    data.append("PASSWORD", password);

    if(this.platform.is("cordova")){
        data.append("MACADDRESS_DEVICE", this.device.uuid);
        console.log(this.device.uuid);
    }else{
        data.append("MACADDRESS_DEVICE", '08-00-27-7f-6d-03');
    }

    return this.http.post(url, data)
                    .map (resp => {
                      let result = resp.json();
                      console.log(result);

                      if( result.error == true ){
                          this.alertCtrl.create({
                            title:"error",
                            subTitle: result.message,
                            buttons: ["ok"]
                          }).present();
                      }else{
                        console.log(result.token);
                        console.log(result.user_id);
                        this.token = result.token;
                        this.user_id = result.user_id;
                        this.name = result.name;
                        this.lastname = result.lastname;
                        this.area = result.area;

                        this.save_storage();
                      }
                    });
  }

  close_session(){
    this.token = null;
    this.user_id = null;
    this.name = null;
    this.lastname = null;
    this.area = null;
    //Save in storage
    this.save_storage();
  }

  private save_storage(){
    if(this.platform.is("cordova")){
      //Device
      this.storage.set('token', this.token);
      this.storage.set('user_id', this.user_id);
      this.storage.set('name', this.name);
      this.storage.set('lastname', this.lastname);
      this.storage.set('area', this.area);
    }else{
      if(this.token){
        console.log(this.token);
        console.log(this.user_id);
        localStorage.setItem("token", this.token);
        localStorage.setItem("user_id", this.user_id);
        localStorage.setItem("name", this.name);
        localStorage.setItem("lastname", this.lastname);
        localStorage.setItem("area", this.area);
      }else{
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("name");
        localStorage.removeItem("lastname");
        localStorage.removeItem("area");
      }
    }
  }

  load_storage(){
    let promise = new Promise((resolve, reject) => {
      if(this.platform.is("cordova")){
          //Device
          this.storage.ready()
                      .then(()=>{
                        this.storage.get("token")
                        .then((token)=>{
                          if(token){
                            this.token = token;
                            console.log("Token: " + token);
                          }
                        });
                        this.storage.get("user_id")
                        .then((user_id)=>{
                          if(user_id){
                            this.user_id = user_id;
                            console.log("user_id" + this.user_id)
                          }
                        });
                        this.storage.get("name")
                                    .then((name)=>{
                                      if(name){
                                        this.name = name;
                                      }
                                    });
                        this.storage.get("lastname")
                                    .then((lastname)=>{
                                      if(lastname){
                                        this.lastname = lastname;
                                      }
                                    });
                        this.storage.get("area")
                                    .then((area)=>{
                                      if(area){
                                        this.area = area;
                                      }
                                    });
                        resolve();
                      });
      }else{
        // Browser
        if(localStorage.getItem("token")){
          this.token = localStorage.getItem("token");
          this.user_id = localStorage.getItem("user_id");
          this.name = localStorage.getItem("name");
          this.lastname = localStorage.getItem("lastname");
          this.area = localStorage.getItem("area");

          console.log("Browser: " + this.user_id + " : " + this.token);
        }
      }
    })
  }

  validate_session():boolean{
    if( this.token && this.user_id ){
      return true;
    }else{
      return false;
    }
  }
}
