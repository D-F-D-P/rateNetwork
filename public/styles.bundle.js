webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20rem);\n            transform: translateX(-20rem); }\n  80% {\n    -webkit-transform: translateX(2rem);\n            transform: translateX(2rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20rem);\n            transform: translateX(-20rem); }\n  80% {\n    -webkit-transform: translateX(2rem);\n            transform: translateX(2rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n            transform: translateX(10rem); }\n  80% {\n    -webkit-transform: translateX(-1rem);\n            transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n            transform: translateX(10rem); }\n  80% {\n    -webkit-transform: translateX(-1rem);\n            transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n            transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n            transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@-webkit-keyframes moveInTop {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-5rem);\n            transform: translateY(-5rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n@keyframes moveInTop {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-5rem);\n            transform: translateY(-5rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative; }\n\n.notification {\n  position: fixed;\n  bottom: 2rem;\n  left: 1.5rem;\n  width: 24rem;\n  height: 7rem;\n  background-color: rgba(255, 255, 255, 0.8);\n  -webkit-box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  font-size: 1.3rem; }\n\nbody {\n  font-family: \"helvetica\", sans-serif;\n  font-weight: 400;\n  /*font-size: 16px;*/\n  line-height: 1.7;\n  color: #777; }\n\n.heading-primary--main {\n  display: block;\n  font-size: 4rem;\n  font-weight: 400;\n  letter-spacing: 3.5rem;\n  letter-spacing: 1.75rem;\n  -webkit-animation-name: moveInTop;\n          animation-name: moveInTop;\n  -webkit-animation-duration: .7s;\n          animation-duration: .7s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  text-transform: uppercase;\n  color: #4e4450;\n  /*\n        animation-delay: 3s;\n        animation-iteration-count: 3;\n        */ }\n\n.heading-primary--sub {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #4e4450; }\n\n.heading-primary--aside {\n  text-transform: uppercase;\n  color: #746566a8;\n  font-size: 1.6rem;\n  font-weight: 400; }\n\np {\n  font-size: 1.4rem;\n  margin-right: 5rem; }\n\np a {\n    text-decoration: none;\n    cursor: pointer;\n    font-weight: 700;\n    color: #4e4450; }\n\na {\n  text-decoration: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\na.link {\n  text-transform: uppercase;\n  color: #746566a8;\n  font-size: 1.5rem; }\n\na.log {\n  color: rgba(78, 68, 80, 0.7);\n  display: inline; }\n\n.active {\n  font-weight: 700;\n  color: #272327; }\n\n.comment-name {\n  color: #4e4450;\n  font-size: 1.5rem;\n  font-weight: 700; }\n\n.shared {\n  color: #746566a8;\n  font-size: 1.2rem;\n  font-weight: 700; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-margin-top-big {\n  margin-bottom: 8rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 4rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-bottom: 10rem !important; }\n\n.bg-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  opacity: .3;\n  overflow: hidden; }\n\n.bg-video__content {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.btn, .btn:link, .btn:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1.2rem 4rem;\n  display: inline-block;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n  position: relative;\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-align: center;\n  border: none;\n  cursor: pointer; }\n\n.btn:hover {\n  -webkit-transform: translateY(-0.3rem);\n          transform: translateY(-0.3rem);\n  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }\n\n.btn:active, .btn:focus {\n  outline: none;\n  -webkit-transform: translateY(-0.1rem);\n          transform: translateY(-0.1rem);\n  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }\n\n.btn--white {\n  background-color: #fff;\n  color: #777; }\n\n.btn--submit {\n  background-color: #d38baf;\n  color: #fff;\n  margin: 0 auto;\n  width: 80%;\n  letter-spacing: .3rem; }\n\n.btn-follow {\n  background-color: rgba(211, 139, 175, 0.2);\n  color: #746566a8;\n  border: none;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  padding: .4rem;\n  height: 2.5rem;\n  border-radius: 2px;\n  font-weight: 400;\n  cursor: pointer; }\n\n.btn-follow2 {\n  background-color: rgba(211, 139, 175, 0.2);\n  color: #746566a8;\n  border: none;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  padding: .5rem 1.2rem;\n  font-size: 1.6rem;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  border-radius: 2px;\n  font-weight: 400;\n  cursor: pointer; }\n\n.count {\n  color: #746566a8;\n  font-size: 1.2rem;\n  font-weight: 700; \nmargin-top: 2px;\n}\n\n.btn-remove {\n  background-color: transparent;\n  color: #746566a8;\n  border: none;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  padding: .4rem;\n  height: 2.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: 2px; }\n\n.btn-post {\n  background-color: rgba(211, 139, 175, 0.4);\n  color: #746566a8;\n  border: none;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  padding: .4rem .6rem;\n  height: 3rem;\n  font-weight: 400;\n  cursor: pointer;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  text-transform: uppercase; }\n\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #d38baf;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 0.1rem solid #d38baf;\n  padding: .3rem;\n  -webkit-transition: all .2s;\n  transition: all .2s; }\n\n.btn-text:hover {\n  background-color: #d38baf;\n  color: #fff;\n  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(-0.2rem);\n          transform: translateY(-0.2rem); }\n\n.btn-text:active {\n  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.btn--text, .btn--text:link, .btn--text:visited {\n  color: #d38baf;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 1px solid #d38baf;\n  padding: 3px;\n  font-size: 1.6rem;\n  border: none;\n  cursor: pointer; }\n\n.btn--text:hover {\n  background-color: #d38baf;\n  color: #fff;\n  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px); }\n\n.btn--text::active, .btn--textfocus {\n  -webkit-box-shadow: 0 .5rem 1rem;\n          box-shadow: 0 .5rem 1rem;\n  outline: none;\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.form {\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 60rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 3rem;\n  border-radius: 3px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\n.form__group:not(:last-child) {\n    margin-bottom: .2rem; }\n\n.form__input {\n    font-size: 1.5rem;\n    font-family: inherit;\n    color: inherit;\n    padding: 1.5rem 2rem;\n    border-radius: 2px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: none;\n    border-bottom: 3px solid transparent;\n    width: 80%;\n    display: block;\n    margin: 0 auto;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n\n.form__input:focus {\n      outline: none;\n      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n              box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n      border-bottom: 3px solid #2af596; }\n\n.form__input:focus:invalid {\n      border-bottom: 3px solid #4e4450; }\n\n.form__input::-webkit-input-placeholder {\n      color: #999; }\n\n.form__label {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin-top: .4rem;\n    margin-left: 7rem;\n    display: block;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n\n.form__input:placeholder-shown + .form__label {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translateY(-4rem);\n            transform: translateY(-4rem); }\n\n.form__radio__group {\n    width: 49%;\n    display: inline-block; }\n\n.form__radio-input {\n    display: none; }\n\n.form__radio-label {\n    font-size: 1.6rem;\n    cursor: pointer;\n    position: relative;\n    padding-left: 4.5rem; }\n\n.form__radio-button {\n    height: 3rem;\n    width: 3rem;\n    border: 3px solid #d38baf;\n    border-radius: 50%;\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: -.4rem; }\n\n.form__radio-button::after {\n      content: \"\";\n      display: block;\n      width: 1.3rem;\n      height: 1.3rem;\n      border-radius: 50%;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      background-color: #d38baf;\n      opacity: 0;\n      -webkit-transition: opacity .2s;\n      transition: opacity .2s; }\n\n.form__radio-input:checked + .form__radio-label .form__radio-button::after {\n    opacity: 1; }\n\n.search {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0;\n          flex: 0 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: 3rem;\n  width: 22rem;\n  padding: 0;\n  margin-top: 2rem;\n  border: 1px solid #746566a8;\n  position: fixed;\n  top: 2rem;\n  right: 5rem; }\n\n.search__input {\n    font-size: 1.5rem;\n    font-family: inherit;\n    color: inherit;\n    padding: .5rem .2rem;\n    border: none;\n    width: 90%;\n    -webkit-transition: all .3s;\n    transition: all .3s;\n    background-color: transparent; }\n\n.search__input:focus {\n      outline: none; }\n\n.search__button {\n    background-color: transparent;\n    border: none; }\n\n.search__icon {\n    width: 1.5rem; }\n\n.popup {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 9999;\n  -webkit-transition: all .3s;\n  transition: all .3s; \n  opacity: 0;\n  display: none;\n}\n\n@supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {\n    .popup {\n      -webkit-backdrop-filter: blur(10px);\n      backdrop-filter: blur(10px);\n      background-color: rgba(0, 0, 0, 0.3); } }\n\n.popup__content {\n    width: 40rem;\n    height: 50rem;\n    display: block;\n    margin: 2rem auto;\n    background-color: rgba(255, 255, 255, 0.8);\n    overflow-y: auto; }\n\n.popup__content .commenters {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      width: 60%;\n      margin-left: 7rem; }\n\n/*Basic Grid Styles*/\n\n.Grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.u-textCenter {\n  text-align: center; }\n\n.Grid-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n/* With gutters*/\n\n.Grid--gutters {\n  margin-left: -1em; }\n\n.Grid--gutters .Grid-cell {\n    padding-left: 1em; }\n\n.Grid--gutters .Grid--nested .Grid-cell:first-of-type .Demo {\n    margin-right: 1em; }\n\n/* Justify per row*/\n\n.Grid--right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.Grid--center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n/* Alignment per row */\n\n.Grid--top {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.Grid--bottom {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n\n.Grid--center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n/* Alignment per cell */\n\n.Grid-cell--top {\n  -ms-flex-item-align: start;\n      align-self: flex-start; }\n\n.Grid-cell--bottom {\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n\n.Grid-cell--center {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n/*===========================================*/\n\n/* Base classes for all media - Mobile first */\n\n.Grid--cols-2 > .Grid-cell {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; }\n\n.Grid--cols-3 > .Grid-cell {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; }\n\n.Grid--cols-4 > .Grid-cell {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; }\n\n.Grid--cols-6 > .Grid-cell {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 calc(50% - 1em);\n          flex: 0 0 calc(50% - 1em); }\n\n.Grid--cols-12 > .Grid-cell {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 calc(33.3333% - 1em);\n          flex: 0 0 calc(33.3333% - 1em); }\n\n.Grid--holly-grail .aside, .Grid--holly-grail .main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 100%;\n          flex: 1 100%; }\n\n/* One of -- columns*/\n\n.Grid--1of2 > .Grid-cell,\n.Grid--1of4 > .Grid-cell:first-of-type,\n.Grid--1of3 > .Grid-cell:first-of-type {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; }\n\n.Grid--1of6 > .Grid-cell:first-of-type {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n\n.Grid--fit > .Grid-cell {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.Grid--full > .Grid-cell {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%; }\n\n/* Tablet (medium) screens */\n\n@media (min-width: 30em) {\n  .Grid--cols-4 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 calc(50% - 1em);\n            flex: 0 0 calc(50% - 1em); }\n  .Grid--cols-6 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 calc(33.3333% - 1em);\n            flex: 0 0 calc(33.3333% - 1em); }\n  .Grid--cols-12 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 calc(16.6666% - 1em);\n            flex: 0 0 calc(16.6666% - 1em); }\n  .Grid--holly-grail .aside {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 calc(25% - 1em);\n            flex: 1 calc(25% - 1em); }\n  .Grid--1of2 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%; }\n  .Grid--1of6 > .Grid-cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%; }\n  .Grid--1of4 > .Grid-cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%; }\n  .Grid--1of3 > .Grid-cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%; } }\n\n/* Large screens */\n\n@media (min-width: 48em) {\n  .Grid--cols-2 > .Grid-cell,\n  .Grid--cols-3 > .Grid-cell,\n  .Grid--cols-4 > .Grid-cell,\n  .Grid--cols-6 > .Grid-cell,\n  .Grid--cols-12 > .Grid-cell {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .Grid--holly-grail .main {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2; }\n  .Grid--holly-grail .aside {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .Grid--holly-grail .aside-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .Grid--holly-grail .main {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .Grid--holly-grail .aside-2 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .Grid--1of2 > .Grid-cell {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%; }\n  .Grid--1of6 > .Grid-cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.6666%;\n            flex: 0 0 16.6666%; }\n  .Grid--1of4 > .Grid-cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%; }\n  .Grid--1of3 > .Grid-cell:first-of-type {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 30%;\n            flex: 0 0 30%; }\n  .Grid--gutters.Grid--nested .Grid-cell:first-of-type .Demo {\n    margin-right: 0; } }\n\n.header {\n  width: 100%;\n  height: 25vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 2rem; }\n\n.header .user {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    width: 80%; }\n\n.header .user__shape {\n      width: 12rem;\n      height: 12rem;\n      background-color: #d38baf;\n      overflow: hidden;\n      border-radius: 50%;\n      border: 2px solid #4e4450; \n      display: -webkit-box; \n      display: -ms-flexbox; \n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n    }\n\n.header .user__img {\n      width: 100%;\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden;\n      -webkit-transition: all .5s;\n      transition: all .5s; }\n\n.header .user__caption {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-left: 2rem; }\n\n.header .user__name {\n      color: #4e4450;\n      font-size: 4rem; }\n\n.header .user__rate {\n      color: #4e4450;\n      font-size: 4rem; }\n\n.content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  background-color: transparent;\n  width: 100%;\n  padding: 2rem;\n  min-height: 100vh; }\n\n.content__aside {\n    overflow-y: auto;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25rem;\n            flex: 0 0 25rem;\n    height: 75vh;\n    background-color: transparent; }\n\n.content__aside .suggested-connections {\n      position: fixed;\n      bottom: 30rem; }\n\n.content__aside .s-connections {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      height: 15rem; }\n\n.content__aside .activity-log {\n      margin-top: 2rem;\n      height: 20rem;\n      position: fixed;\n      bottom: 7rem; }\n\n.content__aside .activity-log__logs {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n\n.content__aside .activity-log__event {\n        margin-bottom: .5rem;\n        font-size: 1.2rem; }\n\n.content__aside .links {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      position: fixed;\n      bottom: 1rem; }\n\n.content__area {\n    width: 80%;\n    background-color: transparent;\n    margin-top: 2rem;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-wrap: 1;\n        flex-wrap: 1; }\n\n.content__area .navigation__nav {\n      list-style: none;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 90%;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      border-bottom: 1px solid rgba(78, 68, 80, 0.2); }\n\n.content__area .posts {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      width: 90%;\n      height: auto;\n      padding: 4rem 2rem; }\n\n.content__area .posts__add {\n        width: 80%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        height: 10rem; }\n\n.content__area .posts__add__input {\n          font-size: 1.5rem;\n          font-family: inherit;\n          color: inherit;\n          padding: 2rem 1rem;\n          width: 100%;\n          border: 1px solid rgba(78, 68, 80, 0.2);\n          -webkit-transition: all .3s;\n          transition: all .3s;\n          background-color: transparent; }\n\n.content__area .posts__post-options {\n        margin-top: .5rem;\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n\n.content__area .posts__post-options .post-rate {\n          width: 80%; }\n\n.content__area .posts__post {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 70rem;\n        margin-top: 4rem; }\n\n.content__area .posts__post-head {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n\n.content__area .posts__post-head .post-head__shape {\n            width: 4rem;\n      height: 4rem;\n      background-color: #d38baf;\n      overflow: hidden;\n      border-radius: 50%;\n      border: 2px solid #4e4450; \n      display: -webkit-box; \n      display: -ms-flexbox; \n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;;\n                border-radius: none; }\n\n.content__area .posts__post-head .post-head__img {\n            width: 100%;\n            -webkit-transform: scale(1.1);\n                    transform: scale(1.1);\n            -webkit-backface-visibility: hidden;\n                    backface-visibility: hidden;\n            -webkit-transition: all .5s;\n            transition: all .5s; }\n\n.content__area .posts__post-head .post-head__caption {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            margin-left: .4rem; }\n\n.content__area .posts__post-head .post-head__name {\n            color: #4e4450;\n            font-size: 2rem; }\n\n.content__area .posts__post-head .post-head__date {\n            color: #746566a8;\n            font-size: 1.2rem;\n            font-weight: 600; }\n\n.content__area .posts__post-body {\n          padding: 0 4rem;\n          padding-bottom: 1rem; }\n\n.content__area .posts__post-comments {\n          border-top: 1px solid rgba(78, 68, 80, 0.2);\n          margin-left: 2rem;\n          margin-top: 1rem; }\n\n.content__area .posts__post-comments .post__comment {\n            margin-left: 2rem;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            border: 1px soli black;\n            margin-bottom: 1rem; }\n\n.content__area .posts__post-comments .post__comment .comment-body {\n              margin-left: 1rem; }\n\n.content__area .posts__post-comments .comments__add__input {\n            font-size: 1.5rem;\n            font-family: inherit;\n            color: inherit;\n            padding: .5rem 1rem;\n            width: 80%;\n            border: 1px solid rgba(78, 68, 80, 0.2);\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            background-color: transparent; }\n\n.content .connections {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 80%;\n    height: auto; }\n\n.content .connections .connection {\n      height: 6rem;\n      width: 20rem;\n      margin: 2rem 3rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -ms-flex-negative: 0;\n          flex-shrink: 0; }\n\n.content .connections .connection__wraper {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n\n.content .connections .connection__shape {\n        width: 4rem;\n      height: 4rem;\n      background-color: #d38baf;\n      overflow: hidden;\n      border-radius: 50%;\n      border: 2px solid #4e4450; \n      display: -webkit-box; \n      display: -ms-flexbox; \n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n\n.content .connections .connection__img {\n        width: 100%;\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        -webkit-transition: all .5s;\n        transition: all .5s; }\n\n.content .connections .connection__caption {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-left: .2rem;\n        -ms-flex-item-align: center;\n            align-self: center; }\n\n.content .connections .connection__name {\n        color: #746566a8;\n        font-size: 1.5rem; }\n\n.content .connections .connection__rate {\n        color: #746566a8;\n        font-size: 1.5rem; }\n\n.remove-icon {\n  width: 2rem; }\n\n.share-icon {\n  width: 15px;\n  /*margin-right: .3rem;*/\n   }\n\n.wraper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 7rem; }\n\n.date {\n  color: #746566a8;\n  font-size: 1.2rem;\n  font-weight: 600; }\n\n.post-shared {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.person {\n  width: 100%;\n  height: 6rem;\n  margin-bottom: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.person__wraper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.person__shape {\n    width: 4rem;\n      height: 4rem;\n      background-color: #d38baf;\n      overflow: hidden;\n      border-radius: 50%;\n      border: 2px solid #4e4450; \n      display: -webkit-box; \n      display: -ms-flexbox; \n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n\n.person__img {\n    width: 100%;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n\n.person__caption {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    \n    -webkit-box-pack: center;\n    \n        -ms-flex-pack: center;\n    \n            justify-content: center;\n    margin-left: .2rem;\n    -ms-flex-item-align: center;\n        align-self: center; }\n\n.person__name {\n    color: #746566a8;\n    font-size: 1.5rem; }\n\n.person__rate {\n    color: #746566a8;\n    font-size: 1.5rem; }\n\n.section-signup {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100vh; }\n\n.section-profile {\n  background-color: rgba(199, 169, 184, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n\n.section-home {\n  background-color: rgba(199, 169, 184, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n\n.link {\n  cursor: pointer;\n}\n\n.caption-letter{\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 170%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.caption-letter1{\n  color: #fff;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 500%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[3]);
//# sourceMappingURL=styles.bundle.js.map