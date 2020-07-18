function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyAccountMyAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/start\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">My Account</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backk\">\r\n\r\n<ion-list-header></ion-list-header>\r\n  <!--<ion-avatar class=\"ion-margin-start \" >\r\n    <img src=\"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png\">\r\n</ion-avatar>-->\r\n<ion-grid>\r\n <!-- <ion-row>\r\n    <ion-col>\r\n      <ion-item lines=\"none\">\r\n         <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>User Name:</ion-label>\r\n        </ion-item>\r\n    </ion-col>\r\n  </ion-row>-->\r\n  <!--<ion-row>\r\n    <ion-col>\r\n      <ion-item lines=\"none\">\r\n          <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>Make Friends</ion-label>\r\n        </ion-item>\r\n    </ion-col>\r\n  </ion-row>-->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item lines=\"none\" (click)=\"NewFeatures()\">\r\n        <ion-icon name=\"construct-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>New Features</ion-label>\r\n      </ion-item> \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item lines=\"none\" (click)=\"Settings()\">\r\n        <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Language</ion-label>\r\n      </ion-item>  \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item lines=\"none\" (click)=\"userManual()\">\r\n        <ion-icon name=\"help-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>User Manual</ion-label>\r\n      </ion-item>  \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item lines=\"none\" (click)=\"help()\">\r\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Speak to Consultant</ion-label>\r\n      </ion-item>  \r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item lines=\"none\" routerLink=\"/home\">\r\n        <ion-icon name=\"exit-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Signout</ion-label>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n    \r\n  \r\n  \r\n</ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/my-account/my-account-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/my-account/my-account-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyAccountPageRoutingModule */

  /***/
  function srcAppMyAccountMyAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPageRoutingModule", function () {
      return MyAccountPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _my_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-account.page */
    "./src/app/my-account/my-account.page.ts");

    var routes = [{
      path: '',
      component: _my_account_page__WEBPACK_IMPORTED_MODULE_3__["MyAccountPage"]
    }];

    var MyAccountPageRoutingModule = function MyAccountPageRoutingModule() {
      _classCallCheck(this, MyAccountPageRoutingModule);
    };

    MyAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyAccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-account/my-account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/my-account/my-account.module.ts ***!
    \*************************************************/

  /*! exports provided: MyAccountPageModule */

  /***/
  function srcAppMyAccountMyAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function () {
      return MyAccountPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-account-routing.module */
    "./src/app/my-account/my-account-routing.module.ts");
    /* harmony import */


    var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-account.page */
    "./src/app/my-account/my-account.page.ts");

    var MyAccountPageModule = function MyAccountPageModule() {
      _classCallCheck(this, MyAccountPageModule);
    };

    MyAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAccountPageRoutingModule"]],
      declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]]
    })], MyAccountPageModule);
    /***/
  },

  /***/
  "./src/app/my-account/my-account.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/my-account/my-account.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyAccountMyAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*ion-content.backk{\n    --background: url(../../assets/icon/favicon.png) no-repeat center center fixed;\n    background-color: #8FBC8F;\n   }*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYWNjb3VudC9DOlxcVXNlcnNcXFRhcmVtZWtlZHp3YVxcTm9kZVxcUGFya1Nwb3QyXFxQYXJrU3BvdFxcUGFya1Nwb3Qvc3JjXFxhcHBcXG15LWFjY291bnRcXG15LWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7S0FBQSIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmlvbi1jb250ZW50LmJhY2tre1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vZmF2aWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhGQkM4RjtcclxuICAgfSovXHJcbiAiXX0= */";
    /***/
  },

  /***/
  "./src/app/my-account/my-account.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/my-account/my-account.page.ts ***!
    \***********************************************/

  /*! exports provided: MyAccountPage */

  /***/
  function srcAppMyAccountMyAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountPage", function () {
      return MyAccountPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/pickers/location-picker/location-picker.component */
    "./src/app/shared/pickers/location-picker/location-picker.component.ts");

    var MyAccountPage = /*#__PURE__*/function () {
      function MyAccountPage(alertCtrl, modal) {
        _classCallCheck(this, MyAccountPage);

        this.alertCtrl = alertCtrl;
        this.modal = modal;
      }

      _createClass(MyAccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "NewFeatures",
        value: function NewFeatures() {
          this.alertCtrl.create({
            header: 'Make Friends',
            message: 'Make friends on the Parkspot Community which will allow you to share event locations, landmark locations and many more with friends',
            buttons: [{
              text: 'Dont Notify once update available  ',
              role: 'accept'
            }, {
              text: 'Notify once update available ',
              role: 'accept'
            }]
          }).then(function (alertEl) {
            alertEl.present();
          });
        }
        /* <embed
         src="COS730_Assignment_3.pdf"
         type="application/pdf"
         scrolling="auto"
         height="100%"
         width="100%"
                  >
           </embed>*/

      }, {
        key: "help",
        value: function help() {
          this.alertCtrl.create({
            header: 'Speak to Consultant',
            message: 'Dial  0 800 123 4567',
            buttons: [{
              text: 'Call ',
              role: 'accept'
            }, {
              text: 'Cancel ',
              role: 'cancel'
            }]
          }).then(function (alertEl) {
            alertEl.present();
          });
        }
      }, {
        key: "userManual",
        value: function userManual() {
          this.modal.create({
            component: _shared_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_3__["LocationPickerComponent"]
          }).then(function (modalEl) {
            modalEl.present();
          });
        }
      }, {
        key: "Settings",
        value: function Settings() {
          this.alertCtrl.create({
            header: 'Language-settings',
            message: '',
            buttons: [{
              text: 'Afrikaans ',
              role: 'cancel'
            }, {
              text: 'Engish ',
              role: 'accept'
            }]
          }).then(function (alertEl) {
            alertEl.present();
          });
        }
      }]);

      return MyAccountPage;
    }();

    MyAccountPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    MyAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-account',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-account.page.scss */
      "./src/app/my-account/my-account.page.scss"))["default"]]
    })], MyAccountPage);
    /***/
  }
}]);
//# sourceMappingURL=my-account-my-account-module-es5.js.map