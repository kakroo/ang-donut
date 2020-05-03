import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵnamespaceSVG, ɵɵelement, ɵɵnextContext, ɵɵstyleProp, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵtemplate, ɵɵnamespaceHTML, ɵɵproperty, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgForOf, NgIf, CommonModule } from '@angular/common';

class DonutService {
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
}
DonutService.ɵfac = function DonutService_Factory(t) { return new (t || DonutService)(); };
DonutService.ɵprov = ɵɵdefineInjectable({ token: DonutService, factory: DonutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DonutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function DonutComponent__svg_circle_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "circle", 10);
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("stroke", data_r3.color)("stroke-width", ctx_r0.strokeWidth)("stroke-dasharray", data_r3.strokeDasharray)("stroke-dashoffset", data_r3.strokeOffset);
} }
function DonutComponent__svg_text_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.innerLabelText, " ");
} }
function DonutComponent__svg_text_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "text", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2.sum, " ");
} }
class DonutComponent {
    constructor(donutService) {
        this.donutService = donutService;
    }
    // @Input() showTotal: boolean;
    set showTotal(value) {
        if (value && value === true) {
            this._showTotal = true;
        }
        else {
            this._showTotal = false;
        }
    }
    // donutData: Donut[];
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
        this.showLegend = false;
        //Settings End
    }
    fetchFakeData() {
        this.donutData = [
            { name: 'Red', value: '20', color: '#E25325' },
            { name: 'Blue', value: '30', color: '#6064CF' },
            { name: 'Black', value: '10', color: '#5A5C59' },
            { name: 'Green', value: '40', color: '#50FD1D' }
        ];
    }
}
DonutComponent.ɵfac = function DonutComponent_Factory(t) { return new (t || DonutComponent)(ɵɵdirectiveInject(DonutService)); };
DonutComponent.ɵcmp = ɵɵdefineComponent({ type: DonutComponent, selectors: [["ng-donut"]], inputs: { showTotal: "showTotal", donutData: "donutData", innerLabel: "innerLabel" }, decls: 11, vars: 3, consts: [[1, "figure-class"], ["fxFlex", "57%", 1, "figure-content"], ["width", "100%", "height", "100%", "viewBox", "0 0 42 42", "aria-labelledby", "beers-title beers-desc", "role", "img", 1, "donut"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "#fff", "role", "presentation", 1, "donut-hole"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "stroke", "#d2d3d4", "stroke-width", "3", "role", "presentation", 1, "donut-ring"], ["class", "donut-segment", "cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 3, "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", 4, "ngFor", "ngForOf"], [1, "chart-text"], ["x", "50%", "y", "50%", "class", "chart-label", 4, "ngIf"], ["x", "50%", "y", "50%", "class", "chart-number", 4, "ngIf"], ["fxFlex", "43%", 1, "figure-key"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 1, "donut-segment"], ["x", "50%", "y", "50%", 1, "chart-label"], ["x", "50%", "y", "50%", 1, "chart-number"]], template: function DonutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "figure", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵnamespaceSVG();
        ɵɵelementStart(3, "svg", 2);
        ɵɵelement(4, "circle", 3);
        ɵɵelement(5, "circle", 4);
        ɵɵtemplate(6, DonutComponent__svg_circle_6_Template, 1, 8, "circle", 5);
        ɵɵelementStart(7, "g", 6);
        ɵɵtemplate(8, DonutComponent__svg_text_8_Template, 2, 1, "text", 7);
        ɵɵtemplate(9, DonutComponent__svg_text_9_Template, 2, 1, "text", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelement(10, "figcaption", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngForOf", ctx.donutData);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.innerLabelText);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx._showTotal);
    } }, directives: [NgForOf, NgIf], styles: ["body[_ngcontent-%COMP%]{font:16px/1.4em Montserrat,Arial,sans-serif}*[_ngcontent-%COMP%]{box-sizing:border-box}.chart-text[_ngcontent-%COMP%]{fill:#000;transform:translateY(.25em)}.chart-number[_ngcontent-%COMP%]{font-size:.6em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label[_ngcontent-%COMP%]{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content[_ngcontent-%COMP%]{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:auto}.figure-key[_ngcontent-%COMP%]{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key[_ngcontent-%COMP%]   [class*=shape-][_ngcontent-%COMP%]{margin-right:6px}.figure-key-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.figure-key-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue[_ngcontent-%COMP%]{background-color:#0091ea}.shape-orange[_ngcontent-%COMP%]{background-color:#ff6d00}.shape-green[_ngcontent-%COMP%]{background-color:#00c853}.shape-gray[_ngcontent-%COMP%]{background-color:#4a4a4a}.shape-yellow[_ngcontent-%COMP%]{background-color:#eec400}.shape-red[_ngcontent-%COMP%]{background-color:#c00}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure[_ngcontent-%COMP%]{flex-direction:row}}.figure-class[_ngcontent-%COMP%]{flex-direction:row;display:flex}.donut-data-count-percentage[_ngcontent-%COMP%]{float:right;margin-right:15%}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DonutComponent, [{
        type: Component,
        args: [{
                selector: 'ng-donut',
                templateUrl: './donut.component.html',
                styleUrls: ['./donut.component.css']
            }]
    }], function () { return [{ type: DonutService }]; }, { showTotal: [{
            type: Input
        }], donutData: [{
            type: Input
        }], innerLabel: [{
            type: Input
        }] }); })();

class DonutModule {
}
DonutModule.ɵmod = ɵɵdefineNgModule({ type: DonutModule });
DonutModule.ɵinj = ɵɵdefineInjector({ factory: function DonutModule_Factory(t) { return new (t || DonutModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DonutModule, { declarations: [DonutComponent], imports: [CommonModule], exports: [DonutComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DonutModule, [{
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
//# sourceMappingURL=donut.js.map
