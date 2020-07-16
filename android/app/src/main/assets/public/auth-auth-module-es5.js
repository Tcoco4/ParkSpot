function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <!--<ion-icon name=\"mail-outline\" slot=\"start\" padding></ion-icon>-->\r\n    <ion-title class=\"ion-text-center\"><h3>Sign up with your Gmail</h3></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"back\" >\r\n   <ion-card class=\"card-center\">\r\n    <ion-card-content style=\"align-items:center; align-self:center; justify-content:center\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-icon> \r\n              </ion-icon>\r\n                <ion-label><h1>Email</h1></ion-label>\r\n                  <ion-input type=\"email\" aria-placeholder=\"email@gmail.com\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-icon> \r\n              </ion-icon>\r\n              <ion-label><h1>Password</h1></ion-label>\r\n              <ion-input type=\"password\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-icon> \r\n              </ion-icon> \r\n                <ion-button shape=\"round\" color=\"primary\" type=\"submit\" (click)=\"onSignUp()\" >Sign in</ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<!--<!DOCTYPE html>-->\r\n<!--<ion-content>\r\n<head>\r\n  <meta name=\"google-signin-client_id\" content=\"711674266047-1ho6n2f3531f0tjkde86n0kiagusf2i0.apps.googleusercontent.com\" >-->\r\n  <!--<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\" type=\"text/css\">-->\r\n  <!--<script src=\"https://apis.google.com/js/api:client.js\"></script>\r\n  <script>\r\n    var googleUser = {};\r\n    var startApp = function() {\r\n      gapi.load('auth2', function(){\r\n        // Retrieve the singleton for the GoogleAuth library and set up the client.\r\n        auth2 = gapi.auth2.init(\r\n            {\r\n          client_id: '711674266047-1ho6n2f3531f0tjkde86n0kiagusf2i0.apps.googleusercontent.com',\r\n          cookiepolicy: 'none',\r\n          // Request scopes in addition to 'profile' and 'email'\r\n          //scope: 'additional_scope'\r\n        }\r\n        );\r\n        attachSignin(document.getElementById('customBtn'));\r\n      });\r\n    };\r\n  \r\n    function attachSignin(element) {\r\n      console.log(element.id);\r\n      auth2.attachClickHandler(element, {},\r\n          function(googleUser) {\r\n            document.getElementById('name').innerText = \"Signed in: \" +\r\n                googleUser.getBasicProfile().getName();\r\n              //  googleUser.getBasicProfile().getImageUrl();\r\n                googleUser.getBasicProfile().getEmail();\r\n          }, function(error) {\r\n            alert(JSON.stringify(error, undefined, 2));\r\n          });\r\n    }\r\n    </script>\r\n</head>\r\n  <div id=\"gSignInWrapper\">\r\n    <span class=\"label\">Sign in with:</span>\r\n    <div id=\"customBtn\" class=\"customGPlusSignIn\">\r\n      <span class=\"icon\"></span>\r\n      <span class=\"buttonText\">Google</span>\r\n    </div>\r\n  </div>\r\n  <div id=\"name\"></div>\r\n  <script>startApp();</script>\r\n</ion-content>-->\r\n";
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthPageRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function () {
      return AuthPageRoutingModule;
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


    var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/auth/auth.page.ts");

    var routes = [{
      path: '',
      component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }];

    var AuthPageRoutingModule = function AuthPageRoutingModule() {
      _classCallCheck(this, AuthPageRoutingModule);
    };

    AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthPageModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
      return AuthPageModule;
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


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/auth/auth.page.ts");

    var AuthPageModule = function AuthPageModule() {
      _classCallCheck(this, AuthPageModule);
    };

    AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"]],
      declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })], AuthPageModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.page.scss":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.back {\n  --background: url('favicon.png') no-repeat center center fixed;\n  background-color: #8FBC8F;\n}\n\n.card-center {\n  height: 47%;\n  width: 70%;\n  display: block;\n  margin: 10% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXFRhcmVtZWtlZHp3YVxcTm9kZVxcUGFya1Nwb3QyXFxQYXJrU3BvdFxcUGFya1Nwb3Qvc3JjXFxhcHBcXGF1dGhcXGF1dGgucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL2F1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csOERBQUE7RUFDQSx5QkFBQTtBQ0NIOztBREVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNre1xyXG4gICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbi9mYXZpY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM4RkJDOEY7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jZW50ZXJ7XHJcbiAgICBoZWlnaHQ6IDQ3JTtcclxuICAgIHdpZHRoOjcwJTsgLy8gYWRqdXN0IHdpZHRoIG9uIHlvdXIgaW9uLWNhcmQgc3VpdGFibGUgb24geW91ciBzY3JlZW5cclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG59IiwiaW9uLWNvbnRlbnQuYmFjayB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2Zhdmljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhGQkM4Rjtcbn1cblxuLmNhcmQtY2VudGVyIHtcbiAgaGVpZ2h0OiA0NyU7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwJSBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/auth.page.ts":
  /*!***********************************!*\
    !*** ./src/app/auth/auth.page.ts ***!
    \***********************************/

  /*! exports provided: AuthPage */

  /***/
  function srcAppAuthAuthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
      return AuthPage;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthPage = /*#__PURE__*/function () {
      function AuthPage(router, authService) {
        _classCallCheck(this, AuthPage);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSignUp",
        value: function onSignUp() {
          this.authService.login();
        }
      }]);

      return AuthPage;
    }();

    AuthPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./auth.page.scss */
      "./src/app/auth/auth.page.scss"))["default"]]
    })], AuthPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map