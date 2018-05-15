webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"notification\" *ngIf=\"notification\">\n   <span>{{notification}}</span>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(activatedRoute, router, appService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.appService = appService;
        this.notification = null;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.url.subscribe(function (url) {
            if (!_this.appService.hasToken()) {
                _this.router.navigate(['/login']);
            }
        });
        this.notificationsSubscription = this.appService.notificationsSubject.subscribe(function (m) {
            _this.notification = m;
            setTimeout(function () {
                _this.notification = null;
            }, 5000);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.notificationsSubscription.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [app_service_1.AppService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var user_component_1 = __webpack_require__("./src/app/header/user/user.component.ts");
var aside_component_1 = __webpack_require__("./src/app/content/aside/aside.component.ts");
var content_component_1 = __webpack_require__("./src/app/content/content.component.ts");
var posts_component_1 = __webpack_require__("./src/app/content/posts/posts.component.ts");
var connections_component_1 = __webpack_require__("./src/app/content/connections/connections.component.ts");
var about_component_1 = __webpack_require__("./src/app/content/about/about.component.ts");
var post_component_1 = __webpack_require__("./src/app/content/posts/post/post.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var nav_component_1 = __webpack_require__("./src/app/content/nav/nav.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'connections', component: connections_component_1.ConnectionsComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                user_component_1.UserComponent,
                aside_component_1.AsideComponent,
                content_component_1.ContentComponent,
                aside_component_1.AsideComponent,
                posts_component_1.PostsComponent,
                connections_component_1.ConnectionsComponent,
                about_component_1.AboutComponent,
                post_component_1.PostComponent,
                home_component_1.HomeComponent,
                nav_component_1.NavComponent,
                login_component_1.LoginComponent,
                profile_component_1.ProfileComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes),
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var ngx_socket_io_1 = __webpack_require__("./node_modules/ngx-socket-io/index.js");
var config = { url: 'http://localhost:8988', options: {} };
ngx_socket_io_1.SocketIoModule.forRoot(config);
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.activityLog = [];
    }
    AppService.prototype.hasToken = function () {
        var _this = this;
        if (this.token && this.id) {
            return true;
        }
        else {
            this.token = localStorage.getItem('token');
            this.id = localStorage.getItem('id');
            if (this.token) {
                this.socket = new ngx_socket_io_1.Socket({ url: 'http://localhost:3000?token=' + this.token, options: {} });
                this.activityLogSubject = new Subject_1.Subject();
                this.notificationsSubject = new Subject_1.Subject();
                this.socket.on("activityLog", function (m) {
                    _this.activityLog.push(m);
                    if (_this.activityLog.length >= 5) {
                        _this.activityLog = _this.activityLog.slice(_this.activityLog.length - 5, 5);
                    }
                    _this.activityLogSubject.next();
                });
                this.socket.on("notification", function (m) {
                    _this.notificationsSubject.next(m);
                });
                this.suggestedFriendsSubject = new Subject_1.Subject();
                this.getSuggestedFriends().subscribe(function (r) {
                    _this.suggestedFriends = r;
                    _this.suggestedFriendsSubject.next();
                });
            }
            return (this.token && this.id) ? true : false;
        }
    };
    AppService.prototype.setToken = function (token, id) {
        var _this = this;
        this.token = token;
        this.id = id;
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        this.socket = new ngx_socket_io_1.Socket({ url: 'http://localhost:3000?token=' + this.token, options: {} });
        this.activityLogSubject = new Subject_1.Subject();
        this.notificationsSubject = new Subject_1.Subject();
        this.socket.on("activityLog", function (m) {
            _this.activityLog.push(m);
            if (_this.activityLog.length >= 5) {
                _this.activityLog = _this.activityLog.slice(_this.activityLog.length - 5, 5);
            }
            _this.activityLogSubject.next();
        });
        this.socket.on("notification", function (m) {
            _this.notificationsSubject.next(m);
        });
        this.suggestedFriendsSubject = new Subject_1.Subject();
        this.getSuggestedFriends().subscribe(function (r) {
            _this.suggestedFriends = r;
            _this.suggestedFriendsSubject.next();
        });
    };
    AppService.prototype.getProfile = function (id) {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.get('/api/profile' + (id ? ('?id=' + id) : ''), { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.getHome = function () {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.get('/api/home', { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.getSuggestedFriends = function () {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.get('/api/suggestedFriends', { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.login = function (user_name, password) {
        return this.http.post('/api/login', { user_name: user_name, password: password }).map(function (res) { return res.json(); });
    };
    AppService.prototype.follow = function (id) {
        var _this = this;
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/follow', { id: id }, { headers: headers }).map(function (res) {
            _this.getSuggestedFriends().subscribe(function (r) {
                _this.suggestedFriends = r;
                _this.suggestedFriendsSubject.next();
            });
            return res.json();
        });
    };
    AppService.prototype.unfollow = function (id) {
        var _this = this;
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/unfollow', { id: id }, { headers: headers }).map(function (res) {
            _this.getSuggestedFriends().subscribe(function (r) {
                _this.suggestedFriends = r;
                _this.suggestedFriendsSubject.next();
            });
            return res.json();
        });
    };
    AppService.prototype.addPost = function (body) {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/post/add', { body: body }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.removePost = function (id) {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/post/remove', { id: id }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.sharePost = function (id) {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/post/share', { id: id }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.likePost = function (id) {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/post/like', { id: id }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.unlikePost = function (id) {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/post/unlike', { id: id }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.addComment = function (id, body) {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/post/comment', { id: id, body: body }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService.prototype.removeComment = function (id) {
        var headers = new http_1.Headers({ 'x-access-token': this.token });
        return this.http.post('/api/post/comment/remove', { id: id }, { headers: headers }).map(function (res) { return res.json(); });
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "./src/app/content/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/content/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("./src/app/content/about/about.component.html"),
            styles: [__webpack_require__("./src/app/content/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/content/aside/aside.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/aside/aside.component.html":
/***/ (function(module, exports) {

module.exports = "\n                <div class=\"suggested-connections\">\n                    <h2 class=\"heading-primary--aside\">suggested connections</h2>\n                    <div class=\"s-connections\">\n                        <div class=\"person\">\n                            <a href=\"#\" class=\"person__wraper\">\n\n                                <figure class=\"person__shape\">\n                                    <img src=\"assets/img/lorde.jpg\" alt=\"Person on a tour\" class=\"person__img\">\n                                </figure>\n                                <div class=\"person__caption\">\n                                    <div class=\"person__name\">Lorde</div>\n                                    <div class=\"person__rate\">4.3</div>\n\n                                </div>\n                            </a>\n                            <button class=\"btn-follow\">follow</button>\n\n                        </div>\n                        <div class=\"person\">\n                            <a href=\"#\" class=\"person__wraper\">\n                                <figure class=\"person__shape\">\n                                    <img src=\"assets/img/childish gambino.jpg\" alt=\"Person on a tour\" class=\"person__img\">\n                                </figure>\n                                <div class=\"person__caption\">\n                                    <div class=\"person__name\">Childish Gambino</div>\n                                    <div class=\"person__rate\">4.1</div>\n\n                                </div>\n                            </a>\n                            <button class=\"btn-follow\">follow</button>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"activity-log\">\n                    <h2 class=\"heading-primary--aside\">activity log</h2>\n                    <div class=\"activity-log__logs\">\n                        <div class=\"activity-log__event\">\n                            <strong>Nader Yasser</strong> rated your post\n                        </div>\n                        <div class=\"activity-log__event\">\n                            <strong>Yehia Deraz</strong> rated your post\n                        </div>\n                        <div class=\"activity-log__event\">\n                            <strong>Yousif Hmada</strong> followed\n                            <strong>Waleed Emad</strong>\n                        </div>\n                        <div class=\"activity-log__event\">\n                            <strong>Nabil negm</strong> followed\n                            <strong>Halsey</strong>\n                        </div>\n                        <div class=\"activity-log__event\">\n                            <strong>Nader Yasser</strong> rated\n                            <strong>Halsey</strong>'s post\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"links\">\n                    <a href=\"#\" class=\"link\">Home</a>\n                    <a href=\"#\" class=\"link\">logout</a>\n                </div>\n"

/***/ }),

/***/ "./src/app/content/aside/aside.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AsideComponent = /** @class */ (function () {
    function AsideComponent() {
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    AsideComponent = __decorate([
        core_1.Component({
            selector: 'app-aside',
            template: __webpack_require__("./src/app/content/aside/aside.component.html"),
            styles: [__webpack_require__("./src/app/content/aside/aside.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AsideComponent);
    return AsideComponent;
}());
exports.AsideComponent = AsideComponent;


/***/ }),

/***/ "./src/app/content/connections/connections.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/connections/connections.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"connections\">\n     <div class=\"connection\">\n                    <a href=\"#\" class=\"connection__wraper\">\n\n                        <figure class=\"connection__shape\">\n                            <img src=\"img/lorde.jpg\" alt=\"Person on a tour\" class=\"connection__img\">\n                        </figure>\n                        <div class=\"connection__caption\">\n                            <div class=\"connection__name\">Lorde</div>\n                            <div class=\"connection__rate\">4.3</div>\n\n                        </div>\n                    </a>\n                    <button class=\"btn-follow\">view profile</button>\n                    \n                   </div>\n                   <div class=\"connection\">\n                    <a href=\"#\" class=\"connection__wraper\">\n\n                        <figure class=\"connection__shape\">\n                            <img src=\"img/lorde.jpg\" alt=\"Person on a tour\" class=\"connection__img\">\n                        </figure>\n                        <div class=\"connection__caption\">\n                            <div class=\"connection__name\">Lorde</div>\n                            <div class=\"connection__rate\">4.3</div>\n\n                        </div>\n                    </a>\n                    <button class=\"btn-follow\">view profile</button>\n                    \n                   </div>\n                   <div class=\"connection\">\n                    <a href=\"#\" class=\"connection__wraper\">\n\n                        <figure class=\"connection__shape\">\n                            <img src=\"img/lorde.jpg\" alt=\"Person on a tour\" class=\"connection__img\">\n                        </figure>\n                        <div class=\"connection__caption\">\n                            <div class=\"connection__name\">Lorde</div>\n                            <div class=\"connection__rate\">4.3</div>\n\n                        </div>\n                    </a>\n                    <button class=\"btn-follow\">view profile</button>\n                    \n                   </div>\n                   <div class=\"connection\">\n                    <a href=\"#\" class=\"connection__wraper\">\n\n                        <figure class=\"connection__shape\">\n                            <img src=\"img/lorde.jpg\" alt=\"Person on a tour\" class=\"connection__img\">\n                        </figure>\n                        <div class=\"connection__caption\">\n                            <div class=\"connection__name\">Lorde</div>\n                            <div class=\"connection__rate\">4.3</div>\n\n                        </div>\n                    </a>\n                    <button class=\"btn-follow\">view profile</button>\n                    \n                   </div>\n                   <div class=\"connection\">\n                    <a href=\"#\" class=\"connection__wraper\">\n\n                        <figure class=\"connection__shape\">\n                            <img src=\"img/lorde.jpg\" alt=\"Person on a tour\" class=\"connection__img\">\n                        </figure>\n                        <div class=\"connection__caption\">\n                            <div class=\"connection__name\">Lorde</div>\n                            <div class=\"connection__rate\">4.3</div>\n\n                        </div>\n                    </a>\n                    <button class=\"btn-follow\">view profile</button>\n                    \n                   </div>\n                \n\n</div>                \n                  "

/***/ }),

/***/ "./src/app/content/connections/connections.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ConnectionsComponent = /** @class */ (function () {
    function ConnectionsComponent() {
    }
    ConnectionsComponent.prototype.ngOnInit = function () {
    };
    ConnectionsComponent = __decorate([
        core_1.Component({
            selector: 'app-connections',
            template: __webpack_require__("./src/app/content/connections/connections.component.html"),
            styles: [__webpack_require__("./src/app/content/connections/connections.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnectionsComponent);
    return ConnectionsComponent;
}());
exports.ConnectionsComponent = ConnectionsComponent;


/***/ }),

/***/ "./src/app/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside class=\"content__aside\"></app-aside>\n\n\n    <div class=\"content__area\">\n                <div class=\"navigation\">\n                    <ul class=\"navigation__nav\">\n                        <li routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n                            <a routerLink=\"/\" class=\"link\">activity</a>\n                        </li>\n                        <li routerLinkActive=\"active\">\n                            <a routerLink=\"/connections\" class=\"link\">followers</a>\n                        </li>\n                        <li routerLinkActive=\"active\">\n                            <a routerLink=\"/connections\" class=\"link\">following</a>\n                        </li>\n                    </ul>\n                </div>\n\n\n\n            <router-outlet></router-outlet>\n\n\n                </div>\n\n\n            "

/***/ }),

/***/ "./src/app/content/content.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'app-content',
            template: __webpack_require__("./src/app/content/content.component.html"),
            styles: [__webpack_require__("./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;


/***/ }),

/***/ "./src/app/content/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <ul class=\"navigation__nav\">\n      <li>\n          <a href=\"#\" class=\"link active\">activity</a>\n      </li>\n      <li>\n          <a href=\"#\" class=\"link\">connections</a>\n      </li>\n      <li>\n          <a href=\"#\" class=\"link\">about</a>\n      </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/content/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/content/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/content/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/app/content/posts/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/posts/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"posts__post\">\n                        <a href=\"#\">\n                            <div class=\"posts__post-head\">\n                                <figure class=\"post-head__shape\">\n                                    <img src=\"assets/img/childish gambino.jpg\" alt=\"Person on a tour\" class=\"post-head__img\">\n                                </figure>\n                                <div class=\"post-head__caption\">\n                                    <div class=\"post-head__name\">Childish Gambino</div>\n                                </div>\n                            </div>\n                        </a>\n                       \n                            <div class=\"posts__post-body\">\n                                <p>\n                                        We just wanna party\n                                        Party just for you\n                                        We just want the money\n                                        Money just for you\n                                        I know you wanna party\n                                        Party just for me\n                                </p>\n                            </div>\n                            <div class=\"posts__post-rate\"></div>\n                            <div class=\"posts__post-comments\">\n                                    <form action=\"\" class=\"comments__add\">\n                                            <input type=\"text\" class=\"comments__add__input\" placeholder=\"write something\">\n                                            <button type=\"submit\" class=\"btn-post\">comment</button>\n                                    </form>\n                                <h2 class=\"comments-head\">Comments</h2>\n                                <div class=\"post__comment\">\n                                    <a href=\"#\" class=\"comment-name\">Lorde</a>\n                                    <p class=\"comment-body\">get some money , black man dignissimos possimus culpa non consequatur, quod voluptatibus facere ipsam deserunt. Cumque officia maiores omnis deleniti.</p>\n                                </div>\n                                <div class=\"post__comment\">\n                                        <a href=\"#\" class=\"comment-name\">Adele</a>\n                                        <p class=\"comment-body\">get some money , black man Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nostrum consequatur. Et a eum quibusdam, dignissimos possimus culpa non consequatur, quod voluptatibus facere ipsam deserunt. Cumque officia maiores omnis deleniti.</p>\n                                    </div>\n                            </div>\n                        </div>\n                       "

/***/ }),

/***/ "./src/app/content/posts/post/post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            template: __webpack_require__("./src/app/content/posts/post/post.component.html"),
            styles: [__webpack_require__("./src/app/content/posts/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;


/***/ }),

/***/ "./src/app/content/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "     <div class=\"posts\">\n     \t            <div class=\"posts__add-post\">\n                        <form action=\"\" class=\"posts__add\">\n                            <input type=\"text\" class=\"posts__add__input\" placeholder=\"whats on tour mind...\">\n                            <button type=\"submit\" class=\"btn-post\">Post</button>\n                        </form>\n                    </div>\n                    <app-post></app-post>\n     \n\n\n     </div>\n        \n"

/***/ }),

/***/ "./src/app/content/posts/posts.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/content/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/content/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\r\n  width: 100%;\r\n  height: 25vh;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  padding: 2rem;\r\n}\r\n\r\n.header .user {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-negative: 1;\r\n      flex-shrink: 1;\r\n  width: 80%;\r\n}\r\n\r\n.header .user__shape {\r\n  width: 12rem;\r\n  height: 12rem;\r\n  background-color: transparent;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n  border: 2px solid #4e4450;\r\n}\r\n\r\n@supports ((-webkit-clip-path: polygon(0 0)) or (clip-path: polygon(0 0))) or (-webkit-clip-path: polygon(0 0)) {\r\n  .header .user__shape {\r\n    -webkit-clip-path: circle(50% at 50% 50%);\r\n    clip-path: circle(50% at 50% 50%);\r\n    shape-outside: circle(50% at 50% 50%);\r\n    border-radius: none;\r\n  }\r\n}\r\n\r\n.header .user__img {\r\n  width: 100%;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-transition: all .5s;\r\n  transition: all .5s;\r\n}\r\n\r\n.header .user__caption {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.header .user__name {\r\n  color: #4e4450;\r\n  font-size: 4rem;\r\n}\r\n\r\n.header .user__rate {\r\n  color: #4e4450;\r\n  font-size: 4rem;\r\n}\r\n\r\n.header .search {\r\n  -webkit-box-ordinal-group: 2;\r\n      -ms-flex-order: 1;\r\n          order: 1;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0;\r\n          flex: 0 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  height: 3rem;\r\n  width: 22rem;\r\n  padding: 0;\r\n  margin-top: 2rem;\r\n  border: 1px solid #746566a8;\r\n  position: fixed;\r\n  top: 2rem;\r\n  right: 5rem;\r\n}\r\n\r\n.header .search__input {\r\n  font-size: 1.5rem;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  padding: .5rem .2rem;\r\n  border: none;\r\n  width: 90%;\r\n  -webkit-transition: all .3s;\r\n  transition: all .3s;\r\n  background-color: transparent;\r\n}\r\n\r\n.header .search__input:focus {\r\n  outline: none;\r\n}\r\n\r\n.header .search__button {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.header .search__icon {\r\n  width: 1.5rem;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "     <form action=\"#\" class=\"search\">\n                <input type=\"text\" class=\"search__input\" placeholder=\"Search\">\n                <button class=\"search__button\">\n                    <img src=\"assets/img/search.svg\" alt=\"\" class=\"search__icon\">\n                </button>\n            </form>\n     <app-user class=\"user\"></app-user>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/header/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"user\">\n\t                <figure class=\"user__shape\">\n\t                    <img src=\"assets/img/lana.jpg\" alt=\"Person on a tour\" class=\"user__img\">\n\t                </figure>\n\t                <div class=\"user__caption\">\n\t                    <div class=\"user__name\">Lana Del Rey</div>\n\t                    <div class=\"user__rate\">4.8</div>\n\n\t                </div>\n</div>"

/***/ }),

/***/ "./src/app/header/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("./src/app/header/user/user.component.html"),
            styles: [__webpack_require__("./src/app/header/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-home\">\n\n        <div class=\"content\">\n            <div class=\"content__aside\">\n                <div class=\"search\">\n                    <input type=\"text\" class=\"search__input\" placeholder=\"Search\">\n                    <button class=\"search__button\">\n                        <img src=\"assets/img/search.svg\" alt=\"\" class=\"search__icon\">\n                    </button>\n                </div>\n                <div class=\"suggested-connections\">\n                    <h2 class=\"heading-primary--aside\">suggested connections</h2>\n                    <div class=\"s-connections\">\n                        <div class=\"person\" *ngFor=\"let one of suggestedFriends\">\n                            <a  class=\"person__wraper\">\n\n                                <div class=\"person__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[one.name.charCodeAt(0)% 128]}\">\n                                    <span class=\"caption-letter\">{{one.name.slice(0,1)}}</span>\n                                </div>\n                                <div class=\"person__caption\">\n                                    <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':one._id}\" class=\"person__name\">{{one.name}}</a>\n\n                                </div>\n                            </a>\n                            <button (click)=\"follow(one._id)\" class=\"btn-follow\">follow</button>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"activity-log\">\n                        <h2 class=\"heading-primary--aside\">activity log</h2>\n                        <div class=\"activity-log__logs\">\n                            <div class=\"activity-log__event\" *ngFor=\"let msg of activityLog\">\n                                <span  class=\"log\">{{msg}}</span>\n                            </div>\n                        </div>\n                    </div>\n                <div class=\"links\">\n                    <a routerLink=\"/profile\" class=\"link\">profile</a>\n                    <a routerLink=\"/home\" class=\"link\">home</a>\n                    <a (click)=\"logout()\" class=\"link\">logout</a>\n                </div>\n            </div>\n\n\n            <div class=\"content__area\">\n\n\n                \n                <div class=\"posts\">\n                        <div class=\"posts__add-post\" *ngIf=\"status == 'owner'\">\n                            <form action=\"\" class=\"posts__add\">\n                                <input type=\"text\" class=\"posts__add__input\" placeholder=\"whats on tour mind...\" #in>\n                                <button (click)=\"addPost(in.value);in.value = '';\" type=\"submit\" class=\"btn-post\">Post</button>\n                            </form>\n                        </div>\n\n\n                        <div class=\"posts__post\" *ngFor=\"let post of posts;let i of index\">\n                                    <div class=\"post-shared\" *ngIf=\"post.shared\">\n                                        <!-- <img src=\"/assets/img/share-symbol.svg\" class=\"share-icon\" > -->\n                                        <span class=\"shared\"> > from <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':post.results.user_id}\" class=\"log\">{{post.results.name}}</a></span>\n                                    </div>\n                                        <div class=\"posts__post-head\">\n                                    <a >\n                                            <div class=\"post-head__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[post.name.charCodeAt(0)% 128]}\">\n                    <span class=\"caption-letter\">{{post.name.slice(0,1)}}</span>\n                                            </div>\n                                            <div class=\"post-head__caption\">\n                                                <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':post.user_id}\" class=\"post-head__name\">{{post.name}}</a>\n                                                <span class=\"date\">{{post.date | date}}</span>\n                                            </div>\n                                        </a>\n                                        <button *ngIf=\"compare(post.user_id)\" (click)=\"removePost(post._id)\" class=\"btn-remove\"><img  class=\"remove-icon\" src=\"/assets/img/delete-button.svg\" ></button>\n                                        \n                                    </div>\n            \n                                    <div class=\"posts__post-body\">\n                                        <p>\n                                            {{post.body}}\n                                        </p>\n                                    </div>\n                                    <div class=\"posts__post-options\">\n                                        <div class=\"post-rate\"></div>\n                                        <button *ngIf=\"!checkLike(post.likes)\" (click)=\"likePost(post._id)\" class=\"btn-remove\">Like</button>\n                                        <button *ngIf=\"checkLike(post.likes)\" (click)=\"unlikePost(post._id)\" class=\"btn-remove\">unlike</button>\n                                        <a (click)=\"showPopup(post.likes)\" class=\"count link\">({{post.likes.length}})</a>\n                                        <button (click)=\"sharePost(post._id)\" class=\"btn-remove\">Share </button>\n                                        <a (click)=\"showPopup(post.shares)\" class=\"count link\">({{post.shares.length}})</a>\n                                        \n                                    </div>\n                                    <div class=\"posts__post-comments\">\n            \n                                        <div class=\"comments-head\">Comments</div>\n                                        <div class=\"post__comment\" *ngFor=\"let comment of post.comments\">\n                                           <div class=\"wraper\">\n                                               <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':comment.user_id}\" class=\"comment-name\">{{comment.name}}</a>\n                                               <span class=\"date\">{{comment.date | date}}</span>\n                                           </div>\n                                            \n                                            <p class=\"comment-body\">{{comment.body}}</p>\n                                        <button *ngIf=\"compare(comment.user_id)\" (click)=\"removeComment(comment._id)\" class=\"btn-remove\"><img  class=\"remove-icon\" src=\"/assets/img/delete-button.svg\" ></button>\n                                               \n                                        </div>\n                                        <form action=\"\" class=\"comments__add\">\n                                            <input type=\"text\" class=\"comments__add__input\" placeholder=\"write something\" #in>\n                                            <button (click)=\"addComment(post._id, in.value);in.value = '';\" type=\"submit\" class=\"btn-post\">comment</button>\n                                        </form>\n                                    </div>\n                                </div>   \n    \n                    </div>\n\n\n            </div>\n\n\n        </div>\n\n    </section>\n\n    \n        <div class=\"popup\" id=\"popup\" [ngStyle]=\"{'opacity': popup ? 1 : 0,'display': popup ? 'block' : 'none'}\">\n            <div class=\"popup__content\">\n                    <button (click)=\"hidePopup()\" class=\"btn-remove\"><img  class=\"remove-icon\" src=\"assets/img/delete-button.svg\" ></button>\n                    <div class=\"commenters\">\n                            <div class=\"person\" *ngFor=\"let person of popupArr\">\n                                <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':person.user_id}\" class=\"person__wraper\">\n           \n\n                                <div class=\"connection__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[person.name.charCodeAt(0)% 128]}\">\n                                    <span class=\"caption-letter\">{{person.name.slice(0,1)}}</span>\n\n                                </div>\n\n                                    <div class=\"person__caption\">\n                                        <div class=\"person__name\">{{person.name}}</div>\n                                       \n    \n                                    </div>\n                                </a>\n                                <button class=\"btn-follow\">view profile</button>\n                                \n                            </div>\n                    </div>                \n            </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService) {
        this.appService = appService;
        this.id = '';
        this.name = '';
        this.posts = [];
        this.activityLog = [];
        this.popup = false;
        this.popupArr = [];
        this.indexcolors = [
            "#000000", "#FFFF00", "#1CE6FF", "#FF34FF", "#FF4A46", "#008941", "#006FA6", "#A30059",
            "#FFDBE5", "#7A4900", "#0000A6", "#63FFAC", "#B79762", "#004D43", "#8FB0FF", "#997D87",
            "#5A0007", "#809693", "#FEFFE6", "#1B4400", "#4FC601", "#3B5DFF", "#4A3B53", "#FF2F80",
            "#61615A", "#BA0900", "#6B7900", "#00C2A0", "#FFAA92", "#FF90C9", "#B903AA", "#D16100",
            "#DDEFFF", "#000035", "#7B4F4B", "#A1C299", "#300018", "#0AA6D8", "#013349", "#00846F",
            "#372101", "#FFB500", "#C2FFED", "#A079BF", "#CC0744", "#C0B9B2", "#C2FF99", "#001E09",
            "#00489C", "#6F0062", "#0CBD66", "#EEC3FF", "#456D75", "#B77B68", "#7A87A1", "#788D66",
            "#885578", "#FAD09F", "#FF8A9A", "#D157A0", "#BEC459", "#456648", "#0086ED", "#886F4C",
            "#34362D", "#B4A8BD", "#00A6AA", "#452C2C", "#636375", "#A3C8C9", "#FF913F", "#938A81",
            "#575329", "#00FECF", "#B05B6F", "#8CD0FF", "#3B9700", "#04F757", "#C8A1A1", "#1E6E00",
            "#7900D7", "#A77500", "#6367A9", "#A05837", "#6B002C", "#772600", "#D790FF", "#9B9700",
            "#549E79", "#FFF69F", "#201625", "#72418F", "#BC23FF", "#99ADC0", "#3A2465", "#922329",
            "#5B4534", "#FDE8DC", "#404E55", "#0089A3", "#CB7E98", "#A4E804", "#324E72", "#6A3A4C",
            "#83AB58", "#001C1E", "#D1F7CE", "#004B28", "#C8D0F6", "#A3A489", "#806C66", "#222800",
            "#BF5650", "#E83000", "#66796D", "#DA007C", "#FF1A59", "#8ADBB4", "#1E0200", "#5B4E51",
            "#C895C5", "#320033", "#FF6832", "#66E1D3", "#CFCDAC", "#D0AC94", "#7ED379", "#012C58"
        ];
    }
    HomeComponent.prototype.showPopup = function (arr) {
        if (arr.length > 0) {
            this.popupArr = arr;
            this.popup = true;
        }
    };
    HomeComponent.prototype.hidePopup = function () {
        this.popup = false;
    };
    HomeComponent.prototype.updateSuggestions = function () {
        this.suggestedFriends = this.appService.suggestedFriends;
    };
    HomeComponent.prototype.updateView = function () {
        var _this = this;
        this.appService.getHome().subscribe(function (response) {
            _this.popup = false;
            _this.name = response.name;
            _this.id = _this.appService.id;
            _this.posts = response.posts;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSuggestions();
        this.appService.suggestedFriendsSubject.subscribe(function () {
            _this.updateSuggestions();
        });
        this.LogSubscription = this.appService.activityLogSubject.subscribe(function () {
            _this.activityLog = _this.appService.activityLog;
        });
        this.updateView();
    };
    HomeComponent.prototype.removePost = function (id) {
        var _this = this;
        this.appService.removePost(id).subscribe(function () { return _this.updateView(); });
    };
    HomeComponent.prototype.sharePost = function (id) {
        var _this = this;
        this.appService.sharePost(id).subscribe(function () { return _this.updateView(); });
    };
    HomeComponent.prototype.addComment = function (id, body) {
        var _this = this;
        this.appService.addComment(id, body).subscribe(function () { return _this.updateView(); });
    };
    HomeComponent.prototype.addPost = function (body) {
        var _this = this;
        this.appService.addPost(body).subscribe(function () { return _this.updateView(); });
    };
    HomeComponent.prototype.removeComment = function (id) {
        var _this = this;
        this.appService.removeComment(id).subscribe(function () { return _this.updateView(); });
    };
    HomeComponent.prototype.checkLike = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (this.compare(arr[i].user_id))
                return true;
        }
        return false;
    };
    HomeComponent.prototype.likePost = function (id) {
        var _this = this;
        this.appService.likePost(id).subscribe(function () { return _this.updateView(); });
    };
    HomeComponent.prototype.unlikePost = function (id) {
        var _this = this;
        this.appService.unlikePost(id).subscribe(function () { return _this.updateView(); });
    };
    HomeComponent.prototype.follow = function (id) {
        var _this = this;
        this.appService.follow(id).subscribe(function () { return _this.updateSuggestions(); });
    };
    HomeComponent.prototype.compare = function (id) {
        if (id == this.appService.id) {
            return true;
        }
        return false;
    };
    HomeComponent.prototype.logout = function () {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        window.location.href = '/';
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.LogSubscription.unsubscribe();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".form {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  width: 60rem;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 3rem;\r\n  border-radius: 3px;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n}\r\n\r\n.form__group:not(:last-child) {\r\n  margin-bottom: .2rem;\r\n}\r\n\r\n.form__input {\r\n  font-size: 1.5rem;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  padding: 1.5rem 2rem;\r\n  border-radius: 2px;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border: none;\r\n  border-bottom: 3px solid transparent;\r\n  width: 80%;\r\n  display: block;\r\n  margin: 0 auto;\r\n  -webkit-transition: all .3s;\r\n  transition: all .3s;\r\n}\r\n\r\n.form__input:focus {\r\n  outline: none;\r\n  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\r\n  border-bottom: 3px solid #2af596;\r\n}\r\n\r\n.form__input:focus:invalid {\r\n  border-bottom: 3px solid #4e4450;\r\n}\r\n\r\n.form__input::-webkit-input-placeholder {\r\n  color: #999;\r\n}\r\n\r\n.form__label {\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  margin-top: .4rem;\r\n  margin-left: 7rem;\r\n  display: block;\r\n  -webkit-transition: all .3s;\r\n  transition: all .3s;\r\n}\r\n\r\n.form__input:placeholder-shown+.form__label {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  -webkit-transform: translateY(-4rem);\r\n          transform: translateY(-4rem);\r\n}\r\n\r\n.form__radio__group {\r\n  width: 49%;\r\n  display: inline-block;\r\n}\r\n\r\n.form__radio-input {\r\n  display: none;\r\n}\r\n\r\n.form__radio-label {\r\n  font-size: 1.6rem;\r\n  cursor: pointer;\r\n  position: relative;\r\n  padding-left: 4.5rem;\r\n}\r\n\r\n.form__radio-button {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  border: 3px solid #d38baf;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 0;\r\n  top: -.4rem;\r\n}\r\n\r\n.form__radio-button::after {\r\n  content: \"\";\r\n  display: block;\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  background-color: #d38baf;\r\n  opacity: 0;\r\n  -webkit-transition: opacity .2s;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.form__radio-input:checked+.form__radio-label .form__radio-button::after {\r\n  opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-signup\">\n        <div class=\"bg-video\">\n            <video class=\"bg-video__content\" autoplay muted loop>\n                <source src=\"assets/img/Triple_Date.webm\" type=\"video/mp4\">\n                <source src=\"assets/img/Triple_Date.mp4\" type=\"video/mp4\">\n            </video>\n        </div>\n      \n        <form class=\"form\" (ngSubmit)=\"submit(f)\" #f=\"ngForm\">\n            <h3 class=\"u-margin-bottom-small heading-primary--sub u-center-text\">Welcome back</h3>\n            <div class=\"form__group\">\n                <input type=\"text\" class=\"form__input\" placeholder=\"username\" id=\"f-name\" required autocomplete=\"false\"\n                required\n                ngModel\n                name=\"username\">\n                <label for=\"f-name\" class=\"form__label\">username</label>\n    \n            </div>\n          \n            <div class=\"form__group\">\n                <input type=\"password\" class=\"form__input\" placeholder=\"password\" id=\"password\" required autocomplete=\"false\"\n                required\n                ngModel\n                name=\"password\">\n                <label for=\"password\" class=\"form__label\">password</label>\n            </div>\n          \n            <button type=\"submit\" class=\"btn btn--submit\"\n             [disabled]=\"!f.valid\">Login</button>\n            <!-- <p><a href=\"\">creat new account</a></p> -->\n        </form>\n    </section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (form) {
        var _this = this;
        this.appService.login(form.value.username, form.value.password).subscribe(function (r) {
            _this.appService.setToken(r.token, r._id);
            _this.router.navigate(['/profile'], { queryParams: { id: _this.appService.id } });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-profile\">\n        <div class=\"header\">\n\n            <a  class=\"user\">\n                <div class=\"user__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[name.charCodeAt(0)% 128]}\">\n                    <span class=\"caption-letter1\">{{name.slice(0,1)}}</span>\n                </div>\n                <div class=\"user__caption\">\n                    <div class=\"user__name\">{{name}}</div>\n              <button *ngIf=\"status == 'follower'  || status == 'stranger'\" (click)=\"follow(id)\" class=\"btn-follow2\">follow</button>\n              <button *ngIf=\"status == 'following' || status == 'both'\" (click)=\"unfollow(id)\" class=\"btn-follow2\">unfollow</button>      \n                </div>\n              \n\n            </a>\n\n\n        </div>\n\n        <div class=\"content\">\n                <div class=\"content__aside\">\n                        <div class=\"search\">\n                                <input type=\"text\" class=\"search__input\" placeholder=\"Search\">\n                                <button class=\"search__button\">\n                                    <img src=\"assets/img/search.svg\" alt=\"\" class=\"search__icon\">\n                                </button>\n                            </div>\n                    \n                \n                <div class=\"suggested-connections\">\n                    <h2 class=\"heading-primary--aside\">suggested connections</h2>\n                    <div class=\"s-connections\">\n                        <div class=\"person\" *ngFor=\"let one of suggestedFriends\">\n                            <a  class=\"person__wraper\">\n\n                                <div class=\"person__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[one.name.charCodeAt(0)% 128]}\">\n                                    <span class=\"caption-letter\">{{one.name.slice(0,1)}}</span>\n                                </div>\n                                <div class=\"person__caption\">\n                                    <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':one._id}\" class=\"person__name\">{{one.name}}</a>\n\n                                </div>\n                            </a>\n                            <button (click)=\"follow(one._id)\" class=\"btn-follow\">follow</button>\n\n                        </div>\n                    </div>\n                </div>\n                    <div class=\"activity-log\">\n                        <h2 class=\"heading-primary--aside\">activity log</h2>\n                        <div class=\"activity-log__logs\">\n                            <div class=\"activity-log__event\" *ngFor=\"let msg of activityLog\">\n                                <span  class=\"log\">{{msg}}</span>\n                            </div>\n                        </div>\n                    </div>\n    \n                    <div class=\"links\">\n                        <a routerLink=\"/profile\" class=\"link\">profile</a>\n                        <a routerLink=\"/home\" class=\"link\">home</a>\n                        <a (click)=\"logout()\" class=\"link\">logout</a>\n                    </div>\n                </div>\n\n            <div class=\"content__area\">\n                <div class=\"navigation\">\n                    <ul class=\"navigation__nav\">\n                        <li>\n                            <a (click)=\"this.section = 'activity'\" [ngClass]=\"{'active': this.section == 'activity'}\" class=\"link\">activity</a>\n                        </li>\n                        <li>\n                            <a (click)=\"this.section = 'followers'\" [ngClass]=\"{'active': this.section == 'followers'}\" class=\"link\">followers ({{followers.length}})</a>\n                        </li>\n                        <li>\n                            <a (click)=\"this.section = 'following'\" [ngClass]=\"{'active': this.section == 'following'}\" class=\"link\">following ({{following.length}})</a>\n                        </li>\n                    </ul>\n                </div>\n\n                <div class=\"connections\" *ngIf=\"this.section == 'followers'\">\n                   <div class=\"connection\" *ngFor=\"let follower of followers\">\n                    <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':follower._id}\" class=\"connection__wraper\">\n\n                        <div class=\"connection__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[follower.name.charCodeAt(0)% 128]}\">\n                    <span class=\"caption-letter\">{{follower.name.slice(0,1)}}</span>                            \n                        </div>\n                        <div class=\"connection__caption\">\n                            <div class=\"connection__name\">{{follower.name}}</div>\n                        </div>\n                    </a>\n                    <a class=\"btn-follow\" [routerLink]=\"['/profile']\" [queryParams]=\"{'id':follower._id}\">view profile</a>\n                    \n                   </div>\n                </div>\n\n                <div class=\"connections\" *ngIf=\"this.section == 'following'\">\n                   <div class=\"connection\" *ngFor=\"let follower of following\">\n                    <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':follower._id}\" class=\"connection__wraper\">\n\n                        <div class=\"connection__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[follower.name.charCodeAt(0)% 128]}\">\n                    <span class=\"caption-letter\">{{follower.name.slice(0,1)}}</span>\n\n                        </div>\n                        <div class=\"connection__caption\">\n                            <div class=\"connection__name\">{{follower.name}}</div>\n                        </div>\n                    </a>\n                    <a class=\"btn-follow\" [routerLink]=\"['/profile']\" [queryParams]=\"{'id':follower._id}\">view profile</a>\n                    \n                   </div>\n                </div>\n\n                <div class=\"posts\" *ngIf=\"this.section == 'activity'\">\n                        <div class=\"posts__add-post\" *ngIf=\"status == 'owner'\">\n                            <form action=\"\" class=\"posts__add\">\n                                <input type=\"text\" class=\"posts__add__input\" placeholder=\"whats on tour mind...\" #in>\n                                <button (click)=\"addPost(in.value);in.value = '';\" type=\"submit\" class=\"btn-post\">Post</button>\n                            </form>\n                        </div>\n\n\n                        <div class=\"posts__post\" *ngFor=\"let post of posts;let i of index\">\n                                    <div class=\"post-shared\" *ngIf=\"post.shared\">\n                                        <!-- <img src=\"/assets/img/share-symbol.svg\" class=\"share-icon\" > -->\n                                        <span class=\"shared\"> > from <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':post.results.user_id}\" class=\"log\">{{post.results.name}}</a></span>\n                                    </div>\n                                        <div class=\"posts__post-head\">\n                                    <a >\n                                            <div class=\"post-head__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[post.name.charCodeAt(0)% 128]}\">\n                    <span class=\"caption-letter\">{{post.name.slice(0,1)}}</span>\n                                            </div>\n                                            <div class=\"post-head__caption\">\n                                                <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':post.user_id}\" class=\"post-head__name\">{{post.name}}</a>\n                                                <span class=\"date\">{{post.date | date}}</span>\n                                            </div>\n                                        </a>\n                                        <button *ngIf=\"compare(post.user_id)\" (click)=\"removePost(post._id)\" class=\"btn-remove\"><img  class=\"remove-icon\" src=\"/assets/img/delete-button.svg\" ></button>\n                                        \n                                    </div>\n            \n                                    <div class=\"posts__post-body\">\n                                        <p>\n                                            {{post.body}}\n                                        </p>\n                                    </div>\n                                    <div class=\"posts__post-options\">\n                                        <div class=\"post-rate\"></div>\n                                        <button *ngIf=\"!checkLike(post.likes)\" (click)=\"likePost(post._id)\" class=\"btn-remove\">Like</button>\n                                        <button *ngIf=\"checkLike(post.likes)\" (click)=\"unlikePost(post._id)\" class=\"btn-remove\">unlike</button>\n                                        <a (click)=\"showPopup(post.likes)\" class=\"count link\">({{post.likes.length}})</a>\n                                        <button (click)=\"sharePost(post._id)\" class=\"btn-remove\">Share </button>\n                                        <a (click)=\"showPopup(post.shares)\" class=\"count link\">({{post.shares.length}})</a>\n                                        \n                                    </div>\n                                    <div class=\"posts__post-comments\">\n            \n                                        <div class=\"comments-head\">Comments</div>\n                                        <div class=\"post__comment\" *ngFor=\"let comment of post.comments\">\n                                           <div class=\"wraper\">\n                                               <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':comment.user_id}\" class=\"comment-name\">{{comment.name}}</a>\n                                               <span class=\"date\">{{comment.date | date}}</span>\n                                           </div>\n                                            \n                                            <p class=\"comment-body\">{{comment.body}}</p>\n                                        <button *ngIf=\"compare(comment.user_id)\" (click)=\"removeComment(comment._id)\" class=\"btn-remove\"><img  class=\"remove-icon\" src=\"/assets/img/delete-button.svg\" ></button>\n                                               \n                                        </div>\n                                        <form action=\"\" class=\"comments__add\">\n                                            <input type=\"text\" class=\"comments__add__input\" placeholder=\"write something\" #in>\n                                            <button (click)=\"addComment(post._id, in.value);in.value = '';\" type=\"submit\" class=\"btn-post\">comment</button>\n                                        </form>\n                                    </div>\n                                </div>   \n    \n                    </div>\n\n                </div>\n\n\n            </div>\n\n    </section>\n\n        <div class=\"popup\" id=\"popup\" [ngStyle]=\"{'opacity': popup ? 1 : 0,'display': popup ? 'block' : 'none'}\">\n            <div class=\"popup__content\">\n                    <button (click)=\"hidePopup()\" class=\"btn-remove\"><img  class=\"remove-icon\" src=\"assets/img/delete-button.svg\" ></button>\n                    <div class=\"commenters\">\n                            <div class=\"person\" *ngFor=\"let person of popupArr\">\n                                <a [routerLink]=\"['/profile']\" [queryParams]=\"{'id':person.user_id}\" class=\"person__wraper\">\n           \n\n                                <div class=\"person__shape\" [ngStyle]=\"{'backgroundColor': indexcolors[person.name.charCodeAt(0)% 128]}\">\n                                    <span class=\"caption-letter\">{{person.name.slice(0,1)}}</span>\n\n                                </div>\n\n                                    \n                                        <div class=\"person__name\">{{person.name}}</div>\n                                       \n    \n                                    \n                                </a>\n                                <button class=\"btn-follow\">view profile</button>\n                                \n                            </div>\n                    </div>                \n            </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, appService) {
        this.route = route;
        this.appService = appService;
        this.id = '';
        this.followers = [];
        this.following = [];
        this.name = '';
        this.status = '';
        this.section = 'activity';
        this.rate = 0.0;
        this.posts = [];
        this.activityLog = [];
        this.popup = false;
        this.popupArr = [];
        this.indexcolors = [
            "#000000", "#FFFF00", "#1CE6FF", "#FF34FF", "#FF4A46", "#008941", "#006FA6", "#A30059",
            "#FFDBE5", "#7A4900", "#0000A6", "#63FFAC", "#B79762", "#004D43", "#8FB0FF", "#997D87",
            "#5A0007", "#809693", "#FEFFE6", "#1B4400", "#4FC601", "#3B5DFF", "#4A3B53", "#FF2F80",
            "#61615A", "#BA0900", "#6B7900", "#00C2A0", "#FFAA92", "#FF90C9", "#B903AA", "#D16100",
            "#DDEFFF", "#000035", "#7B4F4B", "#A1C299", "#300018", "#0AA6D8", "#013349", "#00846F",
            "#372101", "#FFB500", "#C2FFED", "#A079BF", "#CC0744", "#C0B9B2", "#C2FF99", "#001E09",
            "#00489C", "#6F0062", "#0CBD66", "#EEC3FF", "#456D75", "#B77B68", "#7A87A1", "#788D66",
            "#885578", "#FAD09F", "#FF8A9A", "#D157A0", "#BEC459", "#456648", "#0086ED", "#886F4C",
            "#34362D", "#B4A8BD", "#00A6AA", "#452C2C", "#636375", "#A3C8C9", "#FF913F", "#938A81",
            "#575329", "#00FECF", "#B05B6F", "#8CD0FF", "#3B9700", "#04F757", "#C8A1A1", "#1E6E00",
            "#7900D7", "#A77500", "#6367A9", "#A05837", "#6B002C", "#772600", "#D790FF", "#9B9700",
            "#549E79", "#FFF69F", "#201625", "#72418F", "#BC23FF", "#99ADC0", "#3A2465", "#922329",
            "#5B4534", "#FDE8DC", "#404E55", "#0089A3", "#CB7E98", "#A4E804", "#324E72", "#6A3A4C",
            "#83AB58", "#001C1E", "#D1F7CE", "#004B28", "#C8D0F6", "#A3A489", "#806C66", "#222800",
            "#BF5650", "#E83000", "#66796D", "#DA007C", "#FF1A59", "#8ADBB4", "#1E0200", "#5B4E51",
            "#C895C5", "#320033", "#FF6832", "#66E1D3", "#CFCDAC", "#D0AC94", "#7ED379", "#012C58"
        ];
    }
    ProfileComponent.prototype.updateSuggestions = function () {
        this.updateView(this.id || this.route.snapshot.params.id);
        this.suggestedFriends = this.appService.suggestedFriends;
    };
    ProfileComponent.prototype.updateView = function (id) {
        var _this = this;
        this.appService.getProfile(id).subscribe(function (response) {
            _this.popup = false;
            _this.section = 'activity';
            _this.followers = response.followers;
            _this.following = response.following;
            _this.name = response.name;
            _this.status = response.status;
            _this.id = id;
            var i = 0;
            _this.posts = response.posts;
            _this.rate = response.posts.reduce(function (aggr, cur) {
                return aggr + cur.rates.reduce(function (aggr, cur) {
                    i++;
                    return aggr + cur.value;
                }, 0);
            }, 0) / i;
        });
    };
    ProfileComponent.prototype.showPopup = function (arr) {
        if (arr.length > 0) {
            this.popupArr = arr;
            this.popup = true;
        }
    };
    ProfileComponent.prototype.hidePopup = function () {
        this.popup = false;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSuggestions();
        this.appService.suggestedFriendsSubject.subscribe(function () {
            _this.updateSuggestions();
        });
        this.profileSubscription = this.route.queryParams.subscribe(function (params) {
            console.log("yes", params["id"]);
            _this.updateView(params["id"]);
        });
        this.LogSubscription = this.appService.activityLogSubject.subscribe(function () {
            _this.activityLog = _this.appService.activityLog;
        });
    };
    ProfileComponent.prototype.removePost = function (id) {
        var _this = this;
        this.appService.removePost(id).subscribe(function () { return _this.updateView(_this.id); });
    };
    ProfileComponent.prototype.sharePost = function (id) {
        var _this = this;
        this.appService.sharePost(id).subscribe(function () { return _this.updateView(_this.id); });
    };
    ProfileComponent.prototype.addComment = function (id, body) {
        var _this = this;
        this.appService.addComment(id, body).subscribe(function () { return _this.updateView(_this.id); });
    };
    ProfileComponent.prototype.likePost = function (id) {
        var _this = this;
        this.appService.likePost(id).subscribe(function () { return _this.updateView(_this.id); });
    };
    ProfileComponent.prototype.unlikePost = function (id) {
        var _this = this;
        this.appService.unlikePost(id).subscribe(function () { return _this.updateView(_this.id); });
    };
    ProfileComponent.prototype.addPost = function (body) {
        var _this = this;
        this.appService.addPost(body).subscribe(function () { return _this.updateView(_this.id); });
    };
    ProfileComponent.prototype.removeComment = function (id) {
        var _this = this;
        this.appService.removeComment(id).subscribe(function () { return _this.updateView(_this.id); });
    };
    ProfileComponent.prototype.follow = function (id) {
        var _this = this;
        this.appService.follow(id).subscribe(function () { return _this.updateSuggestions(); });
    };
    ProfileComponent.prototype.unfollow = function (id) {
        var _this = this;
        this.appService.unfollow(id).subscribe(function () { return _this.updateSuggestions(); });
    };
    ProfileComponent.prototype.checkLike = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (this.compare(arr[i].user_id))
                return true;
        }
        return false;
    };
    ProfileComponent.prototype.compare = function (id) {
        if (id == this.appService.id) {
            return true;
        }
        return false;
    };
    ProfileComponent.prototype.logout = function () {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        window.location.href = '/';
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.profileSubscription.unsubscribe();
        this.LogSubscription.unsubscribe();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, app_service_1.AppService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map