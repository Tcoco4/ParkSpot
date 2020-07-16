function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-share-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/share/share.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/share.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShareSharePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/start\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Share</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n <!--<img src=\"http://png-2.findicons.com/files/icons/573/must_have/48/mail.png\">-->\r\n<ion-content>\r\n<ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <!--https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=-->\r\n          <!--https://www.google.com/maps/place/-25.755648,28.239462-->\r\n          <a style=\"text-decoration: none;\">\r\n          <ion-item lines=\"none\" (click)=\"currentCoordinates()\">\r\n              <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\r\n              <ion-label>Share location</ion-label>\r\n            </ion-item>\r\n           </a>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <a style=\"text-decoration: none;\">\r\n            <ion-item lines=\"none\" (click)=\"landmarkLocation()\"  >\r\n              <ion-icon name=\"pin-outline\" slot=\"start\"></ion-icon>\r\n              <ion-label>Share Landmark</ion-label>\r\n            </ion-item>\r\n            </a>   \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <a style=\"text-decoration: none;\">\r\n            <ion-item lines=\"none\" (click)=\"eventLocation()\" >\r\n              <ion-icon name=\"aperture-outline\" slot=\"start\"></ion-icon>\r\n              <ion-label>Share Event location</ion-label>\r\n            </ion-item>\r\n            </a>   \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n   \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/share/share-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/share/share-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: SharePageRoutingModule */

  /***/
  function srcAppShareShareRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePageRoutingModule", function () {
      return SharePageRoutingModule;
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


    var _share_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./share.page */
    "./src/app/share/share.page.ts");

    var routes = [{
      path: '',
      component: _share_page__WEBPACK_IMPORTED_MODULE_3__["SharePage"]
    }];

    var SharePageRoutingModule = function SharePageRoutingModule() {
      _classCallCheck(this, SharePageRoutingModule);
    };

    SharePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SharePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/share/share.module.ts":
  /*!***************************************!*\
    !*** ./src/app/share/share.module.ts ***!
    \***************************************/

  /*! exports provided: SharePageModule */

  /***/
  function srcAppShareShareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePageModule", function () {
      return SharePageModule;
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


    var _share_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./share-routing.module */
    "./src/app/share/share-routing.module.ts");
    /* harmony import */


    var _share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./share.page */
    "./src/app/share/share.page.ts");

    var SharePageModule = function SharePageModule() {
      _classCallCheck(this, SharePageModule);
    };

    SharePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _share_routing_module__WEBPACK_IMPORTED_MODULE_5__["SharePageRoutingModule"]],
      declarations: [_share_page__WEBPACK_IMPORTED_MODULE_6__["SharePage"]]
    })], SharePageModule);
    /***/
  },

  /***/
  "./src/app/share/share.page.scss":
  /*!***************************************!*\
    !*** ./src/app/share/share.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppShareSharePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3NoYXJlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/share/share.page.ts":
  /*!*************************************!*\
    !*** ./src/app/share/share.page.ts ***!
    \*************************************/

  /*! exports provided: SharePage */

  /***/
  function srcAppShareSharePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharePage", function () {
      return SharePage;
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


    var _shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/map-modal/map-modal.component */
    "./src/app/shared/map-modal/map-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SharePage = /*#__PURE__*/function () {
      function SharePage(mapModal, router) {
        _classCallCheck(this, SharePage);

        this.mapModal = mapModal;
        this.router = router;
      }

      _createClass(SharePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "currentCoordinates",
        value: function currentCoordinates() {
          var bes = this;
          var a;
          var href;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              bes.pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              a = document.getElementsByTagName("a")[0];
              href = document.createAttribute("href");
              href.value = "mailto:?subject=My current Location&body=I am here https://www.google.com/maps/place/" + bes.pos.lat + "," + bes.pos.lng;
              a.setAttributeNode(href);
              document.getElementsByTagName("a")[0].click();
            });
          }
        }
      }, {
        key: "landmarkLocation",
        value: function landmarkLocation() {
          var bes = this;
          var a;
          var href;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              bes.pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              a = document.getElementsByTagName("a")[1];
              href = document.createAttribute("href");
              href.value = "mailto:?subject=My Landmark Location&body=Here is my landmark location https://www.google.com/maps/place/" + bes.pos.lat + "," + bes.pos.lng;
              a.setAttributeNode(href);
              document.getElementsByTagName("a")[1].click();
            });
          }
        }
      }, {
        key: "eventLocation",
        value: function eventLocation() {
          var bes = this;
          var a;
          var href;

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              bes.pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              a = document.getElementsByTagName("a")[2];
              href = document.createAttribute("href");
              href.value = "mailto:?subject=Event Location&body=Come to this event location https://www.google.com/maps/place/McDonald's+Hatfield/@-25.752135,28.237606,17z";
              a.setAttributeNode(href);
              document.getElementsByTagName("a")[2].click();
            });
          }
        }
      }]);

      return SharePage;
    }();

    SharePage.ctorParameters = function () {
      return [{
        type: _shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_2__["MapModalComponent"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SharePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-share',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./share.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/share/share.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./share.page.scss */
      "./src/app/share/share.page.scss"))["default"]]
    })], SharePage);
    /***/
  }
}]);
//# sourceMappingURL=share-share-module-es5.js.map