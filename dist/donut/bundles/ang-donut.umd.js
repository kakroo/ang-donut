(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ang-donut', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ang-donut'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var DonutService = /** @class */ (function () {
        function DonutService() {
        }
        DonutService.prototype.getProcessedData = function (donutData) {
            this.sum = this.fetchSum(donutData);
            donutData = this.calculatePercentages(donutData, this.sum);
            donutData = this.calculateDashArrays(donutData);
            donutData = this.getOffsets(donutData);
            return donutData;
        };
        DonutService.prototype.calculateDashArrays = function (donutData) {
            var _this = this;
            donutData.forEach(function (data) {
                data.strokeDasharray = _this.getDasharrayString(data.percentage);
            });
            return donutData;
        };
        DonutService.prototype.calculatePercentages = function (donutData, sum) {
            var _this = this;
            donutData.forEach(function (data) {
                data.percentage = _this.getRoundedPercentage(parseInt(data.value), sum);
            });
            return donutData;
        };
        DonutService.prototype.fetchSum = function (donutData) {
            return donutData.map(function (d) { return parseInt(d.value); }).reduce(function (a, b) { return a + b; }, 0);
        };
        DonutService.prototype.getRoundedPercentage = function (numerator, denominator) {
            if (!denominator) {
                return 0;
            }
            return (Math.round(((numerator / denominator) * 100) * 10) / 10);
        };
        DonutService.prototype.getDasharrayString = function (dash) {
            return dash + ' ' + (100 - dash);
        };
        DonutService.prototype.getOffsets = function (donutData) {
            var firstOffset = 0;
            var sumTillNow = 0;
            donutData.forEach(function (data, i) {
                if (i === 0) {
                    data.strokeOffset = 0;
                    sumTillNow = data.percentage;
                }
                else {
                    data.strokeOffset = 100 - sumTillNow;
                    sumTillNow += data.percentage;
                }
            });
            return donutData;
        };
        DonutService.ɵprov = core.ɵɵdefineInjectable({ factory: function DonutService_Factory() { return new DonutService(); }, token: DonutService, providedIn: "root" });
        DonutService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], DonutService);
        return DonutService;
    }());

    var DonutComponent = /** @class */ (function () {
        function DonutComponent(donutService) {
            this.donutService = donutService;
        }
        Object.defineProperty(DonutComponent.prototype, "showTotal", {
            // Should total be shown inside Donut
            set: function (value) {
                if (value && value === true) {
                    this._showTotal = true;
                }
                else {
                    this._showTotal = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DonutComponent.prototype, "showLegend", {
            set: function (value) {
                if (value && value === true) {
                    this._showLegend = true;
                }
                else {
                    this._showLegend = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DonutComponent.prototype, "dim", {
            set: function (value) {
                if (value) {
                    this.height = value[0];
                    this.width = value[1];
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DonutComponent.prototype, "innerLabel", {
            // Inner Label text
            set: function (value) {
                if (value) {
                    this.innerLabelText = value;
                }
                else {
                    this.innerLabelText = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        DonutComponent.prototype.ngOnInit = function () {
            // this.fetchFakeData();
            this.donutData = this.donutService.getProcessedData(this.donutData);
            //Settings Start // Need to bind these to input variables later
            this.strokeWidth = 3;
            this.sum = this.donutService.sum;
            // this.showLegend = false;
            //Settings End
        };
        DonutComponent.prototype.ngAfterViewInit = function () {
            //Set Dim
            this.parent.nativeElement.style.height = this.height + 'px';
            this.parent.nativeElement.style.width = this.width + 'px';
        };
        DonutComponent.prototype.fetchFakeData = function () {
            this.donutData = [
                { name: 'Red', value: '20', color: '#E25325' },
                { name: 'Blue', value: '30', color: '#6064CF' },
                { name: 'Black', value: '10', color: '#5A5C59' },
                { name: 'Green', value: '40', color: '#50FD1D' }
            ];
        };
        DonutComponent.ctorParameters = function () { return [
            { type: DonutService }
        ]; };
        __decorate([
            core.ViewChild('parent')
        ], DonutComponent.prototype, "parent", void 0);
        __decorate([
            core.Input()
        ], DonutComponent.prototype, "showTotal", null);
        __decorate([
            core.Input()
        ], DonutComponent.prototype, "showLegend", null);
        __decorate([
            core.Input()
        ], DonutComponent.prototype, "dim", null);
        __decorate([
            core.Input()
        ], DonutComponent.prototype, "donutData", void 0);
        __decorate([
            core.Input()
        ], DonutComponent.prototype, "innerLabel", null);
        DonutComponent = __decorate([
            core.Component({
                selector: 'ng-donut',
                template: "<div #parent>\n    <figure class='figure-class'>\n      <div class=\"figure-content\" fxFlex='57%'>\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 42 42\" class=\"donut\" aria-labelledby=\"beers-title beers-desc\"\n          role=\"img\">\n          <circle class=\"donut-hole\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\" fill=\"#fff\" role=\"presentation\"></circle>\n          <circle class=\"donut-ring\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\" fill=\"transparent\" stroke=\"#d2d3d4\"\n            stroke-width=\"3\" role=\"presentation\"></circle>\n  \n          <circle *ngFor=\"let data of donutData;\" class=\"donut-segment\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\"\n            fill=\"transparent\" [style.stroke]=\"data.color\" [style.stroke-width]=\"strokeWidth\" [style.stroke-dasharray]=\"data.strokeDasharray\"\n            [style.stroke-dashoffset]=\"data.strokeOffset\" aria-labelledby=\"donut-segment-1-title donut-segment-1-desc\">\n          </circle>\n          <!-- unused 10% -->\n          <g class=\"chart-text\">\n            <text *ngIf='innerLabelText' x=\"50%\" y=\"50%\" class=\"chart-label\">\n              {{innerLabelText}}\n            </text>\n            <text *ngIf='_showTotal' x=\"50%\" y=\"50%\" class=\"chart-number\">\n              {{sum}}\n            </text>\n          </g>\n        </svg>\n      </div>\n      <div *ngIf=\"_showLegend\" class=\"figure-key\" fxFlex='43%'>\n      <figcaption>\n        <ul class=\"figure-key-list\" aria-hidden=\"true\" role=\"presentation\">\n          <li *ngFor=\"let data of donutData;\">\n            <span class=\"shape-circle\" [style.background-color]=\"data.color\"></span><b>{{data.name}} </b>\n            <span class=\"donut-data-count-percentage\">\n              {{data.value}}({{data.percentage}}%)\n            </span>\n          </li>\n        </ul>\n      </figcaption>\n    </div>\n    </figure>\n  </div>",
                styles: ["body{font:16px/1.4em Montserrat,Arial,sans-serif}*{box-sizing:border-box}.chart-text{fill:#000;transform:translateY(.25em)}.chart-number{font-size:.4em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content svg{height:auto}.figure-key{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key [class*=shape-]{margin-right:6px}.figure-key-list{margin:0;padding:0;list-style:none}.figure-key-list li{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue{background-color:#0091ea}.shape-orange{background-color:#ff6d00}.shape-green{background-color:#00c853}.shape-gray{background-color:#4a4a4a}.shape-yellow{background-color:#eec400}.shape-red{background-color:#c00}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure{flex-direction:row}}.figure-class{flex-direction:row;display:flex}.donut-data-count-percentage{float:right;margin-right:15%}"]
            })
        ], DonutComponent);
        return DonutComponent;
    }());

    var DonutModule = /** @class */ (function () {
        function DonutModule() {
        }
        DonutModule = __decorate([
            core.NgModule({
                declarations: [DonutComponent],
                imports: [common.CommonModule],
                exports: [DonutComponent]
            })
        ], DonutModule);
        return DonutModule;
    }());

    exports.DonutComponent = DonutComponent;
    exports.DonutModule = DonutModule;
    exports.DonutService = DonutService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ang-donut.umd.js.map
