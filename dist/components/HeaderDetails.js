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
var HeaderDetails = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    .header {\n        display: flex;\n        padding: 1rem 15rem;\n        justify-content: space-between;\n        background: ", ";\n\n        @media (max-width: 1600px) {\n            padding: 1rem 6rem;\n        }\n\n        @media (max-width: 1440px) {\n            padding: 1rem 4rem;\n        }\n\n        @media (max-width: 1366px) {\n            padding: 1rem 3rem;\n        }\n\n        @media (max-width: 1200px) {\n            .advice {\n                display: none;\n            }\n        }\n\n        .logotipo {\n            width: 32rem;\n            margin-top: 0.5rem;\n\n            @media (max-width: 414px) {\n                width: 20rem;\n            }\n        }\n\n        @media (max-width: 500px) {\n            justify-content: center;\n       }\n    }\n\n    .navigation {\n        background: ", ";\n        display: flex;\n        height: 3rem;\n        width: 100%;\n\n        @media (max-width: 600px) {\n            height: 5rem;\n            border-radius: 15px;\n            background: transparent;\n        }\n\n        ul{\n            display: flex;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n            color: ", ";\n            margin-left: 15rem;\n\n            @media (max-width: 1366px) {\n                margin-left: 3rem;\n            }\n\n            background: ", ";\n\n            #item-menu {\n                display: flex;\n            }\n\n            .burguer {\n                display: none;\n            }\n\n            @media (max-width: 768px) {\n                margin-left: 3rem;\n                height: 2rem;\n\n                #item-menu {\n                    display: none;\n                }\n\n                .burguer {\n                    display: flex;\n                    margin-top: -1.2rem;\n                    margin-left: -1.2rem;\n                }\n            }\n\n            @media (max-width: 600px) {\n                margin-left: 0;\n                flex-direction: column;\n                align-items: center;\n                text-align: center;\n\n                width: 100%;\n                border-radius: 15px;\n            }\n\n            li {\n                display: flex;\n                padding: 0.7rem 1rem;\n\n                @media (max-width: 768px) {\n                    margin-left: 0.625rem;\n                    padding: 0.7rem 0;\n                }\n\n                @media (max-width: 600px) {\n                    margin-left: 2rem;\n                    padding: 0.7rem 0;\n                }\n\n                margin: 0;\n                font-size: 1rem;\n                font-weight: 400;\n                cursor: pointer;\n                transition: 0.3s;\n                text-transform: uppercase;\n                font-family: 'Poppins', sans-serif;\n\n                Link {\n                    color: ", ";\n                    text-decoration: none;\n                }\n\n                :hover {\n                    border-bottom: 4px solid ", ";\n                }\n            }\n        }\n    }\n"])), _variables.colors.blackAlt, _variables.colors.blue, _variables.colors.white, _variables.colors.blue, _variables.colors.white, _variables.colors.white);
var _default = HeaderDetails;
exports["default"] = _default;