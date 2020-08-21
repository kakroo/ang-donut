import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ViewChild, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["parent"];
function DonutComponent__svg_circle_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "circle", 11);
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("stroke", data_r5.color)("stroke-width", ctx_r1.strokeWidth)("stroke-dasharray", data_r5.strokeDasharray)("stroke-dashoffset", data_r5.strokeOffset);
} }
function DonutComponent__svg_text_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "text", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r2.innerLabelText, " ");
} }
function DonutComponent__svg_text_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "text", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.sum, " ");
} }
function DonutComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelement(1, "span", 17);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span", 18);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("background-color", data_r7.color);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("", data_r7.name, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate2(" ", data_r7.value, "(", data_r7.percentage, "%) ");
} }
function DonutComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵelementStart(1, "figcaption");
    ɵngcc0.ɵɵelementStart(2, "ul", 15);
    ɵngcc0.ɵɵtemplate(3, DonutComponent_div_11_li_3_Template, 6, 5, "li", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.donutData);
} }
let DonutService = class DonutService {
    constructor() {
    }
    getProcessedData(donutData) {
        this.sum = this.fetchSum(donutData);
        donutData = this.calculatePercentages(donutData, this.sum);
        donutData = this.calculateDashArrays(donutData);
        donutData = this.getOffsets(donutData);
        return donutData;
    }
    calculateDashArrays(donutData) {
        donutData.forEach(data => {
            data.strokeDasharray = this.getDasharrayString(data.percentage);
        });
        return donutData;
    }
    calculatePercentages(donutData, sum) {
        donutData.forEach(data => {
            data.percentage = this.getRoundedPercentage(parseInt(data.value), sum);
        });
        return donutData;
    }
    fetchSum(donutData) {
        return donutData.map(d => parseInt(d.value)).reduce((a, b) => a + b, 0);
    }
    getRoundedPercentage(numerator, denominator) {
        if (!denominator) {
            return 0;
        }
        return (Math.round(((numerator / denominator) * 100) * 10) / 10);
    }
    getDasharrayString(dash) {
        return dash + ' ' + (100 - dash);
    }
    getOffsets(donutData) {
        let firstOffset = 0;
        let sumTillNow = 0;
        donutData.forEach((data, i) => {
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
    }
};
DonutService.ɵfac = function DonutService_Factory(t) { return new (t || DonutService)(); };
DonutService.ɵprov = ɵɵdefineInjectable({ factory: function DonutService_Factory() { return new DonutService(); }, token: DonutService, providedIn: "root" });

let DonutComponent = class DonutComponent {
    constructor(donutService) {
        this.donutService = donutService;
    }
    // Should total be shown inside Donut
    set showTotal(value) {
        if (value && value === true) {
            this._showTotal = true;
        }
        else {
            this._showTotal = false;
        }
    }
    set showLegend(value) {
        if (value && value === true) {
            this._showLegend = true;
        }
        else {
            this._showLegend = false;
        }
    }
    set dim(value) {
        if (value) {
            this.height = value[0];
            this.width = value[1];
        }
    }
    // Inner Label text
    set innerLabel(value) {
        if (value) {
            this.innerLabelText = value;
        }
        else {
            this.innerLabelText = null;
        }
    }
    ngOnInit() {
        // this.fetchFakeData();
        this.donutData = this.donutService.getProcessedData(this.donutData);
        //Settings Start // Need to bind these to input variables later
        this.strokeWidth = 3;
        this.sum = this.donutService.sum;
        // this.showLegend = false;
        //Settings End
    }
    ngAfterViewInit() {
        //Set Dim
        this.parent.nativeElement.style.height = this.height + 'px';
        this.parent.nativeElement.style.width = this.width + 'px';
    }
    fetchFakeData() {
        this.donutData = [
            { name: 'Red', value: '20', color: '#E25325' },
            { name: 'Blue', value: '30', color: '#6064CF' },
            { name: 'Black', value: '10', color: '#5A5C59' },
            { name: 'Green', value: '40', color: '#50FD1D' }
        ];
    }
};
DonutComponent.ɵfac = function DonutComponent_Factory(t) { return new (t || DonutComponent)(ɵngcc0.ɵɵdirectiveInject(DonutService)); };
DonutComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DonutComponent, selectors: [["ng-donut"]], viewQuery: function DonutComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.parent = _t.first);
    } }, inputs: { showTotal: "showTotal", showLegend: "showLegend", dim: "dim", innerLabel: "innerLabel", donutData: "donutData" }, decls: 12, vars: 4, consts: [["parent", ""], [1, "figure-class"], ["fxFlex", "57%", 1, "figure-content"], ["width", "100%", "height", "100%", "viewBox", "0 0 42 42", "aria-labelledby", "beers-title beers-desc", "role", "img", 1, "donut"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "#fff", "role", "presentation", 1, "donut-hole"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "stroke", "#d2d3d4", "stroke-width", "3", "role", "presentation", 1, "donut-ring"], ["class", "donut-segment", "cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 3, "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", 4, "ngFor", "ngForOf"], [1, "chart-text"], ["x", "50%", "y", "50%", "class", "chart-label", 4, "ngIf"], ["x", "50%", "y", "50%", "class", "chart-number", 4, "ngIf"], ["class", "figure-key", "fxFlex", "43%", 4, "ngIf"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 1, "donut-segment"], ["x", "50%", "y", "50%", 1, "chart-label"], ["x", "50%", "y", "50%", 1, "chart-number"], ["fxFlex", "43%", 1, "figure-key"], ["aria-hidden", "true", "role", "presentation", 1, "figure-key-list"], [4, "ngFor", "ngForOf"], [1, "shape-circle"], [1, "donut-data-count-percentage"]], template: function DonutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", null, 0);
        ɵngcc0.ɵɵelementStart(2, "figure", 1);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(4, "svg", 3);
        ɵngcc0.ɵɵelement(5, "circle", 4);
        ɵngcc0.ɵɵelement(6, "circle", 5);
        ɵngcc0.ɵɵtemplate(7, DonutComponent__svg_circle_7_Template, 1, 8, "circle", 6);
        ɵngcc0.ɵɵelementStart(8, "g", 7);
        ɵngcc0.ɵɵtemplate(9, DonutComponent__svg_text_9_Template, 2, 1, "text", 8);
        ɵngcc0.ɵɵtemplate(10, DonutComponent__svg_text_10_Template, 2, 1, "text", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, DonutComponent_div_11_Template, 4, 1, "div", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.donutData);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.innerLabelText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showTotal);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._showLegend);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf], styles: ["body[_ngcontent-%COMP%]{font:16px/1.4em Montserrat,Arial,sans-serif}*[_ngcontent-%COMP%]{box-sizing:border-box}.chart-text[_ngcontent-%COMP%]{fill:#000;transform:translateY(.25em)}.chart-number[_ngcontent-%COMP%]{font-size:.4em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label[_ngcontent-%COMP%]{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content[_ngcontent-%COMP%]{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:auto}.figure-key[_ngcontent-%COMP%]{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key[_ngcontent-%COMP%]   [class*=shape-][_ngcontent-%COMP%]{margin-right:6px}.figure-key-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.figure-key-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue[_ngcontent-%COMP%]{background-color:#0091ea}.shape-orange[_ngcontent-%COMP%]{background-color:#ff6d00}.shape-green[_ngcontent-%COMP%]{background-color:#00c853}.shape-gray[_ngcontent-%COMP%]{background-color:#4a4a4a}.shape-yellow[_ngcontent-%COMP%]{background-color:#eec400}.shape-red[_ngcontent-%COMP%]{background-color:#c00}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure[_ngcontent-%COMP%]{flex-direction:row}}.figure-class[_ngcontent-%COMP%]{flex-direction:row;display:flex}.donut-data-count-percentage[_ngcontent-%COMP%]{float:right;margin-right:15%}"] });
DonutComponent.ctorParameters = () => [
    { type: DonutService }
];
__decorate([
    ViewChild('parent')
], DonutComponent.prototype, "parent", void 0);
__decorate([
    Input()
], DonutComponent.prototype, "showTotal", null);
__decorate([
    Input()
], DonutComponent.prototype, "showLegend", null);
__decorate([
    Input()
], DonutComponent.prototype, "dim", null);
__decorate([
    Input()
], DonutComponent.prototype, "donutData", void 0);
__decorate([
    Input()
], DonutComponent.prototype, "innerLabel", null);

let DonutModule = class DonutModule {
};
DonutModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DonutModule });
DonutModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DonutModule_Factory(t) { return new (t || DonutModule)(); }, imports: [[CommonModule]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DonutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DonutComponent, [{
        type: Component,
        args: [{
                selector: 'ng-donut',
                template: "<div #parent>\n    <figure class='figure-class'>\n      <div class=\"figure-content\" fxFlex='57%'>\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 42 42\" class=\"donut\" aria-labelledby=\"beers-title beers-desc\"\n          role=\"img\">\n          <circle class=\"donut-hole\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\" fill=\"#fff\" role=\"presentation\"></circle>\n          <circle class=\"donut-ring\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\" fill=\"transparent\" stroke=\"#d2d3d4\"\n            stroke-width=\"3\" role=\"presentation\"></circle>\n  \n          <circle *ngFor=\"let data of donutData;\" class=\"donut-segment\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\"\n            fill=\"transparent\" [style.stroke]=\"data.color\" [style.stroke-width]=\"strokeWidth\" [style.stroke-dasharray]=\"data.strokeDasharray\"\n            [style.stroke-dashoffset]=\"data.strokeOffset\" aria-labelledby=\"donut-segment-1-title donut-segment-1-desc\">\n          </circle>\n          <!-- unused 10% -->\n          <g class=\"chart-text\">\n            <text *ngIf='innerLabelText' x=\"50%\" y=\"50%\" class=\"chart-label\">\n              {{innerLabelText}}\n            </text>\n            <text *ngIf='_showTotal' x=\"50%\" y=\"50%\" class=\"chart-number\">\n              {{sum}}\n            </text>\n          </g>\n        </svg>\n      </div>\n      <div *ngIf=\"_showLegend\" class=\"figure-key\" fxFlex='43%'>\n      <figcaption>\n        <ul class=\"figure-key-list\" aria-hidden=\"true\" role=\"presentation\">\n          <li *ngFor=\"let data of donutData;\">\n            <span class=\"shape-circle\" [style.background-color]=\"data.color\"></span><b>{{data.name}} </b>\n            <span class=\"donut-data-count-percentage\">\n              {{data.value}}({{data.percentage}}%)\n            </span>\n          </li>\n        </ul>\n      </figcaption>\n    </div>\n    </figure>\n  </div>",
                styles: ["body{font:16px/1.4em Montserrat,Arial,sans-serif}*{box-sizing:border-box}.chart-text{fill:#000;transform:translateY(.25em)}.chart-number{font-size:.4em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content svg{height:auto}.figure-key{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key [class*=shape-]{margin-right:6px}.figure-key-list{margin:0;padding:0;list-style:none}.figure-key-list li{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue{background-color:#0091ea}.shape-orange{background-color:#ff6d00}.shape-green{background-color:#00c853}.shape-gray{background-color:#4a4a4a}.shape-yellow{background-color:#eec400}.shape-red{background-color:#c00}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure{flex-direction:row}}.figure-class{flex-direction:row;display:flex}.donut-data-count-percentage{float:right;margin-right:15%}"]
            }]
    }], function () { return [{ type: DonutService }]; }, { showTotal: [{
            type: Input
        }], showLegend: [{
            type: Input
        }], dim: [{
            type: Input
        }], innerLabel: [{
            type: Input
        }], donutData: [{
            type: Input
        }], parent: [{
            type: ViewChild,
            args: ['parent']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DonutModule, { declarations: function () { return [DonutComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [DonutComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DonutModule, [{
        type: NgModule,
        args: [{
                declarations: [DonutComponent],
                imports: [CommonModule],
                exports: [DonutComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of donut
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DonutComponent, DonutModule, DonutService };

//# sourceMappingURL=ang-donut.js.map