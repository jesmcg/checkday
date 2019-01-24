webpackJsonp([6],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chart/chart.module": [
		288,
		5
	],
	"../pages/history/history.module": [
		289,
		4
	],
	"../pages/login/login.module": [
		287,
		3
	],
	"../pages/save-screen/save-screen.module": [
		290,
		2
	],
	"../pages/tabs/tabs.module": [
		292,
		1
	],
	"../pages/users/users.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginProvider = /** @class */ (function () {
    function LoginProvider(http) {
        this.http = http;
        console.log('Hello LoginProvider Provider');
    }
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_SERVICES; });
var URL_SERVICES = "http://signumtech.mx/checkday";
//export const URL_SERVICES = "";
//export const URL_SERVICES = "";
//# sourceMappingURL=url.services.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckdayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_providers__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geofence__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_url_services__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Providers



//plugins



var CheckdayProvider = /** @class */ (function () {
    function CheckdayProvider(http, _userProvider, storage, platform, alertCtrl, geolocation, toastCtrl, geofence) {
        this.http = http;
        this._userProvider = _userProvider;
        this.storage = storage;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.geofence = geofence;
        this.flag = "S";
        this.dateTime = new Date();
        this.geofence.initialize()
            .then(function () { return console.log('Geofence plugin Ready'); }, function (err) { return console.log(err); });
        this.set_location();
        this.load_storage();
        this.month = this.dateTime.getMonth() + 1;
        this.check_date = this.dateTime.getFullYear() + "-" + this.month + "-" + this.dateTime.getDate();
        this.check_time = this.dateTime.getHours() + ":" + this.dateTime.getMinutes() + ":" + this.dateTime.getSeconds();
        console.log('Hello CheckdayProvider Provider');
    }
    CheckdayProvider.prototype.check_day_ = function (flag) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* URLSearchParams */]();
        var url = __WEBPACK_IMPORTED_MODULE_7__config_url_services__["a" /* URL_SERVICES */] + "/CHECK_DAY_/Create";
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
            .map(function (resp) {
            var result = resp.json();
            console.log(result);
            if (result.error) {
                _this.alertCtrl.create({
                    title: "WARNING",
                    subTitle: result.message,
                    buttons: ["ok"]
                }).present();
            }
            else {
                _this.presentToast(result.message);
                _this.flag = result.flag;
                if (_this.flag == "S" || _this.flag == "B") {
                    _this.day = _this.dateTime.getDate();
                }
                _this.save_storage();
            }
        });
    };
    CheckdayProvider.prototype.load_storage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                //Device
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get("flag")
                        .then(function (flag) {
                        if (flag) {
                            _this.flag = flag;
                            console.log("Flag " + _this.flag);
                        }
                    });
                    if (_this.flag == "S" || _this.flag == "B") {
                        _this.storage.get("day")
                            .then(function (day) {
                            if (day) {
                                _this.day = day;
                                console.log("Day " + _this.day);
                            }
                        });
                    }
                });
                resolve();
            }
            else {
                if (localStorage.getItem("flag")) {
                    _this.flag = localStorage.getItem("flag");
                    _this.day = parseInt(localStorage.getItem("day"));
                    console.log("Flag" + _this.flag);
                    console.log("Day" + _this.day);
                }
            }
        });
    };
    CheckdayProvider.prototype.save_storage = function () {
        if (this.platform.is("cordova")) {
            //Device
            this.storage.set('flag', this.flag);
            if (this.flag == "S" || this.flag == "B") {
                this.storage.set('day', this.day);
            }
        }
        else {
            if (this.flag) {
                localStorage.setItem('flag', this.flag);
                if (this.flag == "S" || this.flag == "B") {
                    localStorage.setItem('day', this.day.toString());
                }
            }
            else {
                localStorage.removeItem("flag");
                localStorage.removeItem("day");
            }
        }
    };
    CheckdayProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log("Dismised toast");
        });
        toast.present();
    };
    CheckdayProvider.prototype.set_location = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            this.geolocation.getCurrentPosition().then(function (resp) {
                _this.location = resp.coords.latitude + " " + resp.coords.longitude;
                _this.latitude = resp.coords.latitude;
                _this.longitude = resp.coords.longitude;
                console.log(_this.latitude);
                console.log(_this.longitude);
                console.log(_this.location);
            }).catch(function (error) {
                console.log("Error", error);
            });
        }
        else {
            this.location = "-122.3336106 47.605049";
            this.latitude = -122.3336106;
            this.longitude = 47.605049;
        }
    };
    CheckdayProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__index_providers__["b" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__index_providers__["b" /* UserProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_geofence__["a" /* Geofence */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_geofence__["a" /* Geofence */]) === "function" && _h || Object])
    ], CheckdayProvider);
    return CheckdayProvider;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=checkday.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index_providers__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_index__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, _userProvider, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._userProvider = _userProvider;
        this.appCtrl = appCtrl;
        this.folio = "";
        this.password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.user_login = function () {
        var _this = this;
        this._userProvider.login_user(this.folio, this.password)
            .subscribe(function () {
            if (_this._userProvider.validate_session()) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__page_index__["f" /* TabsPage */]);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Inicio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div class="container">\n    <ion-input type="number" class="txt-field" [(ngModel)]="folio" placeholder="FOLIO"></ion-input>\n    <ion-input type="password" class="txt-field" [(ngModel)]="password" placeholder="PASSWORD"></ion-input>\n\n    <button ion-button\n            color="secondary"\n            class="btn-login"\n            [disabled]="folio < 4 || password < 3"\n            (click)="user_login()"\n            block>Iniciar</button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_index_providers__["b" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_index__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.historyRoot = __WEBPACK_IMPORTED_MODULE_2__page_index__["b" /* HistoryPage */];
        this.usersRoot = __WEBPACK_IMPORTED_MODULE_2__page_index__["g" /* UsersPage */];
        this.chartRoot = __WEBPACK_IMPORTED_MODULE_2__page_index__["a" /* ChartPage */];
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_2__page_index__["c" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="0">\n    <ion-tab [root]="homeRoot" tabTitle="Home" tabIcon="md-home"></ion-tab>\n    <ion-tab [root]="historyRoot" tabTitle="History" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="usersRoot" tabTitle="Users" tabIcon="md-contacts"></ion-tab>\n    <ion-tab [root]="chartRoot" tabTitle="Chart" tabIcon="md-stats"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChartPage = /** @class */ (function () {
    function ChartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartPage');
    };
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/chart/chart.html"*/'<!--\n  Generated template for the ChartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/chart/chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsersPage = /** @class */ (function () {
    function UsersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsersPage');
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users',template:/*ion-inline-start:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/users/users.html"*/'<!--\n  Generated template for the UsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Users</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/users/users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SaveScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SaveScreenPage = /** @class */ (function () {
    function SaveScreenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SaveScreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaveScreenPage');
    };
    SaveScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-save-screen',template:/*ion-inline-start:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/save-screen/save-screen.html"*/'<!--\n  Generated template for the SaveScreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>saveScreen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/save-screen/save-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SaveScreenPage);
    return SaveScreenPage;
}());

//# sourceMappingURL=save-screen.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_page_index__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geofence__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_checkday_checkday__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// plugins





// Provides

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["f" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["d" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["b" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["g" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["e" /* SaveScreenPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-screen/save-screen.module#SaveScreenPageModule', name: 'SaveScreenPage', segment: 'save-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["f" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["d" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["b" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["g" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_page_index__["e" /* SaveScreenPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geofence__["a" /* Geofence */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_14__providers_checkday_checkday__["a" /* CheckdayProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index_providers__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _userProvider, _checkdayProvider) {
        this.navCtrl = navCtrl;
        this._userProvider = _userProvider;
        this._checkdayProvider = _checkdayProvider;
        this.fullaname = "Jesus Manuel Castro Garcia";
        this.today = new Date();
        this.time = new Date();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._isCurrentDay = this.isCurrentDay();
        this._flag = this.flagsF();
        this._isOut = this.isOut();
        setInterval(function () {
            _this.time = new Date();
            _this._isAfter = _this.isAfter();
            _this._isBefore = _this.isBefore();
        }, 1000);
        console.log('ionViewDidLoad LoginPage');
    };
    HomePage.prototype.check_day = function (flag) {
        var _this = this;
        this._checkdayProvider.justified = this.subject;
        this._checkdayProvider.check_day_(flag).subscribe(function () {
            _this.navCtrl.setRoot(HomePage_1);
        });
    };
    HomePage.prototype.isBefore = function () {
        var dateF = new Date();
        var date = new Date(dateF.getFullYear().toString() + "/" + (1 + dateF.getMonth()) + "/" + dateF.getDate() + " 19:00:00");
        var currentDate = new Date();
        if (currentDate.getTime() < date.getTime()) {
            return true;
        }
        return false;
    };
    HomePage.prototype.isAfter = function () {
        var dateF = new Date();
        var date = new Date(dateF.getFullYear().toString() + "/" + (1 + dateF.getMonth()) + "/" + dateF.getDate() + " 10:00:00");
        var currentDate = new Date();
        if (currentDate.getTime() > date.getTime()) {
            return true;
        }
        return false;
    };
    HomePage.prototype.flagsF = function () {
        var _this = this;
        var aux = "";
        var promise = new Promise(function (resolve, reject) {
            if (_this._checkdayProvider.flag == 'E' || _this._checkdayProvider.flag == 'O' || _this._checkdayProvider.flag == 'R') {
                aux = 'S';
            }
            else if (_this._checkdayProvider.flag == 'B' || _this._checkdayProvider.flag == 'S') {
                aux = 'E';
            }
        });
        return aux;
    };
    HomePage.prototype.isCurrentDay = function () {
        var axu;
        if (this._checkdayProvider.day == this.time.getDate()) {
            axu = true;
        }
        else {
            axu = false;
        }
        console.log(axu);
        return axu;
    };
    HomePage.prototype.isOut = function () {
        return false;
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      CheckDay\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="container">\n    <h4 text-center class="title">Welcome</h4>\n    <h4 text-center class="title"> {{ _userProvider.name }} {{ _userProvider.lastname }}</h4>\n    <h3 text-center class="time">{{ today | date:\'dd MMMM yyyy\' }}</h3>\n    <h3 text-center class="time">{{ time | date:\'HH:mm:ss\'}}</h3>\n    <h3 text-center class="time">{{ auxdate }}</h3>\n  </div>\n  <ng-container [ngSwitch]="_flag">\n    <div *ngSwitchCase ="\'S\'">\n      <div  *ngIf="_isBefore">\n          <div class="form-container">\n            <span>Justifique la salida temprano.</span>\n            <ion-input type="text" class="txt-field" [(ngModel)]="subject" placeholder="Subject"></ion-input>\n            <ion-textarea  class="txt-area" [(ngModel)]="messsage" placeholder="Description"></ion-textarea>\n          </div>\n          <div class="button-container">\n            <button ion-button\n                    color="primary"\n                    class="btn-login"\n                    (click)="check_day(\'B\')"\n                    block>Salida </button>\n          </div>\n      </div>\n      <div *ngIf="_isBefore == false">\n        <div class="button-container">\n          <button ion-button\n                  color="primary"\n                  class="btn-login"\n                  (click)="check_day(\'S\')"\n                  block>Salida </button>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'E\'">\n      <div *ngIf="_isAfter">\n        <div class="form-container" *ngIf="!_isCurrentDay" >\n          <span>Justifique la llegada tarde.</span>\n          <ion-input type="text" class="txt-field" [(ngModel)]="subject" placeholder="Subject"></ion-input>\n          <ion-textarea  class="txt-area" [(ngModel)]="messsage" placeholder="Description"></ion-textarea>\n        </div>\n        <div class="button-container">\n          <button ion-button\n                  color="primary"\n                  class="btn-login"\n                  [disabled]="_isCurrentDay"\n                  (click)="check_day(\'R\')"\n                  block>Entrada</button>\n        </div>\n      </div>\n      <div *ngIf="_isAfter == false">\n        <div *ngIf="_isOut == true">\n          <span>Justifique estrada fuera de las instalaciones.</span>\n          <div class="form-container" *ngIf="!_isCurrentDay">\n            <ion-input type="text" class="txt-field" [(ngModel)]="subject" placeholder="Subject"></ion-input>\n            <ion-textarea  class="txt-area" [(ngModel)]="messsage" placeholder="Description"></ion-textarea>\n          </div>\n          <div class="button-container" *ngIf="_isAfter == false">\n            <button ion-button\n                    color="primary"\n                    class="btn-login"\n                    [disabled]="_isCurrentDay"\n                    (click)="check_day(\'O\')"\n                    block>Entrada</button>\n          </div>\n        </div>\n        <div class="" *ngIf="_isOut == false">\n          <div class="button-container" *ngIf="_isAfter == false">\n            <button ion-button\n                    color="primary"\n                    class="btn-login"\n                    [disabled]="isCurrentDay"\n                    (click)="check_day(\'E\')"\n                    block>Entrada</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchDefault>output2</div>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Desktop/Ionic/CheckDay/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_index_providers__["b" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_index_providers__["b" /* UserProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_index_providers__["a" /* CheckdayProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_index_providers__["a" /* CheckdayProvider */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var HomePage_1, _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_page_index__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, _userProvider) {
        var _this = this;
        this._userProvider = _userProvider;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            var promise = new Promise(function (resolver, reject) {
                if (_userProvider.validate_session()) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_page_index__["f" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_page_index__["d" /* LoginPage */];
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Desktop/Ionic/CheckDay/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/Desktop/Ionic/CheckDay/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(157);
/* unused harmony reexport LoginProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__user_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkday_checkday__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__checkday_checkday__["a"]; });



//# sourceMappingURL=index.providers.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(206);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__history_history__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_chart__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__chart_chart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users__ = __webpack_require__(210);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__users_users__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__save_screen_save_screen__ = __webpack_require__(211);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__save_screen_save_screen__["a"]; });







//# sourceMappingURL=page.index.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_url_services__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, alertCtrl, platform, storage, device) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.device = device;
        this.load_storage();
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.login_user = function (folio, password) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* URLSearchParams */]();
        var url = __WEBPACK_IMPORTED_MODULE_3__config_url_services__["a" /* URL_SERVICES */] + "/USER_/ValidateUser";
        data.append("FOLIO", folio);
        data.append("PASSWORD", password);
        if (this.platform.is("cordova")) {
            data.append("MACADDRESS_DEVICE", this.device.uuid);
            console.log(this.device.uuid);
        }
        else {
            data.append("MACADDRESS_DEVICE", '08-00-27-7f-6d-03');
        }
        return this.http.post(url, data)
            .map(function (resp) {
            var result = resp.json();
            console.log(result);
            if (result.error == true) {
                _this.alertCtrl.create({
                    title: "error",
                    subTitle: result.message,
                    buttons: ["ok"]
                }).present();
            }
            else {
                console.log(result.token);
                console.log(result.user_id);
                _this.token = result.token;
                _this.user_id = result.user_id;
                _this.name = result.name;
                _this.lastname = result.lastname;
                _this.area = result.area;
                _this.save_storage();
            }
        });
    };
    UserProvider.prototype.close_session = function () {
        this.token = null;
        this.user_id = null;
        this.name = null;
        this.lastname = null;
        this.area = null;
        //Save in storage
        this.save_storage();
    };
    UserProvider.prototype.save_storage = function () {
        if (this.platform.is("cordova")) {
            //Device
            this.storage.set('token', this.token);
            this.storage.set('user_id', this.user_id);
            this.storage.set('name', this.name);
            this.storage.set('lastname', this.lastname);
            this.storage.set('area', this.area);
        }
        else {
            if (this.token) {
                console.log(this.token);
                console.log(this.user_id);
                localStorage.setItem("token", this.token);
                localStorage.setItem("user_id", this.user_id);
                localStorage.setItem("name", this.name);
                localStorage.setItem("lastname", this.lastname);
                localStorage.setItem("area", this.area);
            }
            else {
                localStorage.removeItem("token");
                localStorage.removeItem("user_id");
                localStorage.removeItem("name");
                localStorage.removeItem("lastname");
                localStorage.removeItem("area");
            }
        }
    };
    UserProvider.prototype.load_storage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                //Device
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get("token")
                        .then(function (token) {
                        if (token) {
                            _this.token = token;
                            console.log("Token: " + token);
                        }
                    });
                    _this.storage.get("user_id")
                        .then(function (user_id) {
                        if (user_id) {
                            _this.user_id = user_id;
                            console.log("user_id" + _this.user_id);
                        }
                    });
                    _this.storage.get("name")
                        .then(function (name) {
                        if (name) {
                            _this.name = name;
                        }
                    });
                    _this.storage.get("lastname")
                        .then(function (lastname) {
                        if (lastname) {
                            _this.lastname = lastname;
                        }
                    });
                    _this.storage.get("area")
                        .then(function (area) {
                        if (area) {
                            _this.area = area;
                        }
                    });
                    resolve();
                });
            }
            else {
                // Browser
                if (localStorage.getItem("token")) {
                    _this.token = localStorage.getItem("token");
                    _this.user_id = localStorage.getItem("user_id");
                    _this.name = localStorage.getItem("name");
                    _this.lastname = localStorage.getItem("lastname");
                    _this.area = localStorage.getItem("area");
                    console.log("Browser: " + _this.user_id + " : " + _this.token);
                }
            }
        });
    };
    UserProvider.prototype.validate_session = function () {
        if (this.token && this.user_id) {
            return true;
        }
        else {
            return false;
        }
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map