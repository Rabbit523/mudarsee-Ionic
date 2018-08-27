webpackJsonp([34],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CasePipe = /** @class */ (function () {
    function CasePipe() {
    }
    CasePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var frags = value.split('_');
        for (var i = 0; i < frags.length; i++) {
            frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    };
    CasePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'case',
        })
    ], CasePipe);
    return CasePipe;
}());

//# sourceMappingURL=case.js.map

/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AgeFilter = /** @class */ (function () {
    function AgeFilter() {
    }
    AgeFilter.prototype.transform = function (value, args) {
        var age = this.calculateAge(value);
        if (age == 0)
            return this.monthDiff(value, new Date()) + ' months';
        return age;
    };
    AgeFilter.prototype.calculateAge = function (birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    AgeFilter.prototype.monthDiff = function (d1, d2) {
        if (d1 < d2) {
            var months = d2.getMonth() - d1.getMonth();
            return months <= 0 ? 0 : months;
        }
        return 0;
    };
    AgeFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'age-filter',
        })
    ], AgeFilter);
    return AgeFilter;
}());

//# sourceMappingURL=age-filter.js.map

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 377,
	"./af.js": 377,
	"./ar": 378,
	"./ar-dz": 379,
	"./ar-dz.js": 379,
	"./ar-kw": 380,
	"./ar-kw.js": 380,
	"./ar-ly": 381,
	"./ar-ly.js": 381,
	"./ar-ma": 382,
	"./ar-ma.js": 382,
	"./ar-sa": 383,
	"./ar-sa.js": 383,
	"./ar-tn": 384,
	"./ar-tn.js": 384,
	"./ar.js": 378,
	"./az": 385,
	"./az.js": 385,
	"./be": 386,
	"./be.js": 386,
	"./bg": 387,
	"./bg.js": 387,
	"./bm": 388,
	"./bm.js": 388,
	"./bn": 389,
	"./bn.js": 389,
	"./bo": 390,
	"./bo.js": 390,
	"./br": 391,
	"./br.js": 391,
	"./bs": 392,
	"./bs.js": 392,
	"./ca": 393,
	"./ca.js": 393,
	"./cs": 394,
	"./cs.js": 394,
	"./cv": 395,
	"./cv.js": 395,
	"./cy": 396,
	"./cy.js": 396,
	"./da": 397,
	"./da.js": 397,
	"./de": 398,
	"./de-at": 399,
	"./de-at.js": 399,
	"./de-ch": 400,
	"./de-ch.js": 400,
	"./de.js": 398,
	"./dv": 401,
	"./dv.js": 401,
	"./el": 402,
	"./el.js": 402,
	"./en-au": 403,
	"./en-au.js": 403,
	"./en-ca": 404,
	"./en-ca.js": 404,
	"./en-gb": 405,
	"./en-gb.js": 405,
	"./en-ie": 406,
	"./en-ie.js": 406,
	"./en-il": 407,
	"./en-il.js": 407,
	"./en-nz": 408,
	"./en-nz.js": 408,
	"./eo": 409,
	"./eo.js": 409,
	"./es": 410,
	"./es-do": 411,
	"./es-do.js": 411,
	"./es-us": 412,
	"./es-us.js": 412,
	"./es.js": 410,
	"./et": 413,
	"./et.js": 413,
	"./eu": 414,
	"./eu.js": 414,
	"./fa": 415,
	"./fa.js": 415,
	"./fi": 416,
	"./fi.js": 416,
	"./fo": 417,
	"./fo.js": 417,
	"./fr": 418,
	"./fr-ca": 419,
	"./fr-ca.js": 419,
	"./fr-ch": 420,
	"./fr-ch.js": 420,
	"./fr.js": 418,
	"./fy": 421,
	"./fy.js": 421,
	"./gd": 422,
	"./gd.js": 422,
	"./gl": 423,
	"./gl.js": 423,
	"./gom-latn": 424,
	"./gom-latn.js": 424,
	"./gu": 425,
	"./gu.js": 425,
	"./he": 426,
	"./he.js": 426,
	"./hi": 427,
	"./hi.js": 427,
	"./hr": 428,
	"./hr.js": 428,
	"./hu": 429,
	"./hu.js": 429,
	"./hy-am": 430,
	"./hy-am.js": 430,
	"./id": 431,
	"./id.js": 431,
	"./is": 432,
	"./is.js": 432,
	"./it": 433,
	"./it.js": 433,
	"./ja": 434,
	"./ja.js": 434,
	"./jv": 435,
	"./jv.js": 435,
	"./ka": 436,
	"./ka.js": 436,
	"./kk": 437,
	"./kk.js": 437,
	"./km": 438,
	"./km.js": 438,
	"./kn": 439,
	"./kn.js": 439,
	"./ko": 440,
	"./ko.js": 440,
	"./ky": 441,
	"./ky.js": 441,
	"./lb": 442,
	"./lb.js": 442,
	"./lo": 443,
	"./lo.js": 443,
	"./lt": 444,
	"./lt.js": 444,
	"./lv": 445,
	"./lv.js": 445,
	"./me": 446,
	"./me.js": 446,
	"./mi": 447,
	"./mi.js": 447,
	"./mk": 448,
	"./mk.js": 448,
	"./ml": 449,
	"./ml.js": 449,
	"./mn": 450,
	"./mn.js": 450,
	"./mr": 451,
	"./mr.js": 451,
	"./ms": 452,
	"./ms-my": 453,
	"./ms-my.js": 453,
	"./ms.js": 452,
	"./mt": 454,
	"./mt.js": 454,
	"./my": 455,
	"./my.js": 455,
	"./nb": 456,
	"./nb.js": 456,
	"./ne": 457,
	"./ne.js": 457,
	"./nl": 458,
	"./nl-be": 459,
	"./nl-be.js": 459,
	"./nl.js": 458,
	"./nn": 460,
	"./nn.js": 460,
	"./pa-in": 461,
	"./pa-in.js": 461,
	"./pl": 462,
	"./pl.js": 462,
	"./pt": 463,
	"./pt-br": 464,
	"./pt-br.js": 464,
	"./pt.js": 463,
	"./ro": 465,
	"./ro.js": 465,
	"./ru": 466,
	"./ru.js": 466,
	"./sd": 467,
	"./sd.js": 467,
	"./se": 468,
	"./se.js": 468,
	"./si": 469,
	"./si.js": 469,
	"./sk": 470,
	"./sk.js": 470,
	"./sl": 471,
	"./sl.js": 471,
	"./sq": 472,
	"./sq.js": 472,
	"./sr": 473,
	"./sr-cyrl": 474,
	"./sr-cyrl.js": 474,
	"./sr.js": 473,
	"./ss": 475,
	"./ss.js": 475,
	"./sv": 476,
	"./sv.js": 476,
	"./sw": 477,
	"./sw.js": 477,
	"./ta": 478,
	"./ta.js": 478,
	"./te": 479,
	"./te.js": 479,
	"./tet": 480,
	"./tet.js": 480,
	"./tg": 481,
	"./tg.js": 481,
	"./th": 482,
	"./th.js": 482,
	"./tl-ph": 483,
	"./tl-ph.js": 483,
	"./tlh": 484,
	"./tlh.js": 484,
	"./tr": 485,
	"./tr.js": 485,
	"./tzl": 486,
	"./tzl.js": 486,
	"./tzm": 487,
	"./tzm-latn": 488,
	"./tzm-latn.js": 488,
	"./tzm.js": 487,
	"./ug-cn": 489,
	"./ug-cn.js": 489,
	"./uk": 490,
	"./uk.js": 490,
	"./ur": 491,
	"./ur.js": 491,
	"./uz": 492,
	"./uz-latn": 493,
	"./uz-latn.js": 493,
	"./uz.js": 492,
	"./vi": 494,
	"./vi.js": 494,
	"./x-pseudo": 495,
	"./x-pseudo.js": 495,
	"./yo": 496,
	"./yo.js": 496,
	"./zh-cn": 497,
	"./zh-cn.js": 497,
	"./zh-hk": 498,
	"./zh-hk.js": 498,
	"./zh-tw": 499,
	"./zh-tw.js": 499
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1027;

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booking_details_booking_details__ = __webpack_require__(686);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookingPage = /** @class */ (function () {
    function BookingPage(navCtrl, navParams, httpService, serviceName, globalMethods, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.alertCtrl = alertCtrl;
        this.bookings = [];
        this.filteredBookings = [];
        this.userDetails = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.showLoadMore = true;
        this.bookings = [];
        this.bookings_temp = [];
        this.filteredBookings = [];
        this.bookings_type = this.navParams.data.booking_type;
        this.bookingFilter = this.navParams.data.booking_type;
    }
    BookingPage.prototype.ionViewDidLoad = function () {
        this.getBookings('');
    };
    BookingPage.prototype.getBookings = function (infiniteScroll) {
        var _this = this;
        var params = {
            user_id: this.userDetails.id,
            from_limit: this.bookings.length,
            type: this.bookings_type
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getBookings, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var value = _a[_i];
                    _this.bookings.push(value);
                    _this.filteredBookings.push(value);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    BookingPage.prototype.openBookingDetails = function (booking) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__booking_details_booking_details__["a" /* BookingDetailsPage */], { selectedBooking: booking });
    };
    BookingPage.prototype.editBooking = function (booking) {
    };
    BookingPage.prototype.changeStatus = function (booking) {
    };
    BookingPage.prototype.filterByStatus = function () {
        this.filteredBookings = [];
        if (this.bookingFilter != 'all') {
            this.bookings_temp = this.bookings.slice();
            this.bookings = [];
            this.getBookings('');
        }
        else {
            this.bookings = this.bookings_temp;
            this.filteredBookings = this.bookings;
        }
    };
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-booking',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\booking\booking.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_booking.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-item no-lines>\n\n      <ion-icon name="color-fill" item-left color="stable"></ion-icon>\n\n      <ion-label>{{\'stu_booking.filter\'|translate}}</ion-label>\n\n      <ion-select [(ngModel)]="bookingFilter" (ionChange)="filterByStatus()">\n\n        <ion-option value="all">{{\'stu_booking.all\'|translate}}All</ion-option>\n\n        <ion-option value="pending">{{\'stu_booking.pending\'|translate}}</ion-option>\n\n        <ion-option value="approved">{{\'stu_booking.approve\'|translate}}</ion-option>\n\n        <ion-option value="session_initiated">{{\'stu_booking.session\'|translate}}</ion-option>\n\n        <ion-option value="running">{{\'stu_booking.run\'|translate}}</ion-option>\n\n        <ion-option value="completed">{{\'stu_booking.complete\'|translate}}</ion-option>\n\n        <ion-option value="called_for_admin_intervention ">{{\'stu_booking.claim\'|translate}}</ion-option>\n\n        <ion-option value="closed">{{\'stu_booking.close\'|translate}} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let booking of filteredBookings">\n\n      <div (click)="openBookingDetails(booking)">\n\n        <h2>{{booking.student_name}}</h2>\n\n        <p>{{booking.course_name}}</p>\n\n        <p><span><ion-icon name="calendar"></ion-icon> {{booking.start_date}}</span>\n\n          <span> <ion-icon name="time"></ion-icon> {{booking.duration_value}} {{booking.duration_type}}</span></p>\n\n        <p><small>{{booking.status | case}}</small></p>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n  <p padding *ngIf="filteredBookings.length==0">{{\'stu_booking.available\'|translate}}</p>\n\n  <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getBookings($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\booking\booking.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_details_contact_details__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyAddressPage = /** @class */ (function () {
    function MyAddressPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.user = {
            photo: this.globalMethods.userType('photo')
        };
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
        this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
    }
    MyAddressPage.prototype.ionViewDidLoad = function () { };
    MyAddressPage.prototype.editAddressDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_details_contact_details__["a" /* ContactDetailsPage */]);
    };
    MyAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-address',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\my-address\my-address.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n   \n\n    <ion-title>{{\'my_address.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div header-profile text-center>\n\n    <div class="user-img"><img src="{{user.photo}}" alt="Profile Picture"></div>\n\n    <div class="user-details">\n\n      <h3>{{userData.username}}</h3>\n\n      <p><span>{{\'my_address.net\'|translate}}: {{userData.net_credits}}</span><span>{{\'my_address.per\'|translate}}: {{currency_symbol}}{{per_credit_value}}</span></p>\n\n    </div>\n\n  </div>\n\n  <ion-list contact-list>\n\n    <ion-item-divider color="right">{{\'my_address.title\'|translate}}<button ion-button clear right (click)="editAddressDetails()">\n\n      <ion-icon class="tuts-edit2"></ion-icon></button> </ion-item-divider>\n\n      <ion-item>\n\n        <h4>{{\'my_address.address\'|translate}}:</h4>\n\n        <p *ngIf="userData.city!=\'\'">{{userData.city}}</p>\n\n        <p *ngIf="userData.land_mark!=\'\'">{{userData.land_mark}}</p>\n\n        <p *ngIf="userData.country!=\'\'">{{userData.country}}</p>\n\n        <p *ngIf="userData.pin_code">{{userData.pin_code}}</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h4>{{\'my_address.info\'|translate}}:</h4>\n\n        <p *ngIf="userData.phone!=\'\'">{{\'my_address.mobile\'|translate}}: {{userData.phone_code}} {{userData.phone}}</p>\n\n        <p>{{\'my_address.email\'|translate}}: {{userData.email}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\my-address\my-address.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], MyAddressPage);
    return MyAddressPage;
}());

//# sourceMappingURL=my-address.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StuChatPage = /** @class */ (function () {
    function StuChatPage(navCtrl, params, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.sender = {};
        this.receiver = {};
        this.chat = {
            message: ''
        };
        this.showLoadMore = false;
        this.update = {
            status: '',
            count: this.params.data.receiver.messages_count,
            from_id: this.params.data.receiver.tutor_id,
            chat_members: this.params.data.chat_members,
            dashboard_data_dasboardDetials: this.params.data.dashboard_data_dasboardDetials
        };
        this.callback = this.params.get("callback");
    }
    StuChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpService.cacheClearAll();
        if (this.globalMethods.userType('user_belongs_group') == this.serviceName.student) {
            if (this.params.data.receiver.tutor_photo == '' || this.params.data.receiver.tutor_photo == null) {
                this.receiver.imageFullUrl = this.serviceName.default_pictureImage;
            }
            else {
                this.receiver.imageFullUrl = this.serviceName.profileUrl + this.params.data.receiver.tutor_photo;
            }
            this.receiver.name = this.params.data.receiver.tutor_name;
            this.receiver.device_id = this.params.data.receiver.device_id;
            this.receiver.course_name = this.params.data.receiver.course_name;
            this.receiver.user_id = this.params.data.receiver.tutor_id;
        }
        else {
        }
        if (this.globalMethods.userType('photo') == '' || this.globalMethods.userType('photo') == null) {
            this.sender.imageFullUrl = this.serviceName.default_pictureImage;
        }
        else {
            this.sender.imageFullUrl = this.globalMethods.userType('photo');
        }
        this.sender.name = this.globalMethods.userType('username');
        this.sender.device_id = this.globalMethods.getter(this.serviceName.oneSignalId);
        this.sender.user_id = this.globalMethods.userType('id');
        this.messages = [];
        this.chat_filtered = [];
        this.added_history_chat = [];
        this.getChatHistory('');
        this.navBar.backButtonClick = function (e) {
            _this.callback(_this.update).then(function () {
                _this.navCtrl.pop();
            });
        };
    };
    StuChatPage.prototype.upgdateStatus = function () {
        var _this = this;
        var params = {
            student_id: this.sender.user_id,
            tutor_id: this.receiver.user_id,
            type: 'student'
        };
        this.httpService.httpServicePost(this.serviceName.update_chat_status, params).subscribe(function (data) {
            _this.update.status = 'success';
            _this.update.count = 0;
        }, function (error) {
            _this.update.status = 'fail';
        });
    };
    StuChatPage.prototype.sendMessage = function (msg) {
        var _this = this;
        // sender
        var params = {
            sender_id: this.sender.user_id,
            reciever_id: this.receiver.user_id,
            message: this.chat.message,
            device_id: this.receiver.device_id,
            type: 'student'
        };
        this.chat.message = '';
        var sending = {
            id: "",
            from_id: this.sender.user_id,
            to_id: this.receiver.device_id,
            message: msg,
            datetime: "Now",
            position: "right",
            img: this.sender.imageFullUrl,
        };
        this.chat_filtered.push(sending);
        this.added_history_chat.push(sending);
        var self = this;
        setTimeout(function () {
            self.content.scrollToBottom();
        }, 100);
        this.httpService.httpServicePost(this.serviceName.message_send, params).subscribe(function (data) {
            _this.chat_filtered[_this.chat_filtered.length - 1].id = data[0].data[0].id;
            _this.chat_filtered[_this.chat_filtered.length - 1].datetime = data[0].data[0].datetime;
            _this.added_history_chat[_this.added_history_chat.length - 1].id = data[0].data[0].id;
            _this.added_history_chat[_this.added_history_chat.length - 1].datetime = data[0].data[0].datetime;
        }, function (error) {
        });
    };
    StuChatPage.prototype.getChatHistory = function (infiniteScroll) {
        var _this = this;
        var params = {
            sender_id: this.receiver.user_id,
            reciever_id: this.sender.user_id,
            cache: 0,
            from_limit: this.messages.length,
            to_limit: 10
        };
        this.httpService.httpServicePost(this.serviceName.chat_history_get, params).subscribe(function (data) {
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                var i = 0;
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var message = _a[_i];
                    i++;
                    if (message.from_id == _this.sender.user_id) {
                        message['position'] = 'right';
                        message['img'] = _this.sender.imageFullUrl;
                    }
                    else {
                        message['position'] = 'left';
                        message['img'] = _this.receiver.imageFullUrl;
                    }
                    _this.messages.push(message);
                    _this.chat_filtered = _this.messages.slice();
                    _this.chat_filtered.reverse();
                    if (i == data[0].data.length && _this.added_history_chat.length > 0) {
                        for (var _b = 0, _c = _this.added_history_chat; _b < _c.length; _b++) {
                            var que = _c[_b];
                            _this.chat_filtered.push(que);
                        }
                    }
                }
                var self_1 = _this;
                setTimeout(function () {
                    if (infiniteScroll == '') {
                        self_1.content.scrollToBottom();
                        self_1.enableLoadMore();
                    }
                }, 100);
                _this.upgdateStatus();
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) { });
    };
    StuChatPage.prototype.enableLoadMore = function () {
        var self = this;
        setTimeout(function () {
            self.showLoadMore = true;
        }, 300);
    };
    StuChatPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var params = {
            sender_id: this.receiver.user_id,
            reciever_id: this.sender.user_id,
            cache: 0,
            message_id: this.messages[this.messages.length - 1].id,
            limit: 20
        };
        this.httpService.httpServicePost(this.serviceName.chat_history_get, params).subscribe(function (data) {
            if (data[0].data.length != 0) {
                infiniteScroll.enable(true);
                _this.showLoadMore = true;
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var news = _a[_i];
                    _this.messages.push(news);
                    _this.chat_filtered = _this.messages.slice();
                }
            }
            else {
                infiniteScroll.complete();
                _this.showLoadMore = false;
                infiniteScroll.enable(false);
            }
        }, function (error) {
        }, function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], StuChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], StuChatPage.prototype, "navBar", void 0);
    StuChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stu-chat',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-chat\stu-chat.html"*/'<ion-header no-shadow>\n\n    <ion-navbar color="light">\n\n     <ion-list no-lines>\n\n        <ion-item color="light" class="chat_profile_header">\n\n            <ion-avatar avatar-small item-left> <img [src]="receiver.imageFullUrl"> </ion-avatar>\n\n            <h2 text-large>{{receiver.name}}</h2>\n\n            <p>{{receiver.course_name}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div *ngFor="let msg of chat_filtered">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <div class="chatBubble">\n\n                        <div class="chat-bubble {{msg.position}}">\n\n                            <img class="profile-pic {{msg.position}}" src="{{msg.img}}">\n\n                            <div class="message">{{msg.message}}</div>\n\n                            <div class="message-detail">\n\n                               <span class="time" *ngIf="msg.id==\'\'">{{msg.datetime}}</span>\n\n                               <span class="time" *ngIf="msg.id!=\'\'">{{msg.datetime}}</span> \n\n                               <ion-spinner *ngIf="msg.id==\'\'" color="light" name="dots"></ion-spinner>\n\n                           </div>\n\n                       </div>\n\n                   </div>\n\n               </ion-col>\n\n           </ion-row>    \n\n       </ion-grid>    \n\n   </div>\n\n   <ion-infinite-scroll position="top" *ngIf="showLoadMore==true" (ionInfinite)="getChatHistory($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n</ion-infinite-scroll> \n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-textarea placeholder="{{\'stu_chat.placeholder\'|translate}}" [(ngModel)]="chat.message"></ion-textarea>\n\n        <ion-buttons end>\n\n            <button ion-button color="success" class="button-xl" (click)="sendMessage(chat.message)" [attr.disabled] = "chat.message.length!=0? null :\'true\'">\n\n                <ion-icon name="send"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-chat\stu-chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], StuChatPage);
    return StuChatPage;
}());

//# sourceMappingURL=stu-chat.js.map

/***/ }),

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadsFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadsFilterPage = /** @class */ (function () {
    function LeadsFilterPage(navCtrl, navParams, httpService, globalMethods, serviceName, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.viewCtrl = viewCtrl;
        this.filterTutors = "course";
        this.cse = [];
        this.locat = [];
        this.teachingType = [];
        this.courses = [];
        this.locations = [];
        this.teaching_types = [];
    }
    LeadsFilterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.leads_filter_data, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.courses = data[0].data.course_opts;
            _this.locations = data[0].data.location_opts;
            _this.teaching_types = data[0].data.teaching_type_opts;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    LeadsFilterPage.prototype.updateCheckedOptions = function (chBox, event) {
        var cbIdx = this.courses.indexOf(chBox);
        if (event.target.checked) {
            if (cbIdx < 0) {
                this.cse.push(chBox);
            }
        }
        else {
            if (cbIdx >= 0) {
                this.cse.splice(cbIdx, 1);
            }
        }
    };
    LeadsFilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LeadsFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-leads-filter',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\leads-filter\leads-filter.html"*/'<ion-header>\n\n  <ion-toolbar color="white">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{\'stu_lead_details.filter\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="dismiss()" color="secondary">\n\n        <ion-icon class="ion-md-checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  <ion-toolbar no-border-top color="white">\n\n    <ion-segment [(ngModel)]="filterTutors">\n\n      <ion-segment-button value="course"> {{\'stu_lead_details.course\'|translate}} </ion-segment-button>\n\n      <ion-segment-button value="location"> {{\'stu_lead_details.loc\'|translate}} </ion-segment-button>\n\n      <ion-segment-button value="teachingType">{{\'stu_lead_details.type\'|translate}} </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n  <ion-toolbar color="white">\n\n    <ion-searchbar [(ngModel)]="term"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div [ngSwitch]="filterTutors">\n\n    <ion-list *ngSwitchCase="\'course\'">\n\n      <ion-item *ngFor="let course of courses | filter:term">\n\n        <ion-label>{{course.name}}</ion-label>\n\n        <ion-checkbox value="course.slug" (change)="updateCheckedOptions(course.slug, $event)" [(ngModel)]="cse[course.slug]"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'location\'">\n\n      <ion-item *ngFor="let location of locations | filter:term ">\n\n        <ion-label>{{location.name}}</ion-label>\n\n        <ion-checkbox [(ngModel)]="locat[location.slug]"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'teachingType\'">\n\n      <ion-item *ngFor="let type of teaching_types | filter:term ">\n\n        <ion-label>{{type.name}}</ion-label>\n\n        <ion-checkbox ng-value="type.slug" [(ngModel)]="teachingType[type.slug]"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\leads-filter\leads-filter.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], LeadsFilterPage);
    return LeadsFilterPage;
}());

//# sourceMappingURL=leads-filter.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuQuestionAnswerConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StuQuestionAnswerConversationPage = /** @class */ (function () {
    function StuQuestionAnswerConversationPage(navCtrl, params, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.sender = {};
        this.receiver = {};
        this.question = {};
        this.questionAnswer = { message: '' };
        this.added_history_conversation = [];
        this.showLoadMoreQuestions_conversation = false;
    }
    StuQuestionAnswerConversationPage.prototype.ionViewDidLoad = function () {
        this.httpService.cacheClearAll();
        this.question = this.params.data.question;
        this.receiver = this.params.data.receiver;
        this.sender = this.params.data.sender;
        this.added_history_conversation = [];
        this.getQuestionConversation('', this.question);
    };
    StuQuestionAnswerConversationPage.prototype.getQuestionConversation = function (infiniteScroll, question) {
        var _this = this;
        var params = {
            question_id: question.question_id,
            from_limit: question.questionConversation.length,
            to_limit: 10
        };
        this.httpService.httpServicePost(this.serviceName.question_conversation_get, params).subscribe(function (data) {
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMoreQuestions_conversation = true;
                }
                var i = 0;
                var _loop_1 = function (message) {
                    i++;
                    if (message.from_id == _this.sender.user_id) {
                        message['position'] = 'right';
                        message['img'] = _this.sender.imageFullUrl;
                    }
                    else {
                        message['position'] = 'left';
                        message['img'] = _this.receiver.imageFullUrl;
                    }
                    question.questionConversation.push(message);
                    question.questionConversation_filtered = question.questionConversation.slice();
                    question.questionConversation_filtered.reverse();
                    if (i == data[0].data.length && _this.added_history_conversation.length > 0) {
                        for (var _i = 0, _a = _this.added_history_conversation; _i < _a.length; _i++) {
                            var que = _a[_i];
                            question.questionConversation_filtered.push(que);
                        }
                    }
                    var self_1 = _this;
                    setTimeout(function () {
                        if (infiniteScroll == '') {
                            self_1.content.scrollToBottom();
                            self_1.enableLoadMore();
                        }
                    }, 100);
                };
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var message = _a[_i];
                    _loop_1(message);
                }
                _this.upgdateStatus();
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMoreQuestions_conversation = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
        });
    };
    StuQuestionAnswerConversationPage.prototype.upgdateStatus = function () {
        var params = {
            question_id: this.question.question_id,
            student_id: this.globalMethods.userType('id'),
            tutor_id: this.receiver.user_id,
            type: 'student'
        };
        this.httpService.httpServicePost(this.serviceName.update_answer_status, params).subscribe(function (data) {
        }, function (error) {
        });
    };
    StuQuestionAnswerConversationPage.prototype.replyMessage = function (question, msg) {
        var _this = this;
        var params = {
            question_id: question.question_id,
            sender_id: this.sender.user_id,
            receiver_id: this.receiver.user_id,
            message: msg,
            device_id: this.receiver.device_id,
            type: "student"
        };
        var sending = {
            "answer_id": '',
            "question_id": '',
            "from_id": this.sender.user_id,
            "to_id": this.receiver.user_id,
            "message": msg,
            "datetime": "Now",
            "img": this.sender.imageFullUrl,
            "position": 'right'
        };
        question.questionConversation_filtered.push(sending);
        this.added_history_conversation.push(sending);
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.answer_to_question, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.questionAnswer.message = '';
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].answer_id = data[0].data[0].answer_id;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].question_id = data[0].data[0].question_id;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].from_id = data[0].data[0].from_id;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].to_id = data[0].data[0].to_id;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].message = data[0].data[0].message;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].datetime = data[0].data[0].datetime;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].img = _this.sender.imageFullUrl;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].position = 'right';
            _this.added_history_conversation[_this.added_history_conversation.length - 1].answer_id = data[0].data[0].answer_id;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].question_id = data[0].data[0].question_id;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].from_id = data[0].data[0].from_id;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].to_id = data[0].data[0].to_id;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].message = data[0].data[0].message;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].datetime = data[0].data[0].datetime;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].img = _this.sender.imageFullUrl;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].position = 'right';
            var self = _this;
            setTimeout(function () {
                self.content.scrollToBottom();
            }, 100);
        }, function (error) {
            _this.globalMethods.loaderStop();
        });
    };
    StuQuestionAnswerConversationPage.prototype.enableLoadMore = function () {
        var self = this;
        setTimeout(function () {
            self.showLoadMoreQuestions_conversation = true;
        }, 300);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], StuQuestionAnswerConversationPage.prototype, "content", void 0);
    StuQuestionAnswerConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stu-question-answer-conversation',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-question-answer-conversation\stu-question-answer-conversation.html"*/'<ion-header no-shadow>\n\n    <ion-navbar color="light">\n\n        <ion-title>{{question.question_text}}</ion-title>\n\n    </ion-navbar> \n\n</ion-header>\n\n<ion-content padding>\n\n    <div *ngFor="let conversation of question.questionConversation_filtered">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <div class="chatBubble">\n\n                        <div class="chat-bubble {{conversation.position}}">\n\n                            <img class="profile-pic {{conversation.position}}" src="{{conversation.img}}">\n\n                            <div class="message">{{conversation.message}}</div>\n\n                            <div class="message-detail">\n\n                               <span class="time" *ngIf="conversation.id==\'\'">{{conversation.datetime}}</span>\n\n                               <span class="time" *ngIf="conversation.id!=\'\'">{{conversation.datetime}}</span> \n\n                               <ion-spinner *ngIf="conversation.id==\'\'" color="light" name="dots"></ion-spinner>\n\n                           </div>\n\n                       </div>\n\n                   </div>\n\n               </ion-col>\n\n           </ion-row>    \n\n       </ion-grid>    \n\n   </div>\n\n    <p padding *ngIf="question.questionConversation_filtered==\'\'">No Answers Available</p>\n\n    <ion-infinite-scroll position="top" *ngIf="showLoadMoreQuestions_conversation==true" (ionInfinite)="getQuestionConversation($event,question)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-textarea placeholder="Type message..." [(ngModel)]="questionAnswer.message"></ion-textarea>\n\n        <ion-buttons end>\n\n            <button ion-button color="success" class="button-xl" (click)="replyMessage(question,questionAnswer.message)" [attr.disabled]="questionAnswer.message.length!=0? null :\'true\'">\n\n                <ion-icon name="send"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-question-answer-conversation\stu-question-answer-conversation.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], StuQuestionAnswerConversationPage);
    return StuQuestionAnswerConversationPage;
}());

//# sourceMappingURL=stu-question-answer-conversation.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, params, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.sender = {};
        this.receiver = {};
        this.chat = {
            message: ''
        };
        this.update = {
            status: '',
            count: this.params.data.receiver.messages_count,
            from_id: this.params.data.receiver.student_id,
            chat_members: this.params.data.chat_members,
            dashboard_data_dasboardDetials: this.params.data.dashboard_data_dasboardDetials
        };
        this.showLoadMore = false;
        this.callback = this.params.get("callback");
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpService.cacheClearAll();
        if (this.globalMethods.userType('user_belongs_group') == this.serviceName.tutor) {
            if (this.params.data.receiver.student_photo == '' || this.params.data.receiver.student_photo == null) {
                this.receiver.imageFullUrl = this.serviceName.default_pictureImage;
            }
            else {
                this.receiver.imageFullUrl = this.serviceName.profileUrl + this.params.data.receiver.student_photo;
            }
            this.receiver.name = this.params.data.receiver.student_name;
            this.receiver.device_id = this.params.data.receiver.device_id;
            this.receiver.course_name = this.params.data.receiver.course_name;
            this.receiver.user_id = this.params.data.receiver.student_id;
        }
        else {
        }
        if (this.globalMethods.userType('photo') == '' || this.globalMethods.userType('photo') == null) {
            this.sender.imageFullUrl = this.serviceName.default_pictureImage;
        }
        else {
            this.sender.imageFullUrl = this.globalMethods.userType('photo');
        }
        this.sender.name = this.globalMethods.userType('username');
        this.sender.device_id = this.globalMethods.userType('device_id');
        this.sender.user_id = this.globalMethods.userType('id');
        this.messages = [];
        this.chat_filtered = [];
        this.added_history_chat = [];
        this.getChatHistory('');
        this.navBar.backButtonClick = function (e) {
            _this.callback(_this.update).then(function () {
                _this.navCtrl.pop();
            });
        };
    };
    ChatPage.prototype.sendMessage = function (msg) {
        var _this = this;
        // sender
        var params = {
            sender_id: this.sender.user_id,
            reciever_id: this.receiver.user_id,
            message: this.chat.message,
            device_id: this.receiver.device_id,
            type: 'tutor'
        };
        this.chat.message = '';
        var sending = {
            id: "",
            from_id: this.sender.user_id,
            to_id: this.receiver.device_id,
            message: msg,
            datetime: "Now",
            position: "right",
            img: this.sender.imageFullUrl,
        };
        this.chat_filtered.push(sending);
        this.added_history_chat.push(sending);
        var self = this;
        setTimeout(function () {
            self.content.scrollToBottom();
        }, 100);
        this.httpService.httpServicePost(this.serviceName.message_send, params).subscribe(function (data) {
            _this.chat_filtered[_this.chat_filtered.length - 1].id = data[0].data[0].id;
            _this.chat_filtered[_this.chat_filtered.length - 1].datetime = data[0].data[0].datetime;
            _this.added_history_chat[_this.added_history_chat.length - 1].id = data[0].data[0].id;
            _this.added_history_chat[_this.added_history_chat.length - 1].datetime = data[0].data[0].datetime;
        }, function (error) {
        });
    };
    ChatPage.prototype.upgdateStatus = function () {
        var _this = this;
        var params = {
            tutor_id: this.sender.user_id,
            student_id: this.receiver.user_id,
            type: 'tutor'
        };
        var self = this;
        this.httpService.httpServicePost(this.serviceName.update_chat_status, params).subscribe(function (data) {
            _this.update.status = 'success';
            _this.update.count = 0;
        }, function (error) {
            _this.update.status = 'fail';
        });
    };
    ChatPage.prototype.getChatHistory = function (infiniteScroll) {
        var _this = this;
        var params = {
            sender_id: this.receiver.user_id,
            reciever_id: this.sender.user_id,
            cache: 0,
            from_limit: this.messages.length,
            to_limit: 10
        };
        this.httpService.httpServicePost(this.serviceName.chat_history_get, params).subscribe(function (data) {
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                var i = 0;
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var message = _a[_i];
                    i++;
                    if (message.from_id == _this.sender.user_id) {
                        message['position'] = 'right';
                        message['img'] = _this.sender.imageFullUrl;
                    }
                    else {
                        message['position'] = 'left';
                        message['img'] = _this.receiver.imageFullUrl;
                    }
                    _this.messages.push(message);
                    _this.chat_filtered = _this.messages.slice();
                    _this.chat_filtered.reverse();
                    if (i == data[0].data.length && _this.added_history_chat.length > 0) {
                        for (var _b = 0, _c = _this.added_history_chat; _b < _c.length; _b++) {
                            var que = _c[_b];
                            _this.chat_filtered.push(que);
                        }
                    }
                }
                var self_1 = _this;
                setTimeout(function () {
                    if (infiniteScroll == '') {
                        self_1.content.scrollToBottom();
                        self_1.enableLoadMore();
                    }
                }, 100);
                _this.upgdateStatus();
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
        });
    };
    ChatPage.prototype.enableLoadMore = function () {
        var self = this;
        setTimeout(function () {
            self.showLoadMore = true;
        }, 300);
    };
    ChatPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var params = {
            sender_id: this.receiver.user_id,
            reciever_id: this.sender.user_id,
            cache: 0,
            message_id: this.messages[this.messages.length - 1].id,
            limit: 20
        };
        this.httpService.httpServicePost(this.serviceName.chat_history_get, params).subscribe(function (data) {
            if (data[0].data.length != 0) {
                infiniteScroll.enable(true);
                _this.showLoadMore = true;
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var news = _a[_i];
                    _this.messages.push(news);
                    _this.chat_filtered = _this.messages.slice();
                }
            }
            else {
                infiniteScroll.complete();
                _this.showLoadMore = false;
                infiniteScroll.enable(false);
            }
        }, function (error) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], ChatPage.prototype, "navBar", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\chat\chat.html"*/'<ion-header no-shadow>\n\n  <ion-navbar color="light">\n\n    <ion-list no-lines>\n\n      <ion-item color="light" class="chat_profile_header">\n\n        <ion-avatar avatar-small item-left> <img [src]="receiver.imageFullUrl"> </ion-avatar>\n\n        <h2 text-large>{{receiver.name}}</h2>\n\n        <p *ngIf="receiver.course_name!=\'\'">{{receiver.course_name}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="clearfix" *ngFor="let msg of chat_filtered">\n\n    <div class="chatBubble">\n\n      <div class="chat-bubble {{msg.position}}">\n\n        <img class="profile-pic {{msg.position}}" src="{{msg.img}}">\n\n        <div class="message">{{msg.message}}</div>\n\n        <div class="message-detail">\n\n          <span class="time" *ngIf="msg.id==\'\'">{{msg.datetime}}</span>\n\n          <span class="time" *ngIf="msg.id!=\'\'">{{msg.datetime}}</span>\n\n          <ion-spinner *ngIf="msg.id==\'\'" color="light" name="dots"></ion-spinner>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <ion-infinite-scroll position="top" *ngIf="showLoadMore==true" (ionInfinite)="getChatHistory($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-textarea placeholder="{{\'stu_chat.placeholder\'|translate}}" [(ngModel)]="chat.message"></ion-textarea>\n\n    <ion-buttons end>\n\n      <button ion-button color="success" class="button-xl" (click)="sendMessage(chat.message)" [attr.disabled]="chat.message.length!=0? null :\'true\'">\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\chat\chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAnswerConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionAnswerConversationPage = /** @class */ (function () {
    function QuestionAnswerConversationPage(navCtrl, params, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.sender = {};
        this.receiver = {};
        this.question = {};
        this.questionAnswer = { message: '' };
        this.added_history_conversation = [];
        this.showLoadMoreQuestions_conversation = false;
    }
    QuestionAnswerConversationPage.prototype.ionViewDidLoad = function () {
        this.httpService.cacheClearAll();
        this.question = this.params.data.question;
        this.receiver = this.params.data.receiver;
        this.sender = this.params.data.sender;
        this.added_history_conversation = [];
        this.getQuestionConversation('', this.question);
    };
    QuestionAnswerConversationPage.prototype.getQuestionConversation = function (infiniteScroll, question) {
        var _this = this;
        var params = {
            question_id: question.question_id,
            from_limit: question.questionConversation.length,
            to_limit: 20
        };
        this.httpService.httpServicePost(this.serviceName.question_conversation_get, params).subscribe(function (data) {
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMoreQuestions_conversation = true;
                }
                var i = 0;
                var _loop_1 = function (message) {
                    i++;
                    if (message.from_id == _this.sender.user_id) {
                        message['position'] = 'right';
                        message['img'] = _this.sender.imageFullUrl;
                    }
                    else {
                        message['position'] = 'left';
                        message['img'] = _this.receiver.imageFullUrl;
                    }
                    question.questionConversation.push(message);
                    question.questionConversation_filtered = question.questionConversation.slice();
                    question.questionConversation_filtered.reverse();
                    if (i == data[0].data.length && _this.added_history_conversation.length > 0) {
                        for (var _i = 0, _a = _this.added_history_conversation; _i < _a.length; _i++) {
                            var que = _a[_i];
                            question.questionConversation_filtered.push(que);
                        }
                    }
                    var self_1 = _this;
                    setTimeout(function () {
                        if (infiniteScroll == '') {
                            self_1.content.scrollToBottom();
                            self_1.enableLoadMore();
                        }
                    }, 100);
                };
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var message = _a[_i];
                    _loop_1(message);
                }
                _this.upgdateStatus();
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMoreQuestions_conversation = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
        });
    };
    QuestionAnswerConversationPage.prototype.upgdateStatus = function () {
        var params = {
            question_id: this.question.question_id,
            tutor_id: this.globalMethods.userType('id'),
            student_id: this.receiver.user_id,
            type: 'tutor'
        };
        var self = this;
        this.httpService.httpServicePost(this.serviceName.update_answer_status, params).subscribe(function (data) {
        }, function (error) {
        });
    };
    QuestionAnswerConversationPage.prototype.replyMessage = function (question, msg) {
        var _this = this;
        var params = {
            question_id: question.question_id,
            sender_id: this.sender.user_id,
            receiver_id: this.receiver.user_id,
            device_id: this.receiver.device_id,
            message: msg,
            type: "tutor"
        };
        var sending = {
            "answer_id": '',
            "question_id": '',
            "from_id": this.sender.user_id,
            "to_id": this.receiver.user_id,
            "message": msg,
            "datetime": "Now",
            "img": this.sender.imageFullUrl,
            "position": 'right'
        };
        question.questionConversation_filtered.push(sending);
        this.added_history_conversation.push(sending);
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.answer_to_question, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.questionAnswer.message = '';
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].answer_id = data[0].data[0].answer_id;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].question_id = data[0].data[0].question_id;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].from_id = data[0].data[0].from_id;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].to_id = data[0].data[0].to_id;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].message = data[0].data[0].message;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].datetime = data[0].data[0].datetime;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].img = _this.sender.imageFullUrl;
            question.questionConversation_filtered[question.questionConversation_filtered.length - 1].position = 'right';
            _this.added_history_conversation[_this.added_history_conversation.length - 1].answer_id = data[0].data[0].answer_id;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].question_id = data[0].data[0].question_id;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].from_id = data[0].data[0].from_id;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].to_id = data[0].data[0].to_id;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].message = data[0].data[0].message;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].datetime = data[0].data[0].datetime;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].img = _this.sender.imageFullUrl;
            _this.added_history_conversation[_this.added_history_conversation.length - 1].position = 'right';
            var self = _this;
            setTimeout(function () {
                self.content.scrollToBottom();
            }, 100);
        }, function (error) {
            _this.globalMethods.loaderStop();
        });
    };
    QuestionAnswerConversationPage.prototype.enableLoadMore = function () {
        var self = this;
        setTimeout(function () {
            self.showLoadMoreQuestions_conversation = true;
        }, 300);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], QuestionAnswerConversationPage.prototype, "content", void 0);
    QuestionAnswerConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-question-answer-conversation',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\question-answer-conversation\question-answer-conversation.html"*/'<ion-header no-shadow>\n\n  <ion-navbar color="light">\n\n    <ion-title>{{question.question_text}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let conversation of question.questionConversation_filtered">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="chatBubble">\n\n            <div class="chat-bubble {{conversation.position}}">\n\n              <img class="profile-pic {{conversation.position}}" src="{{conversation.img}}">\n\n              <div class="message">{{conversation.message}}</div>\n\n              <div class="message-detail">\n\n                <span class="time" *ngIf="conversation.id==\'\'">{{conversation.datetime}}</span>\n\n                <span class="time" *ngIf="conversation.id!=\'\'">{{conversation.datetime}}</span>\n\n                <ion-spinner *ngIf="conversation.id==\'\'" color="light" name="dots"></ion-spinner>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <p padding *ngIf="question.questionConversation_filtered==\'\'">{{\'stu_question-answer.available_ans\'|translate}}</p>\n\n  <ion-infinite-scroll position="top" *ngIf="showLoadMoreQuestions_conversation==true" (ionInfinite)="getQuestionConversation($event,question)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-textarea placeholder="{{\'stu_question-answer.mess\'|translate}}" [(ngModel)]="questionAnswer.message"></ion-textarea>\n\n    <ion-buttons end>\n\n      <button ion-button color="success" class="button-xl" (click)="replyMessage(question,questionAnswer.message)" [attr.disabled]="questionAnswer.message.length!=0? null :\'true\'">\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\question-answer-conversation\question-answer-conversation.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], QuestionAnswerConversationPage);
    return QuestionAnswerConversationPage;
}());

//# sourceMappingURL=question-answer-conversation.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuSendMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StuSendMessagePage = /** @class */ (function () {
    function StuSendMessagePage(navCtrl, navParams, viewCtrl, globalMethods, httpService, serviceName, formBuilder, validationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.tutorCourses = [];
        this.messageDetails = {
            name: '',
            course_id: '',
            email: '',
            phone: '',
            message: ''
        };
        this.tutor_id = this.navParams.data.selectedTutor;
        this.student = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.messageDetails = {
            name: this.student.username,
            course_id: '',
            email: this.student.email,
            phone: this.student.phone,
            message: ''
        };
        this.messageForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            course: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            message: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])]
        });
        this.credits_for_sending_message = this.globalMethods.siteValue('credits_for_sending_message');
    }
    StuSendMessagePage_1 = StuSendMessagePage;
    StuSendMessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.tutor_id
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getTutorCourses, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                _this.tutorCourses = data[0].data;
            }
            else {
                _this.globalMethods.showToast('No Courses Available');
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    StuSendMessagePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(StuSendMessagePage_1);
    };
    StuSendMessagePage.prototype.sendMessage = function () {
        var _this = this;
        var params = {
            student_id: this.student.id,
            tutor_id: this.tutor_id,
            name: this.messageDetails.name,
            course_id: this.messageDetails.course_id,
            email: this.messageDetails.email,
            phone: this.messageDetails.phone,
            message: this.messageDetails.message
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.studentSendMessage, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data[0]));
                _this.dismiss();
            }
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    var StuSendMessagePage_1;
    StuSendMessagePage = StuSendMessagePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stu-send-message',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-send-message\stu-send-message.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title> {{\'stu_send_message.title\'|translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form [formGroup]="messageForm" novalidate (ngSubmit)="(messageForm.valid && submitted) && sendMessage()">\n\n        <ion-list form-list>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-avatar"></ion-icon>\n\n                <ion-input type="text" [(ngModel)]="messageDetails.name" placeholder="{{\'stu_send_message.name\'|translate}}" formControlName="name"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!messageForm.controls.name.pristine || submitted" [name]="(!messageForm.controls.name.valid && (messageForm.controls.name.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!messageForm.controls.name.valid && (messageForm.controls.name.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                    item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-document"></ion-icon>\n\n                <ion-label> {{\'stu_send_message.select\'|translate}}</ion-label>\n\n                <ion-select [(ngModel)]="messageDetails.course_id" formControlName="course">\n\n                    <ion-option *ngFor="let course of tutorCourses" value="{{course.course_id}}">{{course.course_name}}</ion-option>\n\n                </ion-select>\n\n                <ion-icon class="validation-icon" *ngIf="!messageForm.controls.course.pristine || submitted" [name]="(!messageForm.controls.course.valid && (messageForm.controls.course.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!messageForm.controls.course.valid && (messageForm.controls.course.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                    item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-envelope"></ion-icon>\n\n                <ion-input type="email" placeholder="{{\'stu_send_message.email\'|translate}}" [(ngModel)]="messageDetails.email" formControlName="email"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!messageForm.controls.email.pristine || submitted" [name]="(!messageForm.controls.email.valid && (messageForm.controls.email.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!messageForm.controls.email.valid && (messageForm.controls.email.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                    item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-phone-call"></ion-icon>\n\n                <ion-input type="tel" placeholder="{{\'stu_send_message.phone_no\'|translate}}" [(ngModel)]="messageDetails.phone" formControlName="phone"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!messageForm.controls.phone.pristine || submitted" [name]="(!messageForm.controls.phone.valid && (messageForm.controls.phone.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!messageForm.controls.phone.valid && (messageForm.controls.phone.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                    item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-chat-1"></ion-icon>\n\n                <ion-textarea type="text" placeholder="{{\'stu_send_message.message\'|translate}}" [(ngModel)]="messageDetails.message" formControlName="message"></ion-textarea>\n\n                <ion-icon class="validation-icon" *ngIf="!messageForm.controls.message.pristine || submitted" [name]="(!messageForm.controls.message.valid && (messageForm.controls.message.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!messageForm.controls.message.valid && (messageForm.controls.message.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                    item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item text-wrap>\n\n                <p>{{\'stu_send_message.info\'|translate}}.</p>\n\n                <p><strong>{{\'stu_send_message.red_mes\'|translate}} : {{credits_for_sending_message}}</strong></p>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'stu_send_message.send\'|translate}}</button>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-send-message\stu-send-message.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]])
    ], StuSendMessagePage);
    return StuSendMessagePage;
}());

//# sourceMappingURL=stu-send-message.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuReserveYourSpotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stu_tutor_profile_stu_tutor_profile__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tutor_tutor_profile_tutor_profile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ion2_calendar_dist__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ion2_calendar_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ion2_calendar_dist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var StuReserveYourSpotPage = /** @class */ (function () {
    function StuReserveYourSpotPage(navCtrl, navParams, globalMethods, httpService, serviceName, formBuilder, validationService, calendarCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.calendarCtrl = calendarCtrl;
        this.courses = [];
        this.tutor_locations = [];
        this.time_slots = [];
        this.reserveData = {
            course_id: '',
            teaching_type: '',
            prefered_location: '',
            start_date: '',
            time_slot: '',
            message: '',
            content: '',
            credits: '',
            duration_type: '',
            duration_value: '',
            days_off: '',
            tutor_slug: '',
            course_slug: '',
            student_id: '',
            tutor_id: ''
        };
        this.tutor = this.navParams.data.selectedTutor;
        this.tutor_locations = this.tutor.tutoring_locations_data;
        this.reserveData.tutor_slug = this.tutor.slug;
        this.reserveData.tutor_id = this.tutor.id;
        this.reserveData.student_id = this.globalMethods.userType('id');
        this.reserveForm = formBuilder.group({
            courseId: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            teachingType: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            preferredLocation: [''],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            timeSlot: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            message: ['']
        });
    }
    StuReserveYourSpotPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.tutor.id
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getTutorCourses, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                _this.courses = data[0].data;
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StuReserveYourSpotPage.prototype.openCalendar = function () {
        var _this = this;
        var daysConfig = [{
                date: this.reserveData.start_date ? new Date(this.reserveData.start_date) : new Date,
                marked: true
            }];
        this.calendarCtrl.openCalendar({
            from: new Date(),
            weekdaysTitle: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            title: 'Select Date',
            isRadio: true,
            defaultDate: new Date(),
            // cssClass: 'calendar-class',
            daysConfig: daysConfig
        })
            .then(function (res) {
            var date = new Date(res.date.time).toDateString();
            _this.reserveData.start_date = __WEBPACK_IMPORTED_MODULE_10_moment__(date).format("MM-DD-YYYY");
        }, function (error) {
        }).catch(function (cat) {
        });
    };
    StuReserveYourSpotPage.prototype.changeCourse = function () {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.course_id == this.reserveData.course_id) {
                this.reserveData.content = val.content;
                this.reserveData.credits = val.fee;
                this.reserveData.duration_value = val.duration_value;
                this.reserveData.duration_type = val.duration_type;
                this.reserveData.days_off = val.days_off;
                this.reserveData.course_slug = val.course_slug;
                this.time_slots = val.time_slots.split(',');
                break;
            }
        }
    };
    StuReserveYourSpotPage.prototype.requestTutor = function () {
        var _this = this;
        if (this.reserveData.teaching_type == 'willing-to-travel' && this.reserveData.prefered_location == '') {
            this.globalMethods.showToast('Please select Location');
        }
        else {
            this.globalMethods.loaderStart();
            this.httpService.httpServicePost(this.serviceName.bookTutor, this.reserveData).subscribe(function (data) {
                _this.globalMethods.loaderStop();
                _this.globalMethods.showToast(data[1].response.message);
                if (data[1].response.status == 1) {
                    if (_this.globalMethods.userType('user_belongs_group') == _this.serviceName.student) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__stu_tutor_profile_stu_tutor_profile__["a" /* StuTutorProfilePage */], { tutor: _this.tutor });
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tutor_tutor_profile_tutor_profile__["a" /* TutorProfilePage */], { tutor: _this.tutor });
                    }
                }
                else {
                    _this.globalMethods.showToast(data[1].response.message);
                }
            }, function (error) {
                _this.globalMethods.loaderStop();
                _this.globalMethods.showToast(JSON.stringify(error));
            }, function () { });
        }
    };
    StuReserveYourSpotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stu-reserve-your-spot',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-reserve-your-spot\stu-reserve-your-spot.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="tuts-list"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'stu_reserve_your_spot.title\'| translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form [formGroup]="reserveForm" novalidate (ngSubmit)="(reserveForm.valid && submitted) && requestTutor()">\n\n        <ion-list>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-label>{{\'stu_reserve_your_spot.select\'| translate}}</ion-label>\n\n                    <ion-select [(ngModel)]="reserveData.course_id" formControlName="courseId" (ionChange)="changeCourse()">\n\n                        <ion-option *ngFor="let course of courses" value="{{course.course_id}}">{{course.course_name}}</ion-option>\n\n                    </ion-select>\n\n                    <ion-icon class="validation-icon" *ngIf="!reserveForm.controls.courseId.pristine || submitted" [name]="(!reserveForm.controls.courseId.valid && (reserveForm.controls.courseId.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!reserveForm.controls.courseId.valid && (reserveForm.controls.courseId.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                    item-right></ion-icon>\n\n                </ion-item>\n\n            </ion-card>\n\n        </ion-list>\n\n\n\n        <ion-list radio-group [(ngModel)]="reserveData.teaching_type" formControlName="teachingType">\n\n            <ion-card>\n\n                <ion-item-divider>{{\'stu_reserve_your_spot.location\'| translate}}</ion-item-divider>\n\n                <ion-row>\n\n                    <ion-col width50>\n\n                        <ion-item>\n\n                            <ion-label>  {{\'stu_reserve_your_spot.home\'| translate}}</ion-label>\n\n                            <ion-radio value="home" item-left></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col width50>\n\n                        <ion-item>\n\n                            <ion-label>  {{\'stu_reserve_your_spot.online\'| translate}}</ion-label>\n\n                            <ion-radio value="online" item-left> </ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-item>\n\n                    <ion-radio value="willing-to-travel" item-left></ion-radio>\n\n                    <ion-label> {{\'stu_reserve_your_spot.select_loc\'| translate}}</ion-label>\n\n                    <ion-select [(ngModel)]="reserveData.prefered_location" formControlName="preferredLocation">\n\n                        <ion-option *ngFor="let location of tutor_locations" value="{{location.slug}}">{{location.tutoring_locations}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-icon class="validation-icon" *ngIf="!reserveForm.controls.teachingType.pristine || submitted" [name]="(!reserveForm.controls.teachingType.valid && (reserveForm.controls.teachingType.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!reserveForm.controls.teachingType.valid && (reserveForm.controls.teachingType.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-card>\n\n        </ion-list>\n\n\n\n        <ion-list>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-label fixed> {{\'stu_reserve_your_spot.select_date\'| translate}}</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="reserveData.start_date" formControlName="startDate" placeholder="MM/DD/YYYY" (click)="openCalendar()" disabled="true"></ion-input>\n\n                    <ion-icon class="validation-icon" *ngIf="!reserveForm.controls.startDate.pristine || submitted" [name]="(!reserveForm.controls.startDate.valid && (reserveForm.controls.startDate.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!reserveForm.controls.startDate.valid && (reserveForm.controls.startDate.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                    item-right></ion-icon>\n\n                </ion-item>\n\n                <ion-item-divider> {{\'stu_reserve_your_spot.select_time\'| translate}}</ion-item-divider>\n\n                <ion-scroll scrollX="true" timeslot-scroll>\n\n                    <ion-list radio-group [(ngModel)]="reserveData.time_slot" formControlName="timeSlot">\n\n                        <ion-row>\n\n                            <ion-col *ngFor="let slot of time_slots">\n\n                                <ion-item>\n\n                                    <ion-label> {{slot}} </ion-label>\n\n                                    <ion-radio value="{{slot}}" item-left></ion-radio>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-icon class="validation-icon" *ngIf="!reserveForm.controls.timeSlot.pristine || submitted" [name]="(!reserveForm.controls.timeSlot.valid && (reserveForm.controls.timeSlot.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!reserveForm.controls.timeSlot.valid && (reserveForm.controls.timeSlot.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                        item-right></ion-icon>\n\n                    </ion-list>\n\n                </ion-scroll>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-textarea type="text" [(ngModel)]="reserveData.message" formControlName="message" placeholder=" {{\'stu_reserve_your_spot.placeholder\'| translate}}"></ion-textarea>\n\n                </ion-item>\n\n            </ion-card>\n\n        </ion-list>\n\n        <ion-list>\n\n            <ion-item text-wrap>\n\n                <h2>{{\'stu_reserve_your_spot.content\'| translate}}</h2>\n\n                <p [(innerHtml)]="reserveData.content"></p>\n\n            </ion-item>\n\n            <ion-item no-lines>\n\n                <h2><span [(innerHtml)]="reserveData.duration_value"></span> <span [(innerHtml)]="reserveData.duration_type"></span></h2>\n\n                <p>{{\'stu_reserve_your_spot.day_off\'| translate}}: <span [(innerHtml)]="reserveData.days_off"></span></p>\n\n                <ion-note item-right large color="danger" [(innerHtml)]="reserveData.credits"></ion-note>\n\n            </ion-item>\n\n        </ion-list>\n\n        <div padding>\n\n            <button ion-button block round color="danger" type="submit" (click)="submitted=true"> {{\'stu_reserve_your_spot.request\'| translate}}</button>\n\n        </div>\n\n    </form>    \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-reserve-your-spot\stu-reserve-your-spot.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_9_ion2_calendar_dist__["CalendarController"]])
    ], StuReserveYourSpotPage);
    return StuReserveYourSpotPage;
}());

//# sourceMappingURL=stu-reserve-your-spot.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reviews_reviews__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_stu_reserve_your_spot_stu_reserve_your_spot__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_stu_send_message_stu_send_message__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TutorProfilePage = /** @class */ (function () {
    function TutorProfilePage(navCtrl, navParams, httpService, globalMethods, serviceName, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.tutorDetails = [];
        this.tutor = this.navParams.data.tutor;
    }
    TutorProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            tutor_id: this.tutor.id
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.tutorProfile, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.tutorDetails = data[0].data[0];
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorProfilePage.prototype.openReviews = function (tutor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reviews_reviews__["a" /* ReviewsPage */], { tutor: tutor });
    };
    TutorProfilePage.prototype.sendMessageModal = function (tutor_id) {
        var sendMessage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__student_stu_send_message_stu_send_message__["a" /* StuSendMessagePage */], { selectedTutor: tutor_id });
        sendMessage.present();
    };
    TutorProfilePage.prototype.openReserveYourSpot = function (tutor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__student_stu_reserve_your_spot_stu_reserve_your_spot__["a" /* StuReserveYourSpotPage */], { selectedTutor: tutor });
    };
    TutorProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-profile',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-profile\tutor-profile.html"*/'<ion-header no-border>\n\n  <ion-navbar color="white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_tutor_profile.title\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="sendMessageModal(tutorDetails.id)">\n\n        <ion-icon name="mail"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div header-profile text-center>\n\n    <div class="user-img">\n\n      <img *ngIf="tutorDetails.photo!= \'\'" src="{{serviceName.profileImages}}{{tutorDetails.photo}}">\n\n      <img *ngIf="tutorDetails.photo==\'\'" src="{{serviceName.defaultImage}}">\n\n    </div>\n\n    <div class="user-details">\n\n      <h3>{{tutorDetails.username}}</h3>\n\n      <p class="status">\n\n        <span *ngIf="tutorDetails.is_online==\'no\'">{{\'stu_tutor_profile.off\'|translate}}</span>\n\n        <span *ngIf="tutorDetails.is_online==\'yes\'">{{\'stu_tutor_profile.on\'|translate}}</span>\n\n        <span>{{tutorDetails.gender}}</span>\n\n        <span>{{tutorDetails.dob}}</span>\n\n      </p>\n\n      <div class="review-rating">\n\n        <div class="star" color="warning">\n\n          <rating [(ngModel)]="tutorDetails.tutor_rating" max="5" readOnly="true"></rating>\n\n        </div>\n\n        <button *ngIf="tutorDetails.no_of_reviews>0" ion-button clear small color="danger" (click)="openReviews(tutorDetails.id)">{{tutorDetails.no_of_reviews}} Reviews</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <ion-list contact-list>\n\n    <ion-list-header color="light">{{\'stu_tutor_profile.info\'|translate}}</ion-list-header>\n\n    <ion-item text-wrap>\n\n      <p>{{\'stu_tutor_profile.email\'|translate}}</p>\n\n      <h4><a href="mailto:{{tutorDetails.email}}">{{tutorDetails.email}}</a></h4>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <p>{{\'stu_tutor_profile.phone_no\'|translate}}</p>\n\n      <h4>+91<a href="tel:{{tutorDetails.phone}}"> {{tutorDetails.phone}} </a>,\n\n                <a *ngIf="tutorDetails.company!=null" href="tel:{{tutorDetails.company}}">{{tutorDetails.company}}</a></h4>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row no-padding>\n\n        <ion-col>\n\n          <p>{{\'stu_tutor_profile.experience\'|translate}}</p>\n\n          <h4>{{tutorDetails.teaching_experience}} {{tutorDetails.duration_of_experience}}</h4>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_tutor_profile.qualification\'|translate}}</p>\n\n          <h4>{{tutorDetails.qualification}}</h4>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <p>{{\'stu_tutor_profile.lang\'|translate}}/p>\n\n      <h4>{{tutorDetails.language_of_teaching}}</h4>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <p>{{\'stu_tutor_profile.class\'|translate}}</p>\n\n      <h4 *ngIf="tutorDetails.academic_class==\'yes\'">{{\'stu_tutor_profile.academic\'|translate}}</h4>\n\n      <h4 *ngIf="tutorDetails.non_academic_class==\'yes\'">{{\'stu_tutor_profile.non_academic\'|translate}}</h4>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list contact-list>\n\n    <ion-list-header color="light">{{\'stu_tutor_profile.more\'|translate}}</ion-list-header>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'stu_tutor_profile.courses\'|translate}}</h4>\n\n      <p>{{tutorDetails.tutoring_courses}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'stu_tutor_profile.location\'|translate}}</h4>\n\n      <p>{{tutorDetails.tutoring_locations}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'stu_tutor_profile.career\'|translate}}</h4>\n\n      <p>{{tutorDetails.profile}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list contact-list *ngIf="tutorDetails.tutor_experience!=0">\n\n    <ion-list-header color="light">{{\'stu_tutor_profile.my_experience\'|translate}}</ion-list-header>\n\n    <ion-item text-wrap *ngFor="let experience of tutorDetails.tutor_experience">\n\n      <h4>{{experience.from_date}} - {{experience.to_date}}</h4>\n\n      <p><strong color="danger">{{experience.company}} - {{experience.role}}</strong></p>\n\n      <p>{{experience.description}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button block round color="danger" (click)="openReserveYourSpot(tutorDetails)">{{\'stu_tutor_profile.request\'|translate}}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-profile\tutor-profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], TutorProfilePage);
    return TutorProfilePage;
}());

//# sourceMappingURL=tutor-profile.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_bookings_student_bookings__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_leads_student_leads__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_dashboard_chat_student_dashboard_chat__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__student_dashboard_questions_student_dashboard_questions__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StudentDashboardPage = /** @class */ (function () {
    function StudentDashboardPage(navCtrl, navParams, globalMethods, httpService, serviceName, menuCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.dashboardDetails = {
            net_credits: '',
            total_bookings: '',
            pending_bookings: '',
            completed_bookings: '',
            approved_bookings: '',
            open_leads: '',
            closed_leads: '',
            messages: '',
            questions: ''
        };
        localStorage.setItem('pageName', 'StudentDashboardPage');
        this.menuCtrl.enable(true),
            this.userDetails = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    }
    StudentDashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.userDetails.id
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.studentDashboard, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.total_bookings != undefined) {
                _this.dashboardDetails.total_bookings = data[0].data.total_bookings;
            }
            if (data[0].data.pending_bookings != undefined) {
                _this.dashboardDetails.pending_bookings = data[0].data.pending_bookings;
            }
            if (data[0].data.completed_bookings != undefined) {
                _this.dashboardDetails.completed_bookings = data[0].data.completed_bookings;
            }
            if (data[0].data.approved_bookings != undefined) {
                _this.dashboardDetails.approved_bookings = data[0].data.approved_bookings;
            }
            if (data[0].data.open_leads != undefined) {
                _this.dashboardDetails.open_leads = data[0].data.open_leads;
            }
            if (data[0].data.closed_leads != undefined) {
                _this.dashboardDetails.closed_leads = data[0].data.closed_leads;
            }
            if (data[0].data.messages != undefined) {
                _this.dashboardDetails.messages = data[0].data.messages;
            }
            if (data[0].data.questions != undefined) {
                _this.dashboardDetails.questions = data[0].data.questions;
            }
            if (_this.userDetails.net_credits != undefined) {
                _this.dashboardDetails.net_credits = _this.userDetails.net_credits;
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    StudentDashboardPage.prototype.netCredits = function () {
        this.globalMethods.showToast("Net Credits are " + this.dashboardDetails.net_credits + "");
    };
    StudentDashboardPage.prototype.bookings = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__student_bookings_student_bookings__["a" /* StudentBookingsPage */], { booking_type: type });
    };
    StudentDashboardPage.prototype.leads = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__student_leads_student_leads__["a" /* StudentLeadsPage */]);
    };
    StudentDashboardPage.prototype.openQuestions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__student_dashboard_questions_student_dashboard_questions__["a" /* StudentDashboardQuestionsPage */]);
    };
    StudentDashboardPage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__student_dashboard_chat_student_dashboard_chat__["a" /* StudentDashboardChatPage */], { callback: this.studentDashboardChatPagePopCallback, dasboardDetials: this.dashboardDetails });
    };
    StudentDashboardPage.prototype.studentDashboardChatPagePopCallback = function (_params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dashboardDetails = _params.dasboardDetials;
            resolve();
        });
    };
    StudentDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-dashboard',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-dashboard\student-dashboard.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_dashboard.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n <ion-grid>\n\n   <ion-row>\n\n     <ion-col>\n\n       <ion-card class="color-green" (click)="netCredits()">\n\n         <div class="card-title">{{dashboardDetails.net_credits}}</div>\n\n         <div class="card-subtitle">{{\'stu_dashboard.net\'|translate}}</div>\n\n       </ion-card>\n\n     </ion-col>\n\n      <ion-col>\n\n      <ion-card class="color-blue" (click)="bookings(\'all\')">\n\n        <div class="card-title">{{dashboardDetails.total_bookings}}</div>\n\n        <div class="card-subtitle"> {{\'stu_dashboard.total\'|translate}}</div>\n\n      </ion-card>\n\n      </ion-col>\n\n   </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card class="color-voilet" (click)="bookings(\'pending\')">\n\n          <div class="card-title">{{dashboardDetails.pending_bookings}}</div>\n\n          <div class="card-subtitle">{{\'stu_dashboard.pending\'|translate}}</div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-card class="color-pink" (click)="bookings(\'completed\')">\n\n            <div class="card-title">{{dashboardDetails.completed_bookings}}</div>\n\n            <div class="card-subtitle">{{\'stu_dashboard.completed\'|translate}}</div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card  class="color-dark-blue" (click)="bookings(\'approved\')">\n\n        <div class="card-title">{{dashboardDetails.approved_bookings}}</div>\n\n        <div class="card-subtitle">{{\'stu_dashboard.approved\'|translate}}</div>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col>\n\n        <ion-card class="color-light-blue" (click)="leads()">\n\n          <div class="card-title">{{dashboardDetails.open_leads}}</div>\n\n          <div class="card-subtitle"> {{\'stu_dashboard.leads\'|translate}}</div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n            <ion-col>\n\n                <ion-card class="color-dark-blue1" (click)="openQuestions()">\n\n                    <div class="card-title">{{dashboardDetails.questions}}</div> \n\n                    <!-- <div class="card-title">10</div> -->\n\n                    <div class="card-subtitle"><strong>{{\'stu_dashboard.answer\'|translate}}</strong></div>\n\n                </ion-card>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-card class="color-dark-purple" (click)="openChat()">\n\n                    <div class="card-title">{{dashboardDetails.messages}}</div> \n\n                    <!-- <div class="card-title">20</div> -->\n\n                    <div class="card-subtitle"><strong>{{\'stu_dashboard.messages\'|translate}}</strong> </div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-dashboard\student-dashboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], StudentDashboardPage);
    return StudentDashboardPage;
}());

//# sourceMappingURL=student-dashboard.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorsDasboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booking_booking__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tutor_courses_tutor_courses__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tutor_dashboard_questions_tutor_dashboard_questions__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tutor_dashboard_chat_tutor_dashboard_chat__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TutorsDasboardPage = /** @class */ (function () {
    function TutorsDasboardPage(navCtrl, navParams, globalMethods, menuCtrl, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.menuCtrl = menuCtrl;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.dasboardDetials = {
            total_bookings: '',
            pending_bookings: '',
            completed_bookings: '',
            running_bookings: '',
            courses: '',
            net_credits: '',
            messages: '',
            questions: ''
        };
        localStorage.setItem('pageName', 'TutorsDasboardPage');
        this.menuCtrl.enable(true);
        this.userDetails = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    }
    TutorsDasboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.userDetails.id
        };
        this.httpService.httpServicePost(this.serviceName.tutorDashboard, params).subscribe(function (data) {
            if (data[0].data.completed_bookings != undefined) {
                _this.dasboardDetials.completed_bookings = data[0].data.completed_bookings;
            }
            if (data[0].data.pending_bookings != undefined) {
                _this.dasboardDetials.pending_bookings = data[0].data.pending_bookings;
            }
            if (data[0].data.total_bookings != undefined) {
                _this.dasboardDetials.total_bookings = data[0].data.total_bookings;
            }
            if (data[0].data.running_bookings != undefined) {
                _this.dasboardDetials.running_bookings = data[0].data.running_bookings;
            }
            if (data[0].data.courses != undefined) {
                _this.dasboardDetials.courses = data[0].data.courses;
            }
            if (data[0].data.messages != undefined) {
                _this.dasboardDetials.messages = data[0].data.messages;
            }
            if (data[0].data.questions != undefined) {
                _this.dasboardDetials.questions = data[0].data.questions;
            }
            if (_this.userDetails.net_credits != undefined) {
                _this.dasboardDetials.net_credits = _this.userDetails.net_credits;
            }
        }, function (error) {
        }, function () {
        });
    };
    TutorsDasboardPage.prototype.bookings = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__booking_booking__["a" /* BookingPage */], { booking_type: type });
    };
    TutorsDasboardPage.prototype.courses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tutor_courses_tutor_courses__["a" /* TutorCoursesPage */]);
    };
    TutorsDasboardPage.prototype.openQuestions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tutor_dashboard_questions_tutor_dashboard_questions__["a" /* TutorDashboardQuestionsPage */]);
    };
    TutorsDasboardPage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tutor_dashboard_chat_tutor_dashboard_chat__["a" /* TutorDashboardChatPage */], { callback: this.tutorDashboardChatPagePopCallback, dasboardDetials: this.dasboardDetials });
    };
    TutorsDasboardPage.prototype.tutorDashboardChatPagePopCallback = function (_params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.dasboardDetials = _params.dasboardDetials;
            resolve();
        });
    };
    TutorsDasboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutors-dasboard',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutors-dasboard\tutors-dasboard.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_dashboard.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card class="color-green">\n\n          <div class="card-title">{{dasboardDetials.net_credits}}</div>\n\n          <div class="card-subtitle"><strong>{{\'stu_dashboard.net\'|translate}}</strong></div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card class="color-blue" (click)="bookings(\'all\')">\n\n          <div class="card-title">{{dasboardDetials.total_bookings}}</div>\n\n          <div class="card-subtitle"><strong>{{\'stu_dashboard.total\'|translate}}</strong> </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card class="color-voilet" (click)="bookings(\'pending\')">\n\n          <div class="card-title">{{dasboardDetials.pending_bookings}}</div>\n\n          <div class="card-subtitle"><strong>{{\'stu_dashboard.pending\'|translate}}</strong></div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card class="color-pink" (click)="bookings(\'completed\')">\n\n          <div class="card-title">{{dasboardDetials.completed_bookings}}</div>\n\n          <div class="card-subtitle"><strong>{{\'stu_dashboard.completed\'|translate}}</strong></div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card class="color-dark-blue" (click)="bookings(\'running\')">\n\n          <div class="card-title">{{dasboardDetials.running_bookings}}</div>\n\n          <div class="card-subtitle"><strong>{{\'stu_dashboard.run\'|translate}}</strong></div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card class="color-light-blue" (click)="courses()">\n\n          <div class="card-title">{{dasboardDetials.courses}}</div>\n\n          <div class="card-subtitle"><strong>{{\'stu_dashboard.courses\'|translate}}</strong> </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card class="color-dark-blue1" (click)="openQuestions()">\n\n          <div class="card-title">{{dasboardDetials.questions}}</div>\n\n          <div class="card-subtitle"><strong>{{\'stu_dashboard.questions\'|translate}}</strong></div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card class="color-dark-purple" (click)="openChat()">\n\n          <div class="card-title">{{dasboardDetials.messages}}</div>\n\n          <div class="card-subtitle"><strong>{{\'stu_dashboard.messages\'|translate}}</strong> </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutors-dasboard\tutors-dasboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], TutorsDasboardPage);
    return TutorsDasboardPage;
}());

//# sourceMappingURL=tutors-dasboard.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorCoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutor_course_details_tutor_course_details__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tutor_add_course_tutor_add_course__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TutorCoursesPage = /** @class */ (function () {
    function TutorCoursesPage(navCtrl, navParams, httpService, serviceName, globalMethods, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.courses = [];
    }
    TutorCoursesPage.prototype.ionViewDidLoad = function () {
        this.loadTuttorCourses();
    };
    TutorCoursesPage.prototype.loadTuttorCourses = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.tutorCourses, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.courses = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    // OPEN COURSE DETAILS
    TutorCoursesPage.prototype.openCourseDetails = function (course) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tutor_course_details_tutor_course_details__["a" /* TutorCourseDetailsPage */], { selectedCourse: course });
    };
    // ADD TUTOR COURSES
    TutorCoursesPage.prototype.addTutorCourse = function () {
        var _this = this;
        var tutorAddCourseModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__tutor_add_course_tutor_add_course__["a" /* TutorAddCoursePage */]);
        tutorAddCourseModal.onDidDismiss(function (response) {
            var data = response;
            if (data.response.status == 1) {
                _this.loadTuttorCourses();
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        });
        tutorAddCourseModal.present();
    };
    // DELETE COURSE
    TutorCoursesPage.prototype.deleteCourse = function (course) {
        var _this = this;
        var deleteConfirm = this.alertCtrl.create({
            title: 'Delete Course',
            message: 'Do you want to delete course ?' + course.course_name,
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var params = {
                            user_id: _this.globalMethods.userType('id'),
                            id: course.id
                        };
                        _this.globalMethods.loaderStart();
                        _this.httpService.httpServicePost(_this.serviceName.deleteTutorCourse, params).subscribe(function (data) {
                            _this.globalMethods.loaderStop();
                            if (data[1].response.status == 1) {
                                _this.globalMethods.showToast(data[1].response.message);
                                _this.loadTuttorCourses();
                            }
                            else {
                                _this.globalMethods.showToast(data[1].response.message);
                            }
                        }, function (error) {
                            _this.globalMethods.loaderStop();
                            _this.globalMethods.showToast(JSON.stringify(error));
                        }, function () {
                        });
                    }
                }
            ]
        });
        deleteConfirm.present();
    };
    TutorCoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-courses',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-courses\tutor-courses.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title logo>{{\'stu_booking_details.sub_title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-searchbar [(ngModel)]="searchtext"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let course of courses | filter:searchtext">\n\n      <button (click)="deleteCourse(course)" ion-button clear icon-only item-end>\n\n        <ion-icon class="tuts-garbage"></ion-icon>\n\n      </button>\n\n      <div (click)="openCourseDetails(course)">\n\n        <h2>{{course.course_name}}</h2>\n\n        <p><span><ion-icon name="calendar"></ion-icon> {{course.fee}}</span>\n\n          <span> <ion-icon name="time"></ion-icon> \n\n                      {{course.duration_value}} \n\n                      {{course.duration_type}}\n\n                    </span>\n\n        </p>\n\n        <p><small>{{course.days_off}}</small></p>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger" (click)="addTutorCourse()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-courses\tutor-courses.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], TutorCoursesPage);
    return TutorCoursesPage;
}());

//# sourceMappingURL=tutor-courses.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorAddCoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TutorAddCoursePage = /** @class */ (function () {
    function TutorAddCoursePage(navCtrl, navParams, httpService, serviceName, formBuilder, validationService, globalMethods, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.globalMethods = globalMethods;
        this.viewCtrl = viewCtrl;
        this.courses = [];
        this.addCourseData = {
            course_id: '',
            duration_value: '',
            duration_type: '',
            fee: '',
            content: '',
            time_slots: '',
            days_off: '',
            sort_order: '',
            user_id: '',
            id: ''
        };
        this.title = 'Add Course';
        this.buttonText = 'Save';
        this.addCourseForm = formBuilder.group({
            course_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            duration_value: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            duration_type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            fee: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            content: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            time_slots: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            days_off: [''],
            sort_order: ['']
        });
        this.courseDetails = this.navParams.data.course;
        if (this.courseDetails != undefined) {
            this.addCourseData.course_id = this.courseDetails.course_id;
            this.addCourseData.duration_value = this.courseDetails.duration_value;
            this.addCourseData.duration_type = this.courseDetails.duration_type;
            this.addCourseData.fee = this.courseDetails.fee;
            this.addCourseData.content = this.courseDetails.content;
            this.addCourseData.time_slots = this.courseDetails.time_slots;
            this.addCourseData.days_off = this.courseDetails.days_off;
            this.addCourseData.sort_order = this.courseDetails.sort_order;
            this.addCourseData.id = this.courseDetails.id;
            this.title = 'Edit Course';
            this.buttonText = 'Update';
        }
    }
    TutorAddCoursePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            from_limit: this.courses.length
        };
        this.httpService.httpServicePost(this.serviceName.get_all_courses, params).subscribe(function (data) {
            _this.courses = data[0].data;
        }, function (error) {
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    TutorAddCoursePage.prototype.addCourse = function () {
        var _this = this;
        this.addCourseData.user_id = this.globalMethods.userType('id');
        var selectedValues = this.addCourseData.days_off;
        var daysOff = '';
        if (selectedValues.length > 0) {
            for (var _i = 0, selectedValues_1 = selectedValues; _i < selectedValues_1.length; _i++) {
                var value = selectedValues_1[_i];
                daysOff += value + ',';
            }
        }
        this.addCourseData.days_off = daysOff;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.addTutorCourse, this.addCourseData).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
                _this.viewCtrl.dismiss(data[1]);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    TutorAddCoursePage.prototype.dismiss = function () {
        var data = { 'response': 'User Dismissed', 'status': '0' };
        this.viewCtrl.dismiss(data);
    };
    TutorAddCoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-add-course',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-add-course\tutor-add-course.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title>\n\n      {{title}}\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="light" showWhen="ios">{{\'add_courses.Cancel\'|translate}}</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="addCourseForm" novalidate (ngSubmit)="(addCourseForm.valid && submitted) && addCourse()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{\'add_courses.name\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="addCourseData.course_id" formControlName="course_id" placeholder="Select">\n\n          <ion-option *ngFor="let course of courses" value="{{course.id}}">{{course.name}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!addCourseForm.controls.course_id.pristine || submitted" [name]="(!addCourseForm.controls.course_id.valid && (addCourseForm.controls.course_id.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!addCourseForm.controls.course_id.valid && (addCourseForm.controls.course_id.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'add_courses.type\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="addCourseData.duration_type" formControlName="duration_type" placeholder="Select">\n\n          <ion-option value="hours">{{\'add_courses.hr\'|translate}}</ion-option>\n\n          <ion-option value="days">{{\'add_courses.days\'|translate}}</ion-option>\n\n          <ion-option value="months">{{\'add_courses.months\'|translate}}</ion-option>\n\n          <ion-option value="years">{{\'add_courses.year\'|translate}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!addCourseForm.controls.duration_type.pristine || submitted" [name]="(!addCourseForm.controls.duration_type.valid && (addCourseForm.controls.duration_type.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!addCourseForm.controls.duration_type.valid && (addCourseForm.controls.duration_type.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'add_courses.value\'|translate}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="addCourseData.duration_value" formControlName="duration_value"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!addCourseForm.controls.duration_value.pristine || submitted" [name]="(!addCourseForm.controls.duration_value.valid && (addCourseForm.controls.duration_value.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!addCourseForm.controls.duration_value.valid && (addCourseForm.controls.duration_value.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'add_courses.fee\'|translate}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="addCourseData.fee" formControlName="fee"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!addCourseForm.controls.fee.pristine || submitted" [name]="(!addCourseForm.controls.fee.valid && (addCourseForm.controls.fee.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!addCourseForm.controls.fee.valid && (addCourseForm.controls.fee.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'add_courses.content\'|translate}}</ion-label>\n\n        <ion-textarea type="text" [(ngModel)]="addCourseData.content" formControlName="content"></ion-textarea>\n\n        <ion-icon class="validation-icon" *ngIf="!addCourseForm.controls.content.pristine || submitted" [name]="(!addCourseForm.controls.content.valid && (addCourseForm.controls.content.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!addCourseForm.controls.content.valid && (addCourseForm.controls.content.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'add_courses.time\'|translate}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="addCourseData.time_slots" placeholder="HH:mm - HH:mm,HH:mm - HH:mm" formControlName="time_slots"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!addCourseForm.controls.time_slots.pristine || submitted" [name]="(!addCourseForm.controls.time_slots.valid && (addCourseForm.controls.time_slots.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!addCourseForm.controls.time_slots.valid && (addCourseForm.controls.time_slots.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'add_courses.day_off\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="addCourseData.days_off" multiple="true" formControlName="days_off" placeholder="Select">\n\n          <ion-option value="SUN">{{\'add_courses.sun\'|translate}}</ion-option>\n\n          <ion-option value="MON">{{\'add_courses.mon\'|translate}}</ion-option>\n\n          <ion-option value="TUE">{{\'add_courses.tue\'|translate}}</ion-option>\n\n          <ion-option value="WED">{{\'add_courses.wed\'|translate}}</ion-option>\n\n          <ion-option value="THU">{{\'add_courses.thu\'|translate}}</ion-option>\n\n          <ion-option value="FRI">{{\'add_courses.fri\'|translate}}</ion-option>\n\n          <ion-option value="SAT">{{\'add_courses.sat\'|translate}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'add_courses.order\'|translate}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="addCourseData.sort_order" formControlName="sort_order"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{buttonText}}</button>\n\n  </form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-add-course\tutor-add-course.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], TutorAddCoursePage);
    return TutorAddCoursePage;
}());

//# sourceMappingURL=tutor-add-course.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_tutor_experience_add_tutor_experience__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TutorExperiencePage = /** @class */ (function () {
    function TutorExperiencePage(navCtrl, navParams, httpService, serviceName, globalMethods) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.experiences = [];
    }
    TutorExperiencePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var param = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.tutorExperiences, param).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.experiences = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorExperiencePage.prototype.addExperience = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_tutor_experience_add_tutor_experience__["a" /* AddTutorExperiencePage */]);
    };
    TutorExperiencePage.prototype.editExperience = function (experience) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_tutor_experience_add_tutor_experience__["a" /* AddTutorExperiencePage */], { experience: experience });
    };
    TutorExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-experience',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-experience\tutor-experience.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'tutor_exper.title\'| translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list contact-list>\n\n    <ion-item text-wrap *ngFor="let experience of experiences">\n\n      <h4>{{experience.from_date}} - {{experience.to_date}}\n\n\n\n            </h4>\n\n      <p><strong color="danger">{{experience.company}} - {{experience.role}}</strong></p>\n\n      <p>{{experience.description}}</p>\n\n      <ion-icon item-right name="md-create" color="danger" (click)="editExperience(experience)"></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger" (click)="addExperience()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-experience\tutor-experience.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */]])
    ], TutorExperiencePage);
    return TutorExperiencePage;
}());

//# sourceMappingURL=tutor-experience.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorContactInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutor_contact_details_tutor_contact_details__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TutorContactInformationPage = /** @class */ (function () {
    function TutorContactInformationPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.user = {
            photo: this.globalMethods.userType('photo')
        };
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
        this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
    }
    TutorContactInformationPage.prototype.ionViewDidLoad = function () {
    };
    TutorContactInformationPage.prototype.editAddressDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tutor_contact_details_tutor_contact_details__["a" /* TutorContactDetailsPage */]);
    };
    TutorContactInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-contact-information',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-contact-information\tutor-contact-information.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'my_address.info\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="editAddressDetails()">\n\n        <ion-icon name="md-create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list contact-list>\n\n    <ion-item-divider color="right">{{\'my_address.title\'|translate}} </ion-item-divider>\n\n    <ion-item>\n\n      <h4>{{\'my_address.address\'|translate}}</h4>\n\n      <p *ngIf="userData.city!=\'\'">{{userData.city}}</p>\n\n      <p *ngIf="userData.land_mark!=\'\'">{{userData.land_mark}}</p>\n\n      <p *ngIf="userData.country!=\'\'">{{userData.country}}</p>\n\n      <p *ngIf="userData.pin_code">{{userData.pin_code}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <h4>{{\'my_address.info\'|translate}}:</h4>\n\n      <p *ngIf="userData.phone!=\'\'">{{\'my_address.mobile\'|translate}}: {{userData.phone_code}} {{userData.phone}}</p>\n\n      <p>{{\'my_address.email\'|translate}}: {{userData.email}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-contact-information\tutor-contact-information.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], TutorContactInformationPage);
    return TutorContactInformationPage;
}());

//# sourceMappingURL=tutor-contact-information.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lead_details_lead_details__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_filter__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LeadsPage = /** @class */ (function () {
    function LeadsPage(navCtrl, navParams, httpService, globalMethods, serviceName, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.leads = [];
        this.profileImage = '';
        this.courses = [];
        this.locations = [];
        this.teaching_types = [];
        this.profileImage = this.serviceName.profileImages;
        this.courses = this.navParams.data.courses;
        this.locations = this.navParams.data.locations;
        this.teaching_types = this.navParams.data.teachings;
        this.leads = [];
        this.showLoadMore = true;
    }
    LeadsPage.prototype.ionViewDidLoad = function () {
        this.getLeads('');
    };
    LeadsPage.prototype.getLeads = function (infiniteScroll) {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id'),
            courses: this.courses,
            locations: this.locations,
            teaching_types: this.teaching_types,
            from_limit: this.leads.length
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.get_leads, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var value = _a[_i];
                    _this.leads.push(value);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    LeadsPage.prototype.openLeadDetails = function (lead) {
        var _this = this;
        // CHECK FOR LOGIN
        if (this.globalMethods.userType('id') > 0) {
            if (this.globalMethods.userType('net_credits') >= this.globalMethods.siteValue('credits_for_viewing_lead')) {
                var params = {
                    user_id: this.globalMethods.userType('id'),
                    lead_id: lead.lead_id
                };
                // CHECK FOR ALREADY VIEWED THE LEAD
                this.httpService.httpServicePost(this.serviceName.checkViewedLead, params).subscribe(function (data) {
                    if (data[1].response.status == 1) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__lead_details_lead_details__["a" /* LeadDetailsPage */], { lead: lead });
                    }
                    else {
                        _this.showConfirm(lead);
                    }
                }, function (error) {
                    _this.globalMethods.loaderStop();
                    _this.globalMethods.showToast(JSON.stringify(error));
                });
            }
            else {
                this.globalMethods.showToast("You don't have enough credits to view leads");
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }
    };
    LeadsPage.prototype.showConfirm = function (lead) {
        var _this = this;
        var credits_for_viewing_lead = this.globalMethods.siteValue('credits_for_viewing_lead');
        var confirm = this.alertCtrl.create({
            title: 'Information',
            message: 'You will be charged <b color="primary">' + credits_for_viewing_lead + '</b> Credits for viewing the lead Are you sure to continue',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        // CUT THE CREDITS AND ALLOW TO VIEW THE LEAD
                        var params = {
                            tutor_id: _this.globalMethods.userType('id'),
                            lead_id: lead.lead_id,
                            student_id: lead.id,
                            student_slug: lead.slug
                        };
                        _this.globalMethods.loaderStart();
                        // CHECK FOR ALREADY VIEWED THE LEAD
                        _this.httpService.httpServicePost(_this.serviceName.tutorViewLead, params).subscribe(function (data) {
                            _this.globalMethods.loaderStop();
                            if (data[1].response.status == 1) {
                                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data[0]));
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__lead_details_lead_details__["a" /* LeadDetailsPage */], { lead: lead });
                                _this.globalMethods.showToast(data[1].response.status);
                            }
                            else {
                                _this.globalMethods.showToast(data[1].response.status);
                            }
                        }, function (error) {
                            _this.globalMethods.loaderStop();
                            _this.globalMethods.showToast(JSON.stringify(error));
                        }, function () {
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    LeadsPage.prototype.openLeadsFilter = function () {
        var filterTutors = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__filter_filter__["a" /* FilterPage */]);
        filterTutors.present();
    };
    LeadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-leads',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\leads\leads.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_lead_details.sub_title\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openLeadsFilter()">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar [(ngModel)]="term"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let lead of leads | filter:term" (click)="openLeadDetails(lead)">\n\n      <ion-thumbnail item-left>\n\n        <img src="{{profileImage+lead.photo}}">\n\n        <div class="status {{lead.availability_status}}"></div>\n\n      </ion-thumbnail>\n\n      <p color="danger" [innerHTML]="lead.username"></p>\n\n      <h2 [innerHTML]="lead.title_of_requirement"></h2>\n\n      <p [innerHTML]="lead.requirement_details"></p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <p padding *ngIf="leads.length==0">{{\'stu_lead_details.available\'|translate}}</p>\n\n  <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getLeads($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\leads\leads.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], LeadsPage);
    return LeadsPage;
}());

//# sourceMappingURL=leads.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leads_leads__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, navParams, viewCtrl, globalMethods, httpService, serviceName, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.alertCtrl = alertCtrl;
        this.filterTutors = "course";
        this.courses = [];
        this.locations = [];
        this.teachingTypes = [];
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.leads_filter_data, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.courses = [];
            if (data[0].data[0].length != 0) {
                var courses = data[0].data[0];
                for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
                    var course = courses_1[_i];
                    var temp = {
                        id: course.id,
                        course_name: course.name,
                        avail_records_cnt: course.avail_records_cnt,
                        checked: false
                    };
                    _this.courses.push(temp);
                }
            }
            _this.locations = [];
            if (data[0].data[1].length != 0) {
                var locations = data[0].data[1];
                for (var _a = 0, locations_1 = locations; _a < locations_1.length; _a++) {
                    var location_1 = locations_1[_a];
                    var templ = {
                        id: location_1.id,
                        location_name: location_1.location_name,
                        avail_records_cnt: location_1.avail_records_cnt,
                        checked: false
                    };
                    _this.locations.push(templ);
                }
            }
            _this.teachingTypes = [];
            if (data[0].data[2].length != 0) {
                var teachings = data[0].data[2];
                for (var _b = 0, teachings_1 = teachings; _b < teachings_1.length; _b++) {
                    var teaching = teachings_1[_b];
                    var tempt = {
                        id: teaching.id,
                        teaching: teaching.teaching_type,
                        avail_records_cnt: teaching.avail_records_cnt,
                        checked: false
                    };
                    _this.teachingTypes.push(tempt);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage.prototype.getTutorLeads = function () {
        this.selectedCourses = [];
        var courses = this.courses;
        for (var _i = 0, courses_2 = courses; _i < courses_2.length; _i++) {
            var course = courses_2[_i];
            if (course.checked == true) {
                this.selectedCourses.push(course.id);
            }
        }
        this.selectedLocations = [];
        var locations = this.locations;
        for (var _a = 0, locations_2 = locations; _a < locations_2.length; _a++) {
            var location_2 = locations_2[_a];
            if (location_2.checked == true) {
                this.selectedLocations.push(location_2.id);
            }
        }
        this.selectedTeachingTypes = [];
        var teachings = this.teachingTypes;
        for (var _b = 0, teachings_2 = teachings; _b < teachings_2.length; _b++) {
            var teaching = teachings_2[_b];
            if (teaching.checked == true) {
                this.selectedTeachingTypes.push(teaching.id);
            }
        }
        if (this.selectedCourses.length == 0 && this.selectedLocations.length == 0 && this.selectedTeachingTypes.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Filter',
                subTitle: 'Please select Course(s) or Location(s) or Teaching type(s) to filter tutors',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__leads_leads__["a" /* LeadsPage */], { courses: this.selectedCourses, locations: this.selectedLocations, teachings: this.selectedTeachingTypes });
        }
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filter',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\filter\filter.html"*/'<ion-header>\n\n  <ion-toolbar color="white">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{\'stu_teaching_types.filter\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="getTutorLeads()" color="secondary">\n\n        <ion-icon class="ion-md-checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  <ion-toolbar no-border-top color="white">\n\n    <ion-segment [(ngModel)]="filterTutors">\n\n      <ion-segment-button value="course"> {{\'stu_teaching_types.course\'|translate}} </ion-segment-button>\n\n      <ion-segment-button value="location"> {{\'stu_teaching_types.loct\'|translate}} </ion-segment-button>\n\n      <ion-segment-button value="teachingType"> {{\'stu_teaching_types.type\'|translate}}</ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n  <ion-toolbar color="white">\n\n    <ion-searchbar [(ngModel)]="searchText"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div [ngSwitch]="filterTutors">\n\n    <ion-list *ngSwitchCase="\'course\'">\n\n      <ion-item *ngFor="let course of courses | filter:searchText">\n\n        <ion-label> {{course.course_name}} ({{course.avail_records_cnt}})</ion-label>\n\n        <ion-checkbox [(ngModel)]="course.checked"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'location\'">\n\n      <ion-item *ngFor="let location of locations | filter:searchText">\n\n        <ion-label>{{location.location_name}} ({{location.avail_records_cnt}})</ion-label>\n\n        <ion-checkbox [(ngModel)]="location.checked"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'teachingType\'">\n\n      <ion-item *ngFor="let teaching of teachingTypes | filter:searchText">\n\n        <ion-label>{{teaching.teaching}} ({{teaching.avail_records_cnt}})</ion-label>\n\n        <ion-checkbox [(ngModel)]="teaching.checked"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\filter\filter.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutor_profile_tutor_profile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reserve_your_spot_reserve_your_spot__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_filter__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TutorsPage = /** @class */ (function () {
    function TutorsPage(navCtrl, navParams, httpService, globalMethods, serviceName, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.modalCtrl = modalCtrl;
        this.tutors = [];
        this.course = this.navParams.data.course;
    }
    TutorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            course_id: this.course.id
        };
        this.httpService.httpServicePost(this.serviceName.getTutors, params).subscribe(function (data) {
            _this.tutors = data[0].data;
        }, function (error) {
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorsPage.prototype.openTutorProfile = function (tutor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tutor_profile_tutor_profile__["a" /* TutorProfilePage */], { tutor: tutor });
    };
    TutorsPage.prototype.openReserveYourSpot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reserve_your_spot_reserve_your_spot__["a" /* ReserveYourSpotPage */]);
    };
    TutorsPage.prototype.openFilterTutors = function () {
        var filterTutors = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__filter_filter__["a" /* FilterPage */]);
        filterTutors.present();
    };
    TutorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutors',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutors\tutors.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_fav_tutors.sub_title\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openFilterTutors()">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar [(ngModel)]="searchText"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let tutor of tutors | filter:searchText">\n\n      <ion-thumbnail item-left>\n\n        <img *ngIf="tutor.photo!=\'\'" src="{{serviceName.profileImages}}{{tutor.photo}}">\n\n        <img *ngIf="tutor.photo==\'\'" src="{{serviceName.defaultImage}}">\n\n        <div [class]="(tutor.is_online==\'yes\')?\'status online\':\'\'"></div>\n\n      </ion-thumbnail>\n\n      <div (click)="openTutorProfile(tutor)">\n\n        <h2>{{tutor.username}}</h2>\n\n        <p>{{\'stu_fav_tutors.demo\'|translate}} : {{tutor.free_demo}}</p>\n\n        <p>{{\'stu_fav_tutors.exprience\'|translate}} {{tutor.teaching_experience}} {{tutor.duration_of_experience}}</p>\n\n        <p>{{\'stu_fav_tutors.qualification\'|translate}} : {{tutor.qualification}} </p>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutors\tutors.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TutorsPage);
    return TutorsPage;
}());

//# sourceMappingURL=tutors.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversionRequestsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConversionRequestsDetailsPage = /** @class */ (function () {
    function ConversionRequestsDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.conversionDetails = this.navParams.data.conversion;
    }
    ConversionRequestsDetailsPage.prototype.ionViewDidLoad = function () {
    };
    ConversionRequestsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conversion-requests-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\conversion-requests-details\conversion-requests-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{\'conversion_request_details.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item text-wrap>\n\n      <h2>{{\'conversion_request_details.id\'|translate}}</h2>\n\n      <p item-right>{{conversionDetails.booking_id}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2>{{\'conversion_request_details.paypal\'|translate}}</h2>\n\n      <p>{{conversionDetails.user_paypal_email}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2>{{\'conversion_request_details.ac\'|translate}}</h2>\n\n      <p>{{conversionDetails.user_bank_ac_details}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2 item-left>{{\'conversion_request_details.converted\'|translate}}</h2>\n\n      <p item-right>{{conversionDetails.no_of_credits_to_be_converted}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2 item-left>{{\'conversion_request_details.admin\'|translate}} </h2>\n\n      <p item-right>{{conversionDetails.admin_commission_val}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2 item-left>{{\'conversion_request_details.per\'|translate}}</h2>\n\n      <p item-right>{{conversionDetails.per_credit_cost}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2 item-left>{{\'conversion_request_details.total\'|translate}}</h2>\n\n      <p item-right>{{conversionDetails.total_amount}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2>{{\'conversion_request_details.status\'|translate}}</h2>\n\n      <p color="danger" item-right>{{conversionDetails.status_of_payment}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2>{{\'conversion_request_details.updated\'|translate}}</h2>\n\n      <p>{{conversionDetails.created_at}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\conversion-requests-details\conversion-requests-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ConversionRequestsDetailsPage);
    return ConversionRequestsDetailsPage;
}());

//# sourceMappingURL=conversion-requests-details.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getAboutUs, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.aboutus = data[0].data[0].description;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\about-us\about-us.html"*/'<ion-header no-border>\n\n	<ion-navbar color="primary">\n\n		<button ion-button menuToggle>\n\n			<ion-icon class="tuts-list"></ion-icon>\n\n		</button>\n\n		<ion-title>{{\'about.title\'|translate}}</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<div [innerHTML]="aboutus"></div>\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\about-us\about-us.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogDetailsPage = /** @class */ (function () {
    function BlogDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blog_details = {};
    }
    BlogDetailsPage.prototype.ionViewDidLoad = function () {
        this.blog_details = this.navParams.data.blog;
    };
    BlogDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blog-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\blog-details\blog-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{blog_details.title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-card>\n\n  		<ion-card-title>\n\n      			{{blog_details.title}}\n\n      	</ion-card-title>\n\n  		<img [src]="blog_details.image_url"/>\n\n  		<ion-item>\n\n		    <ion-avatar item-start>\n\n		      <img [src]="blog_details.author_image_full_url">\n\n		    </ion-avatar>\n\n		    <h2 text-wrap>{{blog_details.author_name}} , <span class="date_span">{{blog_details.approved_datetime}}</span></h2>\n\n		</ion-item>\n\n  		<ion-card-content>\n\n  			<p [innerHTML]="blog_details.description"></p>\n\n  		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\blog-details\blog-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], BlogDetailsPage);
    return BlogDetailsPage;
}());

//# sourceMappingURL=blog-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_details_blog_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogPage = /** @class */ (function () {
    function BlogPage(navCtrl, navParams, globalMethods, serviceName, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.httpService = httpService;
        this.blogs = [];
        this.showLoadMore = false;
    }
    BlogPage.prototype.ionViewDidLoad = function () {
        this.getBlogs('');
    };
    BlogPage.prototype.getBlogs = function (infiniteScroll) {
        var _this = this;
        var params = {
            from_limit: this.blogs.length,
            to_limit: ''
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.get_blogs, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                var i = 0;
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var blog = _a[_i];
                    i++;
                    blog['author_image_full_url'] = _this.serviceName.profileUrl + blog.author_photo;
                    _this.blogs.push(blog);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
        });
    };
    BlogPage.prototype.openBlogDetails = function (blog) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__blog_details_blog_details__["a" /* BlogDetailsPage */], { blog: blog });
    };
    BlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blog',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\blog\blog.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'blog.title\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n	<ion-card *ngFor="let blog of blogs" (click)="openBlogDetails(blog)">\n\n  		<ion-card-title>\n\n      			{{blog.title}}\n\n      	</ion-card-title>\n\n  		<img class="blog_image" [src]="blog.image_url"/>\n\n  		<ion-item>\n\n		    <ion-avatar item-start>\n\n		      <img [src]="blog.author_image_full_url">\n\n		    </ion-avatar>\n\n		    <h2 text-wrap>{{blog.author_name}} , <span class="date_span">{{blog.approved_datetime}}</span></h2>\n\n		</ion-item>\n\n  		<ion-card-content class="blog_description">\n\n  			<p text-wrap [innerHTML]="blog.description"></p>\n\n  		</ion-card-content>\n\n	</ion-card>\n\n    <p padding *ngIf="blogs.length==0">{{\'blog.available\'|translate}}</p>\n\n<ion-infinite-scroll position="top" *ngIf="showLoadMore==true" (ionInfinite)="getBlogs($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n</ion-infinite-scroll> \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\blog\blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */]])
    ], BlogPage);
    return BlogPage;
}());

//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__choose_file_modal_choose_file_modal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_opener__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CertificatesPage = /** @class */ (function () {
    function CertificatesPage(navCtrl, navParams, transfer, file, fileChooser, filePath, camera, modalCtrl, globalMethods, httpService, serviceName, toast, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.toast = toast;
        this.fileOpener = fileOpener;
        this.selectedFileName = '';
        this.certificates = [];
        this.upload_certificates = [];
    }
    CertificatesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.httpService.httpServicePost(this.serviceName.certificates_tutors_get, params).subscribe(function (data) {
            var i = 0;
            for (var _i = 0, _a = data[0].data.certificates; _i < _a.length; _i++) {
                var certificate = _a[_i];
                i++;
                var file = data[0].data.user_uploads_arr["" + certificate.certificate_id + ""] ? data[0].data.user_uploads_arr["" + certificate.certificate_id + ""] : _this.serviceName.default_pictureImage;
                certificate['file'] = file;
                certificate['user_id'] = _this.globalMethods.userType('id');
                certificate['upload_file'] = '';
                if (certificate.file == '') {
                    certificate['upload_status'] = 'Select File';
                    certificate['upload_fileTypeImage'] = _this.serviceName.default_pictureImage;
                }
                else {
                    certificate['upload_status'] = 'Download File';
                    certificate['upload_fileTypeImage'] = certificate.file;
                }
                _this.certificates.push(certificate);
                if (i == data[0].data.certificates.length) {
                    var upload_status = '';
                    var upload_fileTypeImage = '';
                    var file_1 = data[0].data.user_uploads_arr["0"] ? data[0].data.user_uploads_arr["0"] : _this.serviceName.default_pictureImage;
                    if (file_1 == '') {
                        upload_status = 'Select File';
                        upload_fileTypeImage = _this.serviceName.default_pictureImage;
                    }
                    else {
                        upload_status = 'Download File';
                        upload_fileTypeImage = file_1;
                    }
                    var params_1 = {
                        "user_id": _this.globalMethods.userType('id'),
                        "certificate_id": "0",
                        "title": "Other",
                        "description": "<p>\r\n\ Other</p>\r\n",
                        "required": "",
                        "allowed_formats": "",
                        "certificate_for": "",
                        "status": "",
                        "created": "",
                        "updated": '',
                        "file": "",
                        upload_file: '',
                        upload_fileTypeImage: upload_fileTypeImage,
                        upload_status: upload_status
                    };
                    _this.certificates.push(params_1);
                }
            }
        }, function (error) { });
    };
    CertificatesPage.prototype.downloadFile = function (certificate) {
        var _this = this;
        var name = "" + certificate.title + ".jpg";
        var url = certificate.file;
        var fileTransfer = this.transfer.create();
        fileTransfer.onProgress(function (data) {
            if (data.lengthComputable) {
                var percentage = ((data.loaded / data.total) * 100).toFixed(0);
                _this.toast.show(percentage + "% downloading...", '1000', 'bottom').subscribe(function (toast) { });
            }
        });
        if (url != '') {
            fileTransfer.download(url, this.file.dataDirectory + name).then(function (entry) {
                _this.toast.show("Download completed, file stored in " + entry.toURL(), '8000', 'bottom').subscribe(function (toast) { });
            }, function (error) {
                // handle error
            });
        }
    };
    CertificatesPage.prototype.presentProfileModal = function (certificate) {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__choose_file_modal_choose_file_modal__["a" /* ChooseFileModalPage */], { certificate: certificate });
        profileModal.onDidDismiss(function (certificate_back) {
            for (var _i = 0, _a = _this.certificates; _i < _a.length; _i++) {
                var cert = _a[_i];
                if (cert.certificate_id == certificate_back.certificate_id) {
                    cert.upload_file = certificate_back.upload_file;
                    cert.upload_status = 'Upload Pending';
                    if (cert.upload_file != cert.file) {
                        _this.upload_certificates.push(cert);
                    }
                }
            }
        });
        profileModal.present();
    };
    CertificatesPage.prototype.callUploadRecursive = function (array) {
        if (array.length > 0) {
            this.uploadFile(array, array[0]);
        }
    };
    CertificatesPage.prototype.uploadFile = function (array, params) {
        var _this = this;
        var options = {
            fileKey: 'userfile',
            fileName: params.upload_file,
            headers: {},
            params: params,
            chunkedMode: false
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.onProgress(function (data) {
            if (data.lengthComputable) {
                var percentage = ((data.loaded / data.total) * 100).toFixed(0);
                _this.toast.show(percentage + "% uploading...", '8000', 'bottom').subscribe(function (toast) { });
            }
        });
        fileTransfer.upload(params.upload_file, this.serviceName.certificates_upload, options).then(function (data) {
            var response = JSON.parse(data.response);
            for (var _i = 0, _a = _this.certificates; _i < _a.length; _i++) {
                var cert = _a[_i];
                if (cert.certificate_id == options.params.certificate_id) {
                    cert.file = response[0].data.path;
                    cert.upload_status = 'Upload completed';
                }
            }
            array.splice(0, 1);
            _this.callUploadRecursive(array);
        }, function (err) {
            for (var _i = 0, _a = _this.certificates; _i < _a.length; _i++) {
                var cert = _a[_i];
                if (cert.certificate_id == options.params.certificate_id) {
                    cert.upload_status = 'Upload Error';
                }
            }
            array.splice(0, 1);
            _this.callUploadRecursive(array);
        }).catch(function (cat) {
        });
    };
    CertificatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-certificates',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\certificates\certificates.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'certificate.title\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <p style="padding-left: 10px;">{{\'certificate.upload\'|translate}}   </p>\n\n    <ion-card *ngFor="let certificate of certificates">\n\n        <ion-item class="cert_card" (click)="downloadFile(certificate)">\n\n            <ion-thumbnail item-start class="certificate_thumb">\n\n                <img class="certificate_thumb" [src]="certificate.upload_fileTypeImage">\n\n            </ion-thumbnail>\n\n            <h2>{{certificate.title}}</h2>\n\n            <p>{{certificate.upload_status}}</p>\n\n        </ion-item>\n\n        <button ion-button clear item-end icon-only class="cert_add_btn" (click)="presentProfileModal(certificate)"><ion-icon name="md-add-circle"></ion-icon></button>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-fab bottom right>\n\n        <button ion-fab color="primary" (click)="callUploadRecursive(upload_certificates)" [attr.disabled]="upload_certificates.length!=0? null :\'true\'"><ion-icon class="tuts-upload"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-footer>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\certificates\certificates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_8__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_10__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_opener__["a" /* FileOpener */]])
    ], CertificatesPage);
    return CertificatesPage;
}());

//# sourceMappingURL=certificates.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_address_my_address__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactDetailsPage = /** @class */ (function () {
    function ContactDetailsPage(navCtrl, navParams, globalMethods, httpService, serviceName, menuCtrl, modalCtrl, validationservice, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.validationservice = validationservice;
        this.formBuilder = formBuilder;
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.academic_checked = false;
        if (this.userData.academic_class == 'yes') {
            this.academic_checked = true;
        }
        this.userData.academic_class = this.academic_checked;
        this.non_academic_checked = false;
        if (this.userData.non_academic_class == 'yes') {
            this.non_academic_checked = true;
        }
        this.userData.non_academic_class = this.non_academic_checked;
        this.contactForm = formBuilder.group({
            city: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            landMark: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            country: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            pinCode: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            academicClass: [''],
            nonAcademicClass: ['']
        });
    }
    ContactDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getCountries, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.countries = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    ContactDetailsPage.prototype.updateContactInfo = function () {
        var _this = this;
        var params = {
            user_id: this.userData.id,
            city: this.userData.city,
            land_mark: this.userData.land_mark,
            country: this.userData.country,
            pin_code: this.userData.pin_code,
            phone: this.userData.phone,
            academic_class: (this.userData.academic_class == true) ? 'yes' : 'no',
            non_academic_class: (this.userData.non_academic_class == true) ? 'yes' : 'no'
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentContactDetails, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__my_address_my_address__["a" /* MyAddressPage */]);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    ContactDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\contact-details\contact-details.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'contact_details.title\'| translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="contactForm" novalidate (ngSubmit)="(contactForm.valid && submitted) && updateContactInfo()">\n\n    <ion-list contact-list>\n\n      <ion-item>\n\n        <ion-label floating>{{\'contact_details.city\'| translate}}</ion-label>\n\n        <ion-input type="text" formControlName="city" [(ngModel)]="userData.city"></ion-input>\n\n        <ion-icon class="validation-service" *ngIf="!contactForm.controls.city.pristine || submitted"\n\n        [name]="(!contactForm.controls.city.valid && (contactForm.controls.city.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n        [color]="(!contactForm.controls.city.valid && (contactForm.controls.city.dirty || submitted)) ? \'danger\':\'valid\'"\n\n        item-right>\n\n      </ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>{{\'contact_details.landmark\'| translate}}</ion-label>\n\n      <ion-input type="text" formControlName="landMark" [(ngModel)]="userData.land_mark"></ion-input>\n\n      <ion-icon class="validation-service" *ngIf="!contactForm.controls.landMark.pristine || submitted"\n\n      [name]="(!contactForm.controls.landMark.valid && (contactForm.controls.landMark.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n      [color]="(!contactForm.controls.landMark.valid && (contactForm.controls.landMark.dirty || submitted)) ? \'danger\':\'valid\'"\n\n      item-right>\n\n    </ion-icon>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>{{\'contact_details.country\'| translate}}</ion-label>\n\n    <ion-select formControlName="country" [(ngModel)]="userData.country">\n\n      <ion-option *ngFor="let country of countries">{{country.nicename}}</ion-option>\n\n    </ion-select>\n\n    <ion-icon class="validation-service" *ngIf="!contactForm.controls.country.pristine || submitted"\n\n    [name]="(!contactForm.controls.country.valid && (contactForm.controls.country.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n    [color]="(!contactForm.controls.country.valid && (contactForm.controls.country.dirty || submitted)) ? \'danger\':\'valid\'"\n\n    item-right>\n\n  </ion-icon>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>{{\'contact_details.pin\'| translate}}</ion-label>\n\n    <ion-input type="text" formControlName="pinCode" [(ngModel)]="userData.pin_code"></ion-input>\n\n    <ion-icon class="validation-service" *ngIf="!contactForm.controls.pinCode.pristine || submitted"\n\n    [name]="(!contactForm.controls.pinCode.valid && (contactForm.controls.pinCode.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n    [color]="(!contactForm.controls.pinCode.valid && (contactForm.controls.pinCode.dirty || submitted)) ? \'danger\':\'valid\'"\n\n    item-right>\n\n  </ion-icon>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>{{\'contact_details.phone\'| translate}}</ion-label>\n\n    <ion-input type="text" formControlName="phone" [(ngModel)]="userData.phone"></ion-input>\n\n    <ion-icon class="validation-service" *ngIf="!contactForm.controls.phone.pristine || submitted"\n\n    [name]="(!contactForm.controls.phone.valid && (contactForm.controls.phone.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n    [color]="(!contactForm.controls.phone.valid && (contactForm.controls.phone.dirty || submitted)) ? \'danger\':\'valid\'"\n\n    item-right>\n\n  </ion-icon>\n\n  </ion-item>\n\n  <ion-list-header>{{\'contact_details.classes\'| translate}}</ion-list-header>\n\n  <ion-item>\n\n    <ion-label>{{\'contact_details.academic\'| translate}}</ion-label>\n\n    <ion-checkbox formControlName="academicClass" [(ngModel)]="userData.academic_class"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>{{\'contact_details.no_academic\'| translate}}</ion-label>\n\n    <ion-checkbox formControlName="nonAcademicClass" [(ngModel)]="userData.non_academic_class"></ion-checkbox>\n\n  </ion-item>\n\n  </ion-list>\n\n  <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'contact_details.submit\'| translate}} </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\contact-details\contact-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], ContactDetailsPage);
    return ContactDetailsPage;
}());

//# sourceMappingURL=contact-details.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditTransHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreditTransHistoryPage = /** @class */ (function () {
    function CreditTransHistoryPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.credit_history = [];
        this.filteredCreditHistory = [];
        this.creditType = "all";
    }
    CreditTransHistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentCreditTransHistory, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.credit_history = data[0].data;
            _this.filteredCreditHistory = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    CreditTransHistoryPage.prototype.filterByStatus = function () {
        this.filteredCreditHistory = [];
        if (this.creditType != 'all') {
            for (var i = 0; i < this.credit_history.length; i++) {
                if (this.creditType == this.credit_history[i].action) {
                    var element = this.credit_history[i];
                    this.filteredCreditHistory.push(element);
                }
            }
        }
        else {
            this.filteredCreditHistory = this.credit_history;
        }
    };
    CreditTransHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-trans-history',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\credit-trans-history\credit-trans-history.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle><ion-icon class="tuts-list"></ion-icon></button>\n\n\n\n\n\n    <ion-title>{{\'credit_trans_history.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-item no-lines>\n\n      <ion-icon name="color-fill" item-left color="stable"></ion-icon>\n\n      <ion-label> {{\'credit_trans_history.filter\'|translate}}</ion-label>\n\n      <ion-select [(ngModel)]="creditType" (ionChange)="filterByStatus()">\n\n        <ion-option value="all"> {{\'credit_trans_history.all\'|translate}} </ion-option>\n\n        <ion-option value="credited"> {{\'credit_trans_history.credited\'|translate}} </ion-option>\n\n        <ion-option value="debited"> {{\'credit_trans_history.debited\'|translate}} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n <ion-list>\n\n   <ion-item *ngFor="let credit of filteredCreditHistory">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-10><h3 text-wrap>{{credit.purpose}}</h3>  </ion-col>\n\n        <ion-col col-2><ion-badge class="badge_credit" [color]="credit.action==\'debited\' ? \'danger\':\'secondary\' ">{{credit.action}}</ion-badge></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-10><p class="date_credit"><ion-icon  name="calendar"></ion-icon> {{credit.date_of_action}}</p></ion-col>\n\n        <ion-col col-2><p><ion-note class="note_credit" item-right color="danger">{{credit.credits}}</ion-note></p></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\credit-trans-history\credit-trans-history.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], CreditTransHistoryPage);
    return CreditTransHistoryPage;
}());

//# sourceMappingURL=credit-trans-history.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCoursePurchasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyCoursePurchasesPage = /** @class */ (function () {
    function MyCoursePurchasesPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.coursePurchases = [];
    }
    MyCoursePurchasesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentCoursePurchases, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.coursePurchases = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    MyCoursePurchasesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-course-purchases',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\my-course-purchases\my-course-purchases.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle><ion-icon class="tuts-list"></ion-icon></button>\n\n    <ion-title>{{\'my_course_purchases.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let course of coursePurchases">\n\n      <h2>{{course.course_title}}</h2>\n\n      <p><span>{{\'my_course_purchases.name\'|translate}}:</span> <strong> {{course.tutor_name}} </strong> </p>\n\n      <p><span>{{\'my_course_purchases.purchases\'|translate}}:</span> <strong> {{course.paid_date}} </strong> </p>\n\n      <p><span>{{\'my_course_purchases.max\'|translate}}:</span> <strong> {{course.max_downloads}} </strong> </p>\n\n      <p><span>{{\'my_course_purchases.total\'|translate}}:</span> <strong> {{course.total_downloads}} </strong></p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\my-course-purchases\my-course-purchases.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], MyCoursePurchasesPage);
    return MyCoursePurchasesPage;
}());

//# sourceMappingURL=my-course-purchases.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuFavTutorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stu_tutor_profile_stu_tutor_profile__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StuFavTutorsPage = /** @class */ (function () {
    function StuFavTutorsPage(navCtrl, navParams, globalMethods, httpService, serviceName, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.alertCtrl = alertCtrl;
        this.favTutors = [];
    }
    StuFavTutorsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            student_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentFavTutors, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                _this.favTutors = data[0].data;
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StuFavTutorsPage.prototype.openTutorProfile = function (tutor) {
        if (tutor.availability_status == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Tutor Status',
                subTitle: 'This Tutor Is Not Available Now',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__stu_tutor_profile_stu_tutor_profile__["a" /* StuTutorProfilePage */], { tutor: tutor });
        }
    };
    StuFavTutorsPage.prototype.removeTutor = function (fav_id) {
        var _this = this;
        var params = {
            fav_id: fav_id,
            student_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.removeFavTutor, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                _this.favTutors = data[0].data;
            }
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    StuFavTutorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stu-fav-tutors',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-fav-tutors\stu-fav-tutors.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'stu_fav_tutors.title\'|translate}} </ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar color="primary">\n\n        <ion-searchbar [(ngModel)]="searchText"></ion-searchbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-item *ngFor="let tutor of favTutors | filter: searchText">\n\n        <ion-thumbnail item-left>\n\n            <img *ngIf="tutor.photo!=\'\'" src="{{serviceName.profileImages}}{{tutor.photo}}">\n\n            <img *ngIf="tutor.photo==\'\'" src="{{serviceName.defaultImage}}">\n\n            <div [class]="tutor.availability_status==1?\'status:online\':\'status:offline\'"></div>\n\n        </ion-thumbnail>\n\n        <ion-icon name="trash" color="danger" item-right (click)="removeTutor(tutor.fav_id)"></ion-icon>\n\n        <div (click)="openTutorProfile(tutor)">\n\n            <h2>{{tutor.username}} </h2>\n\n            <p>{{\'stu_fav_tutors.demo\'|translate}}  : {{tutor.free_demo}}</p>\n\n            <p>{{\'stu_fav_tutors.exprience\'|translate}} {{tutor.teaching_experience}} {{tutor.duration_of_experience}}</p>\n\n            <p> {{\'stu_fav_tutors.qualification\'|translate}}  {{tutor.qualification}}</p>\n\n        </div>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-fav-tutors\stu-fav-tutors.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], StuFavTutorsPage);
    return StuFavTutorsPage;
}());

//# sourceMappingURL=stu-fav-tutors.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuQuestionAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_move_js__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_move_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_move_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_native__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stu_question_answer_conversation_stu_question_answer_conversation__ = __webpack_require__(107);
throw new Error("Cannot find module \"ng2-translate\"");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StuQuestionAnswerPage = /** @class */ (function () {
    function StuQuestionAnswerPage(navCtrl, translate, params, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.params = params;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.sender = {};
        this.receiver = {};
        this.question_ask = '';
        this.show_hide_search = false;
        this.showLoadMoreQuestions = true;
        this.showLoadMoreQuestions_conversation = true;
        this.questionAnswer = {
            message: ''
        };
        this.questions = [];
        this.added_questions = [];
        this.showLoadMore = true;
        this.is_conversation_visible = false;
        this.is_reply = false;
        this.is_add_question = false;
    }
    StuQuestionAnswerPage.prototype.ionViewDidLoad = function () {
        this.searchInput = '';
        this.httpService.cacheClearAll();
        if (this.globalMethods.userType('user_belongs_group') == this.serviceName.student) {
            this.receiver.imageFullUrl = this.serviceName.profileUrl + this.params.data.receiver.tutor_photo;
            this.receiver.name = this.params.data.receiver.tutor_name;
            this.receiver.device_id = this.params.data.receiver.device_id; //not getting from booking details
            this.receiver.course_name = this.params.data.receiver.course_name;
            this.receiver.user_id = this.params.data.receiver.tutor_id;
        }
        this.sender.imageFullUrl = this.globalMethods.userType('photo');
        this.sender.name = this.globalMethods.userType('username');
        this.sender.device_id = this.globalMethods.userType('device_id');
        this.sender.user_id = this.globalMethods.userType('id');
        this.getQuestions('');
    };
    StuQuestionAnswerPage.prototype.getQuestions = function (infiniteScroll) {
        var _this = this;
        var params = {
            student_id: this.sender.user_id,
            tutor_id: this.receiver.user_id,
            booking_id: this.params.data.receiver.booking_id,
            records_from: this.questions.length,
            limit: 10
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.booking_questions_get, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMoreQuestions = true;
                }
                var i = 0;
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var question = _a[_i];
                    i++;
                    question['show_chat'] = false;
                    question['is_reply'] = false;
                    question['questionConversation'] = [];
                    question['questionConversation_filtered'] = [];
                    _this.questions.push(question);
                    _this.questions_filtered = _this.questions.slice();
                    if (i == data[0].data.length && _this.added_questions.length > 0) {
                        for (var _b = 0, _c = _this.added_questions; _b < _c.length; _b++) {
                            var que = _c[_b];
                            _this.questions_filtered.push(que);
                        }
                    }
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMoreQuestions = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
        });
    };
    StuQuestionAnswerPage.prototype.addQuestion = function () {
        this.is_add_question = !this.is_add_question;
        this.show_hide_search = false;
        if (this.is_add_question) {
            this.question_ask = '';
            __WEBPACK_IMPORTED_MODULE_5_move_js___default()('.add_question_fab').ease('in').y(-65).rotate(180).end();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_move_js___default()('.add_question_fab').ease('in').y(0).end();
        }
    };
    StuQuestionAnswerPage.prototype.saveQuestion = function (question_text) {
        var _this = this;
        var params = {
            student_id: this.sender.user_id,
            tutor_id: this.receiver.user_id,
            device_id: this.receiver.device_id,
            booking_id: this.params.data.receiver.booking_id,
            question_text: question_text,
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.question_add, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.question_ask = '';
            var que = {
                question_id: data[0].data[0].question_id,
                imageFullUrl: data[0].data[0].imageFullUrl,
                question_text: data[0].data[0].question_text,
                chat_count: data[0].data[0].chat_count,
                show_chat: false,
                is_reply: false,
                datetime: data[0].data[0].datetime,
                questionConversation: [],
                questionConversation_filtered: []
            };
            _this.added_questions.push(que);
            _this.questions_filtered.reverse();
            _this.questions_filtered.push(que);
            _this.questions_filtered.reverse();
            _this.addQuestion();
        }, function (error) {
            _this.globalMethods.loaderStop();
        });
    };
    StuQuestionAnswerPage.prototype.showHideSearch = function () {
        this.show_hide_search = !this.show_hide_search;
        var self = this;
        setTimeout(function () {
            if (self.show_hide_search) {
                var elem = document.querySelector('.search_bar input');
                if (elem) {
                    elem.focus();
                    __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Keyboard */].show();
                }
            }
        }, 20);
    };
    StuQuestionAnswerPage.prototype.searchQuestions = function (ev) {
        var val = ev.target.value;
        this.questions_filtered = this.questions;
        this.questions_filtered = this.questions.slice();
        if (val && val.trim() != '') {
            this.questions_filtered = this.questions_filtered.filter(function (item) {
                return (item.question_text.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.questions_filtered = this.questions.slice();
            return this.questions_filtered;
        }
    };
    StuQuestionAnswerPage.prototype.onCancel = function (ev) {
        this.show_hide_search = !this.show_hide_search;
        ev.target.value = '';
    };
    StuQuestionAnswerPage.prototype.openConversationPage = function (question, sender, receiver) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__stu_question_answer_conversation_stu_question_answer_conversation__["a" /* StuQuestionAnswerConversationPage */], { question: question, sender: sender, receiver: receiver });
    };
    var _a;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], StuQuestionAnswerPage.prototype, "content", void 0);
    StuQuestionAnswerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stu-question-answer',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-question-answer\stu-question-answer.html"*/'<ion-header no-shadow>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="tuts-list"></ion-icon>\n\n        </button>\n\n        <ion-title text-wrap *ngIf="!show_hide_search">{{receiver.course_name}}</ion-title>\n\n        <ion-searchbar *ngIf="show_hide_search" class="search_bar" [(ngModel)]="searchInput" (ionInput)="searchQuestions($event)" (ionCancel)="onCancel($event)" [showCancelButton]="false"></ion-searchbar>\n\n        <ion-buttons end>\n\n            <button (click)="showHideSearch()" ion-button icon-only>\n\n                <ion-icon [name]="show_hide_search ? \'close\' : \'search\'"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card *ngFor="let question of questions_filtered" (click)="openConversationPage(question,sender,receiver)">\n\n        <div class="question_div">\n\n            <img class="que-profile-pic" [src]="question.tutorImageFullUrl" />\n\n            <h4 color="primary"> {{question.question_text}}</h4>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-6 align-self-start>\n\n                        <button ion-button clear color="menu-o">\n\n                        <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                        <h5> {{\'stu_question_answer.conversation\'| translate}} ({{question.chat_count}})</h5>\n\n                    </button>\n\n                    </ion-col>\n\n                    <ion-col col-6 align-self-end>\n\n                        <button ion-button clear color="menu-o">\n\n                    <ion-icon name="ios-calendar-outline"></ion-icon>\n\n                    <h5>{{question.datetime}}</h5>\n\n                    </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n    </ion-card>\n\n    <p padding *ngIf="questions.length==0">{{\'stu_question_answer.available\'| translate}}</p>\n\n    <ion-infinite-scroll *ngIf="showLoadMoreQuestions==true" (ionInfinite)="getQuestions($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n    <ion-fab bottom right class="add_question_fab">\n\n        <button ion-fab color="primary" (click)="addQuestion()"><ion-icon [name]="!is_add_question ? \'md-add\' : \'md-close\'"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n<ion-footer *ngIf="is_add_question">\n\n    <ion-toolbar>\n\n        <ion-textarea placeholder="{{\'stu_question_answer.placeholder\'| translate}}" [(ngModel)]="question_ask"></ion-textarea>\n\n        <ion-buttons end>\n\n            <button ion-button color="success" class="button-xl" (click)="saveQuestion(question_ask)" [attr.disabled]="question_ask.length!=0? null :\'true\'">\n\n                <ion-icon name="send"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-question-answer\stu-question-answer.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["TranslateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["TranslateService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], StuQuestionAnswerPage);
    return StuQuestionAnswerPage;
}());

//# sourceMappingURL=stu-question-answer.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentBookingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_bookings_student_bookings__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stu_question_answer_stu_question_answer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stu_chat_stu_chat__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_email_composer__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StudentBookingDetailsPage = /** @class */ (function () {
    function StudentBookingDetailsPage(navCtrl, navParams, httpService, serviceName, globalMethods, alertCtrl, callNumber, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.booking_status = [];
        this.bookingDetails = this.navParams.data.selectedBooking;
    }
    StudentBookingDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            booking_id: this.bookingDetails.booking_id,
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentBookingStatus, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                if (data[0].data.length != 0) {
                    _this.booking_status = data[0].data;
                }
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    StudentBookingDetailsPage.prototype.changeStatusAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Change Booking Status');
        var booking_length = this.booking_status.length;
        for (var index = 0; index < booking_length; index++) {
            var element = this.booking_status[index];
            alert.addInput({
                type: 'radio',
                label: element.status_value,
                value: element.status_key,
                checked: false
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                var params = {
                    booking_id: _this.bookingDetails.booking_id,
                    status: data,
                    prev_status: _this.bookingDetails.status,
                    updated_by: _this.globalMethods.userType('id'),
                    device_id: _this.bookingDetails.device_id
                };
                _this.globalMethods.loaderStart();
                _this.httpService.httpServicePost(_this.serviceName.updateBookingStatus, params).subscribe(function (data) {
                    _this.globalMethods.loaderStop();
                    if (data[1].response.status == 1) {
                        _this.globalMethods.showToast(data[1].response.message);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__student_bookings_student_bookings__["a" /* StudentBookingsPage */]);
                    }
                    else {
                        _this.globalMethods.showToast(data[1].response.message);
                    }
                }, function (error) {
                    _this.globalMethods.loaderStop();
                    _this.globalMethods.showToast(JSON.stringify(error));
                });
            }
        });
        alert.present();
    };
    StudentBookingDetailsPage.prototype.chatPagePopCallback = function (_params) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    StudentBookingDetailsPage.prototype.openChatPage = function (receiverDetails, fab) {
        fab.close();
        receiverDetails['messages_count'] = 0;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__stu_chat_stu_chat__["a" /* StuChatPage */], { receiver: receiverDetails, callback: this.chatPagePopCallback, chat_members: [], dashboard_data_dasboardDetials: {} });
    };
    StudentBookingDetailsPage.prototype.openQuestionAnswerPage = function (receiverDetails, fab) {
        fab.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__stu_question_answer_stu_question_answer__["a" /* StuQuestionAnswerPage */], { receiver: receiverDetails });
    };
    StudentBookingDetailsPage.prototype.voiceCall = function (receiver, fab) {
        var _this = this;
        fab.close();
        this.globalMethods.loaderStart();
        if (receiver.phone != '') {
            this.callNumber.callNumber(receiver.phone, true).then(function (data) {
                _this.globalMethods.loaderStop();
            }).catch(function (error) {
                _this.globalMethods.loaderStop();
            });
        }
    };
    StudentBookingDetailsPage.prototype.emailChat = function (receiver, fab) {
        fab.close();
        if (receiver.email != '') {
            var email = { to: receiver.email, isHtml: true };
            this.emailComposer.open(email);
        }
    };
    StudentBookingDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-booking-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-booking-details\student-booking-details.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon class="tuts-list"></ion-icon>\n\n      </button>\n\n      <ion-title>Booking Details</ion-title>\n\n      <ion-buttons end *ngIf="booking_status.length!=0">\n\n        <button *ngIf="bookingDetails.status != \'closed\'" (click)="changeStatusAlert()" ion-button icon-only>\n\n            <ion-icon name="md-create"></ion-icon> \n\n        </button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img *ngIf="bookingDetails.tutor_photo==\'\'" src="{{serviceName.defaultImage}}">\n\n                <img *ngIf="bookingDetails.tutor_photo != \'\'" src="{{serviceName.profileUrl}}{{bookingDetails.tutor_photo}}">\n\n            </ion-avatar>\n\n            <h2>{{bookingDetails.tutor_name}}</h2>\n\n            <p>{{bookingDetails.course_name}}</p>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <h2>Content</h2>\n\n            <p [innerHTML]="bookingDetails.content" text-capitalize></p>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <p>Duration value</p>\n\n                    <h2>{{bookingDetails.duration_value}}</h2>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <p>Duration Type</p>\n\n                    <h2>{{bookingDetails.duration_type}}</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <p>Fee (In credits)</p>\n\n                    <h2>{{bookingDetails.fee}}</h2>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <p>Per Credit Value()</p>\n\n                    <h2>{{bookingDetails.per_credit_value}}</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <p>Preferred Commence Date</p>\n\n                    <h2>{{bookingDetails.start_date}}</h2>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <p>End Date</p>\n\n                    <h2>{{bookingDetails.end_date}}</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <p>Timeslot</p>\n\n                    <h2>{{bookingDetails.time_slot}}</h2>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <p>Days off</p>\n\n                    <h2>{{bookingDetails.days_off}}</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <p>Preferred Location</p>\n\n            <h2>{{bookingDetails.preferred_location}}</h2>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <p>Message</p>\n\n            <h2>{{bookingDetails.message}}</h2>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <p>Admin Commission Percentage (in Credits) (With credits)</p>\n\n                    <h2>{{bookingDetails.admin_commission}}</h2>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <p>Prev status</p>\n\n                    <h2 color="secondary">{{bookingDetails.prev_status}}</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <p>Booking Status</p>\n\n                    <h2>{{bookingDetails.status | case }}</h2>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <p>Status Desc</p>\n\n                    <h2>{{bookingDetails.status_desc}}</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n        <ion-item text-wrap>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <p>Created at</p>\n\n                    <h2>{{bookingDetails.created_at | date:"dd/MM/yyyy"}}</h2>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <p>Updated at</p>\n\n                    <h2>{{bookingDetails.updated_date | date:"dd/MM/yyyy"}}</h2>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-fab bottom right #fab>\n\n        <button ion-fab><ion-icon class="tuts-hand"></ion-icon></button>\n\n        <ion-fab-list side="top">\n\n            <button ion-fab color="danger" (click)="openChatPage(bookingDetails,fab)"><ion-icon class="tuts-chat-1"></ion-icon></button>\n\n            <button ion-fab color="danger" (click)="openQuestionAnswerPage(bookingDetails,fab)"><ion-icon name="md-help"></ion-icon></button>\n\n            <button ion-fab color="danger" (click)="voiceCall(bookingDetails,fab)"><ion-icon class="tuts-phone-call"></ion-icon></button>\n\n            <button ion-fab color="danger" (click)="emailChat(bookingDetails,fab)"><ion-icon class="tuts-envelope"></ion-icon></button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n</ion-footer>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-booking-details\student-booking-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], StudentBookingDetailsPage);
    return StudentBookingDetailsPage;
}());

//# sourceMappingURL=student-booking-details.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var PWD_MIN_LENGTH = 5;
var NAME_MAX_LENGTH = 20;
var MOBILE_NO_LENGTH = 10;
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    /* Field Validators */
    /** Email validator */
    ValidationService.emailValidator = function (control) {
        var emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        if (emailPattern.test(control.value)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    /** Password validator */
    ValidationService.passwordValidator = function (control) {
        var password = "" + control.value;
        if (password.length >= PWD_MIN_LENGTH) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    /**
     * Confirm Password Valiator
     */
    ValidationService.passwordMatchValidator = function (control) {
        if (control.value == control.root.value['password']) {
            return null;
        }
        else {
            return { 'Password does not math': true };
        }
    };
    /** User name validator */
    ValidationService.nameValidator = function (control) {
        var name = "" + control.value;
        if (name.length >= NAME_MAX_LENGTH) {
            return null;
        }
        else {
            return { 'invalidName': true };
        }
    };
    /** Mobile number validator */
    ValidationService.mobileValidator = function (control) {
        var mobile = "" + control.value;
        if (mobile.length == MOBILE_NO_LENGTH) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    /* Method Validators*/
    /** This returns the form is validate or not */
    ValidationService.prototype.validate = function (form) {
        if (form.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationService.toDateValidate = function (control) {
        var to_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(control.value);
        var from_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(control.root.value['from_date']);
        if (to_date > from_date) {
            return null;
        }
        else {
            return { 'To date should be greater than from date': true };
        }
    };
    return ValidationService;
}());

//# sourceMappingURL=validation-service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentCoursesPage = /** @class */ (function () {
    function StudentCoursesPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.courses = [];
        this.selected_courses = [];
        this.shownGroup = null;
    }
    StudentCoursesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentCourses, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var val = _a[_i];
                    var element = {
                        parentcourse_name: val.parent_course_name,
                        sub_courses: []
                    };
                    for (var _b = 0, _c = val.courses; _b < _c.length; _b++) {
                        var sub = _c[_b];
                        var checked = false;
                        if (sub.child_course_id == sub.checked_id) {
                            var checked = true;
                        }
                        var temp = {
                            child_course_id: sub.child_course_id,
                            child_course_name: sub.child_course_name,
                            checked: checked
                        };
                        element.sub_courses.push(temp);
                    }
                    _this.courses.push(element);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    StudentCoursesPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    StudentCoursesPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    StudentCoursesPage.prototype.updateCourses = function () {
        var _this = this;
        this.selected_courses = [];
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var val = _a[_i];
            for (var _b = 0, _c = val.sub_courses; _b < _c.length; _b++) {
                var sub = _c[_b];
                if (sub.checked == true) {
                    var selected_course = {
                        course_id: sub.child_course_id
                    };
                    this.selected_courses.push(selected_course);
                }
            }
        }
        var params = {
            user_id: this.globalMethods.userType('id'),
            courses: this.selected_courses
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentCourses, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    StudentCoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-courses',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-courses\student-courses.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle><ion-icon class="tuts-list"></ion-icon></button>\n\n    <ion-title>  {{\'stu_courses.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-list no-lines no-bg>\n\n  <div *ngFor="let course of courses;let i=index">\n\n    <button ion-item (click)="toggleGroup(i)" detail-none>\n\n      {{course.parentcourse_name}}\n\n      <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\' "></ion-icon>\n\n    </button>\n\n     <div *ngIf="isGroupShown(i)">\n\n      <ion-list *ngFor="let sub_course of course.sub_courses">\n\n        <ion-item>\n\n          <ion-label>{{sub_course.child_course_name}}</ion-label>\n\n          <ion-checkbox color="dark" [(ngModel)]="sub_course.checked"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div> \n\n  </div>\n\n</ion-list>\n\n<button ion-button block round color="danger" (click)="updateCourses()">{{\'stu_courses.update\'|translate}}</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-courses\student-courses.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], StudentCoursesPage);
    return StudentCoursesPage;
}());

//# sourceMappingURL=student-courses.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDashboardChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stu_chat_stu_chat__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentDashboardChatPage = /** @class */ (function () {
    function StudentDashboardChatPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.chat_members = [];
        this.showLoadMore = true;
        this.callback = this.navParams.get("callback");
        this.dashboard_data_dasboardDetials = this.navParams.data.dasboardDetials;
    }
    StudentDashboardChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getChatTutorsList('');
        this.navBar.backButtonClick = function (e) {
            _this.callback(_this.dashboard_data_dasboardDetials).then(function () {
                _this.navCtrl.pop();
            });
        };
    };
    StudentDashboardChatPage.prototype.getChatTutorsList = function (infiniteScroll) {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id'),
            from_limit: this.chat_members.length,
            type: 'student'
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.tutor_chat_students_list_get, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var member = _a[_i];
                    if (member.photo == '' || member.photo == null) {
                        member['imageFullUrl'] = _this.serviceName.default_pictureImage;
                    }
                    else {
                        member['imageFullUrl'] = _this.serviceName.profileUrl + member.photo;
                    }
                    _this.chat_members.push(member);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    StudentDashboardChatPage.prototype.chatPagePopCallback = function (_params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.chat_members = _params.chat_members;
            _this.dashboard_data_dasboardDetials = _params.dashboard_data_dasboardDetials;
            for (var _i = 0, _a = _this.chat_members; _i < _a.length; _i++) {
                var member = _a[_i];
                if (member.from_id == _params.from_id) {
                    if (_params.status == 'success') {
                        _this.dashboard_data_dasboardDetials.messages = parseInt(_this.dashboard_data_dasboardDetials.messages) - parseInt(member.messages_count);
                    }
                    member.messages_count = _params.count;
                }
            }
            resolve();
        });
    };
    StudentDashboardChatPage.prototype.openChatPage = function (receiver) {
        var tutor_details = {
            tutor_photo: receiver.photo,
            tutor_name: receiver.username,
            device_id: receiver.device_id,
            course_name: '',
            tutor_id: receiver.from_id,
            messages_count: receiver.messages_count
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__stu_chat_stu_chat__["a" /* StuChatPage */], { receiver: tutor_details, callback: this.chatPagePopCallback, chat_members: this.chat_members, dashboard_data_dasboardDetials: this.dashboard_data_dasboardDetials });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], StudentDashboardChatPage.prototype, "navBar", void 0);
    StudentDashboardChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-dashboard-chat',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-dashboard-chat\student-dashboard-chat.html"*/'<ion-header>\n\n    <ion-navbar color="primary"> \n\n        <ion-title>{{\'stu_dashboard_chat.title\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n			<ion-list>\n\n  				<ion-item *ngFor="let member of chat_members" (click)="openChatPage(member)">\n\n    				<ion-avatar item-start>\n\n      					<img [src]="member.imageFullUrl">\n\n    				</ion-avatar>\n\n    				<h2>{{member.username}}</h2>\n\n    				<ion-badge class="count_badge" color="Done">{{member.messages_count}}</ion-badge>\n\n   					<p>{{member.message}}</p>\n\n  				</ion-item>\n\n  		</ion-list>\n\n      <p padding *ngIf="chat_members.length==0">{{\'stu_dashboard_chat.availabl\'|translate}}</p>\n\n    <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getChatTutorsList($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-dashboard-chat\student-dashboard-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], StudentDashboardChatPage);
    return StudentDashboardChatPage;
}());

//# sourceMappingURL=student-dashboard-chat.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDashboardQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stu_question_answer_conversation_stu_question_answer_conversation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentDashboardQuestionsPage = /** @class */ (function () {
    function StudentDashboardQuestionsPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.question_members = [];
        this.showLoadMore = true;
    }
    StudentDashboardQuestionsPage.prototype.ionViewDidLoad = function () {
        this.getQuestionTutorsList('');
    };
    StudentDashboardQuestionsPage.prototype.getQuestionTutorsList = function (infiniteScroll) {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id'),
            from_limit: this.question_members.length
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.get_student_questions_tutors_list, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var question = _a[_i];
                    if (question.photo == '' || question.photo == null) {
                        question['imageFullUrl'] = _this.serviceName.default_pictureImage;
                    }
                    else {
                        question['imageFullUrl'] = _this.serviceName.profileUrl + question.photo;
                    }
                    _this.question_members.push(question);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    StudentDashboardQuestionsPage.prototype.openConversationPage = function (object) {
        var question = {
            question_id: object.question_id,
            question_text: object.question_text,
            questionConversation: [],
            questionConversation_filtered: [],
        };
        var sender = {
            imageFullUrl: this.globalMethods.userType('photo'),
            user_id: this.globalMethods.userType('id'),
        };
        var receiver = {
            imageFullUrl: object.imageFullUrl,
            user_id: object.user_id,
            device_id: object.device_id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__stu_question_answer_conversation_stu_question_answer_conversation__["a" /* StuQuestionAnswerConversationPage */], { question: question, sender: sender, receiver: receiver });
    };
    StudentDashboardQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-dashboard-questions',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-dashboard-questions\student-dashboard-questions.html"*/'<ion-header>\n\n    <ion-navbar color="primary"> \n\n        <ion-title> {{\'stu_dashboard_chat.anwser\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="question_card" *ngFor="let question of question_members" (click)="openConversationPage(question)">\n\n    <div class="question_div">\n\n        <img class="que-profile-pic" [src]="question.imageFullUrl" />\n\n        <h3 text-wrap color="primary"> {{question.question_text}}</h3>\n\n        <h4>{{question.name}},{{question.username}} </h4>\n\n        <ion-badge *ngIf="question.converation_count!=0" class="count_badge" color="Done">{{question.converation_count}}</ion-badge> \n\n    </div>\n\n    </ion-card> \n\n<p padding *ngIf="question_members.length==0"> {{\'stu_dashboard_chat.ans_available\'|translate}}</p>\n\n<ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getQuestionTutorsList($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-dashboard-questions\student-dashboard-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], StudentDashboardQuestionsPage);
    return StudentDashboardQuestionsPage;
}());

//# sourceMappingURL=student-dashboard-questions.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLeadDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_leads_student_leads__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentLeadDetailsPage = /** @class */ (function () {
    function StudentLeadDetailsPage(navCtrl, navParams, globalMethods, httpService, serviceName, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.alertCtrl = alertCtrl;
        this.lead = this.navParams.data.selecteLead;
        this.leadStatus = this.lead.status;
    }
    StudentLeadDetailsPage.prototype.ionViewDidLoad = function () { };
    StudentLeadDetailsPage.prototype.updateLeadStatus = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Change Lead Status');
        alert.addInput({
            type: 'radio',
            label: 'Opened',
            value: 'Opened',
            checked: this.lead.status == 'Opened' ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: 'Closed',
            value: 'Closed',
            checked: this.lead.status == 'Closed' ? true : false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                var params = {
                    user_id: _this.globalMethods.userType('id'),
                    lead_id: _this.lead.id,
                    lead_status: data
                };
                _this.globalMethods.loaderStart();
                _this.httpService.httpServicePost(_this.serviceName.updateStudentLeadStatus, params).subscribe(function (data) {
                    _this.globalMethods.loaderStop();
                    if (data[1].response.status == 1) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__student_leads_student_leads__["a" /* StudentLeadsPage */]);
                        _this.globalMethods.showToast(data[1].response.message);
                    }
                    else {
                        _this.globalMethods.showToast(data[1].response.message);
                    }
                }, function (error) {
                    _this.globalMethods.loaderStop();
                    _this.globalMethods.showToast(JSON.stringify(error));
                }, function () { });
            }
        });
        alert.present();
    };
    StudentLeadDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-lead-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-lead-details\student-lead-details.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle></button>\n\n    <ion-title>{{\'stu_lead_details.title\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button (click)="updateLeadStatus()" ion-button icon-only>\n\n        <ion-icon name="md-create"></ion-icon> \n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n <ion-list contact-list>\n\n  <ion-item text-wrap> <p> {{\'stu_lead_details.loc\'|translate}}</p> <h4>{{lead.location_name}} </h4> </ion-item>\n\n  <ion-item text-wrap> <p> {{\'stu_lead_details.name\'|translate}}</p> <h4>{{lead.course_name}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.type\'|translate}} </p> <h4>{{lead.teaching_type}}</h4> </ion-item> \n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.pres_status\'|translate}}</p> <h4>{{lead.present_status}}</h4> </ion-item> \n\n  <ion-item text-wrap> <p> {{\'stu_lead_details.priority\'|translate}}</p> <h4>{{lead.priority_of_requirement}}</h4> </ion-item> \n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.duration\'|translate}}</p> <h4>{{lead.duration_needed}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.budget\'|translate}}</p> <h4>{{lead.budget}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.budget_type\'|translate}}</p> <h4>{{lead.budget_type}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.title_of_requirement\'|translate}}</p> <h4>{{lead.title_of_requirement}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.details\'|translate}}</p> <h4>{{lead.requirement_details}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.views\'|translate}}</p> <h4>{{lead.no_of_views}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.status\'|translate}}</p> <h4>{{lead.status}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.created\'|translate}}</p> <h4>{{lead.created_at}}</h4> </ion-item>\n\n  <ion-item text-wrap> <p>{{\'stu_lead_details.updated\'|translate}}</p> <h4>{{lead.updated_at}}</h4> </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-lead-details\student-lead-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], StudentLeadDetailsPage);
    return StudentLeadDetailsPage;
}());

//# sourceMappingURL=student-lead-details.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPostLeadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentPostLeadPage = /** @class */ (function () {
    function StudentPostLeadPage(navCtrl, navParams, globalMethods, httpService, serviceName, validationService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.leadData = {
            location_id: '',
            course_id: '',
            teaching_type_id: '',
            priority_of_requirement: '',
            present_status: '',
            duration_needed: '',
            budget: '',
            budget_type: '',
            title_of_requirement: '',
            requirement_details: ''
        };
        this.leadForm = formBuilder.group({
            location: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            course: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            teachingType: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            priorityOfRequirement: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            presentStatus: [''],
            duration: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            budget: [''],
            budgetType: [''],
            titleOfRequirement: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            requirementDetails: ['']
        });
    }
    StudentPostLeadPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getLeadData, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.locations = data[0].data.locations;
            _this.courses = data[0].data.courses;
            _this.teachingTypes = data[0].data.teaching_types;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StudentPostLeadPage.prototype.postLead = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id'),
            lead_data: this.leadData
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.postLead, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    StudentPostLeadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-post-lead',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-post-lead\student-post-lead.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_past_lead.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="leadForm" novalidate (ngSubmit)="(leadForm.valid && submitted) && postLead()">\n\n    <ion-list contact-list>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.loc\'|translate}} </ion-label>\n\n        <ion-select formControlName="location" [(ngModel)]="leadData.location_id">\n\n          <ion-option *ngFor="let location of locations" value="{{location.id}}">{{location.location_name}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!leadForm.controls.location.pristine || submitted" [name]="(!leadForm.controls.location.valid && (leadForm.controls.location.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!leadForm.controls.location.valid && (leadForm.controls.location.dirty || submitted)) ? \'danger\':\'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.course\'|translate}}</ion-label>\n\n        <ion-select formControlName="course" [(ngModel)]="leadData.course_id">\n\n          <ion-option *ngFor="let course of courses" value="{{course.id}}">{{course.name}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!leadForm.controls.course.pristine || submitted" [name]="(!leadForm.controls.course.valid && (leadForm.controls.course.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!leadForm.controls.course.valid && (leadForm.controls.course.dirty || submitted)) ? \'danger\':\'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked> {{\'stu_past_lead.perferred\'|translate}}</ion-label>\n\n        <ion-select formControlName="teachingType" [(ngModel)]="leadData.teaching_type_id">\n\n          <ion-option *ngFor="let teaching of teachingTypes" value="{{teaching.id}}">{{teaching.teaching_type}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!leadForm.controls.teachingType.pristine || submitted" [name]="(!leadForm.controls.teachingType.valid && (leadForm.controls.teachingType.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!leadForm.controls.teachingType.valid && (leadForm.controls.teachingType.dirty || submitted)) ? \'danger\':\'valid\'" item-right> </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.priority\'|translate}}</ion-label>\n\n        <ion-select formControlName="priorityOfRequirement" [(ngModel)]="leadData.priority_of_requirement">\n\n          <ion-option value="immediately">{{\'stu_past_lead.immediately\'|translate}}</ion-option>\n\n          <ion-option value="after_a_week">{{\'stu_past_lead.week\'|translate}}</ion-option>\n\n          <ion-option value="after_a_month">{{\'stu_past_lead.month\'|translate}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!leadForm.controls.priorityOfRequirement.pristine || submitted" [name]="(!leadForm.controls.priorityOfRequirement.valid && (leadForm.controls.priorityOfRequirement.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!leadForm.controls.priorityOfRequirement.valid && (leadForm.controls.priorityOfRequirement.dirty || submitted)) ? \'danger\':\'valid\'" item-right> </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.pre_status\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="presentStatus" [(ngModel)]="leadData.present_status" placeholder="{{\'stu_past_lead.pre_status_pla\'|translate}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.duration\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="duration" [(ngModel)]="leadData.duration_needed" placeholder="{{\'stu_past_lead.duration_pla\'|translate}}"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!leadForm.controls.duration.pristine || submitted" [name]="(!leadForm.controls.duration.valid && (leadForm.controls.duration.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!leadForm.controls.duration.valid && (leadForm.controls.duration.dirty || submitted)) ? \'danger\':\'valid\'" item-right> </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.pay\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="budget" [(ngModel)]="leadData.budget" placeholder="{{\'stu_past_lead.pay_pla\'|translate}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.payment\'|translate}}</ion-label>\n\n        <ion-select formControlName="budgetType" [(ngModel)]="leadData.budget_type">\n\n          <ion-option value="one_time">{{\'stu_past_lead.time\'|translate}}</ion-option>\n\n          <ion-option value="hourly">{{\'stu_past_lead.hour\'|translate}}</ion-option>\n\n          <ion-option value="monthly">{{\'stu_past_lead.monthly\'|translate}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.required\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="titleOfRequirement" [(ngModel)]="leadData.title_of_requirement"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!leadForm.controls.titleOfRequirement.pristing ||submitted" [name]="(!leadForm.controls.titleOfRequirement.valid && (leadForm.controls.titleOfRequirement.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!leadForm.controls.titleOfRequirement.valid && (leadForm.controls.titleOfRequirement.dirty || submitted)) ? \'danger\':\'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>{{\'stu_past_lead.details\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="requirementDetails" [(ngModel)]="leadData.requirement_details"></ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'stu_past_lead.submit\'|translate}}</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-post-lead\student-post-lead.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], StudentPostLeadPage);
    return StudentPostLeadPage;
}());

//# sourceMappingURL=student-post-lead.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentLocationsPage = /** @class */ (function () {
    function StudentLocationsPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.locations = [];
        this.selected_locations = [];
        this.shownGroup = null;
    }
    StudentLocationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentLocations, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var val = _a[_i];
                    var element = {
                        parentLocation_name: val.parentLocation_name,
                        sub_location: []
                    };
                    for (var _b = 0, _c = val.sub_locations; _b < _c.length; _b++) {
                        var sub = _c[_b];
                        var checked = false;
                        if (sub.id == sub.checked_id) {
                            var checked = true;
                        }
                        var temp = {
                            id: sub.id,
                            sub_location_name: sub.location_name,
                            checked: checked
                        };
                        element.sub_location.push(temp);
                    }
                    _this.locations.push(element);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    StudentLocationsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    StudentLocationsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    StudentLocationsPage.prototype.updateLocations = function () {
        var _this = this;
        this.selected_locations = [];
        for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
            var val = _a[_i];
            for (var _b = 0, _c = val.sub_location; _b < _c.length; _b++) {
                var sub = _c[_b];
                if (sub.checked == true) {
                    var select_location = {
                        location_id: sub.id
                    };
                    this.selected_locations.push(select_location);
                }
            }
        }
        var params = {
            user_id: this.globalMethods.userType('id'),
            locations: this.selected_locations
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentLocations, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    StudentLocationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-locations',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-locations\student-locations.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle><ion-icon class="tuts-list"></ion-icon></button>\n\n    <ion-title> {{\'stu_location.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-list no-lines no-bg>\n\n        <div *ngFor="let location of locations; let i=index">\n\n            <button ion-item (click)="toggleGroup(i)" detail-none>\n\n                {{location.parentLocation_name}} \n\n                <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n\n            </button>\n\n            <div *ngIf="isGroupShown(i)">\n\n                <ion-list *ngFor="let sub_location of location.sub_location">\n\n                    <ion-item>\n\n                        <ion-label>{{sub_location.sub_location_name}}</ion-label>\n\n                        <ion-checkbox color="dark" [(ngModel)]="sub_location.checked"></ion-checkbox>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </div>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" (click)="updateLocations()"> {{\'stu_location.update\'|translate}}</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-locations\student-locations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], StudentLocationsPage);
    return StudentLocationsPage;
}());

//# sourceMappingURL=student-locations.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentPrivacyPage = /** @class */ (function () {
    function StudentPrivacyPage(navCtrl, navParams, globalMethods, httpService, serviceName, formBuilder, validationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.privacyForm = formBuilder.group({
            freeDemo: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            visibilityInSearch: [''],
            showContact: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            availabilityStatus: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])]
        });
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
    }
    StudentPrivacyPage.prototype.ionViewDidLoad = function () { };
    StudentPrivacyPage.prototype.updatePrivacySettings = function () {
        var _this = this;
        var params = {
            user_id: this.userData.id,
            free_demo: this.userData.free_demo,
            visibility_in_search: this.userData.visibility_in_search,
            show_contact: this.userData.show_contact,
            availability_status: this.userData.availability_status
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updatePrivacySettings, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data));
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StudentPrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-privacy',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-privacy\student-privacy.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_privacy.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="privacyForm" novalidate (ngSubmit)="(privacyForm.valid && submitted) && updatePrivacySettings()">\n\n    <ion-list contact-list>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_privacy.dem\'|translate}}</ion-label>\n\n        <ion-select formControlName="freeDemo" [(ngModel)]="userData.free_demo">\n\n          <ion-option>{{\'stu_privacy.yes\'|translate}}</ion-option>\n\n          <ion-option>{{\'stu_privacy.no\'|translate}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!privacyForm.controls.freeDemo.pristine || submitted" [name]="(!privacyForm.controls.freeDemo.valid && (privacyForm.controls.freeDemo.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!privacyForm.controls.freeDemo.valid && (privacyForm.controls.freeDemo.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_privacy.search\'|translate}}</ion-label>\n\n        <ion-select formControlName="visibilityInSearch" [(ngModel)]="userData.visibility_in_search">\n\n          <ion-option value="1">{{\'stu_privacy.yes\'|translate}}</ion-option>\n\n          <ion-option value="0">{{\'stu_privacy.no\'|translate}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_privacy.privacy\'|translate}}</ion-label>\n\n        <ion-select formControlName="showContact" [(ngModel)]="userData.show_contact">\n\n          <ion-option value="All">{{\'stu_privacy.all\'|translate}}</ion-option>\n\n          <ion-option value="Email">{{\'stu_privacy.email\'|translate}}</ion-option>\n\n          <ion-option value="Mobile">{{\'stu_privacy.mobile\'|translate}}</ion-option>\n\n          <ion-option value="None">{{\'stu_privacy.none\'|translate}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!privacyForm.controls.showContact.pristine || submitted" [name]="(!privacyForm.controls.showContact.valid && (privacyForm.controls.showContact.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!privacyForm.controls.showContact.valid && (privacyForm.controls.showContact.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_privacy.availability\'|translate}}</ion-label>\n\n        <ion-select formControlName="availabilityStatus" [(ngModel)]="userData.availability_status">\n\n          <ion-option value="1">{{\'stu_privacy.title\'|translate}}</ion-option>\n\n          <ion-option value="0">{{\'stu_privacy.no\'|translate}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!privacyForm.controls.availabilityStatus.pristine || submitted" [name]="(!privacyForm.controls.availabilityStatus.valid && (privacyForm.controls.availabilityStatus.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!privacyForm.controls.availabilityStatus.valid && (privacyForm.controls.availabilityStatus.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'stu_privacy.submit\'|translate}}</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-privacy\student-privacy.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]])
    ], StudentPrivacyPage);
    return StudentPrivacyPage;
}());

//# sourceMappingURL=student-privacy.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfileInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_file_modal_choose_file_modal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_toast__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var StudentProfileInfoPage = /** @class */ (function () {
    function StudentProfileInfoPage(navCtrl, navParams, globalMethods, httpService, serviceName, validationService, formBuilder, modalCtrl, toast, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.profileDetailsForm = formBuilder.group({
            profile: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required])],
            seoKeywords: [''],
            metaDescription: [''],
            profilePageTitle: [''],
            qualification: [''],
            willingToTravel: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required])],
            ownVehicle: ['']
        });
        this.user = {
            photo: this.globalMethods.userType('photo')
        };
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
        this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
    }
    StudentProfileInfoPage.prototype.ionViewDidLoad = function () {
    };
    StudentProfileInfoPage.prototype.presentProfileModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__choose_file_modal_choose_file_modal__["a" /* ChooseFileModalPage */], { certificate: { upload_file: '' } });
        profileModal.onDidDismiss(function (data) {
            if (data.upload_file != '') {
                _this.uploadFile(data);
            }
        });
        profileModal.present();
    };
    StudentProfileInfoPage.prototype.uploadFile = function (param) {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        var options = {
            fileKey: 'userfile',
            mimeType: "image/jpeg",
            fileName: param.upload_file,
            headers: {},
            params: params,
            chunkedMode: false
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.onProgress(function (data) {
            if (data.lengthComputable) {
                var percentage = ((data.loaded / data.total) * 100).toFixed(0);
                _this.toast.show(percentage + "% uploading...", '8000', 'bottom').subscribe(function (toast) { });
            }
        });
        fileTransfer.upload(param.upload_file, this.serviceName.profile_upload, options).then(function (data) {
            var result = JSON.parse(data.response);
            if (result[0].data[0].id && result[0].data[0].id != null) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(result[0].data[0]));
                _this.user.photo = _this.globalMethods.userType('photo');
                console.log("profile Photo " + _this.user.photo);
                _this.globalMethods.hideToast();
                _this.globalMethods.showToast(result[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.showToast("Upload failed");
        }).catch(function (cat) {
            _this.globalMethods.showToast("Upload failed");
        });
    };
    StudentProfileInfoPage.prototype.updateStudentProfileDetails = function () {
        var _this = this;
        var params = {
            user_id: this.userData.id,
            profile: this.userData.profile,
            seo_keywords: this.userData.seo_keywords,
            meta_desc: this.userData.meta_desc,
            profile_page_title: this.userData.profile_page_title,
            qualification: this.userData.qualification,
            willing_to_travel: this.userData.willing_to_travel,
            own_vehicle: this.userData.own_vehicle
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentProfileDetails, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data));
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StudentProfileInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-profile-info',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-profile-info\student-profile-info.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_profile.pro\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="profileDetailsForm" novalidate (ngSubmit)="(profileDetailsForm.valid && submitted) && updateStudentProfileDetails()">\n\n    <div header-profile text-center>\n\n      <div class="user-img"><img src="{{user.photo}}" alt="Picture"></div>\n\n      <div class="user-details">\n\n        <h3>{{userData.username}}</h3>\n\n        <p><span>{{\'stu_profile.net\'|translate}}: {{userData.net_credits}}</span><span>{{\'stu_profile.per\'|translate}}: {{currency_symbol}}{{per_credit_value}}</span></p>\n\n      </div>\n\n    </div>\n\n    <button class="update-camera" ion-button clear icon-only (click)="presentProfileModal()">\n\n      <ion-icon name="camera"></ion-icon>\n\n    </button>\n\n    <ion-list contact-list>\n\n      <ion-item-divider color="light">{{\'stu_profile.pro\'|translate}}</ion-item-divider>\n\n      <ion-item>\n\n        <ion-label floating> {{\'stu_profile.desc\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="profile" [(ngModel)]="userData.profile"></ion-textarea>\n\n        <ion-icon class="validation-icon" *ngIf="!profileDetailsForm.controls.profile.pristine || submitted" [name]="(!profileDetailsForm.controls.profile.valid && (profileDetailsForm.controls.profile.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!profileDetailsForm.controls.profile.valid && (profileDetailsForm.controls.profile.dirty || submitted)) ? \'danger\':\'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.seo\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="seoKeywords" [(ngModel)]="userData.seo_keywords"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.meta\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="metaDescription" [(ngModel)]="userData.meta_desc"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.page\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="profilePageTitle" [(ngModel)]="userData.profile_page_title"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!profileDetailsForm.controls.profilePageTitle.pristine || submitted" [name]="(!profileDetailsForm.controls.profilePageTitle.valid && (profileDetailsForm.controls.profilePageTitle.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!profileDetailsForm.controls.profilePageTitle.valid && (profileDetailsForm.controls.profilePageTitle.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.qualification\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="qualification" [(ngModel)]="userData.qualification"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.far\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="willingToTravel" [(ngModel)]="userData.willing_to_travel"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!profileDetailsForm.controls.willingToTravel.pristine || submitted" [name]="(!profileDetailsForm.controls.willingToTravel.valid && (profileDetailsForm.controls.willingToTravel.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!profileDetailsForm.controls.willingToTravel.valid && (profileDetailsForm.controls.willingToTravel.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-list radio-group formControlName="ownVehicle" [(ngModel)]="userData.own_vehicle">\n\n        <ion-list-header floating>{{\'stu_profile.travel\'|translate}} </ion-list-header>\n\n        <ion-item>\n\n          <ion-label>{{\'stu_profile.yes\'|translate}}</ion-label>\n\n          <ion-radio value="yes"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>{{\'stu_profile.no\'|translate}}</ion-label>\n\n          <ion-radio value="no"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n    <div padding>\n\n      <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'stu_profile.submit\'|translate}}</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-profile-info\student-profile-info.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_5__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_7__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_7__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */]])
    ], StudentProfileInfoPage);
    return StudentProfileInfoPage;
}());

//# sourceMappingURL=student-profile-info.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentProfilePage = /** @class */ (function () {
    function StudentProfilePage(navCtrl, navParams, httpService, serviceName, globalMethods, validationService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.personalDetailsForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */].emailValidator])],
            dateOfBirth: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            gender: [''],
            languageOfTeaching: [''],
            website: [''],
            facebook: [''],
            twitter: [''],
            linkedin: [''],
            skype: ['']
        });
        this.user = {
            photo: this.globalMethods.userType('photo')
        };
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
        this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
        this.selectedLanguages = this.mySplit(this.userData.language_of_teaching);
    }
    StudentProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.userData.id
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getKnownLanguages, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.languages = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StudentProfilePage.prototype.mySplit = function (string) {
        this.resultArray = string.split(',');
        return this.resultArray;
    };
    StudentProfilePage.prototype.updatePersonalInformation = function () {
        var _this = this;
        var params = {
            userData: this.userData,
            language_of_teaching: JSON.stringify(this.selectedLanguages)
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentPersonalDetails, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data));
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StudentProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-profile',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-profile\student-profile.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_profile.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="personalDetailsForm" novalidate (ngSubmit)="(personalDetailsForm.valid && submitted) && updatePersonalInformation()">\n\n    <div header-profile text-center>\n\n      <div class="user-img"><img src="{{user.photo}}" alt="Picture"></div>\n\n      <div class="user-details">\n\n        <h3>{{userData.username}}</h3>\n\n        <p><span>{{\'stu_profile.net\'|translate}}: {{userData.net_credits}}</span><span>{{\'stu_profile.per\'|translate}}: {{currency_symbol}}{{per_credit_value}}</span></p>\n\n      </div>\n\n    </div>\n\n    <ion-list contact-list>\n\n      <ion-item-divider color="light">{{\'stu_profile.info\'|translate}}</ion-item-divider>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.first\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="firstName" [(ngModel)]="userData.first_name"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!personalDetailsForm.controls.firstName.pristine || submitted" [name]="(!personalDetailsForm.controls.firstName.valid && (personalDetailsForm.controls.firstName.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!personalDetailsForm.controls.firstName.valid && (personalDetailsForm.controls.firstName.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.last\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="lastName" [(ngModel)]="userData.last_name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.email\'|translate}}</ion-label>\n\n        <ion-input type="email" readonly formControlName="email" [(ngModel)]="userData.email"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!personalDetailsForm.controls.email.pristine || submitted" [name]="(!personalDetailsForm.controls.email.valid && (personalDetailsForm.controls.email.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!personalDetailsForm.controls.email.valid && (personalDetailsForm.controls.email.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.date\'|translate}}</ion-label>\n\n        <ion-input type="date" formControlName="dateOfBirth" [(ngModel)]="userData.dob"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!personalDetailsForm.controls.dateOfBirth.pristine || submitted" [name]="(!personalDetailsForm.controls.dateOfBirth.valid && (personalDetailsForm.controls.dateOfBirth.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!personalDetailsForm.controls.dateOfBirth.valid && (personalDetailsForm.controls.dateOfBirth.dirty || submitted)) ? \'danger\':\'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-list radio-group formControlName="gender" [(ngModel)]="userData.gender">\n\n        <ion-list-header floating>{{\'stu_profile.gender\'|translate}}</ion-list-header>\n\n        <ion-item>\n\n          <ion-label>{{\'stu_profile.male\'|translate}}</ion-label>\n\n          <ion-radio value="Male"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>{{\'stu_profile.female\'|translate}}</ion-label>\n\n          <ion-radio value="Female"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>{{\'stu_profile.lang\'|translate}}</ion-label>\n\n          <ion-select [(ngModel)]="selectedLanguages" formControlName="languageOfTeaching" multiple>\n\n            <ion-option *ngFor="let language of languages">{{language.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.blog\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="website" [(ngModel)]="userData.website"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.facebook\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="facebook" [(ngModel)]="userData.facebook"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.twitter\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="twitter" [(ngModel)]="userData.twitter"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.linkedin\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="linkedin" [(ngModel)]="userData.linkedin"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.skype\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="skype" [(ngModel)]="userData.skype"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'stu_profile.submit\'|translate}} </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-profile\student-profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], StudentProfilePage);
    return StudentProfilePage;
}());

//# sourceMappingURL=student-profile.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentTeachingTypesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentTeachingTypesPage = /** @class */ (function () {
    function StudentTeachingTypesPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.teaching_types = [];
        this.selected_teaching_types = [];
    }
    StudentTeachingTypesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentTeachingTypes, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                var result_length = data[0].data.length;
                for (var i = 0; i < result_length; i++) {
                    var element;
                    var checked = false;
                    if (data[0].data[i].checked == 1) {
                        checked = true;
                    }
                    element = {
                        id: data[0].data[i].id,
                        teaching_type: data[0].data[i].teaching_type,
                        checked: checked
                    };
                    _this.teaching_types.push(element);
                }
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StudentTeachingTypesPage.prototype.updateTeachingTypes = function () {
        var _this = this;
        for (var _i = 0, _a = this.teaching_types; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.checked == true) {
                this.selected_teaching_types.push(val);
            }
        }
        var params = {
            student_id: this.globalMethods.userType('id'),
            teaching_types: this.selected_teaching_types
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentTeachingTypes, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    StudentTeachingTypesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-teaching-types',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-teaching-types\student-teaching-types.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_teaching_types.teaching\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let teaching of teaching_types">\n\n      <ion-label>{{teaching.teaching_type}}</ion-label>\n\n      <ion-checkbox checked="{{teaching.checked}}" [(ngModel)]="teaching.checked"></ion-checkbox>\n\n    </ion-item>\n\n    <button ion-button block round color="danger" (click)="updateTeachingTypes()">{{\'stu_teaching_types.submit\'|translate}}</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-teaching-types\student-teaching-types.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], StudentTeachingTypesPage);
    return StudentTeachingTypesPage;
}());

//# sourceMappingURL=student-teaching-types.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TermsConditionsPage = /** @class */ (function () {
    function TermsConditionsPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
    }
    TermsConditionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getTermsConditions, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.terms_conditions = data[0].data[0].description;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TermsConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms-conditions',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\terms-conditions\terms-conditions.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'setting.new_terms\'| translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div [innerHTML]="terms_conditions"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\terms-conditions\terms-conditions.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], TermsConditionsPage);
    return TermsConditionsPage;
}());

//# sourceMappingURL=terms-conditions.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_native__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_answer_conversation_question_answer_conversation__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuestionAnswerPage = /** @class */ (function () {
    function QuestionAnswerPage(navCtrl, params, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.sender = {};
        this.receiver = {};
        this.question_ask = '';
        this.show_hide_search = false;
        this.showLoadMoreQuestions = true;
        this.showLoadMoreQuestions_conversation = true;
        this.questionAnswer = {
            message: ''
        };
        this.questions = [];
        this.added_questions = [];
        this.showLoadMore = true;
        this.is_conversation_visible = false;
        this.is_reply = false;
        this.is_add_question = false;
    }
    QuestionAnswerPage.prototype.ionViewDidLoad = function () {
        this.searchInput = '';
        if (this.globalMethods.userType('user_belongs_group') == this.serviceName.tutor) {
            this.receiver.imageFullUrl = this.serviceName.profileUrl + this.params.data.receiver.student_photo;
            this.receiver.name = this.params.data.receiver.student_name;
            this.receiver.device_id = this.params.data.receiver.device_id;
            this.receiver.course_name = this.params.data.receiver.course_name;
            this.receiver.user_id = this.params.data.receiver.student_id;
        }
        else {
        }
        this.sender.imageFullUrl = this.globalMethods.userType('photo');
        this.sender.name = this.globalMethods.userType('username');
        this.sender.device_id = this.globalMethods.userType('device_id');
        this.sender.user_id = this.globalMethods.userType('id');
        this.getQuestions('');
    };
    QuestionAnswerPage.prototype.getQuestions = function (infiniteScroll) {
        var _this = this;
        var params = {
            student_id: this.receiver.user_id,
            booking_id: this.params.data.receiver.booking_id,
            records_from: this.questions.length,
            limit: 10
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.booking_questions_get, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMoreQuestions = true;
                }
                var i = 0;
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var question = _a[_i];
                    i++;
                    question['show_chat'] = false;
                    question['is_reply'] = false;
                    question['questionConversation'] = [];
                    question['questionConversation_filtered'] = [];
                    _this.questions.push(question);
                    _this.questions_filtered = _this.questions.slice();
                    if (i == data[0].data.length && _this.added_questions.length > 0) {
                        for (var _b = 0, _c = _this.added_questions; _b < _c.length; _b++) {
                            var que = _c[_b];
                            _this.questions_filtered.push(que);
                        }
                    }
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMoreQuestions = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
        });
    };
    QuestionAnswerPage.prototype.showHideSearch = function () {
        this.show_hide_search = !this.show_hide_search;
        var self = this;
        setTimeout(function () {
            if (self.show_hide_search) {
                var elem = document.querySelector('.search_bar input');
                if (elem) {
                    elem.focus();
                    __WEBPACK_IMPORTED_MODULE_5_ionic_native__["a" /* Keyboard */].show();
                }
            }
        }, 20);
    };
    QuestionAnswerPage.prototype.searchQuestions = function (ev) {
        var val = ev.target.value;
        this.questions_filtered = this.questions;
        this.questions_filtered = this.questions.slice();
        this.questions_filtered.reverse();
        if (val && val.trim() != '') {
            this.questions_filtered = this.questions_filtered.filter(function (item) {
                return (item.question_text.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.questions_filtered = this.questions.slice();
            this.questions_filtered.reverse();
            return this.questions_filtered;
        }
    };
    QuestionAnswerPage.prototype.onCancel = function (ev) {
        this.show_hide_search = !this.show_hide_search;
        ev.target.value = '';
    };
    QuestionAnswerPage.prototype.openConversationPage = function (question, sender, receiver) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__question_answer_conversation_question_answer_conversation__["a" /* QuestionAnswerConversationPage */], { question: question, sender: sender, receiver: receiver });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], QuestionAnswerPage.prototype, "content", void 0);
    QuestionAnswerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-question-answer',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\question-answer\question-answer.html"*/'<ion-header no-shadow>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title text-wrap *ngIf="!show_hide_search">{{receiver.course_name}}</ion-title>\n\n    <ion-searchbar *ngIf="show_hide_search" class="search_bar" [(ngModel)]="searchInput" (ionInput)="searchQuestions($event)" (ionCancel)="onCancel($event)" [showCancelButton]="false"></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button (click)="showHideSearch()" ion-button icon-only>\n\n        <ion-icon [name]="show_hide_search ? \'close\' : \'search\'"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let question of questions_filtered" (click)="openConversationPage(question,sender,receiver)">\n\n    <div class="question_div">\n\n      <img class="que-profile-pic" [src]="question.imageFullUrl" />\n\n      <h4 color="primary"> {{question.question_text}}</h4>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6 align-self-start>\n\n            <button ion-button clear color="menu-o">\n\n              <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n              <h5>{{\'stu_question-answer.conversation\'|translate}} ({{question.chat_count}})</h5>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-6 align-self-end>\n\n            <button ion-button clear color="menu-o">\n\n              <ion-icon name="ios-calendar-outline"></ion-icon>\n\n              <h5>{{question.datetime}}</h5>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </ion-card>\n\n  <p padding *ngIf="questions.length==0">{{\'stu_question-answer.available\'|translate}} </p>\n\n  <ion-infinite-scroll *ngIf="showLoadMoreQuestions==true" (ionInfinite)="getQuestions($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\question-answer\question-answer.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], QuestionAnswerPage);
    return QuestionAnswerPage;
}());

//# sourceMappingURL=question-answer.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorDashboardChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TutorDashboardChatPage = /** @class */ (function () {
    function TutorDashboardChatPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.chat_members = [];
        this.showLoadMore = true;
        this.callback = this.navParams.get("callback");
        this.dashboard_data_dasboardDetials = this.navParams.data.dasboardDetials;
    }
    TutorDashboardChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getChatStudentsList('');
        this.navBar.backButtonClick = function (e) {
            _this.callback(_this.dashboard_data_dasboardDetials).then(function () {
                _this.navCtrl.pop();
            });
        };
    };
    TutorDashboardChatPage.prototype.getChatStudentsList = function (infiniteScroll) {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id'),
            from_limit: this.chat_members.length,
            type: 'tutor'
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.tutor_chat_students_list_get, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var member = _a[_i];
                    if (member.photo == '' || member.photo == null) {
                        member['imageFullUrl'] = _this.serviceName.default_pictureImage;
                    }
                    else {
                        member['imageFullUrl'] = _this.serviceName.profileUrl + member.photo;
                    }
                    _this.chat_members.push(member);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    TutorDashboardChatPage.prototype.chatPagePopCallback = function (_params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.chat_members = _params.chat_members;
            _this.dashboard_data_dasboardDetials = _params.dashboard_data_dasboardDetials;
            for (var _i = 0, _a = _this.chat_members; _i < _a.length; _i++) {
                var member = _a[_i];
                if (member.from_id == _params.from_id) {
                    if (_params.status == 'success') {
                        _this.dashboard_data_dasboardDetials.messages = parseInt(_this.dashboard_data_dasboardDetials.messages) - parseInt(member.messages_count);
                    }
                    member.messages_count = _params.count;
                }
            }
            resolve();
        });
    };
    TutorDashboardChatPage.prototype.openChatPage = function (receiver) {
        var student_details = {
            student_photo: receiver.photo,
            student_name: receiver.username,
            device_id: receiver.device_id,
            course_name: '',
            student_id: receiver.from_id,
            messages_count: receiver.messages_count
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], { receiver: student_details, callback: this.chatPagePopCallback, chat_members: this.chat_members, dashboard_data_dasboardDetials: this.dashboard_data_dasboardDetials });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], TutorDashboardChatPage.prototype, "navBar", void 0);
    TutorDashboardChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-dashboard-chat',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-dashboard-chat\tutor-dashboard-chat.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{\'stu_dashboard_chat.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let member of chat_members" (click)="openChatPage(member)">\n\n      <ion-avatar item-start>\n\n        <img [src]="member.imageFullUrl">\n\n      </ion-avatar>\n\n      <h2>{{member.username}}</h2>\n\n      <ion-badge class="count_badge" color="Done">{{member.messages_count}}</ion-badge>\n\n      <p>{{member.message}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <p padding *ngIf="chat_members.length==0">{{\'stu_dashboard_chat.availabl\'|translate}}</p>\n\n  <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getChatStudentsList($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-dashboard-chat\tutor-dashboard-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]])
    ], TutorDashboardChatPage);
    return TutorDashboardChatPage;
}());

//# sourceMappingURL=tutor-dashboard-chat.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorDashboardQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_answer_conversation_question_answer_conversation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TutorDashboardQuestionsPage = /** @class */ (function () {
    function TutorDashboardQuestionsPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.question_members = [];
        this.showLoadMore = true;
    }
    TutorDashboardQuestionsPage.prototype.ionViewDidLoad = function () {
        this.getQuestionStudentsList('');
    };
    TutorDashboardQuestionsPage.prototype.getQuestionStudentsList = function (infiniteScroll) {
        var _this = this;
        var params = {
            tutor_id: this.globalMethods.userType('id'),
            from_limit: this.question_members.length
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.tutor_questions_students_list_get, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var question = _a[_i];
                    if (question.photo == '' || question.photo == null) {
                        question['imageFullUrl'] = _this.serviceName.default_pictureImage;
                    }
                    else {
                        question['imageFullUrl'] = _this.serviceName.profileUrl + question.photo;
                    }
                    _this.question_members.push(question);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    TutorDashboardQuestionsPage.prototype.openConversationPage = function (object) {
        var question = {
            question_id: object.question_id,
            question_text: object.question_text,
            questionConversation: [],
            questionConversation_filtered: [],
        };
        var sender = {
            imageFullUrl: this.globalMethods.userType('photo'),
            user_id: this.globalMethods.userType('id'),
        };
        var receiver = {
            imageFullUrl: object.imageFullUrl,
            user_id: object.user_id,
            device_id: object.device_id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question_answer_conversation_question_answer_conversation__["a" /* QuestionAnswerConversationPage */], { question: question, sender: sender, receiver: receiver });
    };
    TutorDashboardQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-dashboard-questions',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-dashboard-questions\tutor-dashboard-questions.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{\'stu_question-answer.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let question of question_members" (click)="openConversationPage(question)">\n\n    <div class="question_div">\n\n      <img class="que-profile-pic" [src]="question.imageFullUrl" />\n\n      <h3 text-wrap color="primary"> {{question.question_text}}</h3>\n\n      <h4>{{question.name}},{{question.username}} </h4>\n\n    </div>\n\n  </ion-card>\n\n  <p padding *ngIf="question_members.length==0">{{\'stu_question-answer.available\'|translate}}</p>\n\n  <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getQuestionStudentsList($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-dashboard-questions\tutor-dashboard-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], TutorDashboardQuestionsPage);
    return TutorDashboardQuestionsPage;
}());

//# sourceMappingURL=tutor-dashboard-questions.js.map

/***/ }),

/***/ 233:
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
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		1064,
		33
	],
	"../pages/blog-details/blog-details.module": [
		1066,
		32
	],
	"../pages/blog/blog.module": [
		1067,
		31
	],
	"../pages/certificates/certificates.module": [
		1068,
		30
	],
	"../pages/choose-file-modal/choose-file-modal.module": [
		1069,
		29
	],
	"../pages/student/contact-details/contact-details.module": [
		1070,
		28
	],
	"../pages/student/credit-trans-history/credit-trans-history.module": [
		1071,
		27
	],
	"../pages/student/find-tutor/find-tutor.module": [
		1072,
		26
	],
	"../pages/student/my-address/my-address.module": [
		1073,
		25
	],
	"../pages/student/my-course-purchases/my-course-purchases.module": [
		1074,
		24
	],
	"../pages/student/stu-chat/stu-chat.module": [
		1075,
		23
	],
	"../pages/student/stu-fav-tutors/stu-fav-tutors.module": [
		1076,
		22
	],
	"../pages/student/stu-question-answer-conversation/stu-question-answer-conversation.module": [
		1077,
		21
	],
	"../pages/student/stu-question-answer/stu-question-answer.module": [
		1078,
		20
	],
	"../pages/student/student-booking-details/student-booking-details.module": [
		1079,
		19
	],
	"../pages/student/student-bookings/student-bookings.module": [
		1093,
		18
	],
	"../pages/student/student-courses/student-courses.module": [
		1080,
		17
	],
	"../pages/student/student-dashboard-chat/student-dashboard-chat.module": [
		1081,
		16
	],
	"../pages/student/student-dashboard-questions/student-dashboard-questions.module": [
		1082,
		15
	],
	"../pages/student/student-lead-details/student-lead-details.module": [
		1083,
		14
	],
	"../pages/student/student-leads/student-leads.module": [
		1084,
		13
	],
	"../pages/student/student-locations/student-locations.module": [
		1085,
		12
	],
	"../pages/student/student-post-lead/student-post-lead.module": [
		1086,
		11
	],
	"../pages/student/student-privacy/student-privacy.module": [
		1087,
		10
	],
	"../pages/student/student-profile-info/student-profile-info.module": [
		1088,
		9
	],
	"../pages/student/student-profile/student-profile.module": [
		1089,
		8
	],
	"../pages/student/student-teaching-types/student-teaching-types.module": [
		1090,
		7
	],
	"../pages/terms-conditions/terms-conditions.module": [
		1091,
		6
	],
	"../pages/tutor/chat/chat.module": [
		1092,
		5
	],
	"../pages/tutor/question-answer-conversation/question-answer-conversation.module": [
		1094,
		4
	],
	"../pages/tutor/question-answer/question-answer.module": [
		1095,
		3
	],
	"../pages/tutor/tutor-dashboard-chat/tutor-dashboard-chat.module": [
		1096,
		2
	],
	"../pages/tutor/tutor-dashboard-questions/tutor-dashboard-questions.module": [
		1097,
		1
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
webpackAsyncContext.id = 277;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalMethods; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalMethods = /** @class */ (function () {
    function GlobalMethods(serviceName, loadingCtrl, toast) {
        this.serviceName = serviceName;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
    }
    GlobalMethods.prototype.setter = function (key, data) {
        localStorage.setItem(key, data);
    };
    GlobalMethods.prototype.getter = function (key) {
        return localStorage.getItem(key);
    };
    GlobalMethods.prototype.loaderStart = function () {
        this.loading = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loading.present();
    };
    GlobalMethods.prototype.loaderStop = function () {
        if (this.loading) {
            this.loading.dismissAll();
        }
    };
    GlobalMethods.prototype.showToast = function (msg) {
        this.toast.show(msg, '5000', 'bottom').subscribe(function (toast) { });
    };
    GlobalMethods.prototype.hideToast = function () {
        this.toast.hide();
    };
    GlobalMethods.prototype.userType = function (property) {
        var userDetails = JSON.parse(this.getter(this.serviceName.userProfile));
        if (!userDetails) {
            userDetails = {
                "id": "0",
                "ip_address": "",
                "username": "Convidado",
                "slug": "",
                "password": "",
                "salt": "",
                "email": "Convidado",
                "activation_code": "",
                "forgotten_password_code": "",
                "forgotten_password_time": "",
                "remember_code": "",
                "created_on": "",
                "last_login": "",
                "active": "",
                "first_name": "Usuário",
                "last_name": "Convidado",
                "gender": "Masculino",
                "phone_code": "",
                "phone": "",
                "land_mark": "",
                "profile_page_title": "",
                "photo": "",
                "profile": "",
                "is_online": "",
                "is_social_login": "",
                "user_belongs_group": "",
                "device_id": "",
                "platform": "",
                "registered_by": "",
                "net_credits": "",
                "last_updated": "",
                "parent_id": ""
            };
            if (property == "photo") {
                var pic = userDetails["" + property + ""];
                var image_url = userDetails.photo;
                if (pic != null && pic != '') {
                    return this.serviceName.profileUrl + pic;
                }
                else if (image_url != null && image_url != '') {
                    return image_url;
                }
                else {
                    return this.serviceName.defaultImage;
                }
            }
            else {
                this.user_id = userDetails["" + property + ""];
                if (this.user_id) {
                    return this.user_id;
                }
                else {
                    return "";
                }
            }
        }
        else {
            if (property == "photo") {
                var pic = userDetails["" + property + ""];
                var image_url = userDetails.photo;
                if (pic != null && pic != '') {
                    return this.serviceName.profileUrl + pic;
                }
                else if (image_url != null && image_url != '') {
                    return image_url;
                }
                else {
                    return this.serviceName.defaultImage;
                }
            }
            else {
                this.user_id = userDetails["" + property + ""];
                if (this.user_id) {
                    return this.user_id;
                }
                else {
                    return "";
                }
            }
        }
    };
    // COMMON METHOD FOR GETTING SITE VALUES
    GlobalMethods.prototype.siteValue = function (property) {
        var siteDetails = JSON.parse(this.getter(this.serviceName.site_settings_key));
        if (siteDetails) {
            var site_value = siteDetails["" + property + ""];
            if (site_value) {
                return site_value;
            }
            else {
                return "";
            }
        }
        else {
            return "";
        }
    };
    GlobalMethods.prototype.clear = function () {
        localStorage.clear();
    };
    GlobalMethods.prototype.clearStorage = function () {
        localStorage.setItem(this.serviceName.userProfile, '{}');
        localStorage.setItem(this.serviceName.pageName, '');
        localStorage.setItem(this.serviceName.oneSignalId, '');
    };
    GlobalMethods.prototype.checkNetwork = function () {
        return true;
        /*if (navigator.connection.type != '') {
          return true;
        } else {
          return false;
        }*/
    };
    GlobalMethods = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], GlobalMethods);
    return GlobalMethods;
}());

//# sourceMappingURL=global-methods.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_password_forgot_password__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_student_dashboard_student_dashboard__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tutor_tutors_dasboard_tutors_dasboard__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__student_find_tutor_find_tutor__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, httpService, serviceName, formBuilder, validationService, globalMethods, platform, googlePlus, facebook) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.globalMethods = globalMethods;
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.loginData = {
            email: '',
            password: '',
            device_id: ''
        };
        localStorage.setItem('pageName', 'LoginPage');
        this.menuCtrl.enable(false);
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */].emailValidator])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */].passwordValidator])]
        });
        this.googleApi = '';
        this.loginData.email = "";
        this.loginData.password = "";
        this.loginData.device_id = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.openRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.openForgotPassowrdPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.login = function () {
        //test
        var _this = this;
        this.globalMethods.loaderStart();
        this.loginData.device_id = this.globalMethods.getter('oneSignalId');
        this.httpService.httpServicePost(this.serviceName.login, this.loginData)
            .subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                if (data[0].data[0].id && data[0].data[0].id != null) {
                    _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data[0]));
                    if (data[0].data[0].user_belongs_group == _this.serviceName.student) {
                        __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].prototype.studentMenu();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__student_find_tutor_find_tutor__["a" /* FindTutorPage */]);
                        // this.navCtrl.setRoot(StudentDashboardPage);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].prototype.tutorMenu();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__tutor_tutors_dasboard_tutors_dasboard__["a" /* TutorsDasboardPage */]);
                    }
                }
                else {
                    _this.globalMethods.showToast(data[1].response.message);
                }
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    // Google plus login code
    LoginPage.prototype.googleLogin = function () {
        var self = this;
        this.googlePlus.login({}).then(function (data) {
            var res = data.displayName.split(" ");
            var param = {
                email: data.email,
                first_name: res[0],
                last_name: res[1],
                phone: '',
                dob: '',
                platform: 'android',
                device_id: self.globalMethods.getter(self.serviceName.oneSignalId),
                registered_by: 'google',
                social_id: data.userId,
                social_token: data.idToken,
                image_url: data.imageUrl
            };
            self.globalMethods.loaderStart();
            self.httpService.httpServicePost(self.serviceName.social_login, param).subscribe(function (data) {
                self.globalMethods.loaderStop();
                if (data[1].response.status == 1 && data[0].data[0].id && data[0].data[0].id != null) {
                    self.globalMethods.setter(self.serviceName.userProfile, JSON.stringify(data[0].data[0]));
                    if (data[0].data[0].user_belongs_group == self.serviceName.student) {
                        __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].prototype.studentMenu();
                        self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__student_student_dashboard_student_dashboard__["a" /* StudentDashboardPage */]);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].prototype.tutorMenu();
                        self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__tutor_tutors_dasboard_tutors_dasboard__["a" /* TutorsDasboardPage */]);
                    }
                    self.globalMethods.showToast(data[1].response.message);
                }
                else if (data[1].response.status == 0) {
                    self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */], { userData: param });
                    self.globalMethods.showToast(data[1].response.message);
                }
                else {
                    self.globalMethods.showToast(data[1].response.message);
                }
            }, function (error) {
                self.globalMethods.loaderStop();
            }, function () { });
        }).catch(function (err) {
        });
    };
    //Facebook code
    LoginPage.prototype.facebookSignUp = function () {
        var self = this;
        var permissions = new Array();
        permissions = ["public_profile", "email"];
        this.facebook.login(permissions).then(function (response) {
            self.globalMethods.loaderStart();
            var url = "https://graph.facebook.com/me?fields=id,gender,first_name,last_name,picture,email,birthday&access_token=" + response.authResponse.accessToken;
            self.httpService.httpSocialLoginsGet(url).subscribe(function (data) {
                self.globalMethods.loaderStop();
                var param = {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone: '',
                    registered_by: 'facebook',
                    device_id: self.globalMethods.getter(self.serviceName.oneSignalId),
                    platform: 'android',
                    social_id: data.id,
                    social_token: response.authResponse.accessToken,
                    image_url: 'https://graph.facebook.com/' + data.id + '/picture?type=large',
                };
                self.globalMethods.loaderStart();
                self.httpService.httpServicePost(self.serviceName.social_login, param).subscribe(function (data) {
                    self.globalMethods.loaderStop();
                    if (data[1].response.status == 1 && data[0].data[0].id && data[0].data[0].id != null) {
                        self.globalMethods.setter(self.serviceName.userProfile, JSON.stringify(data[0].data[0]));
                        if (data[0].data[0].user_belongs_group == self.serviceName.student) {
                            __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].prototype.studentMenu();
                            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__student_student_dashboard_student_dashboard__["a" /* StudentDashboardPage */]);
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */].prototype.tutorMenu();
                            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__tutor_tutors_dasboard_tutors_dasboard__["a" /* TutorsDasboardPage */]);
                        }
                        self.globalMethods.showToast(data[1].response.message);
                    }
                    else if (data[1].response.status == 0) {
                        self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */], { userData: param });
                        self.globalMethods.showToast(data[1].response.message);
                    }
                    else {
                        self.globalMethods.showToast(data[1].response.message);
                    }
                }, function (error) {
                    self.globalMethods.loaderStop();
                }, function () { });
            }, function (error) {
            });
        }, function (error) {
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\login\login.html"*/'<ion-content bg-dark padding-extra-lr>\n\n    <div class="content">\n\n        <div class="logo"> <img src="assets/img/logo-01.svg" alt=""> </div>\n\n        <form [formGroup]="loginForm" novalidate (ngSubmit)="(loginForm.valid && submitted) && login()">\n\n            <ion-list form-auth-list no-bg no-lines>\n\n                <ion-item>\n\n                    <ion-icon item-left class="tuts-avatar"></ion-icon>\n\n                    <ion-input type="email" placeholder="{{\'login.email_placeholder\'| translate }}" [(ngModel)]="loginData.email" formControlName="email"></ion-input>\n\n                    <ion-icon class="validation-icon" *ngIf="!loginForm.controls.email.pristine || submitted" [name]="(!loginForm.controls.email.valid && (loginForm.controls.email.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!loginForm.controls.email.valid && (loginForm.controls.email.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                    item-right></ion-icon>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-icon item-left class="tuts-padlock"></ion-icon>\n\n                    <ion-input type="password" [(ngModel)]="loginData.password" formControlName="password" placeholder="{{\'login.Password_placeholder\'| translate }}"></ion-input>\n\n                    <ion-icon class="validation-icon" *ngIf="!loginForm.controls.password.pristine || submitted" [name]="(!loginForm.controls.password.valid && (loginForm.controls.password.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!loginForm.controls.password.valid && (loginForm.controls.password.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                    item-right></ion-icon>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'login.signup\'|translate}} </button>\n\n        </form>\n\n        <button ion-button block clear round color="danger" (click)="openForgotPassowrdPage()">{{\'login.forgot_password\'|translate}} </button>\n\n        <p text-center>{{\'login.or\'|translate}} </p>\n\n        <ion-row>\n\n            <ion-col center text-center>\n\n                <button ion-fab clear dark-shadow color="facebook" (click)="facebookSignUp()">\n\n                    <ion-icon class="tuts-facebook"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <button ion-fab clear dark-shadow color="google_plus" (click)="googleLogin()">\n\n                    <ion-icon class="tuts-google-plus"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <button ion-fab clear dark-shadow color="dark" (click)="openRegisterPage()">\n\n                    <ion-icon class="tuts-envelope"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorReviewsPage = /** @class */ (function () {
    function TutorReviewsPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.tutor = this.navParams.data.selectedTutor;
    }
    TutorReviewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            tutor_id: this.tutor
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getTutorReviews, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.reviews = data[0].data;
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-reviews',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\tutor-reviews\tutor-reviews.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{\'stu_teaching_types.review\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-card *ngFor="let review of reviews">\n\n      <ion-item>\n\n        <ion-avatar item-left>\n\n          <img *ngIf="review.photo!=\'\'" src="{{serviceName.profileImages}}{{review.photo}}">\n\n          <img *ngIf="review.photo==\'\'" src="{{serviceName.defaultImage}}">\n\n        </ion-avatar>\n\n        <h2>{{\'stu_teaching_types.per\'|translate}}</h2>\n\n        <p><span color="dark"><ion-icon name="calendar"></ion-icon> {{review.posted_on | date:\'MMM d, y\'}}</span></p>\n\n        <div class="star" color="warning">\n\n          <rating [(ngModel)]="review.rating" max="5" readOnly="true"></rating>\n\n        </div>\n\n        <p color="danger">{{\'stu_teaching_types.course\'|translate}} : {{review.course}}</p>\n\n      </ion-item>\n\n      <ion-item text-wrap>\n\n        <p> {{review.comments}} </p>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n		'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\tutor-reviews\tutor-reviews.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], TutorReviewsPage);
    return TutorReviewsPage;
}());

//# sourceMappingURL=tutor-reviews.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(navCtrl, navParams, httpService, globalMethods, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.reviews = [];
        this.tutor = this.navParams.data.tutor;
    }
    ReviewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            tutor_id: this.tutor
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.reviews, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.reviews = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reviews',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\reviews\reviews.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{\'stu_teaching_types.review\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-card *ngFor="let review of reviews">\n\n      <ion-item>\n\n        <ion-avatar item-left>\n\n          <img *ngIf="review.photo!=\'\'" src="{{serviceName.profileUrl}}{{review.photo}}">\n\n          <img *ngIf="review.photo==\'\'" src="{{serviceName.defaultImage}}">\n\n        </ion-avatar>\n\n        <h2>{{review.username}}</h2>\n\n        <p>\n\n          <span color="dark"><ion-icon name="calendar"></ion-icon> {{review.created_at | date:\'MMM d, y\'}}</span>\n\n          <span class="star" color="warning">\n\n                    <rating [(ngModel)]="review.rating" max="5" readOnly="true"></rating>\n\n                    </span>\n\n        </p>\n\n        <p color="danger">{{\'stu_teaching_types.course\'|translate}}:{{review.name}}</p>\n\n      </ion-item>\n\n      <ion-item text-wrap>\n\n        <p [innerHtml]="review.comments"></p>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\reviews\reviews.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_tutor_find_tutor__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TutorFilterPage = /** @class */ (function () {
    function TutorFilterPage(navCtrl, navParams, viewCtrl, globalMethods, httpService, serviceName, alertCtrl, _applicationRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.alertCtrl = alertCtrl;
        this._applicationRef = _applicationRef;
        this.filterTutors = "course";
        this.courses = [];
        this.locations = [];
        this.teachingTypes = [];
    }
    TutorFilterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getFilterData, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.courses = [];
            if (data[0].data[0].length != 0) {
                var courses = data[0].data[0];
                for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
                    var course = courses_1[_i];
                    var temp = {
                        id: course.id,
                        course_name: course.name,
                        avail_records_cnt: course.avail_records_cnt,
                        checked: false
                    };
                    _this.courses.push(temp);
                }
            }
            _this.locations = [];
            if (data[0].data[1].length != 0) {
                var locations = data[0].data[1];
                for (var _a = 0, locations_1 = locations; _a < locations_1.length; _a++) {
                    var location_1 = locations_1[_a];
                    var templ = {
                        id: location_1.id,
                        location_name: location_1.location_name,
                        avail_records_cnt: location_1.avail_records_cnt,
                        checked: false
                    };
                    _this.locations.push(templ);
                }
            }
            _this.teachingTypes = [];
            if (data[0].data[2].length != 0) {
                var teachings = data[0].data[2];
                for (var _b = 0, teachings_1 = teachings; _b < teachings_1.length; _b++) {
                    var teaching = teachings_1[_b];
                    var tempt = {
                        id: teaching.id,
                        teaching: teaching.teaching_type,
                        avail_records_cnt: teaching.avail_records_cnt,
                        checked: false
                    };
                    _this.teachingTypes.push(tempt);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorFilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TutorFilterPage.prototype.setSegment = function (value) {
        this.filterTutors = value;
        var self = this;
        setTimeout(function () {
            self._applicationRef.tick();
        }, 50);
    };
    TutorFilterPage.prototype.getFilterTutors = function () {
        this.selectedCourses = [];
        var courses = this.courses;
        for (var _i = 0, courses_2 = courses; _i < courses_2.length; _i++) {
            var course = courses_2[_i];
            if (course.checked == true) {
                this.selectedCourses.push(course.id);
            }
        }
        this.selectedLocations = [];
        var locations = this.locations;
        for (var _a = 0, locations_2 = locations; _a < locations_2.length; _a++) {
            var location_2 = locations_2[_a];
            if (location_2.checked == true) {
                this.selectedLocations.push(location_2.id);
            }
        }
        this.selectedTeachingTypes = [];
        var teachings = this.teachingTypes;
        for (var _b = 0, teachings_2 = teachings; _b < teachings_2.length; _b++) {
            var teaching = teachings_2[_b];
            if (teaching.checked == true) {
                this.selectedTeachingTypes.push(teaching.id);
            }
        }
        if (this.selectedCourses.length == 0 && this.selectedLocations.length == 0 && this.selectedTeachingTypes.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Filter',
                subTitle: 'Please select Course(s) or Location(s) or Teaching type(s) to filter tutors',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__find_tutor_find_tutor__["a" /* FindTutorPage */], { courses: this.selectedCourses, locations: this.selectedLocations, teachings: this.selectedTeachingTypes });
        }
    };
    TutorFilterPage.prototype.changeCourse = function (course) {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.course_name == course) {
                item.checked = !item.checked;
            }
        }
    };
    TutorFilterPage.prototype.changeLocation = function (location) {
        for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.location_name == location) {
                item.checked = !item.checked;
            }
        }
    };
    TutorFilterPage.prototype.changeTeaching = function (teaching) {
        for (var _i = 0, _a = this.teachingTypes; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.teaching == teaching) {
                item.checked = !item.checked;
            }
        }
    };
    TutorFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-filter',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\tutor-filter\tutor-filter.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <!-- <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button> -->\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{\'stu_teaching_types.filter\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="getFilterTutors()" color="white">\n\n        <ion-icon class="ion-md-checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutor-filter-background">\n\n  <!-- <ion-label class="text1">{{\'stu_teaching_types.title\'|translate}}</ion-label>\n\n  <ion-label class="text2">{{\'stu_teaching_types.desc1\'|translate}}<br/>{{\'stu_teaching_types.desc2\'|translate}}</ion-label> -->\n\n  <ion-list>\n\n    <ion-item >\n\n      <ion-select [(ngModel)]="course" multiple="true" cancelText="{{\'stu_teaching_types.no\'|translate}}" okText="{{\'stu_teaching_types.yes\'|translate}}" interface="popover" placeholder="{{\'stu_teaching_types.loct\'|translate}}" (ionChange)="changeCourse(course)">\n\n          <ion-option *ngFor="let course of courses" value="{{course.course_name}}" selected="{{course.checked}}" >{{course.course_name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item >\n\n        <ion-select [(ngModel)]="location" multiple="true" cancelText="{{\'stu_teaching_types.no\'|translate}}" okText="{{\'stu_teaching_types.yes\'|translate}}" interface="popover" placeholder="{{\'stu_teaching_types.course\'|translate}}" (ionChange)="changeLocation(location)">\n\n            <ion-option *ngFor="let location of locations" value="{{location.location_name}}" selected="{{location.checked}}" >{{location.location_name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item >\n\n          <ion-select [(ngModel)]="teaching" multiple="true" cancelText="{{\'stu_teaching_types.no\'|translate}}" okText="{{\'stu_teaching_types.yes\'|translate}}" interface="popover" placeholder="{{\'stu_teaching_types.type\'|translate}}" (ionChange)="changeTeaching(teaching)">\n\n              <ion-option *ngFor="let teaching of teachingTypes" value="{{teaching.teaching}}" selected="{{teaching.checked}}" >{{teaching.teaching}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n  </ion-list>\n\n  <!-- <button ion-button icon-start (click)="getFilterTutors()">\n\n    <ion-icon name="search"></ion-icon>\n\n    {{\'stu_teaching_types.btnsearch\'|translate}}\n\n  </button> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\tutor-filter\tutor-filter.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]])
    ], TutorFilterPage);
    return TutorFilterPage;
}());

//# sourceMappingURL=tutor-filter.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SERVER_URL = 'http://mudarsee.com';
var ServiceName = /** @class */ (function () {
    function ServiceName() {
        /* Service locations*/
        this.serviceUrl = SERVER_URL + '/service/';
        this.serviceLogin = SERVER_URL + '/service_login/';
        this.login = this.serviceLogin + 'login';
        this.register = this.serviceLogin + 'register';
        this.site_settings_get = this.serviceUrl + 'get_site_settings';
        this.get_phone_codes = this.serviceUrl + 'get_phone_codes ';
        this.forgot_password = this.serviceLogin + 'forgot_password';
        this.editPersonalInformation = this.serviceUrl + 'editPersonalInformation';
        //Social logins
        this.social_login = this.serviceLogin + 'social_login';
        //tutor
        this.tutorDashboard = this.serviceUrl + 'tutor_dashboard';
        this.getBookings = this.serviceUrl + 'get_tutor_bookings';
        this.getBookingStatus = this.serviceUrl + 'booking_status';
        this.updateBookingStatus = this.serviceUrl + 'update_booking_status';
        this.tutorCourses = this.serviceUrl + 'get_tutor_courses';
        this.deleteTutorCourse = this.serviceUrl + 'delete_tutor_course';
        this.addTutorCourse = this.serviceUrl + 'add_tutor_course';
        this.getTutorLocations = this.serviceUrl + 'get_tutor_locations';
        this.updateTutorLocations = this.serviceUrl + 'update_tutor_locations';
        this.getTutorTeachingTypes = this.serviceUrl + 'get_tutors_teaching_types';
        this.updateTutorTeachingTypes = this.serviceUrl + 'update_tutor_teaching_types';
        this.setTutorPrivacySettings = this.serviceUrl + 'update_privacy_settings';
        this.tutorExperiences = this.serviceUrl + 'tutor_experience';
        this.addExperience = this.serviceUrl + 'add_experience';
        this.get_leads = this.serviceUrl + 'search_student_leads';
        this.checkViewedLead = this.serviceUrl + 'check_viewed_lead';
        this.tutorViewLead = this.serviceUrl + 'tutor_view_lead';
        this.get_lead_details = this.serviceUrl + 'lead_details';
        this.leads_filter_data = this.serviceUrl + 'leads_filter_data';
        this.sendLeadMessage = this.serviceUrl + 'send_lead_message';
        this.get_all_courses = this.serviceUrl + 'get_all_courses';
        this.getTutors = this.serviceUrl + 'get_course_tutors';
        this.tutorProfile = this.serviceUrl + 'get_tutor_profile';
        this.bookTutorTutor = this.serviceUrl + 'book_tutor';
        this.reviews = this.serviceUrl + 'reviews';
        this.get_categories = this.serviceUrl + 'get_categories';
        this.get_courses = this.serviceUrl + 'get_courses';
        this.creditConversionRequest = this.serviceUrl + 'credit_conversion_request';
        this.tutor_chat_students_list_get = this.serviceUrl + 'get_tutor_chat_students_list';
        this.update_chat_status = this.serviceUrl + 'update_chat_status';
        this.tutor_questions_students_list_get = this.serviceUrl + 'get_tutor_questions_students_list';
        //peter Services
        this.certificates_tutors_get = this.serviceUrl + 'get_certificates_tutors';
        this.certificates_upload = this.serviceUrl + 'certificates_upload';
        this.profile_upload = this.serviceUrl + 'profile_upload';
        //student
        this.studentDashboard = this.serviceUrl + 'student_dashboard';
        this.getStudentBookings = this.serviceUrl + 'get_student_bookings';
        this.getStudentBookingStatus = this.serviceUrl + 'get_student_booking_status';
        this.getKnownLanguages = this.serviceUrl + 'get_known_languages';
        this.updateStudentPersonalDetails = this.serviceUrl + 'update_stpersonal_details';
        this.updateStudentProfileDetails = this.serviceUrl + 'update_stprofile_details';
        this.getCountries = this.serviceUrl + 'countries';
        this.updateStudentContactDetails = this.serviceUrl + 'update_stcontact_details';
        this.updatePrivacySettings = this.serviceUrl + 'update_privacy_settings';
        this.getStudentTeachingTypes = this.serviceUrl + 'get_student_teaching_types';
        this.updateStudentTeachingTypes = this.serviceUrl + 'update_stteaching_types';
        this.getStudentLocations = this.serviceUrl + 'get_student_locations';
        this.updateStudentLocations = this.serviceUrl + 'update_student_locations';
        this.getStudentCourses = this.serviceUrl + 'get_student_courses';
        this.updateStudentCourses = this.serviceUrl + 'update_student_courses';
        this.getStudentCreditTransHistory = this.serviceUrl + 'get_stcredit_trans_history';
        this.getStudentCoursePurchases = this.serviceUrl + 'get_stcourse_purchases';
        this.getStudentLeads = this.serviceUrl + 'get_student_leads';
        this.updateStudentLeadStatus = this.serviceUrl + 'update_student_lead_status';
        this.getLeadData = this.serviceUrl + 'get_post_lead_data';
        this.postLead = this.serviceUrl + 'post_lead';
        this.changePassword = this.serviceUrl + 'change_password';
        this.getTermsConditions = this.serviceLogin + 'get_terms_conditions';
        this.getAboutUs = this.serviceLogin + 'get_about_us';
        this.contact = this.serviceLogin + 'contact';
        this.getSearchTutors = this.serviceUrl + 'get_tutors';
        this.getStuTutorProfile = this.serviceUrl + 'get_tutor_profile';
        this.getFilterData = this.serviceUrl + 'get_filter_data';
        this.getTutorCourses = this.serviceUrl + 'get_tutor_courses';
        this.studentSendMessage = this.serviceUrl + 'stu_send_message';
        this.getTutorReviews = this.serviceUrl + 'get_tutor_reviews';
        this.bookTutor = this.serviceUrl + 'book_tutor';
        this.addFavTutor = this.serviceUrl + 'add_fav_tutor';
        this.getStudentFavTutors = this.serviceUrl + 'get_student_fav_tutors';
        this.removeFavTutor = this.serviceUrl + 'remove_fav_tutor';
        this.booking_questions_get = this.serviceUrl + 'get_booking_questions';
        this.question_add = this.serviceUrl + 'add_question';
        this.question_conversation_get = this.serviceUrl + 'get_question_conversation';
        this.answer_to_question = this.serviceUrl + 'answer_to_question';
        this.update_answer_status = this.serviceUrl + 'update_answer_status';
        this.chat_history_get = this.serviceUrl + 'get_chat_history';
        this.message_send = this.serviceUrl + 'send_message';
        this.get_blogs = this.serviceUrl + 'get_tutor_blogs';
        this.get_student_questions_tutors_list = this.serviceUrl + 'get_student_questions_tutors_list';
        // public
        /* Courses Image */
        this.coursesImage = SERVER_URL + '/assets/uploads/courses/';
        this.profileImages = SERVER_URL + '/assets/uploads/profiles/';
        this.profileUrl = SERVER_URL + '/assets/uploads/profiles/';
        this.defaultImage = "assets/img/logo.svg";
        this.default_pictureImage = "http://www.freeiconspng.com/uploads/no-image-icon-13.png";
        /* Local Storage Keys */
        this.userProfile = 'userProfile';
        this.pageName = 'pageName';
        this.site_settings_key = 'site_settings';
        this.oneSignalId = "oneSignalId";
        // User types
        this.student = 2;
        this.tutor = 3;
    }
    ServiceName = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ServiceName);
    return ServiceName;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(683);
throw new Error("Cannot find module \"ng2-translate\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_change_password_change_password__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_certificates_certificates__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tutor_tutors_dasboard_tutors_dasboard__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tutor_booking_booking__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tutor_tutor_courses_tutor_courses__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tutor_tutor_locations_tutor_locations__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tutor_tutor_teaching_types_tutor_teaching_types__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tutor_tutor_privacy_settings_tutor_privacy_settings__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tutor_tutor_personal_information_tutor_personal_information__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tutor_tutor_profile_information_tutor_profile_information__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tutor_tutor_experience_tutor_experience__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tutor_tutor_contact_information_tutor_contact_information__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tutor_leads_leads__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tutor_courses_courses__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tutor_course_categories_course_categories__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tutor_conversion_requests_conversion_requests__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_student_student_dashboard_student_dashboard__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_student_student_profile_student_profile__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_student_student_bookings_student_bookings__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_student_student_profile_info_student_profile_info__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_student_my_address_my_address__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_student_student_privacy_student_privacy__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_student_student_teaching_types_student_teaching_types__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_student_student_locations_student_locations__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_student_student_courses_student_courses__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_student_credit_trans_history_credit_trans_history__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_student_my_course_purchases_my_course_purchases__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_student_student_leads_student_leads__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_student_find_tutor_find_tutor__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_student_stu_fav_tutors_stu_fav_tutors__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_http_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//transelate


// Pages





//tutor














//Student














// Providers




Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var MyApp = /** @class */ (function () {
    function MyApp(platform, storage, splashScreen, globalMethods, serviceName, _applicationRef, translate, httpService, events, oneSignal, menuCtrl) {
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this._applicationRef = _applicationRef;
        this.translate = translate;
        this.httpService = httpService;
        this.events = events;
        this.oneSignal = oneSignal;
        this.menuCtrl = menuCtrl;
        this.shownGroup = '';
        this.application_language = navigator.language.split('-')[0];
        this.data = {};
        this.menuSide = "left";
        this.userData = {};
        console.log(this.application_language);
    }
    MyApp.prototype.ngAfterViewInit = function () {
        this.initializeApp();
        this.menuSetting();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.userData.username = _this.globalMethods.userType('username');
            _this.userData.photo = _this.globalMethods.userType('photo');
            _this.userData.email = _this.globalMethods.userType('email');
            _this.userData.user_id = _this.globalMethods.userType('id');
            _this.userData.city = _this.globalMethods.userType('city');
            _this.userData.net_credits = _this.globalMethods.userType('net_credits');
            _this.userData.user_belongs_group = _this.globalMethods.userType('user_belongs_group');
            //trans
            _this.storage.get('Language').then(function (Language) {
                var element = document.getElementById("lovelyMenu");
                if (Language == 'en') {
                    _this.translate.setDefaultLang(Language);
                    _this.translate.use(Language);
                    _this.menuSide = 'left';
                    _this.data["Lang"] = 'English';
                    element.setAttribute("side", _this.menuSide);
                    _this.platform.setDir('rtl', false);
                    _this.platform.setDir('ltr', true);
                }
                else {
                    console.log(navigator.language.split('-')[0]);
                    _this.menuSide = 'right';
                    _this.data["Lang"] = 'العربيه';
                    element.setAttribute("side", _this.menuSide);
                    _this.translate.setDefaultLang('ar');
                    _this.translate.use('ar');
                    _this.platform.setDir('rtl', true);
                    _this.platform.setDir('ltr', false);
                }
            });
            if (_this.userData.user_id == 0) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                // this.rootPage=StudentDashboardPage;
            }
            else {
                switch (localStorage.getItem('pageName')) {
                    case "StudentDashboardPage":
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_37__pages_student_find_tutor_find_tutor__["a" /* FindTutorPage */];
                        break;
                    case "LoginPage":
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                        break;
                    case "TutorsDasboardPage":
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_tutor_tutors_dasboard_tutors_dasboard__["a" /* TutorsDasboardPage */];
                        break;
                }
            }
            _this.httpService.httpServicePost(_this.serviceName.site_settings_get, '').subscribe(function (data) {
                if (data[0].data != '') {
                    _this.globalMethods.setter(_this.serviceName.site_settings_key, JSON.stringify(data[0].data));
                    _this.oneSignal.startInit(data[0].data.one_signal_app_id, data[0].data.project_no);
                    _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                    _this.oneSignal.handleNotificationReceived().subscribe(function (data) {
                    });
                    _this.oneSignal.handleNotificationOpened().subscribe(function (data) {
                    });
                    _this.oneSignal.enableSound(true);
                    _this.oneSignal.endInit();
                    _this.oneSignal.getIds().then(function (data) {
                        _this.globalMethods.setter('oneSignalId', data.userId);
                    });
                }
            }, function (error) { });
        });
        this.splashScreen.hide();
    };
    MyApp.prototype.setTimeout = function () {
        var self = this;
        if (self.userData.user_id == 0) {
            self.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        }
        else {
            switch (localStorage.getItem('pageName')) {
                case "StudentDashboardPage":
                    self.rootPage = __WEBPACK_IMPORTED_MODULE_25__pages_student_student_dashboard_student_dashboard__["a" /* StudentDashboardPage */];
                    break;
                case "LoginScreen":
                    self.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                    break;
                case "TutorsDasboardPage":
                    self.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_tutor_tutors_dasboard_tutors_dasboard__["a" /* TutorsDasboardPage */];
                    break;
            }
        }
    };
    MyApp.prototype.loginScreen = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.menuSetting = function () {
        this.userType = this.globalMethods.userType('user_belongs_group');
        switch (this.userType) {
            case "" + this.serviceName.student + "":
                this.studentMenu();
                break;
            case "" + this.serviceName.tutor + "":
                this.tutorMenu();
                break;
            default:
                this.studentMenu();
        }
    };
    MyApp.prototype.studentMenu = function () {
        // this.translate.get('studentMenu').subscribe(translated => {
        //console.log(translated);
        this.pages = [
            { name: 'studentMenu.title_Dashboard', title: 'Dashboard', icon: 'tuts-house', component: __WEBPACK_IMPORTED_MODULE_25__pages_student_student_dashboard_student_dashboard__["a" /* StudentDashboardPage */], subMenu: [] },
            { name: 'studentMenu.title_booking', title: 'Bookings', icon: 'tuts-hand', component: __WEBPACK_IMPORTED_MODULE_27__pages_student_student_bookings_student_bookings__["a" /* StudentBookingsPage */], subMenu: [] },
            { name: 'studentMenu.title_lead', title: 'My Leads', icon: 'tuts-file-folder', component: __WEBPACK_IMPORTED_MODULE_36__pages_student_student_leads_student_leads__["a" /* StudentLeadsPage */], subMenu: [] },
            { name: 'studentMenu.title_purchase', title: 'My Course Purchases', icon: 'tuts-book2', component: __WEBPACK_IMPORTED_MODULE_35__pages_student_my_course_purchases_my_course_purchases__["a" /* MyCoursePurchasesPage */], subMenu: [] },
            { name: 'studentMenu.title_credit', title: 'Credits Transactions History', icon: 'tuts-shuffle', component: __WEBPACK_IMPORTED_MODULE_34__pages_student_credit_trans_history_credit_trans_history__["a" /* CreditTransHistoryPage */], subMenu: [] },
            { name: 'studentMenu.title_manag', title: 'Manage', icon: 'tuts-monitor', component: '',
                subMenu: [
                    { name: 'studentMenu.title_course', title: 'Courses', icon: 'tuts-file-folder', component: __WEBPACK_IMPORTED_MODULE_33__pages_student_student_courses_student_courses__["a" /* StudentCoursesPage */], showDetails: false },
                    { name: 'studentMenu.title_cert', title: 'Certificates', icon: 'tuts-diploma', component: __WEBPACK_IMPORTED_MODULE_9__pages_certificates_certificates__["a" /* CertificatesPage */], showDetails: false },
                    { name: 'studentMenu.title_locat', title: 'Locations', icon: 'tuts-location', component: __WEBPACK_IMPORTED_MODULE_32__pages_student_student_locations_student_locations__["a" /* StudentLocationsPage */], showDetails: false },
                    { name: 'studentMenu.title_type', title: 'Preferred Teaching Type', icon: 'tuts-class', component: __WEBPACK_IMPORTED_MODULE_31__pages_student_student_teaching_types_student_teaching_types__["a" /* StudentTeachingTypesPage */], showDetails: false },
                    { name: 'studentMenu.title_privacy', title: 'Privacy', icon: 'tuts-padlock', component: __WEBPACK_IMPORTED_MODULE_30__pages_student_student_privacy_student_privacy__["a" /* StudentPrivacyPage */], showDetails: false }
                ] },
            { name: 'studentMenu.title_acount', title: 'Account', icon: 'tuts-info', component: '',
                subMenu: [
                    { name: 'studentMenu.title_pers', title: 'Personal Information', icon: 'tuts-hand', component: __WEBPACK_IMPORTED_MODULE_26__pages_student_student_profile_student_profile__["a" /* StudentProfilePage */], showDetails: false },
                    { name: 'studentMenu.title_prof', title: 'Profile Information', icon: 'tuts-file', component: __WEBPACK_IMPORTED_MODULE_28__pages_student_student_profile_info_student_profile_info__["a" /* StudentProfileInfoPage */], showDetails: false },
                    { name: 'studentMenu.title_addres', title: 'My Address', icon: 'tuts-settings-1', component: __WEBPACK_IMPORTED_MODULE_29__pages_student_my_address_my_address__["a" /* MyAddressPage */], showDetails: false },
                    { name: 'studentMenu.title_pass', title: 'Change Password', icon: 'tuts-reload', component: __WEBPACK_IMPORTED_MODULE_8__pages_change_password_change_password__["a" /* ChangePasswordPage */], showDetails: false }
                ] },
            { name: 'studentMenu.title_tutor', title: 'Favourite Tutors', icon: 'tuts-heart', component: __WEBPACK_IMPORTED_MODULE_38__pages_student_stu_fav_tutors_stu_fav_tutors__["a" /* StuFavTutorsPage */], subMenu: [] },
            { name: 'studentMenu.title_blog', title: 'Blogs', icon: 'tuts-blogger', component: __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__["a" /* BlogPage */], subMenu: [] },
            { name: 'studentMenu.title_fin', title: 'Find Tutor', icon: 'tuts-magnifying-glass', component: __WEBPACK_IMPORTED_MODULE_37__pages_student_find_tutor_find_tutor__["a" /* FindTutorPage */], subMenu: [] },
            { name: 'studentMenu.title_set', title: 'Settings', icon: 'tuts-settings', component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */], subMenu: [] }
        ];
        // });
    };
    MyApp.prototype.tutorMenu = function () {
        // this.translate.get('studentMenu').subscribe(translated => {
        this.pages = [
            { name: 'studentMenu.title_Dashboard', title: 'Dashboard', icon: 'tuts-house', component: __WEBPACK_IMPORTED_MODULE_11__pages_tutor_tutors_dasboard_tutors_dasboard__["a" /* TutorsDasboardPage */], subMenu: [] },
            { name: 'studentMenu.title_booking', title: 'Bookings', icon: 'tuts-hand', component: __WEBPACK_IMPORTED_MODULE_12__pages_tutor_booking_booking__["a" /* BookingPage */], subMenu: [] },
            { name: 'studentMenu.title_manag', title: 'Manage', icon: 'tuts-monitor', component: '',
                subMenu: [
                    { name: 'studentMenu.title_course', title: 'Courses', icon: 'tuts-file-folder', component: __WEBPACK_IMPORTED_MODULE_13__pages_tutor_tutor_courses_tutor_courses__["a" /* TutorCoursesPage */], showDetails: false },
                    { name: 'studentMenu.title_locat', title: 'Locations', icon: 'tuts-location', component: __WEBPACK_IMPORTED_MODULE_14__pages_tutor_tutor_locations_tutor_locations__["a" /* TutorLocationsPage */], showDetails: false },
                    { name: 'studentMenu.title_type', title: 'Teaching Type', icon: 'tuts-class', component: __WEBPACK_IMPORTED_MODULE_15__pages_tutor_tutor_teaching_types_tutor_teaching_types__["a" /* TutorTeachingTypesPage */], showDetails: false },
                    { name: 'studentMenu.title_cert', title: 'Certificates', icon: 'tuts-diploma', component: __WEBPACK_IMPORTED_MODULE_9__pages_certificates_certificates__["a" /* CertificatesPage */], showDetails: false },
                    { name: 'studentMenu.title_privacy', title: 'Privacy', icon: 'tuts-padlock', component: __WEBPACK_IMPORTED_MODULE_16__pages_tutor_tutor_privacy_settings_tutor_privacy_settings__["a" /* TutorPrivacySettingsPage */], showDetails: false }
                ] },
            { name: 'studentMenu.title_acount', title: 'Account', icon: 'tuts-info', component: '',
                subMenu: [
                    { name: 'studentMenu.title_pers', title: 'Personnel Information', icon: 'tuts-file', component: __WEBPACK_IMPORTED_MODULE_17__pages_tutor_tutor_personal_information_tutor_personal_information__["a" /* TutorPersonalInformationPage */], showDetails: false },
                    { name: 'studentMenu.title_prof', title: 'Profile information', icon: 'tuts-avatar', component: __WEBPACK_IMPORTED_MODULE_18__pages_tutor_tutor_profile_information_tutor_profile_information__["a" /* TutorProfileInformationPage */], showDetails: false },
                    { name: 'studentMenu.title_exp', title: 'Experience', icon: 'tuts-medal', component: __WEBPACK_IMPORTED_MODULE_19__pages_tutor_tutor_experience_tutor_experience__["a" /* TutorExperiencePage */], showDetails: false },
                    { name: 'studentMenu.title_info', title: 'Contact Information', icon: 'tuts-pen', component: __WEBPACK_IMPORTED_MODULE_20__pages_tutor_tutor_contact_information_tutor_contact_information__["a" /* TutorContactInformationPage */], showDetails: false },
                    { name: 'studentMenu.title_pass', title: 'Change Password', icon: 'tuts-reload', component: __WEBPACK_IMPORTED_MODULE_8__pages_change_password_change_password__["a" /* ChangePasswordPage */], showDetails: false }
                ] },
            { name: 'studentMenu.title_lead', title: 'Leads', icon: 'tuts-file-folder', component: __WEBPACK_IMPORTED_MODULE_21__pages_tutor_leads_leads__["a" /* LeadsPage */], subMenu: [] },
            { name: 'studentMenu.title_course', title: 'Courses', icon: 'tuts-school-material', component: __WEBPACK_IMPORTED_MODULE_22__pages_tutor_courses_courses__["a" /* CoursesPage */], subMenu: [] },
            { name: 'studentMenu.title_cat', title: 'Course Categories', icon: 'tuts-book2', component: __WEBPACK_IMPORTED_MODULE_23__pages_tutor_course_categories_course_categories__["a" /* CourseCategoriesPage */], subMenu: [] },
            { name: 'studentMenu.title_conv', title: 'Credit Conversion Request', icon: 'tuts-shuffle', component: __WEBPACK_IMPORTED_MODULE_24__pages_tutor_conversion_requests_conversion_requests__["a" /* ConversionRequestsPage */], subMenu: [] },
            { name: 'studentMenu.title_blog', title: 'Blogs', icon: 'tuts-blogger', component: __WEBPACK_IMPORTED_MODULE_10__pages_blog_blog__["a" /* BlogPage */], subMenu: [] },
            { name: 'studentMenu.title_credit', title: 'Credits Transactions History', icon: 'tuts-shuffle', component: __WEBPACK_IMPORTED_MODULE_34__pages_student_credit_trans_history_credit_trans_history__["a" /* CreditTransHistoryPage */], subMenu: [] },
            { name: 'studentMenu.title_set', title: 'Settings', icon: 'tuts-settings', component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */], subMenu: [] }
        ];
        // });
    };
    MyApp.prototype.menuOpened = function () {
        this.userData.username = this.globalMethods.userType('username');
        this.userData.photo = this.globalMethods.userType('photo');
        this.userData.email = this.globalMethods.userType('email');
        this.userData.user_id = this.globalMethods.userType('id');
        this.userData.city = this.globalMethods.userType('city');
        this.userData.net_credits = this.globalMethods.userType('net_credits');
        this.userData.user_belongs_group = this.globalMethods.userType('user_belongs_group');
        this.menuSetting();
        var self = this;
        setTimeout(function () {
            self._applicationRef.tick();
        }, 200);
    };
    MyApp.prototype.menuClosed = function () { };
    MyApp.prototype.openPage = function (page) {
        if (page.title == 'Logout') {
            this.globalMethods.clear();
            this.globalMethods.clearStorage();
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        }
        else if (page.title == 'Manage' || page.title == 'أداره') {
            for (var _i = 0, _a = page.subMenu; _i < _a.length; _i++) {
                var value = _a[_i];
                value.showDetails = !value.showDetails;
            }
            var self_1 = this;
            setTimeout(function () {
                self_1._applicationRef.tick();
            }, 100);
        }
        else if (page.title == 'Account' || page.title == 'حسابي') {
            for (var _b = 0, _c = page.subMenu; _b < _c.length; _b++) {
                var index = _c[_b];
                index.showDetails = !index.showDetails;
            }
            var self_2 = this;
            setTimeout(function () {
                self_2._applicationRef.tick();
            }, 100);
        }
        else if (page.title = "Bookings" || page.title == 'الحجوزات') {
            this.menuCtrl.close();
            this.nav.setRoot(page.component, { booking_type: 'all' });
        }
        else {
            this.menuCtrl.close();
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.changeLanguage = function (dir) {
        console.log(dir);
        var element = document.getElementById("lovelyMenu");
        if (dir == 'English') {
            this.translate.use('ar');
            this.storage.set('Language', 'ar');
            this.data["Language"] = 'ar';
            this.data["Lang"] = 'العربيه';
            this.menuSide = 'right';
            element.setAttribute("side", this.menuSide);
            this.platform.setDir('rtl', true);
            this.platform.setDir('ltr', false);
            this.menuCtrl.close();
        }
        else {
            console.log('aaaa');
            this.translate.use('en');
            this.storage.set('Language', 'en');
            this.data["Language"] = 'en';
            this.data["Lang"] = 'English';
            this.menuSide = 'left';
            element.setAttribute("side", this.menuSide);
            this.platform.setDir('ltr', true);
            this.platform.setDir('rtl', false);
            this.menuCtrl.close();
        }
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\app\app.html"*/'<ion-menu [content]="content" (ionOpen)="menuOpened()"\n\n[side]="menuSide"  (ionClose)="menuClosed()" id="lovelyMenu">\n\n    <ion-header transparent-header no-border class="menu-header">\n\n      <div header-profile text-center>\n\n        <div class="user-img"> <img src="{{userData.photo}}" alt=""> </div>\n\n        <div class="user-details">\n\n            <h3>{{userData.username}}</h3>\n\n            <p>{{userData.city}}</p>\n\n            <button ion-button round small color="danger">{{\'my_address.net\'|translate}}: {{userData.net_credits}}</button>\n\n        </div>\n\n    </div>     \n\n</ion-header>\n\n<ion-content sidemenu-list>\n\n    <ion-list class="list_sidemenu" no-lines no-bg>\n\n        <div *ngFor="let p of pages">\n\n            <button ion-item (click)="openPage(p)" detail-none text-wrap>\n\n                <ion-icon item-left class="{{p.icon}}"></ion-icon> {{p.name | translate}} \n\n            </button>\n\n            <ion-list class="sub-menu" *ngFor="let subPages of p.subMenu">\n\n\n\n                <button ion-item *ngIf="subPages.showDetails" (click)="openPage(subPages)" detail-none>\n\n                    <ion-icon item-left class="{{subPages.icon}}"></ion-icon> {{subPages.name | translate}} \n\n                </button>\n\n\n\n            </ion-list>\n\n\n\n        </div>\n\n        <button ion-item detail-none color="light" (click)="changeLanguage(data.Lang)">\n\n			<ion-icon class="tuts-settings" item-left></ion-icon>\n\n			<ion-label>{{\'account.Language.title\'|translate}}</ion-label>\n\n			<ion-note item-right text-capitalize>{{data.Lang}}</ion-note>\n\n		</button>\n\n    </ion-list>\n\n</ion-content> \n\n</ion-menu>\n\n<!-- Right -->\n\n<!-- <ion-menu [content]="content" (ionOpen)="menuOpened()" [hidden]="data.dir!==\'rtl\'" \n\n[side]="right"  (ionClose)="menuClosed()">\n\n    <ion-header transparent-header no-border class="menu-header">\n\n      <div header-profile text-center>\n\n        <div class="user-img"> <img src="{{userData.photo}}" alt=""> </div>\n\n        <div class="user-details">\n\n            <h3>{{userData.username}}</h3>\n\n            <p>{{userData.city}}</p>\n\n            <button ion-button round small color="danger">{{\'my_address.net\'|translate}}: {{userData.net_credits}}</button>\n\n        </div>\n\n    </div>     \n\n</ion-header>\n\n<ion-content sidemenu-list>\n\n    <ion-list class="list_sidemenu" no-lines no-bg>\n\n        <div *ngFor="let p of pages">\n\n            <button ion-item (click)="openPage(p)" detail-none text-wrap>\n\n                <ion-icon item-left class="{{p.icon}}"></ion-icon> {{p.title}} \n\n            </button>\n\n            <ion-list class="sub-menu" *ngFor="let subPages of p.subMenu">\n\n                <button ion-item *ngIf="subPages.showDetails" (click)="openPage(subPages)" detail-none>\n\n                    <ion-icon item-left class="{{subPages.icon}}"></ion-icon> {{subPages.title}} \n\n                </button>\n\n            </ion-list>\n\n\n\n        </div>\n\n        <button ion-item detail-none color="light" (click)="changeLanguage(\'en\')">\n\n			<ion-icon name="ios-settings" item-left></ion-icon>\n\n			<ion-label>{{\'account.Language.title\'|translate}}</ion-label>\n\n			<ion-note item-right text-capitalize>{{\'account.Language.option.ar\'|translate}}</ion-note>\n\n		</button>\n\n    </ion-list>\n\n</ion-content> \n\n</ion-menu> -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_39__providers_global_methods__["a" /* GlobalMethods */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_39__providers_global_methods__["a" /* GlobalMethods */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_40__providers_service__["a" /* ServiceName */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_40__providers_service__["a" /* ServiceName */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["TranslateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["TranslateService"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_41__providers_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_41__providers_http_service__["a" /* HttpService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]) === "function" && _m || Object])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, menuCtrl, httpService, serviceName, formBuilder, validationService, globalMethods, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.globalMethods = globalMethods;
        this.platform = platform;
        this.phoneCodes = [];
        this.registerData = {
            email: '',
            password: '',
            group: '',
            firstName: '',
            lastName: '',
            phoneCode: '',
            phone: '',
            pincode: '',
            confirmPassword: '',
            device_id: ''
        };
        this.menuCtrl.enable(false);
        this.registerForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */].emailValidator])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */].passwordValidator])],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([])],
            group: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            phoneCode: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */].mobileValidator])],
            pincode: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */].passwordMatchValidator])]
        });
        this.registerData.email = "";
        this.registerData.password = "";
        this.registerData.group = "";
        this.registerData.firstName = "";
        this.registerData.lastName = "";
        this.registerData.phone = "";
        this.registerData.phoneCode = "";
        this.registerData.pincode = "";
        this.registerData.confirmPassword = "";
        this.registerData.device_id = this.globalMethods.getter('oneSignalId');
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.get_phone_codes, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.phoneCodes = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
        });
    };
    RegisterPage.prototype.navToLoginPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.register, this.registerData).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\register\register.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{\'signup.title\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form [formGroup]="registerForm" novalidate (ngSubmit)="(registerForm.valid && submitted) && register()">\n\n        <ion-list form-list>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-hand"></ion-icon>\n\n                <ion-label>{{\'signup.As\'|translate}}  </ion-label>\n\n                <ion-select [(ngModel)]="registerData.group" formControlName="group">\n\n                    <ion-option selected value="">{{\'signup.select\'|translate}}</ion-option>\n\n                    <ion-option value="2">{{\'signup.Student\'|translate}}</ion-option>\n\n                    <ion-option value="3">{{\'signup.Tutor\'|translate}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-avatar"></ion-icon>\n\n                <ion-input type="text" placeholder="{{\'signup.First_Name\'|translate}}" [(ngModel)]="registerData.firstName" formControlName="firstName"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!registerForm.controls.firstName.pristine || submitted" [name]="(!registerForm.controls.firstName.valid && (registerForm.controls.firstName.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!registerForm.controls.firstName.valid && (registerForm.controls.firstName.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-avatar"></ion-icon>\n\n                <ion-input type="text" placeholder="{{\'signup.Last_Name\'|translate}}" [(ngModel)]="registerData.lastName" formControlName="lastName"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-envelope"></ion-icon>\n\n                <ion-input type="email" placeholder="{{\'signup.Email\'|translate}}" [(ngModel)]="registerData.email" formControlName="email"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!registerForm.controls.email.pristine || submitted" [name]="(!registerForm.controls.email.valid && (registerForm.controls.email.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!registerForm.controls.email.valid && (registerForm.controls.email.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-phone-call"></ion-icon>\n\n                <ion-label>{{\'signup.Code\'|translate}} </ion-label>\n\n                <ion-select [(ngModel)]="registerData.phoneCode" formControlName="phoneCode">\n\n                    <ion-option *ngFor="let code of phoneCodes" value="{{code.id}}">{{code.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-phone-call"></ion-icon>\n\n                <ion-input type="number" placeholder="{{\'signup.Phone\'|translate}}" [(ngModel)]="registerData.phone" formControlName="phone"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!registerForm.controls.phone.pristine || submitted" [name]="(!registerForm.controls.phone.valid && (registerForm.controls.phone.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!registerForm.controls.phone.valid && (registerForm.controls.phone.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-placeholder2"></ion-icon>\n\n                <ion-input type="number" placeholder="{{\'signup.Pin\'|translate}}" [(ngModel)]="registerData.pincode" formControlName="pincode"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!registerForm.controls.pincode.pristine || submitted" [name]="(!registerForm.controls.pincode.valid && (registerForm.controls.pincode.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!registerForm.controls.pincode.valid && (registerForm.controls.pincode.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-padlock"></ion-icon>\n\n                <ion-input type="password" placeholder="{{\'signup.Password\'|translate}}" [(ngModel)]="registerData.password" formControlName="password"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!registerForm.controls.password.pristine || submitted" [name]="(!registerForm.controls.password.valid && (registerForm.controls.password.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!registerForm.controls.password.valid && (registerForm.controls.password.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-padlock"></ion-icon>\n\n                <ion-input type="password" placeholder="{{\'signup.confirm_password\'|translate}}" [(ngModel)]="registerData.confirmPassword" formControlName="confirmPassword"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!registerForm.controls.confirmPassword.pristine || submitted" [name]="(!registerForm.controls.confirmPassword.valid && (registerForm.controls.confirmPassword.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!registerForm.controls.confirmPassword.valid && (registerForm.controls.confirmPassword.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <div padding>\n\n                <button ion-button block round color="danger" (click)="submitted=true" type="submit">{{\'signup.Sign\'|translate}} </button>\n\n            </div>\n\n            <div class="already-have-account" text-center><span>{{\'signup.login\'|translate}}</span> <a clear link (click)="navToLoginPage()"><strong> {{\'signup.Sign_In\'|translate}} </strong></a> </div>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\register\register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, menuCtrl, httpService, serviceName, formBuilder, validationService, globalMethods) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.globalMethods = globalMethods;
        this.forgotPasswordData = {
            email: ''
        };
        this.menuCtrl.enable(false);
        this.forgotPasswordForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */].emailValidator])]
        });
        this.forgotPasswordData.email = '';
    }
    ForgotPasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.forgot_password, this.forgotPasswordData).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    ForgotPasswordPage.prototype.ionViewDidLoad = function () { };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\forgot-password\forgot-password.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <ion-title>{{\'signup.forgot_pass\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding padding-extra-lr>\n\n    <form [formGroup]="forgotPasswordForm" novalidate (ngSubmit)="(forgotPasswordForm.valid && submitted) && forgotPassword()">\n\n        <ion-list form-list>\n\n\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-envelope"></ion-icon>\n\n                <ion-input type="email" placeholder="{{\'signup.Email\'|translate}}" [(ngModel)]="forgotPasswordData.email" formControlName="email"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!forgotPasswordForm.controls.email.pristine || submitted" [name]="(!forgotPasswordForm.controls.email.valid && (forgotPasswordForm.controls.email.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!forgotPasswordForm.controls.email.valid && (forgotPasswordForm.controls.email.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button block round color="danger" type="submit" (click)="submitted=true"> {{\'signup.Submit\'|translate}}</button>\n\n    </form>\n\n    <p>{{\'signup.reset\'|translate}}</p>\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\forgot-password\forgot-password.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booking_booking__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_answer_question_answer__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_email_composer__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BookingDetailsPage = /** @class */ (function () {
    function BookingDetailsPage(navCtrl, navParams, serviceName, globalMethods, httpService, alertCtrl, emailComposer, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.booking_status = [];
        this.bookingDetails = this.navParams.data.selectedBooking;
    }
    BookingDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            booking_id: this.bookingDetails.booking_id,
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getBookingStatus, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                if (data[0].data.length != 0) {
                    _this.booking_status = data[0].data;
                }
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    BookingDetailsPage.prototype.changeStatusAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Change Booking Status');
        var booking_length = this.booking_status.length;
        for (var index = 0; index < booking_length; index++) {
            var element = this.booking_status[index];
            alert.addInput({
                type: 'radio',
                label: element.status_value,
                value: element.status_key,
                checked: false
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                var params = {
                    booking_id: _this.bookingDetails.booking_id,
                    status: data,
                    prev_status: _this.bookingDetails.status,
                    updated_by: _this.globalMethods.userType('id'),
                };
                _this.globalMethods.loaderStart();
                _this.httpService.httpServicePost(_this.serviceName.updateBookingStatus, params).subscribe(function (data) {
                    _this.globalMethods.loaderStop();
                    if (data[1].response.status == 1) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__booking_booking__["a" /* BookingPage */]);
                        _this.globalMethods.showToast(data[1].response.message);
                    }
                    else {
                        _this.globalMethods.showToast(data[1].response.message);
                    }
                }, function (error) {
                    _this.globalMethods.loaderStop();
                    _this.globalMethods.showToast(JSON.stringify(error));
                }, function () {
                });
            }
        });
        alert.present();
    };
    BookingDetailsPage.prototype.chatPagePopCallback = function (_params) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    BookingDetailsPage.prototype.openChatPage = function (receiverDetails, fab) {
        fab.close();
        receiverDetails['messages_count'] = 0;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], { receiver: receiverDetails, callback: this.chatPagePopCallback, chat_members: [], dashboard_data_dasboardDetials: {} });
    };
    BookingDetailsPage.prototype.openQuestionAnswerPage = function (receiverDetails, fab) {
        fab.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__question_answer_question_answer__["a" /* QuestionAnswerPage */], { receiver: receiverDetails });
    };
    BookingDetailsPage.prototype.voiceCall = function (receiver, fab) {
        var _this = this;
        fab.close();
        this.globalMethods.loaderStart();
        if (receiver.phone != '') {
            this.callNumber.callNumber(receiver.phone, true).then(function (data) {
                _this.globalMethods.loaderStop();
            }).catch(function (error) {
                _this.globalMethods.loaderStop();
            });
        }
    };
    BookingDetailsPage.prototype.emailChat = function (receiver, fab) {
        fab.close();
        if (receiver.email != '') {
            var email = { to: receiver.email, isHtml: true };
            this.emailComposer.open(email);
        }
    };
    BookingDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-booking-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\booking-details\booking-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_booking_details.title\'|translate}}</ion-title>\n\n    <ion-buttons end *ngIf="booking_status.length!=0">\n\n      <button *ngIf="bookingDetails.status!=\'closed\'" (click)="changeStatusAlert()" ion-button icon-only>\n\n        <ion-icon name="md-create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-avatar item-left>\n\n        <img *ngIf="bookingDetails.student_photo==\'\'" src="{{serviceName.defaultImage}}">\n\n        <img *ngIf="bookingDetails.student_photo!=\'\'" src="{{serviceName.profileUrl}}{{bookingDetails.student_photo}}">\n\n      </ion-avatar>\n\n      <h2>{{bookingDetails.student_name}}</h2>\n\n      <p>{{bookingDetails.course_name}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2>{{\'stu_booking_details.content\'|translate}}</h2>\n\n      <p [innerHTML]="bookingDetails.content" text-capitalize></p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.value\'|translate}}</p>\n\n          <h2>{{bookingDetails.duration_value}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.type\'|translate}}</p>\n\n          <h2>{{bookingDetails.duration_type}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.fee\'|translate}}</p>\n\n          <h2>{{bookingDetails.fee}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.per\'|translate}}</p>\n\n          <h2>{{bookingDetails.per_credit_value}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.preferred\'|translate}}</p>\n\n          <h2>{{bookingDetails.start_date}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.date\'|translate}}</p>\n\n          <h2>{{bookingDetails.end_date}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.time\'|translate}}</p>\n\n          <h2>{{bookingDetails.time_slot}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.day_off\'|translate}}</p>\n\n          <h2>{{bookingDetails.days_off}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <p>{{\'stu_booking_details.location\'|translate}}</p>\n\n      <h2>{{bookingDetails.preferred_location}}</h2>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <p>{{\'stu_booking_details.message\'|translate}}</p>\n\n      <h2>{{bookingDetails.message}}</h2>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.admin\'|translate}}</p>\n\n          <h2>{{bookingDetails.admin_commission}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.prev\'|translate}}</p>\n\n          <h2 color="secondary">{{bookingDetails.prev_status}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.booking\'|translate}}</p>\n\n          <h2>{{bookingDetails.status | case}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.desc\'|translate}}</p>\n\n          <h2>{{bookingDetails.status_desc}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.create\'|translate}}</p>\n\n          <h2>{{bookingDetails.created_at | date:"dd/MM/yyyy"}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.updated\'|translate}}</p>\n\n          <h2>{{bookingDetails.updated_at | date:"dd/MM/yyyy"}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <!-- <ion-fab bottom right>\n\n        <button ion-fab color="primary" (click)="openChatPage(bookingDetails)"><ion-icon name="ios-chatboxes-outline"></ion-icon></button>\n\n    </ion-fab>\n\n    <ion-fab bottom left>\n\n        <button ion-fab color="danger" (click)="openQuestionAnswerPage(bookingDetails)"><ion-icon name="md-help"></ion-icon></button>\n\n    </ion-fab> -->\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab>\n\n      <ion-icon class="tuts-hand"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="danger" (click)="openChatPage(bookingDetails,fab)">\n\n        <ion-icon class="tuts-chat-1"></ion-icon>\n\n      </button>\n\n      <button ion-fab color="danger" (click)="openQuestionAnswerPage(bookingDetails,fab)">\n\n        <ion-icon name="md-help"></ion-icon>\n\n      </button>\n\n      <button ion-fab color="danger" (click)="voiceCall(bookingDetails,fab)">\n\n        <ion-icon class="tuts-phone-call"></ion-icon>\n\n      </button>\n\n      <button ion-fab color="danger" (click)="emailChat(bookingDetails,fab)">\n\n        <ion-icon class="tuts-envelope"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\booking-details\booking-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */]])
    ], BookingDetailsPage);
    return BookingDetailsPage;
}());

//# sourceMappingURL=booking-details.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorCourseDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutor_add_course_tutor_add_course__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorCourseDetailsPage = /** @class */ (function () {
    function TutorCourseDetailsPage(navCtrl, modalCtrl, navParams, globalMethods) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.courseDetails = this.navParams.data.selectedCourse;
    }
    TutorCourseDetailsPage.prototype.editCourse = function (course) {
        var _this = this;
        var tutorAddCourseModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__tutor_add_course_tutor_add_course__["a" /* TutorAddCoursePage */], { course: course });
        tutorAddCourseModal.onDidDismiss(function (data) {
            if (data.response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        });
        tutorAddCourseModal.present();
    };
    TutorCourseDetailsPage.prototype.ionViewDidLoad = function () {
    };
    TutorCourseDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-course-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-course-details\tutor-course-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_booking_details.cont_title\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button *ngIf="courseDetails.status!=\'closed\'" (click)="editCourse(courseDetails)" ion-button icon-only>\n\n        <ion-icon name="md-create"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <h2>{{courseDetails.course_name}}</h2>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h2>{{\'stu_booking_details.content\'|translate}</h2>\n\n      <p [innerHTML]="courseDetails.content" text-capitalize></p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.value\'|translate}</p>\n\n          <h2>{{courseDetails.duration_value}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.type\'|translate}</p>\n\n          <h2>{{courseDetails.duration_type}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.fee\'|translate}</p>\n\n          <h2>{{courseDetails.fee}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.per\'|translate}</p>\n\n          <h2>{{courseDetails.per_credit_value}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.time\'|translate}</p>\n\n          <h2>{{courseDetails.time_slot}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.day_off\'|translate}</p>\n\n          <h2>{{courseDetails.days_off}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.course\'|translate}</p>\n\n          <h2>{{courseDetails.status}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <ion-row>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.created\'|translate}</p>\n\n          <h2>{{courseDetails.created_at | date:"dd/MM/yyyy"}}</h2>\n\n        </ion-col>\n\n        <ion-col>\n\n          <p>{{\'stu_booking_details.updated\'|translate}</p>\n\n          <h2>{{courseDetails.updated_at | date:"dd/MM/yyyy"}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-course-details\tutor-course-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */]])
    ], TutorCourseDetailsPage);
    return TutorCourseDetailsPage;
}());

//# sourceMappingURL=tutor-course-details.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_conditions_terms_conditions__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_us_about_us__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_us_contact_us__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, globalMethods, socialSharing, device) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.socialSharing = socialSharing;
        this.device = device;
    }
    SettingsPage.prototype.openTermsConditions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_conditions_terms_conditions__["a" /* TermsConditionsPage */]);
    };
    SettingsPage.prototype.openAboutUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_us_about_us__["a" /* AboutUsPage */]);
    };
    SettingsPage.prototype.openContactUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    SettingsPage.prototype.ionViewDidLoad = function () { };
    SettingsPage.prototype.logout = function () {
        this.globalMethods.clear();
        this.globalMethods.clearStorage();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SettingsPage.prototype.appShare = function () {
        if (this.device.platform == 'Android') {
            this.socialSharing.share(this.globalMethods.siteValue('site_title'), '', '', this.globalMethods.siteValue('androd_app')).then(function () { }).catch(function () { });
        }
        else {
            this.socialSharing.share(this.globalMethods.siteValue('site_title'), '', '', this.globalMethods.siteValue('ios_app')).then(function () { }).catch(function () { });
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\settings\settings.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="tuts-list"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'setting.title\'| translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-list>\n\n            <button ion-item detail-push (click)="openContactUs()">{{\'setting.contact\'| translate }}</button>\n\n            <button ion-item detail-push (click)="openAboutUs()">{{\'setting.about\'| translate }}</button>\n\n            <button ion-item detail-push (click)="openTermsConditions()"> {{\'setting.terms\'| translate }}</button>\n\n            <button ion-item detail-push (click)="appShare()">{{\'setting.share\'| translate }}</button>\n\n            <button ion-item detail-push (click)="logout()"> {{\'setting.logout\'| translate }}</button>\n\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, navParams, globalMethods, httpService, serviceName, formBuilder, validationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.contactDetails = {
            first_name: '',
            last_name: '',
            email: '',
            subject: '',
            message: ''
        };
        this.contactForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */].emailValidator])],
            subject: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            message: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])]
        });
    }
    ContactUsPage.prototype.ionViewDidLoad = function () { };
    ContactUsPage.prototype.contact = function () {
        var _this = this;
        var params = this.contactDetails;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.contact, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\contact-us\contact-us.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="tuts-list"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'contact.title\'| translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list form-list>\n\n        <form [formGroup]="contactForm" novalidate (ngSubmit)="(contactForm.valid && submitted) && contact()">\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-avatar"></ion-icon>\n\n                <ion-input type="text" formControlName="firstName" placeholder="{{\'contact.first_name\'| translate }}" [(ngModel)]="contactDetails.first_name"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!contactForm.controls.firstName.pristine || submitted"\n\n                [name]="(!contactForm.controls.firstName.valid && (contactForm.controls.firstName.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n                [color]="(!contactForm.controls.firstName.valid && (contactForm.controls.firstName.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-avatar"></ion-icon>\n\n                <ion-input type="text" formControlName="lastName" placeholder=" {{\'contact.last_name\'| translate }}" [(ngModel)]="contactDetails.last_name"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!contactForm.controls.lastName.pristine || submitted"\n\n                [name]="(!contactForm.controls.lastName.valid && (contactForm.controls.lastName.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n                [color]="(!contactForm.controls.lastName.valid && (contactForm.controls.lastName.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-envelope"></ion-icon>\n\n                <ion-input type="email" formControlName="email" placeholder="{{\'contact.email\'| translate }}" [(ngModel)]="contactDetails.email"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!contactForm.controls.email.pristine || submitted"\n\n                [name]="(!contactForm.controls.email.valid && (contactForm.controls.email.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n                [color]="(!contactForm.controls.email.valid && (contactForm.controls.email.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-phone-call"></ion-icon>\n\n                <ion-input type="text" placeholder="{{\'contact.subject\'| translate }}" formControlName="subject" [(ngModel)]="contactDetails.subject"></ion-input>\n\n                <ion-icon class="validation-icon" *ngIf="!contactForm.controls.subject.pristine || submitted"\n\n                [name]="(!contactForm.controls.subject.valid && (contactForm.controls.subject.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n                [color]="(!contactForm.controls.subject.valid && (contactForm.controls.subject.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left class="tuts-chat-1"></ion-icon>\n\n                <ion-textarea formControlName="message" placeholder="{{\'contact.message\'| translate }}" [(ngModel)]="contactDetails.message"> </ion-textarea>\n\n                <ion-icon class="validation-icon" *ngIf="!contactForm.controls.message.pristine || submitted"\n\n                [name]="(!contactForm.controls.message.valid && (contactForm.controls.message.dirty || submitted)) ? \'warning\':\'done-all\'"\n\n                [color]="(!contactForm.controls.message.valid && (contactForm.controls.message.dirty || submitted)) ? \'danger\':\'valid\'"\n\n                item-right></ion-icon>\n\n            </ion-item>\n\n            <div padding>\n\n                <button ion-button block round color="danger" type="submit" (click)="submitted=true"> {{\'contact.send\'| translate }}</button>\n\n            </div>\n\n        </form>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\contact-us\contact-us.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, globalMethods, httpService, serviceName, formBuilder, validationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.data = {
            current_password: '',
            new_password: '',
            new_confirm_password: ''
        };
        this.changePasswordForm = formBuilder.group({
            currentPassword: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            newConfirmPassword: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */].passwordMatchValidator])]
        });
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () { };
    ChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        var params = {
            email: this.globalMethods.userType('email'),
            data: this.data
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.changePassword, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.clear();
                _this.globalMethods.clearStorage();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\change-password\change-password.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="tuts-list"></ion-icon>\n\n        </button>\n\n        <ion-title> {{\'chang_pass.title\'| translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <form [formGroup]="changePasswordForm" novalidate (ngSubmit)="(changePasswordForm.valid && submitted) && changePassword()">\n\n       <ion-list form-list>  \n\n        <ion-item>\n\n            <ion-icon item-left class="tuts-padlock"></ion-icon>\n\n            <ion-input type="password" placeholder="{{\'chang_pass.current_pass\'| translate}}" formControlName="currentPassword" [(ngModel)]="data.current_password"></ion-input>\n\n            <ion-icon class="validation-icon" *ngIf="!changePasswordForm.controls.currentPassword.pristine || submitted" \n\n            [name]="(!changePasswordForm.controls.currentPassword.valid && (changePasswordForm.controls.currentPassword.dirty || submitted)) ? \'warning\' : \'done-all\'" \n\n            [color]="(!changePasswordForm.controls.currentPassword.valid && (changePasswordForm.controls.currentPassword.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n            item-right></ion-icon>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon item-left class="tuts-padlock"></ion-icon>\n\n            <ion-input type="password" placeholder=" {{\'chang_pass.new_pass\'| translate}}" formControlName="password" [(ngModel)]="data.new_password"></ion-input>\n\n            <ion-icon class="validation-icon" *ngIf="!changePasswordForm.controls.password.pristine || submitted" \n\n            [name]="(!changePasswordForm.controls.password.valid && (changePasswordForm.controls.password.dirty || submitted)) ? \'warning\' : \'done-all\'" \n\n            [color]="(!changePasswordForm.controls.password.valid && (changePasswordForm.controls.password.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n            item-right></ion-icon>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon item-left class="tuts-padlock"></ion-icon>\n\n            <ion-input type="password" placeholder="{{\'chang_pass.confirm_pass\'| translate}}" formControlName="newConfirmPassword" [(ngModel)]="data.new_confirm_password"></ion-input>\n\n            <ion-icon class="validation-icon" *ngIf="!changePasswordForm.controls.newConfirmPassword.pristine || submitted" \n\n            [name]="(!changePasswordForm.controls.newConfirmPassword.valid && (changePasswordForm.controls.newConfirmPassword.dirty || submitted)) ? \'warning\' : \'done-all\'" \n\n            [color]="(!changePasswordForm.controls.newConfirmPassword.valid && (changePasswordForm.controls.newConfirmPassword.dirty || submitted)) ? \'danger\' : \'valid\'"\n\n            item-right></ion-icon>\n\n        </ion-item>\n\n    </ion-list>\n\n    <button ion-button block round color="primary" type="submit" (click)="submitted=true"> {{\'chang_pass.Submit\'| translate}}</button>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\change-password\change-password.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorLocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorLocationsPage = /** @class */ (function () {
    function TutorLocationsPage(navCtrl, httpService, serviceName, globalMethods, navParams) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.navParams = navParams;
        this.locations = [];
        this.shownGroup = null;
        this.selected_location = [];
    }
    TutorLocationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getTutorLocations, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                var val = _a[_i];
                var element = {
                    parentLocation_name: val.parentLocation_name,
                    sub_location: []
                };
                for (var _b = 0, _c = val.sub_locations; _b < _c.length; _b++) {
                    var sub = _c[_b];
                    var checked = false;
                    if (sub.id == sub.checked_id) {
                        var checked = true;
                    }
                    var temp = {
                        id: sub.id,
                        sub_location_name: sub.location_name,
                        checked: checked
                    };
                    element.sub_location.push(temp);
                }
                _this.locations.push(element);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorLocationsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    TutorLocationsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    TutorLocationsPage.prototype.updateLocations = function () {
        var _this = this;
        this.selected_location = [];
        for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
            var val = _a[_i];
            for (var _b = 0, _c = val.sub_location; _b < _c.length; _b++) {
                var sub = _c[_b];
                if (sub.checked == true) {
                    var select_location = {
                        location_id: sub.id
                    };
                    this.selected_location.push(select_location);
                }
            }
        }
        var params = {
            user_id: this.globalMethods.userType('id'),
            locations: JSON.stringify(this.selected_location)
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateTutorLocations, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorLocationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-locations',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-locations\tutor-locations.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title logo>{{\'tutor_exper.location\'| translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list no-lines no-bg>\n\n    <div *ngFor="let location of locations; let i=index">\n\n      <button ion-item (click)="toggleGroup(i)" detail-none>\n\n        {{location.parentLocation_name}}\n\n        <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n\n      </button>\n\n      <div *ngIf="isGroupShown(i)">\n\n        <ion-list *ngFor="let sub_location of location.sub_location">\n\n          <ion-item>\n\n            <ion-label>{{sub_location.sub_location_name}}</ion-label>\n\n            <ion-checkbox color="dark" [(ngModel)]="sub_location.checked"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n    </div>\n\n  </ion-list>\n\n  <button ion-button block round color="danger" (click)="updateLocations()">{{\'tutor_exper.Update\'| translate}}</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-locations\tutor-locations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TutorLocationsPage);
    return TutorLocationsPage;
}());

//# sourceMappingURL=tutor-locations.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorTeachingTypesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorTeachingTypesPage = /** @class */ (function () {
    function TutorTeachingTypesPage(navCtrl, httpService, serviceName, globalMethods, navParams) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.navParams = navParams;
        this.teaching_types = [];
        this.selected_types = [];
    }
    TutorTeachingTypesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getTutorTeachingTypes, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                var val = _a[_i];
                var type = false;
                if (val.checked == 1) {
                    type = true;
                }
                var element = {
                    id: val.id,
                    teaching_type: val.teaching_type,
                    checked: type
                };
                _this.teaching_types.push(element);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorTeachingTypesPage.prototype.updateTeachingTypes = function () {
        var _this = this;
        this.selected_types = [];
        for (var _i = 0, _a = this.teaching_types; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.checked == true) {
                var select_type = {
                    teaching_id: val.id
                };
                this.selected_types.push(select_type);
            }
        }
        var params = {
            user_id: this.globalMethods.userType('id'),
            types: JSON.stringify(this.selected_types)
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateTutorTeachingTypes, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorTeachingTypesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-teaching-types',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-teaching-types\tutor-teaching-types.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title logo>{{\'tutor_exper.type\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list *ngFor="let teaching_type of teaching_types">\n\n    <ion-item>\n\n      <ion-label>{{teaching_type.teaching_type}}</ion-label>\n\n      <ion-checkbox color="dark" [(ngModel)]="teaching_type.checked"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block round color="danger" (click)="updateTeachingTypes()">{{\'tutor_exper.Update\'|translate}}</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-teaching-types\tutor-teaching-types.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TutorTeachingTypesPage);
    return TutorTeachingTypesPage;
}());

//# sourceMappingURL=tutor-teaching-types.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorPrivacySettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TutorPrivacySettingsPage = /** @class */ (function () {
    function TutorPrivacySettingsPage(navCtrl, navParams, httpService, serviceName, formBuilder, validationService, globalMethods) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.globalMethods = globalMethods;
        this.privacyData = {
            free_demo: '',
            visibility_in_search: '',
            show_contact: '',
            availability_status: '',
            user_id: ''
        };
        this.privacyForm = formBuilder.group({
            free_demo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            visibility_in_search: [''],
            show_contact: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            availability_status: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
        this.privacyData.free_demo = this.globalMethods.userType('free_demo');
        this.privacyData.visibility_in_search = this.globalMethods.userType('visibility_in_search');
        this.privacyData.show_contact = this.globalMethods.userType('show_contact');
        this.privacyData.availability_status = this.globalMethods.userType('availability_status');
        this.privacyData.user_id = this.globalMethods.userType('id');
    }
    TutorPrivacySettingsPage.prototype.ionViewDidLoad = function () { };
    TutorPrivacySettingsPage.prototype.savePrivacy = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.setTutorPrivacySettings, this.privacyData).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data));
            }
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorPrivacySettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-privacy-settings',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-privacy-settings\tutor-privacy-settings.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title logo>{{\'stu_privacy.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="privacyForm" novalidate (ngSubmit)="(privacyForm.valid && submitted) && savePrivacy()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_privacy.demo\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="privacyData.free_demo" formControlName="free_demo" placeholder="Select">\n\n          <ion-option value="Yes">{{\'stu_privacy.yes\'|translate}}</ion-option>\n\n          <ion-option value="No">{{\'stu_privacy.no\'|translate}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!privacyForm.controls.free_demo.pristine || submitted" [name]="(!privacyForm.controls.free_demo.valid && (privacyForm.controls.free_demo.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!privacyForm.controls.free_demo.valid && (privacyForm.controls.free_demo.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_privacy.search\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="privacyData.visibility_in_search" formControlName="visibility_in_search" placeholder="Select">\n\n          <ion-option value="1">{{\'stu_privacy.yes\'|translate}}</ion-option>\n\n          <ion-option value="0">{{\'stu_privacy.no\'|translate}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_privacy.Privacy\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="privacyData.show_contact" formControlName="show_contact" placeholder="Select">\n\n          <ion-option value="All" selected="selected">{{\'stu_privacy.all\'|translate}}</ion-option>\n\n          <ion-option value="Email">{{\'stu_privacy.email\'|translate}}</ion-option>\n\n          <ion-option value="Mobile">{{\'stu_privacy.mobile\'|translate}}</ion-option>\n\n          <ion-option value="None">{{\'stu_privacy.none\'|translate}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!privacyForm.controls.show_contact.pristine || submitted" [name]="(!privacyForm.controls.show_contact.valid && (privacyForm.controls.show_contact.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!privacyForm.controls.show_contact.valid && (privacyForm.controls.show_contact.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_privacy.availability\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="privacyData.availability_status" formControlName="availability_status" placeholder="Select">\n\n          <ion-option value="1">{{\'stu_privacy.yes\'|translate}}</ion-option>\n\n          <ion-option value="0">{{\'stu_privacy.no\'|translate}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-icon" *ngIf="!privacyForm.controls.availability_status.pristine || submitted" [name]="(!privacyForm.controls.availability_status.valid && (privacyForm.controls.availability_status.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!privacyForm.controls.availability_status.valid && (privacyForm.controls.availability_status.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'stu_privacy.submit\'|translate}}</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-privacy-settings\tutor-privacy-settings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_methods__["a" /* GlobalMethods */]])
    ], TutorPrivacySettingsPage);
    return TutorPrivacySettingsPage;
}());

//# sourceMappingURL=tutor-privacy-settings.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorPersonalInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TutorPersonalInformationPage = /** @class */ (function () {
    function TutorPersonalInformationPage(navCtrl, navParams, httpService, serviceName, globalMethods, validationService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.personalDetailsForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */].emailValidator])],
            dateOfBirth: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            gender: [''],
            languageOfTeaching: [''],
            website: [''],
            facebook: [''],
            twitter: [''],
            linkedin: [''],
            paypal_email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */].emailValidator])],
            bank_ac_details: ['']
        });
        this.user = {
            photo: this.globalMethods.userType('photo')
        };
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
        this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
        this.selectedLanguages = this.mySplit(this.userData.language_of_teaching);
    }
    TutorPersonalInformationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.userData.id
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getKnownLanguages, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.languages = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorPersonalInformationPage.prototype.mySplit = function (string) {
        this.resultArray = string.split(',');
        return this.resultArray;
    };
    TutorPersonalInformationPage.prototype.updatePersonalInformation = function () {
        var _this = this;
        var params = {
            userData: this.userData,
            language_of_teaching: JSON.stringify(this.selectedLanguages)
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentPersonalDetails, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data));
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorPersonalInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-personal-information',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-personal-information\tutor-personal-information.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_profile.info\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="personalDetailsForm" novalidate (ngSubmit)="(personalDetailsForm.valid && submitted) && updatePersonalInformation()">\n\n    <ion-list contact-list>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.first\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="firstName" [(ngModel)]="userData.first_name"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!personalDetailsForm.controls.firstName.pristine || submitted" [name]="(!personalDetailsForm.controls.firstName.valid && (personalDetailsForm.controls.firstName.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!personalDetailsForm.controls.firstName.valid && (personalDetailsForm.controls.firstName.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.last\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="lastName" [(ngModel)]="userData.last_name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.email\'|translate}}</ion-label>\n\n        <ion-input type="email" readonly formControlName="email" [(ngModel)]="userData.email"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!personalDetailsForm.controls.email.pristine || submitted" [name]="(!personalDetailsForm.controls.email.valid && (personalDetailsForm.controls.email.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!personalDetailsForm.controls.email.valid && (personalDetailsForm.controls.email.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.date\'|translate}}</ion-label>\n\n        <ion-input type="date" formControlName="dateOfBirth" [(ngModel)]="userData.dob"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!personalDetailsForm.controls.dateOfBirth.pristine || submitted" [name]="(!personalDetailsForm.controls.dateOfBirth.valid && (personalDetailsForm.controls.dateOfBirth.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!personalDetailsForm.controls.dateOfBirth.valid && (personalDetailsForm.controls.dateOfBirth.dirty || submitted)) ? \'danger\':\'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-list radio-group formControlName="gender" [(ngModel)]="userData.gender">\n\n        <ion-list-header floating>Gender</ion-list-header>\n\n        <ion-item>\n\n          <ion-label>{{\'stu_profile.male\'|translate}}</ion-label>\n\n          <ion-radio value="Male"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>{{\'stu_profile.female\'|translate}}</ion-label>\n\n          <ion-radio value="Female"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>{{\'stu_profile.lang\'|translate}}</ion-label>\n\n          <ion-select [(ngModel)]="selectedLanguages" formControlName="languageOfTeaching" multiple>\n\n            <ion-option *ngFor="let language of languages">{{language.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.blog\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="website" [(ngModel)]="userData.website"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.facebook\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="facebook" [(ngModel)]="userData.facebook"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.twitter\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="twitter" [(ngModel)]="userData.twitter"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.linkedin\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="linkedin" [(ngModel)]="userData.linkedin"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.paypal\'|translate}}</ion-label>\n\n        <ion-input type="email" formControlName="paypal_email" [(ngModel)]="userData.paypal_email"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!personalDetailsForm.controls.paypal_email.pristine || submitted" [name]="(!personalDetailsForm.controls.paypal_email.valid && (personalDetailsForm.controls.paypal_email.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!personalDetailsForm.controls.paypal_email.valid && (personalDetailsForm.controls.paypal_email.dirty || submitted)) ? \'danger\':\'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.bank\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="bank_ac_details" [(ngModel)]="userData.bank_ac_details"></ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'stu_profile.submit\'|translate}} </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-personal-information\tutor-personal-information.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], TutorPersonalInformationPage);
    return TutorPersonalInformationPage;
}());

//# sourceMappingURL=tutor-personal-information.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorProfileInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__choose_file_modal_choose_file_modal__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TutorProfileInformationPage = /** @class */ (function () {
    function TutorProfileInformationPage(navCtrl, navParams, httpService, serviceName, globalMethods, validationService, formBuilder, modalCtrl, toast, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.validationService = validationService;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.profileDetailsForm = formBuilder.group({
            profile: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            seoKeywords: [''],
            metaDescription: [''],
            profilePageTitle: [''],
            qualification: [''],
            willingToTravel: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            ownVehicle: [''],
            teaching_experience: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            duration_of_experience: [''],
            experience_desc: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])]
        });
        this.user = {
            photo: this.globalMethods.userType('photo')
        };
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.currency_symbol = this.globalMethods.siteValue('currency_symbol');
        this.per_credit_value = this.globalMethods.siteValue('per_credit_value');
    }
    TutorProfileInformationPage.prototype.ionViewDidLoad = function () { };
    TutorProfileInformationPage.prototype.presentProfileModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__choose_file_modal_choose_file_modal__["a" /* ChooseFileModalPage */], { certificate: { upload_file: '' } });
        profileModal.onDidDismiss(function (data) {
            if (data.upload_file != '') {
                _this.uploadFile(data);
            }
        });
        profileModal.present();
    };
    TutorProfileInformationPage.prototype.uploadFile = function (param) {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        var options = {
            fileKey: 'userfile',
            mimeType: "image/jpeg",
            fileName: param.upload_file,
            headers: {},
            params: params,
            chunkedMode: false
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.onProgress(function (data) {
            if (data.lengthComputable) {
                var percentage = ((data.loaded / data.total) * 100).toFixed(0);
                _this.toast.show(percentage + "% uploading...", '8000', 'bottom').subscribe(function (toast) { });
            }
        });
        fileTransfer.upload(param.upload_file, this.serviceName.profile_upload, options).then(function (data) {
            var result = JSON.parse(data.response);
            if (result[0].data[0].id && result[0].data[0].id != null) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(result[0].data[0]));
                _this.user.photo = _this.globalMethods.userType('photo');
                _this.globalMethods.hideToast();
                _this.globalMethods.showToast(result[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.showToast("Upload failed");
        }).catch(function (cat) {
            _this.globalMethods.showToast("Upload failed");
        });
    };
    TutorProfileInformationPage.prototype.updateStudentProfileDetails = function () {
        var _this = this;
        var params = {
            user_id: this.userData.id,
            profile: this.userData.profile,
            seo_keywords: this.userData.seo_keywords,
            meta_desc: this.userData.meta_desc,
            profile_page_title: this.userData.profile_page_title,
            qualification: this.userData.qualification,
            willing_to_travel: this.userData.willing_to_travel,
            own_vehicle: this.userData.own_vehicle,
            experience_desc: this.userData.experience_desc,
            teaching_experience: this.userData.teaching_experience,
            duration_of_experience: this.userData.duration_of_experience,
            user_type: 'tutor'
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentProfileDetails, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data));
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    TutorProfileInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-profile-information',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-profile-information\tutor-profile-information.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_profile.sub_title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="profileDetailsForm" novalidate (ngSubmit)="(profileDetailsForm.valid && submitted) && updateStudentProfileDetails()">\n\n    <div header-profile text-center>\n\n      <div class="user-img"><img src="{{user.photo}}" alt="Picture"></div>\n\n      <div class="user-details">\n\n        <h3>{{userData.username}}</h3>\n\n        <p><span>{{\'stu_profile.net\'|translate}}: {{userData.net_credits}}</span><span>{{\'stu_profile.per\'|translate}}: {{currency_symbol}}{{per_credit_value}}</span></p>\n\n      </div>\n\n    </div>\n\n    <button class="update-camera" ion-button clear icon-only (click)="presentProfileModal()">\n\n      <ion-icon name="camera"></ion-icon>\n\n    </button>\n\n    <ion-list contact-list>\n\n      <ion-item-divider color="light">{{\'stu_profile.sub_title\'|translate}}</ion-item-divider>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.desc\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="profile" [(ngModel)]="userData.profile"></ion-textarea>\n\n        <ion-icon class="validation-icon" *ngIf="!profileDetailsForm.controls.profile.pristine || submitted" [name]="(!profileDetailsForm.controls.profile.valid && (profileDetailsForm.controls.profile.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!profileDetailsForm.controls.profile.valid && (profileDetailsForm.controls.profile.dirty || submitted)) ? \'danger\':\'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.seo\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="seoKeywords" [(ngModel)]="userData.seo_keywords"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.meta\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="metaDescription" [(ngModel)]="userData.meta_desc"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.services\'|translate}}</ion-label>\n\n        <ion-textarea formControlName="experience_desc" [(ngModel)]="userData.experience_desc"></ion-textarea>\n\n        <ion-icon class="validation-icon" *ngIf="!profileDetailsForm.controls.experience_desc.pristine || submitted" [name]="(!profileDetailsForm.controls.experience_desc.valid && (profileDetailsForm.controls.experience_desc.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!profileDetailsForm.controls.experience_desc.valid && (profileDetailsForm.controls.experience_desc.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.page\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="profilePageTitle" [(ngModel)]="userData.profile_page_title"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!profileDetailsForm.controls.profilePageTitle.pristine || submitted" [name]="(!profileDetailsForm.controls.profilePageTitle.valid && (profileDetailsForm.controls.profilePageTitle.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!profileDetailsForm.controls.profilePageTitle.valid && (profileDetailsForm.controls.profilePageTitle.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.qualification\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="qualification" [(ngModel)]="userData.qualification"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'stu_profile.far\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="willingToTravel" [(ngModel)]="userData.willing_to_travel"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!profileDetailsForm.controls.willingToTravel.pristine || submitted" [name]="(!profileDetailsForm.controls.willingToTravel.valid && (profileDetailsForm.controls.willingToTravel.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!profileDetailsForm.controls.willingToTravel.valid && (profileDetailsForm.controls.willingToTravel.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_profile.teaching\'|translate}}</ion-label>\n\n        <ion-input type="number" [(ngModel)]="userData.teaching_experience" formControlName="teaching_experience"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!profileDetailsForm.controls.teaching_experience.pristine || submitted" [name]="(!profileDetailsForm.controls.teaching_experience.valid && (profileDetailsForm.controls.teaching_experience.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!profileDetailsForm.controls.teaching_experience.valid && (profileDetailsForm.controls.teaching_experience.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_profile.duration\'|translate}}</ion-label>\n\n        <ion-select formControlName="duration_of_experience" [(ngModel)]="userData.duration_of_experience">\n\n          <ion-option value="Months">{{\'stu_profile.mon\'|translate}}</ion-option>\n\n          <ion-option value="Years">{{\'stu_profile.year\'|translate}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-list radio-group formControlName="ownVehicle" [(ngModel)]="userData.own_vehicle">\n\n        <ion-list-header floating>{{\'stu_profile.travel\'|translate}} </ion-list-header>\n\n        <ion-item>\n\n          <ion-label>{{\'stu_profile.yes\'|translate}}</ion-label>\n\n          <ion-radio value="yes"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>{{\'stu_profile.no\'|translate}}</ion-label>\n\n          <ion-radio value="no"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'stu_profile.submit\'|translate}}</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-profile-information\tutor-profile-information.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */]])
    ], TutorProfileInformationPage);
    return TutorProfileInformationPage;
}());

//# sourceMappingURL=tutor-profile-information.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTutorExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tutor_experience_tutor_experience__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddTutorExperiencePage = /** @class */ (function () {
    function AddTutorExperiencePage(navCtrl, navParams, httpService, formBuilder, globalMethods, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.experienceData = {
            record_id: '',
            user_id: '',
            company: '',
            role: '',
            description: '',
            from_date: '',
            to_date: ''
        };
        this.experienceForm = formBuilder.group({
            company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            role: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            from_date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            to_date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__providers_validation_service__["a" /* ValidationService */].toDateValidate])]
        });
        this.maxDate = __WEBPACK_IMPORTED_MODULE_8_moment___default()().format('YYYY');
        if (this.navParams.data.experience != undefined) {
            this.experience = this.navParams.data.experience;
            this.experienceData.record_id = this.experience.record_id;
            this.experienceData.company = this.experience.company;
            this.experienceData.role = this.experience.role;
            this.experienceData.description = this.experience.description;
            this.experienceData.from_date = __WEBPACK_IMPORTED_MODULE_8_moment___default()(this.experience.from_date).format('YYYY-MM-DD');
            this.experienceData.to_date = __WEBPACK_IMPORTED_MODULE_8_moment___default()(this.experience.to_date).format('YYYY-MM-DD');
        }
    }
    AddTutorExperiencePage.prototype.ionViewDidLoad = function () { };
    AddTutorExperiencePage.prototype.addExperience = function () {
        var _this = this;
        this.experienceData.user_id = this.globalMethods.userType('id');
        this.experienceData.from_date = __WEBPACK_IMPORTED_MODULE_8_moment___default()(this.experienceData.from_date).format('MMMM YYYY');
        this.experienceData.to_date = __WEBPACK_IMPORTED_MODULE_8_moment___default()(this.experienceData.to_date).format('MMMM YYYY');
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.addExperience, this.experienceData).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(data[1].response.message);
            if (data[1].response.status == 1) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tutor_experience_tutor_experience__["a" /* TutorExperiencePage */]);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    AddTutorExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-tutor-experience',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\add-tutor-experience\add-tutor-experience.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{\'add_tutor_exp.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="experienceForm" novalidate (ngSubmit)="(experienceForm.valid && submitted) && addExperience()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>{{\'add_tutor_exp.company\'|translate}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="experienceData.company" formControlName="company"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!experienceForm.controls.company.pristine || submitted" [name]="(!experienceForm.controls.company.valid && (experienceForm.controls.company.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!experienceForm.controls.company.valid && (experienceForm.controls.company.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'add_tutor_exp.role\'|translate}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="experienceData.role" formControlName="role"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!experienceForm.controls.role.pristine || submitted" [name]="(!experienceForm.controls.role.valid && (experienceForm.controls.role.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!experienceForm.controls.role.valid && (experienceForm.controls.role.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'add_tutor_exp.desc\'|translate}}</ion-label>\n\n        <ion-textarea [(ngModel)]="experienceData.description" formControlName="description"></ion-textarea>\n\n        <ion-icon class="validation-icon" *ngIf="!experienceForm.controls.description.pristine || submitted" [name]="(!experienceForm.controls.description.valid && (experienceForm.controls.description.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!experienceForm.controls.description.valid && (experienceForm.controls.description.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'add_tutor_exp.from\'|translate}}</ion-label>\n\n        <ion-datetime displayFormat="MMMM YYYY" pickerFormat="MMMM YYYY" max="{{maxDate}}" formControlName="from_date" [(ngModel)]="experienceData.from_date"></ion-datetime>\n\n        <ion-icon class="validation-icon" *ngIf="!experienceForm.controls.from_date.pristine || submitted" [name]="(!experienceForm.controls.from_date.valid && (experienceForm.controls.from_date.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!experienceForm.controls.from_date.valid && (experienceForm.controls.from_date.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'add_tutor_exp.to\'|translate}}</ion-label>\n\n        <ion-datetime displayFormat="MMMM YYYY" pickerFormat="MMMM YYYY" max="{{maxDate}}" formControlName="to_date" [(ngModel)]="experienceData.to_date"></ion-datetime>\n\n        <ion-icon class="validation-icon" *ngIf="!experienceForm.controls.to_date.pristine || submitted" [name]="(!experienceForm.controls.to_date.valid && (experienceForm.controls.to_date.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!experienceForm.controls.to_date.valid && (experienceForm.controls.to_date.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n      <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'add_tutor_exp.save\'|translate}}</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\add-tutor-experience\add-tutor-experience.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* ServiceName */]])
    ], AddTutorExperiencePage);
    return AddTutorExperiencePage;
}());

//# sourceMappingURL=add-tutor-experience.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_cache__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HttpService = /** @class */ (function () {
    function HttpService(http, serviceName, globalMethods, cache) {
        this.http = http;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.cache = cache;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
    }
    /** Post service call, to all database calls */
    HttpService.prototype.httpServicePost = function (service_name, param) {
        if (this.globalMethods.checkNetwork()) {
            return this.http.post(service_name, param, this.options).map(function (res) { return res.json(); }).catch(this.handleError).timeout(60000).do(function (data) {
            }, function (error) {
            });
        }
        else {
            this.globalMethods.showToast("Check Network Connection");
        }
    };
    /** GET service call, to all database calls */
    HttpService.prototype.httpServiceGet = function (service_name) {
        if (this.globalMethods.checkNetwork()) {
            return this.http.get(this.serviceName.serviceLogin + service_name).map(function (res) { return res.json(); }).catch(this.handleError);
        }
        else {
            this.globalMethods.showToast("Check Network Connection");
        }
    };
    HttpService.prototype.httpSocialLoginsGet = function (url) {
        if (this.globalMethods.checkNetwork()) {
            return this.http.get(url).map(function (res) { return res.json(); }).catch(this.handleError);
        }
        else {
            this.globalMethods.showToast("Check Network Connection");
        }
    };
    HttpService.prototype.cacheClearKey = function (service_name) {
        this.cache.removeItem(service_name);
    };
    HttpService.prototype.cacheGetKey = function (service_name) {
        this.cache.getItem(service_name).catch(function (data) {
        }).then(function (data) {
            return data;
        });
    };
    HttpService.prototype.cacheClearAll = function () {
        this.cache.clearAll();
    };
    HttpService.prototype.cacheSaveKey = function (service_name, result) {
        this.cache.saveItem(service_name, result);
    };
    /** Error handler to all service calls */
    HttpService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_cache__["b" /* CacheService */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorContactDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tutor_contact_information_tutor_contact_information__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TutorContactDetailsPage = /** @class */ (function () {
    function TutorContactDetailsPage(navCtrl, navParams, globalMethods, httpService, serviceName, validationservice, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.validationservice = validationservice;
        this.formBuilder = formBuilder;
        this.userData = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.academic_checked = false;
        if (this.userData.academic_class == 'yes') {
            this.academic_checked = true;
        }
        this.userData.academic_class = this.academic_checked;
        this.non_academic_checked = false;
        if (this.userData.non_academic_class == 'yes') {
            this.non_academic_checked = true;
        }
        this.userData.non_academic_class = this.non_academic_checked;
        this.contactForm = formBuilder.group({
            city: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            landMark: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            country: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            pinCode: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required])],
            academicClass: [''],
            nonAcademicClass: ['']
        });
    }
    TutorContactDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getCountries, '').subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.countries = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorContactDetailsPage.prototype.updateContactInfo = function () {
        var _this = this;
        var params = {
            user_id: this.userData.id,
            city: this.userData.city,
            land_mark: this.userData.land_mark,
            country: this.userData.country,
            pin_code: this.userData.pin_code,
            phone: this.userData.phone,
            academic_class: (this.userData.academic_class == true) ? 'yes' : 'no',
            non_academic_class: (this.userData.non_academic_class == true) ? 'yes' : 'no'
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.updateStudentContactDetails, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.showToast(data[1].response.message);
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tutor_contact_information_tutor_contact_information__["a" /* TutorContactInformationPage */]);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    TutorContactDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-contact-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-contact-details\tutor-contact-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title> {{\'contact_details.subtitle\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="contactForm" novalidate (ngSubmit)="(contactForm.valid && submitted) && updateContactInfo()">\n\n    <ion-list contact-list>\n\n      <ion-item>\n\n        <ion-label floating>{{\'contact_details.city\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="city" [(ngModel)]="userData.city"></ion-input>\n\n        <ion-icon class="validation-service" *ngIf="!contactForm.controls.city.pristine || submitted" [name]="(!contactForm.controls.city.valid && (contactForm.controls.city.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!contactForm.controls.city.valid && (contactForm.controls.city.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'contact_details.landmark\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="landMark" [(ngModel)]="userData.land_mark"></ion-input>\n\n        <ion-icon class="validation-service" *ngIf="!contactForm.controls.landMark.pristine || submitted" [name]="(!contactForm.controls.landMark.valid && (contactForm.controls.landMark.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!contactForm.controls.landMark.valid && (contactForm.controls.landMark.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'contact_details.country\'|translate}}</ion-label>\n\n        <ion-select formControlName="country" [(ngModel)]="userData.country">\n\n          <ion-option *ngFor="let country of countries">{{country.nicename}}</ion-option>\n\n        </ion-select>\n\n        <ion-icon class="validation-service" *ngIf="!contactForm.controls.country.pristine || submitted" [name]="(!contactForm.controls.country.valid && (contactForm.controls.country.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!contactForm.controls.country.valid && (contactForm.controls.country.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'contact_details.pin\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="pinCode" [(ngModel)]="userData.pin_code"></ion-input>\n\n        <ion-icon class="validation-service" *ngIf="!contactForm.controls.pinCode.pristine || submitted" [name]="(!contactForm.controls.pinCode.valid && (contactForm.controls.pinCode.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!contactForm.controls.pinCode.valid && (contactForm.controls.pinCode.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>{{\'contact_details.phone\'|translate}}</ion-label>\n\n        <ion-input type="text" formControlName="phone" [(ngModel)]="userData.phone"></ion-input>\n\n        <ion-icon class="validation-service" *ngIf="!contactForm.controls.phone.pristine || submitted" [name]="(!contactForm.controls.phone.valid && (contactForm.controls.phone.dirty || submitted)) ? \'warning\':\'done-all\'" [color]="(!contactForm.controls.phone.valid && (contactForm.controls.phone.dirty || submitted)) ? \'danger\':\'valid\'" item-right>\n\n        </ion-icon>\n\n      </ion-item>\n\n      <ion-list-header>{{\'contact_details.classes\'|translate}}</ion-list-header>\n\n      <ion-item>\n\n        <ion-label>{{\'contact_details.academic\'|translate}}</ion-label>\n\n        <ion-checkbox formControlName="academicClass" [(ngModel)]="userData.academic_class"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'contact_details.no_academic\'|translate}}</ion-label>\n\n        <ion-checkbox formControlName="nonAcademicClass" [(ngModel)]="userData.non_academic_class"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block round color="danger" type="submit" (click)="submitted=true">{{\'contact_details.submit\'|translate}} </button>\n\n  </form>\n\n</ion-content>\n\n	'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\tutor-contact-details\tutor-contact-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], TutorContactDetailsPage);
    return TutorContactDetailsPage;
}());

//# sourceMappingURL=tutor-contact-details.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__send_message_send_message__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LeadDetailsPage = /** @class */ (function () {
    function LeadDetailsPage(navCtrl, navParams, httpService, globalMethods, serviceName, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.profileImage = '';
        this.lead_details = [];
        this.requirement_details = [];
        this.lead_id = this.navParams.data.lead.lead_id;
        this.slug = this.navParams.data.lead.slug;
        this.profileImage = this.serviceName.profileImages;
    }
    LeadDetailsPage.prototype.openReviews = function () { };
    LeadDetailsPage.prototype.sendMessageModal = function (lead) {
        var sendMessage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__send_message_send_message__["a" /* SendMessagePage */], { lead: lead });
        sendMessage.present();
    };
    LeadDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            lead_id: this.lead_id,
            slug: this.slug
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.get_lead_details, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.lead_details = data[0].data[0];
            _this.requirement_details = data[0].data[0].lead_details[0];
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    LeadDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lead-details',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\lead-details\lead-details.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_lead_details.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div header-profile text-center>\n\n    <div class="user-img"> <img src="{{profileImage+lead_details.photo}}" alt=""> </div>\n\n    <div class="user-details">\n\n      <h3>{{lead_details.username}}</h3>\n\n      <p class="status">\n\n        <span *ngIf="lead_details.is_online==\'no\'">{{\'stu_tutor_profile.off\'|translate}}</span>\n\n        <span *ngIf="lead_details.is_online==\'yes\'">{{\'stu_tutor_profile.on\'|translate}}</span>\n\n        <span>{{lead_details.gender}}</span>\n\n        <span>{{lead_details.dob}}</span></p>\n\n      <p>\n\n        <ion-icon name></ion-icon>\n\n        <ion-icon name="pin"></ion-icon> {{lead_details.city}}</p>\n\n    </div>\n\n  </div>\n\n  <ion-list contact-list>\n\n    <ion-list-header color="light">{{\'stu_tutor_profile.info\'|translate}}</ion-list-header>\n\n    <ion-item text-wrap *ngIf="lead_details.show_contact==\'All\' || lead_details.show_contact==\'Email\'">\n\n      <p>{{\'stu_tutor_profile.email\'|translate}}</p>\n\n      <h4><a href="mailto:lead_details.email">{{lead_details.email}}</a></h4>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="lead_details.show_contact==\'All\' || lead_details.show_contact==\'Mobile\'">\n\n      <p>{{\'stu_tutor_profile.phone_no\'|translate}}</p>\n\n      <h4>+{{lead_details.phone_code}}<a href="tel:+lead_details.phone"> {{lead_details.phone}} </a></h4>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="lead_details.academic_class!=\'no\'||lead_details.non_academic_class!=\'no\'">\n\n      <p>{{\'tut_lead_details.type\'|translate}}</p>\n\n      <h4>\n\n                <span *ngIf="lead_details.academic_class==\'yes\'">{{\'stu_tutor_profile.academic\'|translate}}</span>\n\n                <span *ngIf="lead_details.non_academic_class==\'yes\'">{{\'stu_tutor_profile.non_academic\'|translate}}</span>\n\n            </h4>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <p>{{\'tut_lead_details.profile\'|translate}}</p>\n\n      <p>{{lead_details.profile}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list contact-list>\n\n    <ion-list-header color="light">{{\'tut_lead_details.details\'|translate}}</ion-list-header>\n\n    <ion-item text-wrap>\n\n      <p>{{\'tut_lead_details.retitle\'|translate}}</p>\n\n      <h4>{{requirement_details.title_of_requirement}}</h4>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <p>{{\'tut_lead_details.details\'|translate}}</p>\n\n      <h4>{{requirement_details.requirement_details}}</h4>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'tut_lead_details.course\'|translate}}</h4>\n\n      <p>{{requirement_details.course_name}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'tut_lead_details.location\'|translate}}</h4>\n\n      <p>{{requirement_details.location_name}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'tut_lead_details.teaching\'|translate}}</h4>\n\n      <p>{{requirement_details.teaching_type}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'tut_lead_details.status\'|translate}}</h4>\n\n      <p>{{requirement_details.present_status}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'tut_lead_details.priority\'|translate}}</h4>\n\n      <p>{{requirement_details.priority_of_requirement}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'tut_lead_details.duration\'|translate}}</h4>\n\n      <p>{{requirement_details.duration_needed}}</p>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n      <h4>{{\'tut_lead_details.budget\'|translate}}</h4>\n\n      <p> {{requirement_details.budget}} / {{requirement_details.budget_type}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-fab mini right bottom>\n\n    <button ion-fab color="primary" (click)="sendMessageModal(lead_details)">\n\n      <ion-icon name="mail"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\lead-details\lead-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], LeadDetailsPage);
    return LeadDetailsPage;
}());

//# sourceMappingURL=lead-details.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validation_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SendMessagePage = /** @class */ (function () {
    function SendMessagePage(navCtrl, navParams, httpService, formBuilder, globalMethods, serviceName, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.viewCtrl = viewCtrl;
        this.messageData = {
            firstName: '',
            email: '',
            phone: '',
            msg: '',
            student_id: '',
            student_slug: '',
            lead_id: '',
            tutor_id: ''
        };
        this.credits_required = this.globalMethods.siteValue('credits_for_sending_message');
        this.lead = this.navParams.data.lead;
        this.messageForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__providers_validation_service__["a" /* ValidationService */].emailValidator])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
        this.messageData.firstName = this.globalMethods.userType('username');
        this.messageData.email = this.globalMethods.userType('email');
        this.messageData.phone = this.globalMethods.userType('phone');
        this.messageData.tutor_id = this.globalMethods.userType('id');
        this.messageData.student_id = this.lead.id;
        this.messageData.lead_id = this.lead.lead_details[0].id;
        this.messageData.student_slug = this.lead.slug;
    }
    SendMessagePage_1 = SendMessagePage;
    SendMessagePage.prototype.ionViewDidLoad = function () { };
    SendMessagePage.prototype.sendMessage = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.sendLeadMessage, this.messageData).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[1].response.status == 1) {
                _this.globalMethods.setter(_this.serviceName.userProfile, JSON.stringify(data[0].data[0]));
                _this.viewCtrl.dismiss();
                _this.globalMethods.showToast(data[1].response.message);
            }
            else {
                _this.globalMethods.showToast(data[1].response.message);
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    SendMessagePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(SendMessagePage_1);
    };
    var SendMessagePage_1;
    SendMessagePage = SendMessagePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-send-message',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\send-message\send-message.html"*/'<ion-header>\n\n  <ion-toolbar color="primary">\n\n    <ion-title> {{\'stu_send_message.title\'|translate}} </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()"> <span ion-text showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="messageForm" novalidate (ngSubmit)="(messageForm.valid && submitted) && sendMessage()">\n\n    <ion-list form-list>\n\n      <ion-item>\n\n        <ion-icon item-left class="tuts-avatar"></ion-icon>\n\n        <ion-input type="text" [(ngModel)]="messageData.firstName" formControlName=" {{\'stu_send_message.name\'|translate}} " placeholder="Name"></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!messageForm.controls.firstName.pristine || submitted" [name]="(!messageForm.controls.firstName.valid && (messageForm.controls.firstName.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!messageForm.controls.firstName.valid && (messageForm.controls.firstName.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon item-left class="tuts-envelope"></ion-icon>\n\n        <ion-input type="email" [(ngModel)]="messageData.email" formControlName="email" placeholder=" {{\'stu_send_message.email\'|translate}} "></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!messageForm.controls.email.pristine || submitted" [name]="(!messageForm.controls.email.valid && (messageForm.controls.email.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!messageForm.controls.email.valid && (messageForm.controls.email.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon item-left class="tuts-phone-call"></ion-icon>\n\n        <ion-input type="text" [(ngModel)]="messageData.phone" formControlName="phone" placeholder=" {{\'stu_send_message.phone_no\'|translate}} "></ion-input>\n\n        <ion-icon class="validation-icon" *ngIf="!messageForm.controls.phone.pristine || submitted" [name]="(!messageForm.controls.phone.valid && (messageForm.controls.phone.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!messageForm.controls.phone.valid && (messageForm.controls.phone.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon item-left class="tuts-chat-1"></ion-icon>\n\n        <ion-textarea [(ngModel)]="messageData.msg" formControlName="message" placeholder=" {{\'stu_send_message.message\'|translate}} "></ion-textarea>\n\n        <ion-icon class="validation-icon" *ngIf="!messageForm.controls.message.pristine || submitted" [name]="(!messageForm.controls.message.valid && (messageForm.controls.message.dirty || submitted)) ? \'warning\' : \'done-all\'" [color]="(!messageForm.controls.message.valid && (messageForm.controls.message.dirty || submitted)) ? \'danger\' : \'valid\'" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item text-wrap>\n\n        <p> {{\'stu_send_message.info\'|translate}} </p>\n\n        <p><strong> {{\'stu_send_message.red_mes\'|translate}}  : {{credits_required}}</strong></p>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n      <button ion-button block round color="danger" type="submit" (click)="submitted=true"> {{\'stu_send_message.send\'|translate}}  </button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\send-message\send-message.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], SendMessagePage);
    return SendMessagePage;
}());

//# sourceMappingURL=send-message.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutors_tutors__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoursesPage = /** @class */ (function () {
    function CoursesPage(navCtrl, navParams, httpService, serviceName, globalMethods) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.profileImage = '';
        this.profileImage = this.serviceName.profileImages;
        this.courses = [];
        this.showLoadMore = true;
    }
    CoursesPage.prototype.ionViewDidLoad = function () {
        this.getCourses('');
    };
    CoursesPage.prototype.getCourses = function (infiniteScroll) {
        var _this = this;
        var params = {
            from_limit: this.courses.length
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.get_all_courses, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var val = _a[_i];
                    var course = {
                        id: val.id,
                        name: val.name,
                        image: _this.serviceName.coursesImage + val.image,
                        description: val.description
                    };
                    _this.courses.push(course);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast("Data loading error");
        });
    };
    CoursesPage.prototype.openTutors = function (course) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tutors_tutors__["a" /* TutorsPage */], { course: course });
    };
    CoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-courses',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\courses\courses.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'course_cat.course\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar [(ngModel)]="searchtext"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item text-wrap *ngFor="let course of courses | filter:searchtext" (click)="openTutors(course)">\n\n      <ion-thumbnail thumbnail-custom item-left> <img [src]="course.image"> </ion-thumbnail>\n\n      <h2 [innerHTML]="course.name"></h2>\n\n      <p [innerHTML]="course.description"></p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <p padding *ngIf="courses.length==0">{{\'course_cat.cor_avail\'|translate}}</p>\n\n  <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getCourses($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\courses\courses.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__["a" /* GlobalMethods */]])
    ], CoursesPage);
    return CoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReserveYourSpotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReserveYourSpotPage = /** @class */ (function () {
    function ReserveYourSpotPage(navCtrl, navParams, httpService, globalMethods, formBuilder, validationService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.globalMethods = globalMethods;
        this.formBuilder = formBuilder;
        this.validationService = validationService;
        this.serviceName = serviceName;
        this.tutor_locations = [];
        this.courses = [];
        this.time_slots = [];
        this.reserveData = {
            course_id: '',
            teaching_type: '',
            prefered_location: '',
            start_date: '',
            time_slot: '',
            message: '',
            content: '',
            credits: '',
            duration_type: '',
            duration_value: '',
            days_off: '',
            tutor_slug: '',
            course_slug: '',
            student_id: '',
            tutor_id: ''
        };
        this.tutor = this.navParams.data.tutor;
        this.reserveData.tutor_slug = this.tutor.slug;
        this.reserveData.tutor_id = this.tutor.id;
        this.reserveData.student_id = this.globalMethods.userType('id');
        this.tutor_locations = this.tutor.tutoring_locations_data;
    }
    ReserveYourSpotPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.tutor.id
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.tutorCourses, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.courses = data[0].data;
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    ReserveYourSpotPage.prototype.changeCourse = function () {
        for (var _i = 0, _a = this.courses; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.course_id == this.reserveData.course_id) {
                this.reserveData.content = val.content;
                this.reserveData.credits = val.fee;
                this.reserveData.duration_value = val.duration_value;
                this.reserveData.duration_type = val.duration_type;
                this.reserveData.days_off = val.days_off;
                this.reserveData.course_slug = val.course_slug;
                this.time_slots = val.time_slots.split(',');
                break;
            }
        }
    };
    ReserveYourSpotPage.prototype.requestTutor = function () {
        var _this = this;
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.bookTutorTutor, this.reserveData).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(data[1].response.message);
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    ReserveYourSpotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reserve-your-spot',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\reserve-your-spot\reserve-your-spot.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'stu_reserve_your_spot.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_reserve_your_spot.select\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="reserveData.course_id" (ionChange)="changeCourse()">\n\n          <ion-option *ngFor="let course of courses" value="{{course.course_id}}">{{course.course_name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-list radio-group [(ngModel)]="reserveData.teaching_type">\n\n    <ion-card>\n\n      <ion-item-divider> {{\'stu_reserve_your_spot.location\'|translate}}</ion-item-divider>\n\n      <ion-row>\n\n        <ion-col width50>\n\n          <ion-item>\n\n            <ion-label>{{\'stu_reserve_your_spot.home\'|translate}}</ion-label>\n\n            <ion-radio value="home" item-left></ion-radio>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col width50>\n\n          <ion-item>\n\n            <ion-label>{{\'stu_reserve_your_spot.online\'|translate}}</ion-label>\n\n            <ion-radio value="online" item-left> </ion-radio>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item>\n\n        <ion-radio value="willing-to-travel" item-left></ion-radio>\n\n        <ion-label>{{\'stu_reserve_your_spot.select_loc\'|translate}}</ion-label>\n\n        <ion-select [(ngModel)]="reserveData.prefered_location">\n\n          <ion-option *ngFor="let location of tutor_locations" value="{{location.id}}">{{location.tutoring_locations}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-label>{{\'stu_reserve_your_spot.select_date\'|translate}}</ion-label>\n\n        <ion-datetime [(ngModel)]="reserveData.start_date"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item-divider>{{\'stu_reserve_your_spot.select_time\'|translate}}</ion-item-divider>\n\n      <ion-scroll scrollX="true" timeslot-scroll>\n\n        <ion-list radio-group [(ngModel)]="reserveData.time_slot">\n\n          <ion-row>\n\n            <ion-col *ngFor="let slot of time_slots">\n\n              <ion-item>\n\n                <ion-label> {{slot}} </ion-label>\n\n                <ion-radio value="{{slot}}" item-left></ion-radio>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-list>\n\n      </ion-scroll>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-textarea type="text" [(ngModel)]="reserveData.message" placeholder="{{\'stu_reserve_your_spot.placeholder\'|translate}}"></ion-textarea>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-item text-wrap>\n\n      <h2>{{\'stu_reserve_your_spot.content\'|translate}}</h2>\n\n      <p [(innerHtml)]="reserveData.content"></p>\n\n    </ion-item>\n\n    <ion-item no-lines>\n\n      <h2><span [(innerHtml)]="reserveData.duration_value"></span> <span [(innerHtml)]="reserveData.duration_type"></span></h2>\n\n      <p>{{\'stu_reserve_your_spot.day_off\'|translate}}: <span [(innerHtml)]="reserveData.days_off"></span></p>\n\n      <ion-note item-right large color="danger" [(innerHtml)]="reserveData.credits"></ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n\n    <button ion-button block round color="danger" type="submit" (click)="requestTutor()">{{\'stu_reserve_your_spot.request\'|translate}}</button>\n\n  </div>\n\n  <!-- </form> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\reserve-your-spot\reserve-your-spot.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__providers_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], ReserveYourSpotPage);
    return ReserveYourSpotPage;
}());

//# sourceMappingURL=reserve-your-spot.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_category_sub_category__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseCategoriesPage = /** @class */ (function () {
    function CourseCategoriesPage(navCtrl, navParams, httpService, serviceName, globalMethods) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.categories = [];
        this.showLoadMore = true;
    }
    CourseCategoriesPage.prototype.itemSelected = function (categorie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sub_category_sub_category__["a" /* SubCategoryPage */], { category: categorie });
    };
    CourseCategoriesPage.prototype.ionViewDidLoad = function () {
        this.getCourseCategories('');
    };
    CourseCategoriesPage.prototype.getCourseCategories = function (infiniteScroll) {
        var _this = this;
        var params = {
            from_limit: this.categories.length
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.get_categories, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var value = _a[_i];
                    _this.categories.push(value);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast("Data loading error");
        });
    };
    CourseCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-course-categories',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\course-categories\course-categories.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'course_cat.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <div *ngFor="let categorie of categories">\n\n      <button ion-item (click)="itemSelected(categorie)">\n\n        {{categorie.name}}\n\n      </button>\n\n    </div>\n\n  </ion-list>\n\n  <p padding *ngIf="categories.length==0">{{\'course_cat.Available\'|translate}}</p>\n\n  <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getCourseCategories($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\course-categories\course-categories.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_methods__["a" /* GlobalMethods */]])
    ], CourseCategoriesPage);
    return CourseCategoriesPage;
}());

//# sourceMappingURL=course-categories.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutors_tutors__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubCategoryPage = /** @class */ (function () {
    function SubCategoryPage(navCtrl, navParams, httpService, serviceName, globalMethods) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.courseList = [];
        this.category_id = this.navParams.data.category.id;
        this.category_name = this.navParams.data.category.name;
    }
    SubCategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = { 'category_id': this.category_id };
        this.httpService.httpServicePost(this.serviceName.get_courses, params)
            .subscribe(function (data) { return _this.handleData(data); }, function (error) { return _this.globalMethods.showToast(JSON.stringify(error)); }, function () { });
    };
    SubCategoryPage.prototype.handleData = function (response) {
        for (var _i = 0, _a = response[0].data; _i < _a.length; _i++) {
            var val = _a[_i];
            var course = {
                id: val.id,
                name: val.name,
                image: this.serviceName.coursesImage + val.image,
                description: val.description
            };
            this.courseList.push(course);
        }
    };
    SubCategoryPage.prototype.getTutors = function (course) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tutors_tutors__["a" /* TutorsPage */], { course: course });
    };
    SubCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-category',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\sub-category\sub-category.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{category_name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <div *ngFor="let list of courseList" (click)="getTutors(list)">\n\n      <ion-item>\n\n        <ion-thumbnail item-left thumbnail-small>\n\n          <img src="{{list.image}}" alt="">\n\n        </ion-thumbnail>\n\n        <h2>{{list.name}}</h2>\n\n        <p>{{list.description}}</p>\n\n      </ion-item>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\sub-category\sub-category.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */]])
    ], SubCategoryPage);
    return SubCategoryPage;
}());

//# sourceMappingURL=sub-category.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversionRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conversion_requests_details_conversion_requests_details__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conversion_history_conversion_history__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConversionRequestsPage = /** @class */ (function () {
    function ConversionRequestsPage(navCtrl, navParams, httpService, globalMethods, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.globalMethods = globalMethods;
        this.serviceName = serviceName;
        this.ConversionFilter = "";
        this.conversion_history = [];
    }
    ConversionRequestsPage.prototype.openConversionRequestsDetails = function (conversion) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__conversion_requests_details_conversion_requests_details__["a" /* ConversionRequestsDetailsPage */], { conversion: conversion });
    };
    ConversionRequestsPage.prototype.openConversionHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__conversion_history_conversion_history__["a" /* ConversionHistoryPage */]);
    };
    ConversionRequestsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id')
        };
        this.httpService.httpServicePost(this.serviceName.creditConversionRequest, params).subscribe(function (data) {
            _this.conversion_history = data[0].data;
        }, function (error) {
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () {
        });
    };
    ConversionRequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conversion-requests',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\conversion-requests\conversion-requests.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon class="tuts-list"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'conversion_request.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-item no-lines>\n\n      <ion-icon name="color-fill" item-left color="stable"></ion-icon>\n\n      <ion-label>{{\'conversion_request.type\'|translate}}</ion-label>\n\n      <ion-select [(ngModel)]="conversionFilter">\n\n        <ion-option value="">{{\'conversion_request.all\'|translate}} </ion-option>\n\n        <ion-option value="pending">{{\'conversion_request.pending\'|translate}} </ion-option>\n\n        <ion-option value="done">{{\'conversion_request.done\'|translate}} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item (click)="openConversionRequestsDetails(history)" *ngFor="let history of conversion_history | filter:conversionFilter">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <h3 text-wrap>{{history.user_paypal_email}}</h3> </ion-col>\n\n          <ion-col col-2>\n\n            <ion-badge [color]="history.status_of_payment==\'Done\'? \'secondary\':\'danger\'">\n\n              <small>{{history.status_of_payment}}</small>\n\n            </ion-badge>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <p class="date_credit">\n\n              <ion-icon name="calendar"></ion-icon> {{history.created_at}}</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p>\n\n              <ion-note class="note_credit" item-right color="danger">{{history.no_of_credits_to_be_converted}}</ion-note>\n\n            </p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\conversion-requests\conversion-requests.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], ConversionRequestsPage);
    return ConversionRequestsPage;
}());

//# sourceMappingURL=conversion-requests.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversionHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversion_requests_details_conversion_requests_details__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversionHistoryPage = /** @class */ (function () {
    function ConversionHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConversionHistoryPage.prototype.ionViewDidLoad = function () { };
    ConversionHistoryPage.prototype.openConversionRequestsDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__conversion_requests_details_conversion_requests_details__["a" /* ConversionRequestsDetailsPage */]);
    };
    ConversionHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conversion-history',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\conversion-history\conversion-history.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{\'conversion_history.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item (click)="openConversionRequestsDetails()">\n\n      <h2>bellaadwerd123@gmail.com</h2>\n\n      <p>Bank code (Bankleitzahl): 20811008 {{\'conversion_history.domestic\'|translate}}: 1039531801 {{\'conversion_history.IBAN\'|translate}}: AL90208110080000001039531801</p>\n\n      <p><span><ion-icon name="calendar"></ion-icon> 11/11/2016 - 12:54</span> <span><small color="danger">{{\'conversion_history.Pending\'|translate}}</small></span></p>\n\n      <ion-note item-right large color="danger">270<small>c</small></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="openConversionRequestsDetails()">\n\n      <h2>bellaadwerd123@gmail.com</h2>\n\n      <p>{{\'conversion_history.bank\'|translate}}: 20811008 {{\'conversion_history.domestic\'|translate}}: 1039531801 {{\'conversion_history.IBAN\'|translate}}: AL90208110080000001039531801</p>\n\n      <p><span><ion-icon name="calendar"></ion-icon> 24/11/2016 - 09:59</span> <span><small color="danger">{{\'conversion_history.Pending\'|translate}}</small></span></p>\n\n      <ion-note item-right large color="danger">99<small>c</small></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="openConversionRequestsDetails()">\n\n      <h2>bellaadwerd123@gmail.com</h2>\n\n      <p>{{\'conversion_history.bank\'|translate}}: 20811008 {{\'conversion_history.domestic\'|translate}}: 1039531801 {{\'conversion_history.IBAN\'|translate}}: AL90208110080000001039531801</p>\n\n      <p><span><ion-icon name="calendar"></ion-icon> 11/11/2016 - 12:54</span> <span><small color="danger">{{\'conversion_history.Pending\'|translate}}</small></span></p>\n\n      <ion-note item-right large color="danger">270<small>c</small></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="openConversionRequestsDetails()">\n\n      <h2>bellaadwerd123@gmail.com</h2>\n\n      <p>{{\'conversion_history.bank\'|translate}}: 20811008 {{\'conversion_history.domestic\'|translate}}: 1039531801 {{\'conversion_history.IBAN\'|translate}}: AL90208110080000001039531801</p>\n\n      <p><span><ion-icon name="calendar"></ion-icon> 24/11/2016 - 09:59</span> <span><small color="danger">{{\'conversion_history.Pending\'|translate}}</small></span></p>\n\n      <ion-note item-right large color="danger">99<small>c</small></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="openConversionRequestsDetails()">\n\n      <h2>bellaadwerd123@gmail.com</h2>\n\n      <p>{{\'conversion_history.bank\'|translate}}: 20811008 {{\'conversion_history.domestic\'|translate}}: 1039531801 {{\'conversion_history.IBAN\'|translate}}: AL90208110080000001039531801</p>\n\n      <p><span><ion-icon name="calendar"></ion-icon> 11/11/2016 - 12:54</span> <span><small color="danger">{{\'conversion_history.Pending\'|translate}}</small></span></p>\n\n      <ion-note item-right large color="danger">270<small>c</small></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="openConversionRequestsDetails()">\n\n      <h2>bellaadwerd123@gmail.com</h2>\n\n      <p>{{\'conversion_history.bank\'|translate}}: 20811008 {{\'conversion_history.domestic\'|translate}}: 1039531801 {{\'conversion_history.IBAN\'|translate}}: AL90208110080000001039531801</p>\n\n      <p><span><ion-icon name="calendar"></ion-icon> 24/11/2016 - 09:59</span> <span><small color="danger">{{\'conversion_history.Pending\'|translate}}</small></span></p>\n\n      <ion-note item-right large color="danger">99<small>c</small></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="openConversionRequestsDetails()">\n\n      <h2>bellaadwerd123@gmail.com</h2>\n\n      <p>{{\'conversion_history.bank\'|translate}}: 20811008 {{\'conversion_history.domestic\'|translate}}: 1039531801 {{\'conversion_history.IBAN\'|translate}}: AL90208110080000001039531801</p>\n\n      <p><span><ion-icon name="calendar"></ion-icon> 11/11/2016 - 12:54</span> <span><small color="danger">{{\'conversion_history.Pending\'|translate}}</small></span></p>\n\n      <ion-note item-right large color="danger">270<small>c</small></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="openConversionRequestsDetails()">\n\n      <h2>bellaadwerd123@gmail.com</h2>\n\n      <p>{{\'conversion_history.bank\'|translate}}: 20811008 {{\'conversion_history.domestic\'|translate}}: 1039531801 {{\'conversion_history.IBAN\'|translate}}: AL90208110080000001039531801</p>\n\n      <p><span><ion-icon name="calendar"></ion-icon> 24/11/2016 - 09:59</span> <span><small color="danger">{{\'conversion_history.Pending\'|translate}}</small></span></p>\n\n      <ion-note item-right large color="danger">99<small>c</small></ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\tutor\conversion-history\conversion-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ConversionHistoryPage);
    return ConversionHistoryPage;
}());

//# sourceMappingURL=conversion-history.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_case_case__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_age_filter_age_filter__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter_pipe__ = __webpack_require__(1025);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_case_case__["a" /* CasePipe */], __WEBPACK_IMPORTED_MODULE_2__pipes_age_filter_age_filter__["a" /* AgeFilter */], __WEBPACK_IMPORTED_MODULE_3__filter_filter_pipe__["a" /* FilterPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_case_case__["a" /* CasePipe */], __WEBPACK_IMPORTED_MODULE_2__pipes_age_filter_age_filter__["a" /* AgeFilter */], __WEBPACK_IMPORTED_MODULE_3__filter_filter_pipe__["a" /* FilterPipe */]],
            imports: []
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(716);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__ = __webpack_require__(1060);
throw new Error("Cannot find module \"ng2-translate\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_chooser__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_opener__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_contact_us_contact_us__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_certificates_certificates__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_blog_blog__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_blog_details_blog_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_choose_file_modal_choose_file_modal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_tutor_tutors_dasboard_tutors_dasboard__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_tutor_booking_booking__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_tutor_booking_details_booking_details__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_tutor_tutor_courses_tutor_courses__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_tutor_tutor_course_details_tutor_course_details__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_tutor_tutor_add_course_tutor_add_course__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_tutor_tutor_locations_tutor_locations__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_tutor_tutor_teaching_types_tutor_teaching_types__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tutor_tutor_privacy_settings_tutor_privacy_settings__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_tutor_tutor_personal_information_tutor_personal_information__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_tutor_tutor_profile_information_tutor_profile_information__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_tutor_tutor_experience_tutor_experience__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_tutor_add_tutor_experience_add_tutor_experience__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_tutor_tutor_contact_information_tutor_contact_information__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_tutor_tutor_contact_details_tutor_contact_details__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_tutor_leads_leads__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_tutor_lead_details_lead_details__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_tutor_leads_filter_leads_filter__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_tutor_send_message_send_message__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_tutor_courses_courses__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_tutor_tutors_tutors__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_tutor_tutor_profile_tutor_profile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_tutor_reserve_your_spot_reserve_your_spot__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_tutor_filter_filter__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_tutor_reviews_reviews__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_tutor_course_categories_course_categories__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_tutor_sub_category_sub_category__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_tutor_conversion_requests_conversion_requests__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_tutor_conversion_requests_details_conversion_requests_details__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_tutor_conversion_history_conversion_history__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_tutor_chat_chat__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_tutor_question_answer_question_answer__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_tutor_question_answer_conversation_question_answer_conversation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_tutor_tutor_dashboard_questions_tutor_dashboard_questions__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_tutor_tutor_dashboard_chat_tutor_dashboard_chat__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_student_student_dashboard_student_dashboard__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_student_student_profile_student_profile__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_student_student_bookings_student_bookings__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_student_student_booking_details_student_booking_details__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_student_student_profile_info_student_profile_info__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_student_my_address_my_address__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_student_contact_details_contact_details__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_student_student_privacy_student_privacy__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_student_student_teaching_types_student_teaching_types__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_student_student_locations_student_locations__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_student_student_courses_student_courses__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_student_credit_trans_history_credit_trans_history__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_student_my_course_purchases_my_course_purchases__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_student_student_leads_student_leads__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_student_student_lead_details_student_lead_details__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_student_student_post_lead_student_post_lead__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_terms_conditions_terms_conditions__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_about_us_about_us__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_student_find_tutor_find_tutor__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_student_stu_tutor_profile_stu_tutor_profile__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_student_tutor_filter_tutor_filter__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_student_stu_send_message_stu_send_message__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_student_tutor_reviews_tutor_reviews__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_student_stu_reserve_your_spot_stu_reserve_your_spot__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pages_student_stu_fav_tutors_stu_fav_tutors__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_student_stu_question_answer_stu_question_answer__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__pages_student_stu_question_answer_conversation_stu_question_answer_conversation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__pages_student_stu_chat_stu_chat__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__pages_student_student_dashboard_chat_student_dashboard_chat__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__pages_student_student_dashboard_questions_student_dashboard_questions__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__pipes_pipes_module__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96_ionic2_rating__ = __webpack_require__(1062);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97_ionic_cache__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__ionic_native_google_plus__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__ionic_native_facebook__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__ionic_native_onesignal__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__ionic_native_social_sharing__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__ionic_native_email_composer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__ionic_native_call_number__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104_ion2_calendar__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_104_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









////transelet////

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["TranslateStaticLoader"](http, './assets/i18n', '.json');
}
//end









// import { AgeFilter } from '../pipes/age-filter/age-filter';











// TUTORS PAGES



































//STUDENT PAGES
















// import { CasePipe } from '../pipes/case/case';
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                // AgeFilter,
                __WEBPACK_IMPORTED_MODULE_26__pages_certificates_certificates__["a" /* CertificatesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_tutor_tutors_dasboard_tutors_dasboard__["a" /* TutorsDasboardPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_tutor_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_tutor_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tutor_tutor_courses_tutor_courses__["a" /* TutorCoursesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tutor_tutor_course_details_tutor_course_details__["a" /* TutorCourseDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_tutor_tutor_add_course_tutor_add_course__["a" /* TutorAddCoursePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_tutor_tutor_locations_tutor_locations__["a" /* TutorLocationsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_tutor_tutor_teaching_types_tutor_teaching_types__["a" /* TutorTeachingTypesPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tutor_tutor_privacy_settings_tutor_privacy_settings__["a" /* TutorPrivacySettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_tutor_tutor_personal_information_tutor_personal_information__["a" /* TutorPersonalInformationPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_tutor_tutor_profile_information_tutor_profile_information__["a" /* TutorProfileInformationPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_tutor_tutor_experience_tutor_experience__["a" /* TutorExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tutor_add_tutor_experience_add_tutor_experience__["a" /* AddTutorExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_tutor_tutor_contact_information_tutor_contact_information__["a" /* TutorContactInformationPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tutor_tutor_contact_details_tutor_contact_details__["a" /* TutorContactDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_tutor_leads_leads__["a" /* LeadsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_tutor_lead_details_lead_details__["a" /* LeadDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_tutor_leads_filter_leads_filter__["a" /* LeadsFilterPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_tutor_send_message_send_message__["a" /* SendMessagePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tutor_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_tutor_tutors_tutors__["a" /* TutorsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_choose_file_modal_choose_file_modal__["a" /* ChooseFileModalPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_tutor_tutor_profile_tutor_profile__["a" /* TutorProfilePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_tutor_reserve_your_spot_reserve_your_spot__["a" /* ReserveYourSpotPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_tutor_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_tutor_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_tutor_course_categories_course_categories__["a" /* CourseCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_tutor_sub_category_sub_category__["a" /* SubCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_tutor_conversion_requests_conversion_requests__["a" /* ConversionRequestsPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_tutor_conversion_requests_details_conversion_requests_details__["a" /* ConversionRequestsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_tutor_conversion_history_conversion_history__["a" /* ConversionHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_tutor_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_tutor_question_answer_question_answer__["a" /* QuestionAnswerPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_tutor_question_answer_conversation_question_answer_conversation__["a" /* QuestionAnswerConversationPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_student_student_dashboard_student_dashboard__["a" /* StudentDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_student_student_profile_student_profile__["a" /* StudentProfilePage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_student_student_bookings_student_bookings__["a" /* StudentBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_student_student_booking_details_student_booking_details__["a" /* StudentBookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_student_student_profile_info_student_profile_info__["a" /* StudentProfileInfoPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_student_my_address_my_address__["a" /* MyAddressPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_student_contact_details_contact_details__["a" /* ContactDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_student_student_privacy_student_privacy__["a" /* StudentPrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_student_student_teaching_types_student_teaching_types__["a" /* StudentTeachingTypesPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_student_student_locations_student_locations__["a" /* StudentLocationsPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_student_student_courses_student_courses__["a" /* StudentCoursesPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_student_credit_trans_history_credit_trans_history__["a" /* CreditTransHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_student_my_course_purchases_my_course_purchases__["a" /* MyCoursePurchasesPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_student_student_leads_student_leads__["a" /* StudentLeadsPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_student_student_lead_details_student_lead_details__["a" /* StudentLeadDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_80__pages_student_student_post_lead_student_post_lead__["a" /* StudentPostLeadPage */],
                //  CasePipe,
                __WEBPACK_IMPORTED_MODULE_81__pages_terms_conditions_terms_conditions__["a" /* TermsConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_student_find_tutor_find_tutor__["a" /* FindTutorPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_student_stu_tutor_profile_stu_tutor_profile__["a" /* StuTutorProfilePage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_student_tutor_filter_tutor_filter__["a" /* TutorFilterPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_student_stu_send_message_stu_send_message__["a" /* StuSendMessagePage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_student_tutor_reviews_tutor_reviews__["a" /* TutorReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_student_stu_reserve_your_spot_stu_reserve_your_spot__["a" /* StuReserveYourSpotPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_student_stu_fav_tutors_stu_fav_tutors__["a" /* StuFavTutorsPage */],
                __WEBPACK_IMPORTED_MODULE_90__pages_student_stu_question_answer_stu_question_answer__["a" /* StuQuestionAnswerPage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_student_stu_question_answer_conversation_stu_question_answer_conversation__["a" /* StuQuestionAnswerConversationPage */],
                __WEBPACK_IMPORTED_MODULE_92__pages_student_stu_chat_stu_chat__["a" /* StuChatPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_blog_details_blog_details__["a" /* BlogDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_tutor_tutor_dashboard_questions_tutor_dashboard_questions__["a" /* TutorDashboardQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_tutor_tutor_dashboard_chat_tutor_dashboard_chat__["a" /* TutorDashboardChatPage */],
                __WEBPACK_IMPORTED_MODULE_93__pages_student_student_dashboard_chat_student_dashboard_chat__["a" /* StudentDashboardChatPage */],
                __WEBPACK_IMPORTED_MODULE_94__pages_student_student_dashboard_questions_student_dashboard_questions__["a" /* StudentDashboardQuestionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["TranslateModule"].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_9_ng2_translate__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]]
                }),
                __WEBPACK_IMPORTED_MODULE_95__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_97_ionic_cache__["a" /* CacheModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                    mode: 'md',
                    backButtonText: '',
                    iconMode: 'md',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'md-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog-details/blog-details.module#BlogDetailsPageModule', name: 'BlogDetailsPage', segment: 'blog-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blog/blog.module#BlogPageModule', name: 'BlogPage', segment: 'blog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/certificates/certificates.module#CertificatesPageModule', name: 'CertificatesPage', segment: 'certificates', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-file-modal/choose-file-modal.module#ChooseFileModalPageModule', name: 'ChooseFileModalPage', segment: 'choose-file-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/contact-details/contact-details.module#ContactDetailsPageModule', name: 'ContactDetailsPage', segment: 'contact-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/credit-trans-history/credit-trans-history.module#CreditTransHistoryPageModule', name: 'CreditTransHistoryPage', segment: 'credit-trans-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/find-tutor/find-tutor.module#FindTutorPageModule', name: 'FindTutorPage', segment: 'find-tutor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/my-address/my-address.module#MyAddressPageModule', name: 'MyAddressPage', segment: 'my-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/my-course-purchases/my-course-purchases.module#MyCoursePurchasesPageModule', name: 'MyCoursePurchasesPage', segment: 'my-course-purchases', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stu-chat/stu-chat.module#StuChatPageModule', name: 'StuChatPage', segment: 'stu-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stu-fav-tutors/stu-fav-tutors.module#StuFavTutorsPageModule', name: 'StuFavTutorsPage', segment: 'stu-fav-tutors', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stu-question-answer-conversation/stu-question-answer-conversation.module#StuQuestionAnswerConversationPageModule', name: 'StuQuestionAnswerConversationPage', segment: 'stu-question-answer-conversation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/stu-question-answer/stu-question-answer.module#StuQuestionAnswerPageModule', name: 'StuQuestionAnswerPage', segment: 'stu-question-answer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-booking-details/student-booking-details.module#StudentBookingDetailsPageModule', name: 'StudentBookingDetailsPage', segment: 'student-booking-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-courses/student-courses.module#StudentCoursesPageModule', name: 'StudentCoursesPage', segment: 'student-courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-dashboard-chat/student-dashboard-chat.module#StudentDashboardChatPageModule', name: 'StudentDashboardChatPage', segment: 'student-dashboard-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-dashboard-questions/student-dashboard-questions.module#StudentDashboardQuestionsPageModule', name: 'StudentDashboardQuestionsPage', segment: 'student-dashboard-questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-lead-details/student-lead-details.module#StudentLeadDetailsPageModule', name: 'StudentLeadDetailsPage', segment: 'student-lead-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-leads/student-leads.module#StudentLeadsPageModule', name: 'StudentLeadsPage', segment: 'student-leads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-locations/student-locations.module#StudentLocationsPageModule', name: 'StudentLocationsPage', segment: 'student-locations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-post-lead/student-post-lead.module#StudentPostLeadPageModule', name: 'StudentPostLeadPage', segment: 'student-post-lead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-privacy/student-privacy.module#StudentPrivacyPageModule', name: 'StudentPrivacyPage', segment: 'student-privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-profile-info/student-profile-info.module#StudentProfileInfoPageModule', name: 'StudentProfileInfoPage', segment: 'student-profile-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-profile/student-profile.module#StudentProfilePageModule', name: 'StudentProfilePage', segment: 'student-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-teaching-types/student-teaching-types.module#StudentTeachingTypesPageModule', name: 'StudentTeachingTypesPage', segment: 'student-teaching-types', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-conditions/terms-conditions.module#TermsConditionsPageModule', name: 'TermsConditionsPage', segment: 'terms-conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutor/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/student/student-bookings/student-bookings.module#StudentBookingsPageModule', name: 'StudentBookingsPage', segment: 'student-bookings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutor/question-answer-conversation/question-answer-conversation.module#QuestionAnswerConversationPageModule', name: 'QuestionAnswerConversationPage', segment: 'question-answer-conversation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutor/question-answer/question-answer.module#QuestionAnswerPageModule', name: 'QuestionAnswerPage', segment: 'question-answer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutor/tutor-dashboard-chat/tutor-dashboard-chat.module#TutorDashboardChatPageModule', name: 'TutorDashboardChatPage', segment: 'tutor-dashboard-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutor/tutor-dashboard-questions/tutor-dashboard-questions.module#TutorDashboardQuestionsPageModule', name: 'TutorDashboardQuestionsPage', segment: 'tutor-dashboard-questions', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_96_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_104_ion2_calendar__["CalendarModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_tutor_tutors_dasboard_tutors_dasboard__["a" /* TutorsDasboardPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_tutor_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_tutor_booking_details_booking_details__["a" /* BookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_tutor_tutor_courses_tutor_courses__["a" /* TutorCoursesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_tutor_tutor_course_details_tutor_course_details__["a" /* TutorCourseDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_tutor_tutor_add_course_tutor_add_course__["a" /* TutorAddCoursePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_tutor_tutor_locations_tutor_locations__["a" /* TutorLocationsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_tutor_tutor_teaching_types_tutor_teaching_types__["a" /* TutorTeachingTypesPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tutor_tutor_privacy_settings_tutor_privacy_settings__["a" /* TutorPrivacySettingsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_tutor_tutor_personal_information_tutor_personal_information__["a" /* TutorPersonalInformationPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_tutor_tutor_profile_information_tutor_profile_information__["a" /* TutorProfileInformationPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_tutor_tutor_experience_tutor_experience__["a" /* TutorExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_tutor_add_tutor_experience_add_tutor_experience__["a" /* AddTutorExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_tutor_tutor_contact_information_tutor_contact_information__["a" /* TutorContactInformationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_certificates_certificates__["a" /* CertificatesPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_tutor_leads_leads__["a" /* LeadsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_tutor_lead_details_lead_details__["a" /* LeadDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_tutor_leads_filter_leads_filter__["a" /* LeadsFilterPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_tutor_send_message_send_message__["a" /* SendMessagePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tutor_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_tutor_tutors_tutors__["a" /* TutorsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tutor_tutor_contact_details_tutor_contact_details__["a" /* TutorContactDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_tutor_tutor_profile_tutor_profile__["a" /* TutorProfilePage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_tutor_reserve_your_spot_reserve_your_spot__["a" /* ReserveYourSpotPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_tutor_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_tutor_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_tutor_course_categories_course_categories__["a" /* CourseCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_tutor_sub_category_sub_category__["a" /* SubCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_tutor_conversion_requests_conversion_requests__["a" /* ConversionRequestsPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_tutor_conversion_requests_details_conversion_requests_details__["a" /* ConversionRequestsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_tutor_conversion_history_conversion_history__["a" /* ConversionHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_tutor_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_tutor_question_answer_question_answer__["a" /* QuestionAnswerPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_tutor_question_answer_conversation_question_answer_conversation__["a" /* QuestionAnswerConversationPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_student_student_dashboard_student_dashboard__["a" /* StudentDashboardPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_student_student_profile_student_profile__["a" /* StudentProfilePage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_student_student_bookings_student_bookings__["a" /* StudentBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_student_student_booking_details_student_booking_details__["a" /* StudentBookingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_student_student_profile_info_student_profile_info__["a" /* StudentProfileInfoPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_student_my_address_my_address__["a" /* MyAddressPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_student_contact_details_contact_details__["a" /* ContactDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_student_student_privacy_student_privacy__["a" /* StudentPrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_student_student_teaching_types_student_teaching_types__["a" /* StudentTeachingTypesPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_student_student_locations_student_locations__["a" /* StudentLocationsPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_student_student_courses_student_courses__["a" /* StudentCoursesPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_student_credit_trans_history_credit_trans_history__["a" /* CreditTransHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_student_my_course_purchases_my_course_purchases__["a" /* MyCoursePurchasesPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_student_student_leads_student_leads__["a" /* StudentLeadsPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_student_student_lead_details_student_lead_details__["a" /* StudentLeadDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_80__pages_student_student_post_lead_student_post_lead__["a" /* StudentPostLeadPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_terms_conditions_terms_conditions__["a" /* TermsConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_student_find_tutor_find_tutor__["a" /* FindTutorPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_student_stu_tutor_profile_stu_tutor_profile__["a" /* StuTutorProfilePage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_student_tutor_filter_tutor_filter__["a" /* TutorFilterPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_student_stu_send_message_stu_send_message__["a" /* StuSendMessagePage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_student_tutor_reviews_tutor_reviews__["a" /* TutorReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_student_stu_reserve_your_spot_stu_reserve_your_spot__["a" /* StuReserveYourSpotPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_student_stu_fav_tutors_stu_fav_tutors__["a" /* StuFavTutorsPage */],
                __WEBPACK_IMPORTED_MODULE_90__pages_student_stu_question_answer_stu_question_answer__["a" /* StuQuestionAnswerPage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_student_stu_question_answer_conversation_stu_question_answer_conversation__["a" /* StuQuestionAnswerConversationPage */],
                __WEBPACK_IMPORTED_MODULE_92__pages_student_stu_chat_stu_chat__["a" /* StuChatPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_blog_details_blog_details__["a" /* BlogDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_tutor_tutor_dashboard_questions_tutor_dashboard_questions__["a" /* TutorDashboardQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_tutor_tutor_dashboard_chat_tutor_dashboard_chat__["a" /* TutorDashboardChatPage */],
                __WEBPACK_IMPORTED_MODULE_93__pages_student_student_dashboard_chat_student_dashboard_chat__["a" /* StudentDashboardChatPage */],
                __WEBPACK_IMPORTED_MODULE_94__pages_student_student_dashboard_questions_student_dashboard_questions__["a" /* StudentDashboardQuestionsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_toast__["a" /* Toast */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_17__providers_service__["a" /* ServiceName */],
                __WEBPACK_IMPORTED_MODULE_18__providers_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_global_methods__["a" /* GlobalMethods */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_100__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_98__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_99__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_101__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_102__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_103__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseFileModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChooseFileModalPage = /** @class */ (function () {
    function ChooseFileModalPage(navCtrl, navParams, transfer, file, fileChooser, filePath, camera, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.selectedCertificate = {};
    }
    ChooseFileModalPage.prototype.ionViewDidLoad = function () {
        this.selectedCertificate = this.navParams.data.certificate;
    };
    ChooseFileModalPage.prototype.openFile = function () {
        var _this = this;
        this.fileChooser.open().then(function (uri) {
            _this.selectedCertificate.upload_file = uri;
            _this.closeModal(_this.selectedCertificate);
        }).catch(function (e) {
        });
    };
    ChooseFileModalPage.prototype.closeModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ChooseFileModalPage.prototype.openGallery = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            var imageName = imageData.substring(0, imageData.indexOf("?"));
            _this.selectedCertificate.upload_file = imageName;
            _this.closeModal(_this.selectedCertificate);
        }, function (err) {
            _this.selectedCertificate.upload_file = '';
            _this.closeModal(_this.selectedCertificate);
        });
    };
    ChooseFileModalPage.prototype.openCamera = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            _this.selectedCertificate.upload_file = imageData;
            _this.closeModal(_this.selectedCertificate);
        }, function (err) {
            _this.selectedCertificate.upload_file = '';
            _this.closeModal(_this.selectedCertificate);
        });
    };
    ChooseFileModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-choose-file-modal',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\choose-file-modal\choose-file-modal.html"*/'<ion-content padding class="content_font_change">\n\n  <div modalpopup>\n\n    <button class="close_btn" ion-button clear icon-only (click)="closeModal(\'\')" >\n\n     <ion-icon name="md-close"></ion-icon>\n\n   </button>\n\n   <div class="file_type">\n\n     <button class="update-camera update1" ion-button clear icon-only (click)="openCamera()">\n\n      <ion-icon name="camera" class="modal-icons1"></ion-icon></button>\n\n      <button class="update-camera update1" ion-button clear icon-only (click)="openGallery()">\n\n        <ion-icon name="ios-image-outline" class="modal-icons1"></ion-icon></button>\n\n      </div>\n\n    </div>\n\n  </ion-content> \n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\choose-file-modal\choose-file-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ChooseFileModalPage);
    return ChooseFileModalPage;
}());

//# sourceMappingURL=choose-file-modal.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindTutorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stu_tutor_profile_stu_tutor_profile__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tutor_filter_tutor_filter__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FindTutorPage = /** @class */ (function () {
    function FindTutorPage(navCtrl, navParams, globalMethods, httpService, serviceName, modalCtrl, alertCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.courses = [];
        this.locations = [];
        this.teaching_types = [];
        localStorage.setItem('pageName', 'FindTutorPage');
        this.menuCtrl.enable(true);
        this.courses = this.navParams.data.courses;
        this.locations = this.navParams.data.locations;
        this.teaching_types = this.navParams.data.teachings;
        this.tutors = [];
        this.showLoadMore = true;
    }
    FindTutorPage.prototype.ionViewDidLoad = function () {
        this.getTutors('');
    };
    FindTutorPage.prototype.getTutors = function (infiniteScroll) {
        var _this = this;
        var params = {
            student_id: this.globalMethods.userType('id'),
            courses: this.courses,
            locations: this.locations,
            teaching_types: this.teaching_types,
            from_limit: this.tutors.length
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getSearchTutors, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var val = _a[_i];
                    _this.tutors.push(val);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast("Data loading error");
        });
    };
    FindTutorPage.prototype.openTutorProfile = function (tutor) {
        if (tutor.availability_status == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Tutor Status',
                subTitle: 'This Tutor Is Not Available Now',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__stu_tutor_profile_stu_tutor_profile__["a" /* StuTutorProfilePage */], { tutor: tutor });
        }
    };
    FindTutorPage.prototype.openFilterTutors = function () {
        var filterTutors = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__tutor_filter_tutor_filter__["a" /* TutorFilterPage */]);
        filterTutors.present();
    };
    FindTutorPage.prototype.favTutor = function (tutor) {
        var _this = this;
        var params = {
            student_id: this.globalMethods.userType('id'),
            tutor_id: tutor.id,
            fav_id: tutor.fav_id,
            courses: this.courses,
            locations: this.locations,
            teaching_types: this.teaching_types
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.addFavTutor, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                _this.tutors = data[0].data;
            }
            _this.globalMethods.showToast(data[1].response.message);
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    FindTutorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-find-tutor',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\find-tutor\find-tutor.html"*/'<ion-header no-border>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle class="menu-toggle-icon">\n\n            <ion-icon class="tuts-list"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'find_tutor.title\'|translate}}</ion-title>\n\n        \n\n        <ion-buttons end>               \n\n            <button ion-button icon-only (click)="openFilterTutors()">\n\n                <ion-icon name="funnel"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar color="primary">\n\n        <ion-searchbar [(ngModel)]="searchText"></ion-searchbar>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-item *ngFor="let tutor of tutors | filter: searchText">\n\n        <ion-thumbnail item-left>\n\n            <img *ngIf="tutor.photo!=\'\'" src="{{serviceName.profileImages}}{{tutor.photo}}">\n\n            <img *ngIf="tutor.photo==\'\'" src="{{serviceName.defaultImage}}">\n\n            <div [class]="tutor.availability_status==1?\'status:online\':\'status:offline\'"></div>\n\n        </ion-thumbnail>\n\n\n\n\n\n        <ion-icon [name]="(tutor.fav_id>0) ? \'heart\':\'heart-outline\'" color="danger" item-right (click)="favTutor(tutor)"></ion-icon>\n\n\n\n\n\n        <div (click)="openTutorProfile(tutor)">\n\n            <h2>{{tutor.username}} </h2>\n\n            <p>{{\'find_tutor.demo\'|translate}} : {{tutor.free_demo}}</p>\n\n            <p>{{\'find_tutor.exprience\'|translate}}{{tutor.teaching_experience}} {{tutor.duration_of_experience}}</p>\n\n            <p>{{\'find_tutor.qualification\'|translate}}{{tutor.qualification}}</p>\n\n        </div>\n\n\n\n    </ion-item>\n\n    <p padding *ngIf="tutors.length==0">{{\'find_tutor.tutors\'|translate}}</p>\n\n    <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getTutors($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\find-tutor\find-tutor.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], FindTutorPage);
    return FindTutorPage;
}());

//# sourceMappingURL=find-tutor.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentBookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_booking_details_student_booking_details__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentBookingsPage = /** @class */ (function () {
    function StudentBookingsPage(navCtrl, navParams, httpService, serviceName, globalMethods) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.globalMethods = globalMethods;
        this.bookings = [];
        this.filteredBookings = [];
        this.userDetails = JSON.parse(this.globalMethods.getter(this.serviceName.userProfile));
        this.bookings = [];
        this.bookings_temp = [];
        this.showLoadMore = true;
        this.bookings_type = this.navParams.data.booking_type;
        this.bookingFilter = this.navParams.data.booking_type;
    }
    StudentBookingsPage.prototype.ionViewDidLoad = function () {
        this.getBookings('');
    };
    StudentBookingsPage.prototype.getBookings = function (infiniteScroll) {
        var _this = this;
        var params = {
            user_id: this.userDetails.id,
            from_limit: this.bookings.length,
            type: this.bookings_type
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentBookings, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var value = _a[_i];
                    _this.bookings.push(value);
                    _this.filteredBookings.push(value);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    StudentBookingsPage.prototype.openBookingDetails = function (booking) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__student_booking_details_student_booking_details__["a" /* StudentBookingDetailsPage */], { selectedBooking: booking });
    };
    StudentBookingsPage.prototype.filterByStatus = function () {
        this.filteredBookings = [];
        if (this.bookingFilter != 'all') {
            this.bookings_type = this.bookingFilter;
            this.bookings_temp = this.bookings.slice();
            this.bookings = [];
            this.getBookings('');
        }
        else {
            this.bookings = this.bookings_temp;
            this.filteredBookings = this.bookings;
        }
    };
    StudentBookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-bookings',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-bookings\student-bookings.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon class="tuts-list"></ion-icon>\n\n      </button>\n\n      <ion-title>{{\'stu_booking.title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-item no-lines>\n\n        <ion-icon name="color-fill" item-left-color="stable"></ion-icon>\n\n        <ion-label>{{\'stu_booking.filter\'|translate}} </ion-label>\n\n        <ion-select [(ngModel)]="bookingFilter" (ionChange)="filterByStatus()">\n\n            <ion-option value="all">{{\'stu_booking.all\'|translate}}</ion-option>\n\n            <ion-option value="pending">{{\'stu_booking.pending\'|translate}}</ion-option>\n\n            <ion-option value="approved">{{\'stu_booking.approve\'|translate}}</ion-option>\n\n            <ion-option value="session_initiated">{{\'stu_booking.session\'|translate}}</ion-option>\n\n            <ion-option value="running">{{\'stu_booking.run\'|translate}}</ion-option>\n\n            <ion-option value="completed">{{\'stu_booking.complete\'|translate}}</ion-option>\n\n            <ion-option value="called_for_admin_intervention">{{\'stu_booking.admin\'|translate}}</ion-option>\n\n            <ion-option value="closed">{{\'stu_booking.close\'|translate}}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n</ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item *ngFor="let booking of filteredBookings">\n\n            <div (click)="openBookingDetails(booking)">\n\n                <h2>{{booking.tutor_name}}</h2>\n\n                <p>{{booking.course_name}}</p>\n\n                <p><span><ion-icon name="calendar"></ion-icon> {{booking.start_date}} </span>\n\n                    <span><ion-icon name="time"> {{booking.duration_value}} {{booking.duration_type}} </ion-icon></span>\n\n                </p>\n\n                <p><small>{{booking.status | case }}</small></p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n    <p padding *ngIf="filteredBookings.length==0">{{\'stu_booking.available\'|translate}}</p>\n\n    <ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getBookings($event)">\n\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-bookings\student-bookings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_4__providers_global_methods__["a" /* GlobalMethods */]])
    ], StudentBookingsPage);
    return StudentBookingsPage;
}());

//# sourceMappingURL=student-bookings.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLeadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_lead_details_student_lead_details__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_post_lead_student_post_lead__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentLeadsPage = /** @class */ (function () {
    function StudentLeadsPage(navCtrl, navParams, globalMethods, httpService, serviceName) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.leads = [];
        this.leadType = "";
        this.leads = [];
        this.showLoadMore = true;
    }
    StudentLeadsPage.prototype.ionViewDidLoad = function () {
        this.getLeads('');
    };
    StudentLeadsPage.prototype.getLeads = function (infiniteScroll) {
        var _this = this;
        var params = {
            user_id: this.globalMethods.userType('id'),
            from_limit: this.leads.length
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStudentLeads, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            if (data[0].data.length != 0) {
                if (infiniteScroll != '') {
                    infiniteScroll.enable(true);
                    _this.showLoadMore = true;
                }
                for (var _i = 0, _a = data[0].data; _i < _a.length; _i++) {
                    var value = _a[_i];
                    _this.leads.push(value);
                }
            }
            else {
                if (infiniteScroll != '') {
                    infiniteScroll.complete();
                    _this.showLoadMore = false;
                    infiniteScroll.enable(false);
                }
            }
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        });
    };
    StudentLeadsPage.prototype.openLeadDetails = function (lead) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__student_lead_details_student_lead_details__["a" /* StudentLeadDetailsPage */], { selecteLead: lead });
    };
    StudentLeadsPage.prototype.postLead = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__student_post_lead_student_post_lead__["a" /* StudentPostLeadPage */]);
    };
    StudentLeadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-leads',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-leads\student-leads.html"*/'<ion-header no-border>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle><ion-icon class="tuts-list"></ion-icon></button>\n\n    <ion-title>{{\'stu_lead_details.sub_title\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="primary">\n\n    <ion-item no-lines>\n\n      <ion-icon name="color-fill" item-left-color="stable"></ion-icon>\n\n      <ion-label>{{\'stu_lead_details.filter\'|translate}}</ion-label>\n\n      <ion-select [(ngModel)]="leadType">\n\n        <ion-option value="">{{\'stu_lead_details.all\'|translate}}</ion-option>\n\n        <ion-option value="Opened">{{\'stu_lead_details.open\'|translate}}</ion-option>\n\n        <ion-option value="Closed">{{\'stu_lead_details.close\'|translate}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n <ion-list>\n\n  <ion-item *ngFor="let lead of leads | filter:leadType" (click)="openLeadDetails(lead)">\n\n    <h2>{{lead.title_of_requirement}}</h2>\n\n    <p><span>{{\'stu_lead_details.course\'|translate}} : {{lead.course_name}}</span></p>\n\n    <p><span>{{\'stu_lead_details.loc\'|translate}}: {{lead.location_name}}</span></p>\n\n    <p><span>{{\'stu_lead_details.duration\'|translate}}: {{lead.duration_needed}} </span> <span><ion-badge [color]="lead.status==\'Closed\' ? \'secondary\': \'danger\'" item-end>{{lead.status}}</ion-badge></span></p>\n\n  </ion-item>\n\n</ion-list>\n\n<p padding *ngIf="leads.length==0">{{\'stu_lead_details.available\'|translate}}</p>\n\n<ion-infinite-scroll *ngIf="showLoadMore==true" (ionInfinite)="getLeads($event)">\n\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n<ion-fab right bottom>\n\n  <button ion-fab (click)="postLead()"><ion-icon name="add"></ion-icon></button>\n\n</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\student-leads\student-leads.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]])
    ], StudentLeadsPage);
    return StudentLeadsPage;
}());

//# sourceMappingURL=student-leads.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StuTutorProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stu_send_message_stu_send_message__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tutor_reviews_tutor_reviews__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stu_reserve_your_spot_stu_reserve_your_spot__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StuTutorProfilePage = /** @class */ (function () {
    function StuTutorProfilePage(navCtrl, navParams, globalMethods, httpService, serviceName, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalMethods = globalMethods;
        this.httpService = httpService;
        this.serviceName = serviceName;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.tutorDetails = [];
        this.tutor = this.navParams.data.tutor;
    }
    StuTutorProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var params = {
            tutor_id: this.tutor.id
        };
        this.globalMethods.loaderStart();
        this.httpService.httpServicePost(this.serviceName.getStuTutorProfile, params).subscribe(function (data) {
            _this.globalMethods.loaderStop();
            _this.tutorDetails = data[0].data[0];
        }, function (error) {
            _this.globalMethods.loaderStop();
            _this.globalMethods.showToast(JSON.stringify(error));
        }, function () { });
    };
    StuTutorProfilePage.prototype.sendMessageModal = function (tutor_id) {
        var sendMessage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__stu_send_message_stu_send_message__["a" /* StuSendMessagePage */], { selectedTutor: tutor_id });
        sendMessage.present();
    };
    StuTutorProfilePage.prototype.openReviews = function (tutor_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tutor_reviews_tutor_reviews__["a" /* TutorReviewsPage */], { selectedTutor: tutor_id });
    };
    StuTutorProfilePage.prototype.openReserveYourSpot = function (tutor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__stu_reserve_your_spot_stu_reserve_your_spot__["a" /* StuReserveYourSpotPage */], { selectedTutor: tutor });
    };
    StuTutorProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stu-tutor-profile',template:/*ion-inline-start:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-tutor-profile\stu-tutor-profile.html"*/'<ion-header no-border>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon class="tuts-list"></ion-icon>\n\n      </button>\n\n      <ion-title> {{\'stu_tutor_profile.title\'|translate}}</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="sendMessageModal(tutorDetails.id)">\n\n            <ion-icon name="mail"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div header-profile text-center>\n\n        <div class="user-img">\n\n            <img *ngIf="tutorDetails.photo!= \'\'" src="{{serviceName.profileImages}}{{tutorDetails.photo}}">\n\n            <img *ngIf="tutorDetails.photo==\'\'" src="{{serviceName.defaultImage}}">\n\n        </div>\n\n        <div class="user-details">\n\n            <h3>{{tutorDetails.username}}</h3>\n\n            <p class="status">\n\n                <span *ngIf="tutorDetails.is_online==\'no\'"> {{\'stu_tutor_profile.off\'|translate}}</span>\n\n                <span *ngIf="tutorDetails.is_online==\'yes\'">{{\'stu_tutor_profile.on\'|translate}}</span>\n\n                <span>{{tutorDetails.gender}}</span>\n\n                <span>{{tutorDetails.dob}}</span>\n\n            </p>\n\n            <div class="review-rating">\n\n                <div class="star" color="warning">\n\n                    <rating [(ngModel)]="tutorDetails.tutor_rating" max="5" readOnly="true"></rating>\n\n                </div>\n\n                <button *ngIf="tutorDetails.no_of_reviews>0" ion-button clear small color="danger" (click)="openReviews(tutorDetails.id)">{{tutorDetails.no_of_reviews}} {{\'stu_tutor_profile.reviews\'|translate}}</button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-list contact-list>\n\n        <ion-list-header color="light"> {{\'stu_tutor_profile.info\'|translate}}</ion-list-header>\n\n        <ion-item text-wrap *ngIf="tutorDetails.show_contact==\'All\' || tutorDetails.show_contact==\'Email\'">\n\n            <p> {{\'stu_tutor_profile.email\'|translate}}</p>\n\n            <h4><a href="mailto:{{tutorDetails.email}}">{{tutorDetails.email}}</a></h4>\n\n        </ion-item>\n\n        <ion-item text-wrap *ngIf="tutorDetails.show_contact==\'All\' || tutorDetails.show_contact==\'Mobile\'">\n\n            <p>{{\'stu_tutor_profile.phone_no\'|translate}}</p>\n\n            <h4>{{tutorDetails.phone_code}}<a href="tel:{{tutorDetails.phone}}"> {{tutorDetails.phone}} </a></h4>\n\n        </ion-item>\n\n        <ion-item text-wrap>\n\n            <ion-row no-padding>\n\n                <ion-col>\n\n                    <p> {{\'stu_tutor_profile.experience\'|translate}}</p>\n\n                    <h4>{{tutorDetails.teaching_experience}} {{tutorDetails.duration_of_experience}}</h4>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <p> {{\'stu_tutor_profile.qualification\'|translate}}</p>\n\n                    <h4>{{tutorDetails.qualification}}</h4>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-item>\n\n        <ion-item text-wrap>\n\n            <p>{{\'stu_tutor_profile.lang\'|translate}}</p>\n\n            <h4>{{tutorDetails.language_of_teaching}}</h4>\n\n        </ion-item>\n\n        <ion-item text-wrap>\n\n            <p>Teaching class types {{\'stu_tutor_profile.class\'|translate}}</p>\n\n            <h4 *ngIf="tutorDetails.academic_class==\'yes\'">{{\'stu_tutor_profile.academic\'|translate}}</h4>\n\n            <h4 *ngIf="tutorDetails.non_academic_class==\'yes\'">{{\'stu_tutor_profile.non_academic\'|translate}}</h4>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list contact-list>\n\n        <ion-list-header color="light">{{\'stu_tutor_profile.more\'|translate}}</ion-list-header>\n\n        <ion-item text-wrap>\n\n            <h4>{{\'stu_tutor_profile.courses\'|translate}}</h4>\n\n            <p>{{tutorDetails.tutoring_courses}}</p>\n\n        </ion-item>\n\n        <ion-item text-wrap>\n\n            <h4>{{\'stu_tutor_profile.location\'|translate}}</h4>\n\n            <p>{{tutorDetails.tutoring_locations}}</p>\n\n        </ion-item>\n\n        <ion-item text-wrap>\n\n            <h4>{{\'stu_tutor_profile.career\'|translate}}</h4>\n\n            <p>{{tutorDetails.profile}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list contact-list *ngIf="tutorDetails.tutor_experience!=0">\n\n        <ion-list-header color="light">{{\'stu_tutor_profile.my_experience\'|translate}}</ion-list-header>\n\n        <ion-item text-wrap *ngFor="let experience of tutorDetails.tutor_experience">\n\n            <h4>{{experience.from_date}} - {{experience.to_date}}</h4>\n\n            <p><strong color="danger">{{experience.company}} - {{experience.role}}</strong></p>\n\n            <p>{{experience.description}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer >\n\n    <button ion-button block round color="danger" (click)="openReserveYourSpot(tutorDetails)">{{\'stu_tutor_profile.request\'|translate}}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Tasks\2018-7-2-Ionic\mudarsee\src\pages\student\stu-tutor-profile\stu-tutor-profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */], __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_methods__["a" /* GlobalMethods */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* ServiceName */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], StuTutorProfilePage);
    return StuTutorProfilePage;
}());

//# sourceMappingURL=stu-tutor-profile.js.map

/***/ })

},[711]);
//# sourceMappingURL=main.js.map