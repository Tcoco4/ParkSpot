function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/start\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Events</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\" button (click)=\"displayRestaurants()\">\r\n          <ion-icon name=\"restaurant-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>Restaurants</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <ion-icon name=\"fast-food-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>Drive-ins</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <ion-icon name=\"file-tray-stacked-outline\"slot=\"start\"></ion-icon>\r\n          <ion-label>Gas Stations</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <ion-icon name=\"car-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>Car Wash</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>ATMs</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>-->\r\n<ion-content>\r\n  <head>\r\n    <meta name=\"google-signin-client_id\" content=\"711674266047-1ho6n2f3531f0tjkde86n0kiagusf2i0.apps.googleusercontent.com \" >\r\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\" type=\"text/css\">\r\n  <script src=\"https://apis.google.com/js/api:client.js\"></script>\r\n  <script>\r\n  var googleUser = {};\r\n  var startApp = function() {\r\n    gapi.load('auth2', function(){\r\n      // Retrieve the singleton for the GoogleAuth library and set up the client.\r\n      auth2 = gapi.auth2.init(\r\n          /*{\r\n        client_id: '711674266047-1ho6n2f3531f0tjkde86n0kiagusf2i0.apps.googleusercontent.com ',\r\n        cookiepolicy: 'snono',\r\n        // Request scopes in addition to 'profile' and 'email'\r\n        scope: 'additional_scope'\r\n      }*/\r\n      );\r\n      attachSignin(document.getElementById('customBtn'));\r\n    });\r\n  };\r\n\r\n  function attachSignin(element) {\r\n    console.log(element.id);\r\n    auth2.attachClickHandler(element, {},\r\n        function(googleUser) {\r\n          document.getElementById('name').innerText = \"Signed in: \" +\r\n              googleUser.getBasicProfile().getName();\r\n        }, function(error) {\r\n          alert(JSON.stringify(error, undefined, 2));\r\n        });\r\n  }\r\n  </script>\r\n  <style type=\"text/css\">\r\n    #customBtn {\r\n      display: inline-block;\r\n      background: white;\r\n      color: #444;\r\n      width: 190px;\r\n      border-radius: 5px;\r\n      border: thin solid #888;\r\n      box-shadow: 1px 1px 1px grey;\r\n      white-space: nowrap;\r\n    }\r\n    #customBtn:hover {\r\n      cursor: pointer;\r\n    }\r\n    span.label {\r\n      font-family: serif;\r\n      font-weight: normal;\r\n    }\r\n    span.icon {\r\n     /* background: url('/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;*/\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      width: 42px;\r\n      height: 42px;\r\n    }\r\n    span.buttonText {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      padding-left: 42px;\r\n      padding-right: 42px;\r\n      font-size: 14px;\r\n      font-weight: bold;\r\n      /* Use the Roboto font that is loaded in the <head> */\r\n      font-family: 'Roboto', sans-serif;\r\n    }\r\n  </style>\r\n  </head>\r\n  <body>\r\n  <!-- In the callback, you would hide the gSignInWrapper element on a\r\n  successful sign in -->\r\n  <div id=\"gSignInWrapper\">\r\n    <span class=\"label\">Sign in with:</span>\r\n    <div id=\"customBtn\" class=\"customGPlusSignIn\">\r\n      <span class=\"icon\"></span>\r\n      <span class=\"buttonText\">Google</span>\r\n    </div>\r\n  </div>\r\n  <div id=\"name\"></div>\r\n  <script>startApp();</script>\r\n</body>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/events/events-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/events/events-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: EventsPageRoutingModule */

  /***/
  function srcAppEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
      return EventsPageRoutingModule;
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


    var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/events/events.page.ts");

    var routes = [{
      path: '',
      component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }];

    var EventsPageRoutingModule = function EventsPageRoutingModule() {
      _classCallCheck(this, EventsPageRoutingModule);
    };

    EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/events/events.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/events/events.module.ts ***!
    \*****************************************/

  /*! exports provided: EventsPageModule */

  /***/
  function srcAppEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
      return EventsPageModule;
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


    var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./events-routing.module */
    "./src/app/events/events-routing.module.ts");
    /* harmony import */


    var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/events/events.page.ts");

    var EventsPageModule = function EventsPageModule() {
      _classCallCheck(this, EventsPageModule);
    };

    EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]],
      declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
    })], EventsPageModule);
    /***/
  },

  /***/
  "./src/app/events/events.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/events/events.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/events/events.page.ts":
  /*!***************************************!*\
    !*** ./src/app/events/events.page.ts ***!
    \***************************************/

  /*! exports provided: EventsPage */

  /***/
  function srcAppEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
      return EventsPage;
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

    var EventsPage = /*#__PURE__*/function () {
      function EventsPage(router) {
        _classCallCheck(this, EventsPage);

        this.router = router;
      }

      _createClass(EventsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displayRestaurants",
        value: function displayRestaurants() {}
      }]);

      return EventsPage;
    }();

    EventsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./events.page.scss */
      "./src/app/events/events.page.scss"))["default"]]
    })], EventsPage);
    /***/
  }
}]);
//# sourceMappingURL=events-events-module-es5.js.map