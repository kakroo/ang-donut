import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ViewChild, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    DonutService.ɵprov = ɵɵdefineInjectable({ factory: function DonutService_Factory() { return new DonutService(); }, token: DonutService, providedIn: "root" });
    DonutService = __decorate([
        Injectable({
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
    DonutComponent = __decorate([
        Component({
            selector: 'ng-donut',
            template: "<div #parent>\n    <figure class='figure-class'>\n      <div class=\"figure-content\" fxFlex='65%'>\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 42 42\" class=\"donut\" aria-labelledby=\"beers-title beers-desc\"\n          role=\"img\">\n          <circle class=\"donut-hole\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\" fill=\"#fff\" role=\"presentation\"></circle>\n          <circle class=\"donut-ring\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\" fill=\"transparent\" stroke=\"#d2d3d4\"\n            stroke-width=\"3\" role=\"presentation\"></circle>\n  \n          <circle *ngFor=\"let data of donutData;\" class=\"donut-segment\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\"\n            fill=\"transparent\" [style.stroke]=\"data.color\" [style.stroke-width]=\"strokeWidth\" [style.stroke-dasharray]=\"data.strokeDasharray\"\n            [style.stroke-dashoffset]=\"data.strokeOffset\" aria-labelledby=\"donut-segment-1-title donut-segment-1-desc\">\n          </circle>\n          <!-- unused 10% -->\n          <g class=\"chart-text\">\n            <text *ngIf='innerLabelText' x=\"50%\" y=\"50%\" class=\"chart-label\">\n              {{innerLabelText}}\n            </text>\n            <text *ngIf='_showTotal' x=\"50%\" y=\"50%\" class=\"chart-number\">\n              {{sum}}\n            </text>\n          </g>\n        </svg>\n      </div>\n      <div *ngIf=\"_showLegend\" class=\"figure-key\" fxFlex='35%'>\n      <figcaption>\n        <ul class=\"figure-key-list\" aria-hidden=\"true\" role=\"presentation\">\n          <li *ngFor=\"let data of donutData;\">\n            <span class=\"shape-circle\" [style.background-color]=\"data.color\"></span>\n            <b>{{data.name}} </b>\n            <span class=\"donut-data-count-percentage\">\n              - {{data.value}} ({{data.percentage}}%)\n            </span>\n          </li>\n        </ul>\n      </figcaption>\n    </div>\n    </figure>\n  </div>",
            styles: ["body{font:16px/1.4em Montserrat,Arial,sans-serif}*{box-sizing:border-box}.chart-text{fill:#000;transform:translateY(.25em)}.chart-number{font-size:.4em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content svg{height:auto}.figure-key{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key [class*=shape-]{margin-right:6px}.figure-key-list{margin:0;padding:0;list-style:none}.figure-key-list li{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue{background-color:#0091ea}.shape-orange{background-color:#ff6d00}.shape-green{background-color:#00c853}.shape-gray{background-color:#4a4a4a}.shape-yellow{background-color:#eec400}.shape-red{background-color:#c00}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure{flex-direction:row}}.figure-class{flex-direction:row;display:flex}"]
        })
    ], DonutComponent);
    return DonutComponent;
}());

var DonutModule = /** @class */ (function () {
    function DonutModule() {
    }
    DonutModule = __decorate([
        NgModule({
            declarations: [DonutComponent],
            imports: [CommonModule],
            exports: [DonutComponent]
        })
    ], DonutModule);
    return DonutModule;
}());

/*
 * Public API Surface of donut
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DonutComponent, DonutModule, DonutService };
//# sourceMappingURL=ang-donut.js.map
