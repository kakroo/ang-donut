(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('donut', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global.donut = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

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
        DonutService.ɵfac = function DonutService_Factory(t) { return new (t || DonutService)(); };
        DonutService.ɵprov = core.ɵɵdefineInjectable({ token: DonutService, factory: DonutService.ɵfac, providedIn: 'root' });
        return DonutService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DonutService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var _c0 = ["parent"];
    function DonutComponent__svg_circle_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵnamespaceSVG();
        core.ɵɵelement(0, "circle", 13);
    } if (rf & 2) {
        var data_r5 = ctx.$implicit;
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵstyleProp("stroke", data_r5.color)("stroke-width", ctx_r1.strokeWidth)("stroke-dasharray", data_r5.strokeDasharray)("stroke-dashoffset", data_r5.strokeOffset);
    } }
    function DonutComponent__svg_text_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵnamespaceSVG();
        core.ɵɵelementStart(0, "text", 14);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r2.innerLabelText, " ");
    } }
    function DonutComponent__svg_text_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵnamespaceSVG();
        core.ɵɵelementStart(0, "text", 15);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r3.sum, " ");
    } }
    function DonutComponent_li_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li");
        core.ɵɵelement(1, "span", 16);
        core.ɵɵelementStart(2, "b");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span", 17);
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var data_r6 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("background-color", data_r6.color);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("", data_r6.name, " ");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate2(" ", data_r6.value, "(", data_r6.percentage, "%) ");
    } }
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
            this.showLegend = false;
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
        DonutComponent.ɵfac = function DonutComponent_Factory(t) { return new (t || DonutComponent)(core.ɵɵdirectiveInject(DonutService)); };
        DonutComponent.ɵcmp = core.ɵɵdefineComponent({ type: DonutComponent, selectors: [["ng-donut"]], viewQuery: function DonutComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.parent = _t.first);
            } }, inputs: { showTotal: "showTotal", dim: "dim", donutData: "donutData", innerLabel: "innerLabel" }, decls: 15, vars: 4, consts: [["parent", ""], [1, "figure-class"], ["fxFlex", "57%", 1, "figure-content"], ["width", "100%", "height", "100%", "viewBox", "0 0 42 42", "aria-labelledby", "beers-title beers-desc", "role", "img", 1, "donut"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "#fff", "role", "presentation", 1, "donut-hole"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "stroke", "#d2d3d4", "stroke-width", "3", "role", "presentation", 1, "donut-ring"], ["class", "donut-segment", "cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 3, "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", 4, "ngFor", "ngForOf"], [1, "chart-text"], ["x", "50%", "y", "50%", "class", "chart-label", 4, "ngIf"], ["x", "50%", "y", "50%", "class", "chart-number", 4, "ngIf"], ["fxFlex", "43%", 1, "figure-key"], ["aria-hidden", "true", "role", "presentation", 1, "figure-key-list"], [4, "ngFor", "ngForOf"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 1, "donut-segment"], ["x", "50%", "y", "50%", 1, "chart-label"], ["x", "50%", "y", "50%", 1, "chart-number"], [1, "shape-circle"], [1, "donut-data-count-percentage"]], template: function DonutComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", null, 0);
                core.ɵɵelementStart(2, "figure", 1);
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵnamespaceSVG();
                core.ɵɵelementStart(4, "svg", 3);
                core.ɵɵelement(5, "circle", 4);
                core.ɵɵelement(6, "circle", 5);
                core.ɵɵtemplate(7, DonutComponent__svg_circle_7_Template, 1, 8, "circle", 6);
                core.ɵɵelementStart(8, "g", 7);
                core.ɵɵtemplate(9, DonutComponent__svg_text_9_Template, 2, 1, "text", 8);
                core.ɵɵtemplate(10, DonutComponent__svg_text_10_Template, 2, 1, "text", 9);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵnamespaceHTML();
                core.ɵɵelementStart(11, "div", 10);
                core.ɵɵelementStart(12, "figcaption");
                core.ɵɵelementStart(13, "ul", 11);
                core.ɵɵtemplate(14, DonutComponent_li_14_Template, 6, 5, "li", 12);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(7);
                core.ɵɵproperty("ngForOf", ctx.donutData);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.innerLabelText);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx._showTotal);
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngForOf", ctx.donutData);
            } }, directives: [common.NgForOf, common.NgIf], styles: ["body[_ngcontent-%COMP%]{font:16px/1.4em Montserrat,Arial,sans-serif}*[_ngcontent-%COMP%]{box-sizing:border-box}.chart-text[_ngcontent-%COMP%]{fill:#000;transform:translateY(.25em)}.chart-number[_ngcontent-%COMP%]{font-size:.4em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label[_ngcontent-%COMP%]{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content[_ngcontent-%COMP%]{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:auto}.figure-key[_ngcontent-%COMP%]{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key[_ngcontent-%COMP%]   [class*=shape-][_ngcontent-%COMP%]{margin-right:6px}.figure-key-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.figure-key-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue[_ngcontent-%COMP%]{background-color:#0091ea}.shape-orange[_ngcontent-%COMP%]{background-color:#ff6d00}.shape-green[_ngcontent-%COMP%]{background-color:#00c853}.shape-gray[_ngcontent-%COMP%]{background-color:#4a4a4a}.shape-yellow[_ngcontent-%COMP%]{background-color:#eec400}.shape-red[_ngcontent-%COMP%]{background-color:#c00}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure[_ngcontent-%COMP%]{flex-direction:row}}.figure-class[_ngcontent-%COMP%]{flex-direction:row;display:flex}.donut-data-count-percentage[_ngcontent-%COMP%]{float:right;margin-right:15%}"] });
        return DonutComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DonutComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng-donut',
                    templateUrl: './donut.component.html',
                    styleUrls: ['./donut.component.scss']
                }]
        }], function () { return [{ type: DonutService }]; }, { parent: [{
                type: core.ViewChild,
                args: ['parent']
            }], showTotal: [{
                type: core.Input
            }], dim: [{
                type: core.Input
            }], donutData: [{
                type: core.Input
            }], innerLabel: [{
                type: core.Input
            }] }); })();

    var DonutModule = /** @class */ (function () {
        function DonutModule() {
        }
        DonutModule.ɵmod = core.ɵɵdefineNgModule({ type: DonutModule });
        DonutModule.ɵinj = core.ɵɵdefineInjector({ factory: function DonutModule_Factory(t) { return new (t || DonutModule)(); }, imports: [[common.CommonModule]] });
        return DonutModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(DonutModule, { declarations: [DonutComponent], imports: [common.CommonModule], exports: [DonutComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DonutModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [DonutComponent],
                    imports: [common.CommonModule],
                    exports: [DonutComponent]
                }]
        }], null, null); })();

    exports.DonutComponent = DonutComponent;
    exports.DonutModule = DonutModule;
    exports.DonutService = DonutService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=donut.umd.js.map
