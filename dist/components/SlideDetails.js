"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("./variables");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SlideDetails = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .keen-slider {\n        width: 100%;\n        height: 40rem;\n\n        @media (max-width: 1366px) {\n            height: 30rem;\n        }\n\n        @media (max-width: 500px) {\n            width: 28rem;\n        }\n\n        a {\n            text-decoration: none;\n        }\n\n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            filter: brightness(50%);\n        }\n\n        .keen-slider__slide {\n            width: 100%;\n            .slider-description {\n                position: absolute;\n                top: 45%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                text-transform: initial;\n                line-height: 40px;\n                text-align: left;\n                width: 58rem;\n\n                @media (max-width: 1366px) {\n                    width: 80%;\n                }\n\n                @media (max-width: 500px) {\n                    width: 85%;\n                    transform: scale(0.9);\n                    left: 0;\n                    top: 15%;\n                }\n\n                @media (max-width: 375px) {\n                    left: -2%;\n                    width: 75%;\n                }\n\n                @media (max-width: 320px) {\n                    left: -10%;\n                }\n\n                .slide-tag {\n                    color: ", ";\n\n                    @media (max-width: 500px) {\n                         font-size: 0.8em;\n                         width: 300px;\n                     }\n\n                    .latest {\n                        padding: 2.5px 10px;\n                        background: ", ";\n                        font-size: 0.9rem;\n                        font-weight: bold;\n                    }\n\n                    .tag {\n                        padding: 2.6px 10px;\n                        background: ", ";\n                        font-size: 0.9rem;\n                        font-weight: bold;\n                    }\n\n                    .date {\n                        margin-left: 10px;\n                        font-weight: 300;\n                    }\n\n                    .author {\n                        text-decoration: underline;\n\n                        a {\n                            color: ", ";\n                        }\n                    }\n\n                    @media (max-width: 320px) {\n                        font-size: 0.8em;\n                        transform: scale(0.8);\n                    }\n\n                }\n\n                h1 {\n                    margin-top: 10px;\n                    color: ", ";\n                    font-size: 3rem;\n                    font-weight: 700;\n                    line-height: 50px;\n                    text-shadow: 1px 1px 2px rgb(0 0 0 / 30%);\n\n                    a {\n                        text-decoration: none;\n                        color: ", ";\n                    }\n\n                    @media (max-width: 500px) {\n                        font-size: 1.8em;\n                   }\n\n                   @media (max-width: 320px) {\n                        font-size: 1.5em;\n                        transform: scale(0.8);\n                    }\n                }\n\n                p {\n                    font-size: 1.2rem;\n                    line-height: 1.5rem;\n                    color: ", ";\n                    border-left: 5px solid ", ";\n                    padding-left: 10px;\n                    max-width: 50rem;\n                    display: -webkit-box;\n                    -webkit-line-clamp: 3;\n                    -webkit-box-orient: vertical;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n\n                    @media (max-width: 320px) {\n                        font-size: 1.5em;\n                        transform: scale(0.8);\n                    }\n\n                    a {\n                        text-decoration: none;\n                        color: ", ";\n                    }\n                }\n            }\n        }\n    }\n\n    .keen-slider_navigation {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-align:center;\n        height: 3rem;\n        color: ", ";\n        border-bottom: 1px solid ", ";\n\n        a {\n            text-decoration: none;\n        }\n\n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            filter: brightness(50%);\n        }\n\n        .keen-slider__slide {\n            width: 100%;\n\n            .match {\n                img {\n                    width: 1rem;\n                }\n            }\n        }\n    }\n\n    .keen-slider_csgo {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-align:center;\n    }\n"])), _variables.colors.gray, _variables.colors.orange, _variables.colors.blue, _variables.colors.white, _variables.colors.white, _variables.colors.white, _variables.colors.white, _variables.colors.blue, _variables.colors.white, _variables.colors.white, _variables.colors.white);
var _default = SlideDetails;
exports["default"] = _default;