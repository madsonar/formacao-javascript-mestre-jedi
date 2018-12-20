/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/controllers/PortfolioController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ConfigClass.js":
/*!****************************!*\
  !*** ./src/ConfigClass.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ConfigClass = function () {\n    function ConfigClass() {\n        _classCallCheck(this, ConfigClass);\n    }\n\n    _createClass(ConfigClass, null, [{\n        key: \"getUrlApi\",\n        value: function getUrlApi() {\n            this.urlApi = \"http://localhost:3000\";\n            return this.urlApi;\n        }\n    }]);\n\n    return ConfigClass;\n}();\n\nexports.default = ConfigClass;\n\n//# sourceURL=webpack:///./src/ConfigClass.js?");

/***/ }),

/***/ "./src/controllers/PortfolioController.js":
/*!************************************************!*\
  !*** ./src/controllers/PortfolioController.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _PortfolioModel = __webpack_require__(/*! ../models/portfolio/PortfolioModel */ \"./src/models/portfolio/PortfolioModel.js\");\n\nvar _PortfolioModel2 = _interopRequireDefault(_PortfolioModel);\n\nvar _PortfolioClass = __webpack_require__(/*! ../models/portfolio/PortfolioClass */ \"./src/models/portfolio/PortfolioClass.js\");\n\nvar _PortfolioClass2 = _interopRequireDefault(_PortfolioClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar divMsg = window.document.getElementById(\"msg\");\nvar divPortfolios = window.document.getElementById(\"portfolios\");\nvar formulario = window.document.getElementById(\"form\");\n\nvar objPortfolioController = void 0;\n\nvar PortfolioController = function () {\n    function PortfolioController() {\n        _classCallCheck(this, PortfolioController);\n    }\n\n    _createClass(PortfolioController, [{\n        key: \"getTodosTable\",\n        value: function getTodosTable(divPortfolios) {\n            var _this = this;\n\n            var promise = new Promise(function (resolve, reject) {\n                var promiseFetch = _PortfolioModel2.default.getTodos();\n\n                promiseFetch.then(function (response) {\n                    resolve(response);\n                });\n            });\n\n            promise.then(function (response) {\n                var dados = \"\";\n\n                if (response.erro) {\n                    _this.exibirMsgAlert(response.msg, 'erro');\n                } else {\n                    dados += \"<div class=\\\"table-responsive\\\">\\n                    <table class=\\\"table table-striped table-bordered table-hover table-sm\\\">\\n                        <thead class=\\\"table-dark\\\">\\n                            <tr>\\n                                <th>C\\xF3digo</th>\\n                                <th>Descri\\xE7\\xE3o</th>\\n                                <th></th>\\n                                <th></th>\\n                            </th>\\n                        </thead>\\n                        <tbody>\";\n\n                    var _iteratorNormalCompletion = true;\n                    var _didIteratorError = false;\n                    var _iteratorError = undefined;\n\n                    try {\n                        for (var _iterator = response.dados[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                            var servico = _step.value;\n\n                            dados += \"<tr>\\n                            <td>\" + servico.id_portfolio + \"</td>\\n                            <td>\" + servico.descricao + \"</td>\\n                            <td><button type=\\\"button\\\" class=\\\"btn btn-primary btn-editar\\\" data-id=\\\"\" + servico.id_portfolio + \"\\\">Editar</button></td>\\n                            <td><button type=\\\"button\\\" class=\\\"btn btn-primary btn-excluir\\\" data-id=\\\"\" + servico.id_portfolio + \"\\\">Excluir</button></td>\\n                        </tr>\";\n                        }\n                    } catch (err) {\n                        _didIteratorError = true;\n                        _iteratorError = err;\n                    } finally {\n                        try {\n                            if (!_iteratorNormalCompletion && _iterator.return) {\n                                _iterator.return();\n                            }\n                        } finally {\n                            if (_didIteratorError) {\n                                throw _iteratorError;\n                            }\n                        }\n                    }\n\n                    dados += \"</tbody></table></div>\";\n                    divPortfolios.innerHTML = dados;\n\n                    var btnsEditar = document.querySelectorAll(\".btn-editar\");\n                    var btnsExcluir = document.querySelectorAll(\".btn-excluir\");\n\n                    btnsEditar.forEach(function (item) {\n                        item.addEventListener(\"click\", function (event) {\n                            objPortfolioController.limparMsgAlert();\n                            var id = event.target.getAttribute('data-id');\n                            objPortfolioController.prepararEditar(id);\n                        });\n                    });\n\n                    btnsExcluir.forEach(function (item) {\n                        item.addEventListener(\"click\", function (event) {\n                            objPortfolioController.limparMsgAlert();\n                            var id = event.target.getAttribute('data-id');\n                            objPortfolioController.deletar(id);\n                        });\n                    });\n                }\n            }).catch(function (response) {\n                return console.log(\"erro catch:\", response);\n            });\n        }\n    }, {\n        key: \"prepararEditar\",\n        value: function prepararEditar(id) {\n            var _this2 = this;\n\n            var promise = new Promise(function (resolve, reject) {\n                var promiseFetch = _PortfolioModel2.default.getId(id);\n\n                promiseFetch.then(function (response) {\n                    resolve(response);\n                });\n            });\n\n            promise.then(function (response) {\n                if (response.erro) {\n                    _this2.exibirMsgAlert(response.msg, \"erro\");\n                } else {\n\n                    var objPortfolioClass = new _PortfolioClass2.default(response.dados[0].id_portfolio, response.dados[0].descricao, response.dados[0].detalhes);\n\n                    formulario.id.value = objPortfolioClass.id_portfolio;\n                    formulario.descricao.value = objPortfolioClass.descricao;\n                    formulario.detalhes.value = objPortfolioClass.detalhes;\n\n                    objPortfolioController.ocultarElemento(\"listagem\");\n                    objPortfolioController.exibirElemento(\"formulario\");\n                }\n            }).catch(function (response) {\n                console.log(\"erro catch:\", response);\n            });\n        }\n    }, {\n        key: \"editar\",\n        value: function editar(formulario) {\n            var _this3 = this;\n\n            var id = void 0,\n                descricao = void 0,\n                detalhes = void 0;\n            id = formulario.id.value;\n            descricao = formulario.descricao.value;\n            detalhes = formulario.detalhes.value;\n\n            if (id && descricao && detalhes) {\n                var objPortfolioClass = new _PortfolioClass2.default(id, descricao, detalhes);\n\n                var promise = new Promise(function (resolve, reject) {\n                    var promiseFetch = _PortfolioModel2.default.editar(objPortfolioClass);\n\n                    promiseFetch.then(function (response) {\n                        resolve(response);\n                    });\n                });\n\n                promise.then(function (response) {\n                    if (response.erro) {\n                        _this3.exibirMsgAlert(response.msg, \"erro\");\n                    } else {\n                        objPortfolioController.getTodosTable(divPortfolios);\n                        objPortfolioController.exibirMsgAlert(response.msg, \"sucesso\");\n                        objPortfolioController.ocultarElemento(\"formulario\");\n                        objPortfolioController.exibirElemento(\"listagem\");\n                        objPortfolioController.limparCamposForm(formulario);\n                    }\n                }).catch(function (response) {\n                    console.log(\"erro catch:\", response);\n                });\n            } else {\n                this.exibirMsgAlert(\"Por favor preencher todos os campos.\", \"erro\");\n            }\n        }\n    }, {\n        key: \"adicionar\",\n        value: function adicionar(formulario) {\n            var _this4 = this;\n\n            var descricao = void 0,\n                detalhes = void 0;\n            descricao = formulario.descricao.value;\n            detalhes = formulario.detalhes.value;\n\n            if (descricao && detalhes) {\n                var objPortfolioClass = new _PortfolioClass2.default(null, descricao, detalhes);\n\n                var promise = new Promise(function (resolve, reject) {\n                    var promiseFetch = _PortfolioModel2.default.adicionar(objPortfolioClass);\n\n                    promiseFetch.then(function (response) {\n                        resolve(response);\n                    });\n                });\n\n                promise.then(function (response) {\n                    if (response.erro) {\n                        _this4.exibirMsgAlert(response.msg, \"erro\");\n                    } else {\n                        objPortfolioController.getTodosTable(divPortfolios);\n                        objPortfolioController.exibirMsgAlert(response.msg, \"sucesso\");\n                        objPortfolioController.ocultarElemento(\"formulario\");\n                        objPortfolioController.exibirElemento(\"listagem\");\n                        objPortfolioController.limparCamposForm(formulario);\n                    }\n                }).catch(function (response) {\n                    console.log(\"erro catch:\", response);\n                });\n            } else {\n                this.exibirMsgAlert(\"Por favor preencher todos os campos.\", \"erro\");\n            }\n        }\n    }, {\n        key: \"deletar\",\n        value: function deletar(id) {\n            var _this5 = this;\n\n            var promise = new Promise(function (resolve, reject) {\n                var promiseFetch = _PortfolioModel2.default.deletar(id);\n\n                promiseFetch.then(function (response) {\n                    resolve(response);\n                });\n            });\n\n            promise.then(function (response) {\n                if (response.erro) {\n                    _this5.exibirMsgAlert(response.msg, \"erro\");\n                } else {\n                    objPortfolioController.getTodosTable(divPortfolios);\n                    objPortfolioController.exibirMsgAlert(response.msg, \"sucesso\");\n                }\n            }).catch(function (response) {\n                console.log(\"erro catch:\", response);\n            });\n        }\n    }, {\n        key: \"ocultarElemento\",\n        value: function ocultarElemento(elemento) {\n            document.getElementById(elemento).style.display = \"none\";\n        }\n    }, {\n        key: \"exibirElemento\",\n        value: function exibirElemento(elemento) {\n            document.getElementById(elemento).style.display = \"block\";\n        }\n    }, {\n        key: \"limparCamposForm\",\n        value: function limparCamposForm(form) {\n            form.id.value = \"\";\n            form.descricao.value = \"\";\n            form.detalhes.value = \"\";\n        }\n    }, {\n        key: \"exibirMsgAlert\",\n        value: function exibirMsgAlert(msg, tipo) {\n            var dados = \"\";\n            if (tipo == \"sucesso\") {\n                dados = \"<div class=\\\"alert alert-success alert-dismissible fade show\\\" role=\\\"alert\\\">\\n            <strong>\" + msg + \"</strong> \\n            <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\">\\n              <span aria-hidden=\\\"true\\\">&times;</span>\\n            </button>\\n          </div>\";\n            } else if (tipo == \"erro\") {\n                dados = \"<div class=\\\"alert alert-danger alert-dismissible fade show\\\" role=\\\"alert\\\">\\n            <strong>\" + msg + \"</strong> \\n            <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\">\\n              <span aria-hidden=\\\"true\\\">&times;</span>\\n            </button>\\n          </div>\";\n            }\n\n            divMsg.innerHTML = dados;\n        }\n    }, {\n        key: \"limparMsgAlert\",\n        value: function limparMsgAlert() {\n            divMsg.innerHTML = \"\";\n        }\n    }, {\n        key: \"registrarEvents\",\n        value: function registrarEvents() {\n            document.getElementById('btn-exibir-formulario').addEventListener(\"click\", function () {\n                objPortfolioController.limparMsgAlert();\n                objPortfolioController.ocultarElemento(\"listagem\");\n                objPortfolioController.exibirElemento(\"formulario\");\n            });\n\n            document.getElementById('btn-cadastrar-portfolio').addEventListener(\"click\", function () {\n                event.preventDefault();\n                objPortfolioController.limparMsgAlert();\n                if (formulario.id.value) {\n                    objPortfolioController.editar(formulario);\n                } else {\n                    objPortfolioController.adicionar(formulario);\n                }\n            });\n\n            document.getElementById('btn-cancelar-operacao').addEventListener(\"click\", function () {\n                objPortfolioController.limparMsgAlert();\n                objPortfolioController.limparCamposForm(formulario);\n                objPortfolioController.ocultarElemento(\"formulario\");\n                objPortfolioController.exibirElemento(\"listagem\");\n            });\n        }\n    }]);\n\n    return PortfolioController;\n}();\n\nfunction main() {\n    objPortfolioController = new PortfolioController();\n    objPortfolioController.ocultarElemento(\"formulario\");\n    objPortfolioController.getTodosTable(divPortfolios);\n    objPortfolioController.registrarEvents();\n}\n\nwindow.onload = main;\n\n//# sourceURL=webpack:///./src/controllers/PortfolioController.js?");

/***/ }),

/***/ "./src/models/portfolio/PortfolioClass.js":
/*!************************************************!*\
  !*** ./src/models/portfolio/PortfolioClass.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PortfolioClass = function PortfolioClass(id, descricao, detalhes) {\n    _classCallCheck(this, PortfolioClass);\n\n    if (id != null) this.id_portfolio = id;\n    this.descricao = descricao;\n    this.detalhes = detalhes;\n};\n\nexports.default = PortfolioClass;\n\n//# sourceURL=webpack:///./src/models/portfolio/PortfolioClass.js?");

/***/ }),

/***/ "./src/models/portfolio/PortfolioModel.js":
/*!************************************************!*\
  !*** ./src/models/portfolio/PortfolioModel.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ConfigClass = __webpack_require__(/*! ../../ConfigClass */ \"./src/ConfigClass.js\");\n\nvar _ConfigClass2 = _interopRequireDefault(_ConfigClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar caminho = _ConfigClass2.default.getUrlApi().toString() + '/portfolio';\n\nvar PortfolioModel = function () {\n    function PortfolioModel() {\n        _classCallCheck(this, PortfolioModel);\n    }\n\n    _createClass(PortfolioModel, null, [{\n        key: 'getTodos',\n        value: function getTodos() {\n            return fetch(caminho).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }, {\n        key: 'getId',\n        value: function getId(id) {\n            return fetch(caminho + '/' + id).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }, {\n        key: 'adicionar',\n        value: function adicionar(objPortfolioClass) {\n            return fetch(caminho, {\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                method: \"POST\",\n                body: JSON.stringify(objPortfolioClass)\n            }).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }, {\n        key: 'editar',\n        value: function editar(objPortfolioClass) {\n            return fetch(caminho, {\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                method: \"PUT\",\n                body: JSON.stringify(objPortfolioClass)\n            }).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }, {\n        key: 'deletar',\n        value: function deletar(id) {\n            return fetch(caminho + '/' + id, {\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                method: \"DELETE\"\n            }).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }]);\n\n    return PortfolioModel;\n}();\n\nexports.default = PortfolioModel;\n\n//# sourceURL=webpack:///./src/models/portfolio/PortfolioModel.js?");

/***/ })

/******/ });