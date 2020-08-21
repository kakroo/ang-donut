import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { DonutService } from './donut.service';
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
export { DonutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5nLWRvbnV0LyIsInNvdXJjZXMiOlsibGliL2RvbnV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRL0M7SUFnREUsd0JBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQXJDMUMsc0JBQUkscUNBQVM7UUFEdEIscUNBQXFDO2FBQzVCLFVBQWMsS0FBYztZQUNuQyxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtpQkFDSTtnQkFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6QjtRQUNILENBQUM7OztPQUFBO0lBQ1Esc0JBQUksc0NBQVU7YUFBZCxVQUFlLEtBQWM7WUFDcEMsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDekI7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDMUI7UUFDSCxDQUFDOzs7T0FBQTtJQUNRLHNCQUFJLCtCQUFHO2FBQVAsVUFBUSxLQUFlO1lBQzlCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUV2QjtRQUVILENBQUM7OztPQUFBO0lBSVEsc0JBQUksc0NBQVU7UUFEdkIsbUJBQW1CO2FBQ1YsVUFBZSxLQUFhO1lBQ25DLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2FBQzdCO2lCQUNJO2dCQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BQUE7SUFLRCxpQ0FBUSxHQUFSO1FBQ0Usd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEUsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7UUFDakMsMkJBQTJCO1FBQzNCLGNBQWM7SUFHaEIsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxTQUFTO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBRTlELENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDOUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ2hELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7U0FDakQsQ0FBQztJQUNKLENBQUM7O2dCQTNCaUMsWUFBWTs7SUF2Q3pCO1FBQXBCLFNBQVMsQ0FBQyxRQUFRLENBQUM7a0RBQW9CO0lBRS9CO1FBQVIsS0FBSyxFQUFFO21EQU9QO0lBQ1E7UUFBUixLQUFLLEVBQUU7b0RBT1A7SUFDUTtRQUFSLEtBQUssRUFBRTs2Q0FPUDtJQUVRO1FBQVIsS0FBSyxFQUFFO3FEQUFvQjtJQUVuQjtRQUFSLEtBQUssRUFBRTtvREFPUDtJQTdDVSxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGc2REFBcUM7O1NBRXRDLENBQUM7T0FDVyxjQUFjLENBNkUxQjtJQUFELHFCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0E3RVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb251dFNlcnZpY2UgfSBmcm9tICcuL2RvbnV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9udXQgfSBmcm9tICcuL2RvbnV0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZG9udXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZG9udXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kb251dC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERvbnV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBwdWJsaWMgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgcHVibGljIGlubmVyTGFiZWxUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBfc2hvd0xlZ2VuZDogYm9vbGVhbjtcbiAgcHVibGljIHN1bTogbnVtYmVyO1xuICBwdWJsaWMgX3Nob3dUb3RhbDogYm9vbGVhbjtcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgQFZpZXdDaGlsZCgncGFyZW50JykgcGFyZW50OiBFbGVtZW50UmVmO1xuICAvLyBTaG91bGQgdG90YWwgYmUgc2hvd24gaW5zaWRlIERvbnV0XG4gIEBJbnB1dCgpIHNldCBzaG93VG90YWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX3Nob3dUb3RhbCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd1RvdGFsID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHNldCBzaG93TGVnZW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9zaG93TGVnZW5kID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zaG93TGVnZW5kID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHNldCBkaW0odmFsdWU6IG51bWJlcltdKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IHZhbHVlWzBdO1xuICAgICAgdGhpcy53aWR0aCA9IHZhbHVlWzFdO1xuXG4gICAgfVxuXG4gIH1cbiAgLy8gRGF0YSB3aGljaCBuZWVkcyB0byBiZSByZW5kZXJlZFxuICBASW5wdXQoKSBkb251dERhdGE6IERvbnV0W107XG4gIC8vIElubmVyIExhYmVsIHRleHRcbiAgQElucHV0KCkgc2V0IGlubmVyTGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5pbm5lckxhYmVsVGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5uZXJMYWJlbFRleHQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb251dFNlcnZpY2U6IERvbnV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5mZXRjaEZha2VEYXRhKCk7XG4gICAgdGhpcy5kb251dERhdGEgPSB0aGlzLmRvbnV0U2VydmljZS5nZXRQcm9jZXNzZWREYXRhKHRoaXMuZG9udXREYXRhKTtcbiAgICAvL1NldHRpbmdzIFN0YXJ0IC8vIE5lZWQgdG8gYmluZCB0aGVzZSB0byBpbnB1dCB2YXJpYWJsZXMgbGF0ZXJcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gMztcbiAgICB0aGlzLnN1bSA9IHRoaXMuZG9udXRTZXJ2aWNlLnN1bTtcbiAgICAvLyB0aGlzLnNob3dMZWdlbmQgPSBmYWxzZTtcbiAgICAvL1NldHRpbmdzIEVuZFxuXG4gIFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgLy9TZXQgRGltXG4gICAgICB0aGlzLnBhcmVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMucGFyZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcblxuICB9XG4gIGZldGNoRmFrZURhdGEoKSB7XG4gICAgdGhpcy5kb251dERhdGEgPSBbXG4gICAgICB7IG5hbWU6ICdSZWQnLCB2YWx1ZTogJzIwJywgY29sb3I6ICcjRTI1MzI1JyB9LFxuICAgICAgeyBuYW1lOiAnQmx1ZScsIHZhbHVlOiAnMzAnLCBjb2xvcjogJyM2MDY0Q0YnIH0sXG4gICAgICB7IG5hbWU6ICdCbGFjaycsIHZhbHVlOiAnMTAnLCBjb2xvcjogJyM1QTVDNTknIH0sXG4gICAgICB7IG5hbWU6ICdHcmVlbicsIHZhbHVlOiAnNDAnLCBjb2xvcjogJyM1MEZEMUQnIH1cbiAgICBdO1xuICB9XG5cbn1cbiJdfQ==