import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { DonutService } from './donut.service';
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
DonutComponent = __decorate([
    Component({
        selector: 'ng-donut',
        template: "<div #parent>\n    <figure class='figure-class'>\n      <div class=\"figure-content\" fxFlex='57%'>\n        <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 42 42\" class=\"donut\" aria-labelledby=\"beers-title beers-desc\"\n          role=\"img\">\n          <circle class=\"donut-hole\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\" fill=\"#fff\" role=\"presentation\"></circle>\n          <circle class=\"donut-ring\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\" fill=\"transparent\" stroke=\"#d2d3d4\"\n            stroke-width=\"3\" role=\"presentation\"></circle>\n  \n          <circle *ngFor=\"let data of donutData;\" class=\"donut-segment\" cx=\"21\" cy=\"21\" r=\"15.91549430918954\"\n            fill=\"transparent\" [style.stroke]=\"data.color\" [style.stroke-width]=\"strokeWidth\" [style.stroke-dasharray]=\"data.strokeDasharray\"\n            [style.stroke-dashoffset]=\"data.strokeOffset\" aria-labelledby=\"donut-segment-1-title donut-segment-1-desc\">\n          </circle>\n          <!-- unused 10% -->\n          <g class=\"chart-text\">\n            <text *ngIf='innerLabelText' x=\"50%\" y=\"50%\" class=\"chart-label\">\n              {{innerLabelText}}\n            </text>\n            <text *ngIf='_showTotal' x=\"50%\" y=\"50%\" class=\"chart-number\">\n              {{sum}}\n            </text>\n          </g>\n        </svg>\n      </div>\n      <div *ngIf=\"_showLegend\" class=\"figure-key\" fxFlex='43%'>\n      <figcaption>\n        <ul class=\"figure-key-list\" aria-hidden=\"true\" role=\"presentation\">\n          <li *ngFor=\"let data of donutData;\">\n            <span class=\"shape-circle\" [style.background-color]=\"data.color\"></span><b>{{data.name}} </b>\n            <span class=\"donut-data-count-percentage\">\n              {{data.value}}({{data.percentage}}%)\n            </span>\n          </li>\n        </ul>\n      </figcaption>\n    </div>\n    </figure>\n  </div>",
        styles: ["body{font:16px/1.4em Montserrat,Arial,sans-serif}*{box-sizing:border-box}.chart-text{fill:#000;transform:translateY(.25em)}.chart-number{font-size:.4em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content svg{height:auto}.figure-key{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key [class*=shape-]{margin-right:6px}.figure-key-list{margin:0;padding:0;list-style:none}.figure-key-list li{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue{background-color:#0091ea}.shape-orange{background-color:#ff6d00}.shape-green{background-color:#00c853}.shape-gray{background-color:#4a4a4a}.shape-yellow{background-color:#eec400}.shape-red{background-color:#c00}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure{flex-direction:row}}.figure-class{flex-direction:row;display:flex}.donut-data-count-percentage{float:right;margin-right:15%}"]
    })
], DonutComponent);
export { DonutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5nLWRvbnV0LyIsInNvdXJjZXMiOlsibGliL2RvbnV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRL0MsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQWdEekIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBSSxDQUFDO0lBdENuRCxxQ0FBcUM7SUFDNUIsSUFBSSxTQUFTLENBQUMsS0FBYztRQUNuQyxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQ0k7WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDUSxJQUFJLFVBQVUsQ0FBQyxLQUFjO1FBQ3BDLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFDSTtZQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUNRLElBQUksR0FBRyxDQUFDLEtBQWU7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUV2QjtJQUVILENBQUM7SUFHRCxtQkFBbUI7SUFDVixJQUFJLFVBQVUsQ0FBQyxLQUFhO1FBQ25DLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0I7YUFDSTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUtELFFBQVE7UUFDTix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztRQUNqQywyQkFBMkI7UUFDM0IsY0FBYztJQUdoQixDQUFDO0lBRUQsZUFBZTtRQUNYLFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFFOUQsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtTQUNqRCxDQUFDO0lBQ0osQ0FBQztDQUVGLENBQUE7O1lBN0JtQyxZQUFZOztBQXZDekI7SUFBcEIsU0FBUyxDQUFDLFFBQVEsQ0FBQzs4Q0FBb0I7QUFFL0I7SUFBUixLQUFLLEVBQUU7K0NBT1A7QUFDUTtJQUFSLEtBQUssRUFBRTtnREFPUDtBQUNRO0lBQVIsS0FBSyxFQUFFO3lDQU9QO0FBRVE7SUFBUixLQUFLLEVBQUU7aURBQW9CO0FBRW5CO0lBQVIsS0FBSyxFQUFFO2dEQU9QO0FBN0NVLGNBQWM7SUFMMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsKzREQUFxQzs7S0FFdEMsQ0FBQztHQUNXLGNBQWMsQ0E2RTFCO1NBN0VZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9udXRTZXJ2aWNlIH0gZnJvbSAnLi9kb251dC5zZXJ2aWNlJztcbmltcG9ydCB7IERvbnV0IH0gZnJvbSAnLi9kb251dC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRvbnV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvbnV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG9udXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEb251dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHVibGljIHN0cm9rZVdpZHRoOiBudW1iZXI7XG4gIHB1YmxpYyBpbm5lckxhYmVsVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgX3Nob3dMZWdlbmQ6IGJvb2xlYW47XG4gIHB1YmxpYyBzdW06IG51bWJlcjtcbiAgcHVibGljIF9zaG93VG90YWw6IGJvb2xlYW47XG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIEBWaWV3Q2hpbGQoJ3BhcmVudCcpIHBhcmVudDogRWxlbWVudFJlZjtcbiAgLy8gU2hvdWxkIHRvdGFsIGJlIHNob3duIGluc2lkZSBEb251dFxuICBASW5wdXQoKSBzZXQgc2hvd1RvdGFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9zaG93VG90YWwgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX3Nob3dUb3RhbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBzZXQgc2hvd0xlZ2VuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fc2hvd0xlZ2VuZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0xlZ2VuZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBzZXQgZGltKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB2YWx1ZVswXTtcbiAgICAgIHRoaXMud2lkdGggPSB2YWx1ZVsxXTtcblxuICAgIH1cblxuICB9XG4gIC8vIERhdGEgd2hpY2ggbmVlZHMgdG8gYmUgcmVuZGVyZWRcbiAgQElucHV0KCkgZG9udXREYXRhOiBEb251dFtdO1xuICAvLyBJbm5lciBMYWJlbCB0ZXh0XG4gIEBJbnB1dCgpIHNldCBpbm5lckxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJMYWJlbFRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlubmVyTGFiZWxUZXh0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9udXRTZXJ2aWNlOiBEb251dFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuZmV0Y2hGYWtlRGF0YSgpO1xuICAgIHRoaXMuZG9udXREYXRhID0gdGhpcy5kb251dFNlcnZpY2UuZ2V0UHJvY2Vzc2VkRGF0YSh0aGlzLmRvbnV0RGF0YSk7XG4gICAgLy9TZXR0aW5ncyBTdGFydCAvLyBOZWVkIHRvIGJpbmQgdGhlc2UgdG8gaW5wdXQgdmFyaWFibGVzIGxhdGVyXG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IDM7XG4gICAgdGhpcy5zdW0gPSB0aGlzLmRvbnV0U2VydmljZS5zdW07XG4gICAgLy8gdGhpcy5zaG93TGVnZW5kID0gZmFsc2U7XG4gICAgLy9TZXR0aW5ncyBFbmRcblxuICBcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIC8vU2V0IERpbVxuICAgICAgdGhpcy5wYXJlbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB0aGlzLnBhcmVudC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG5cbiAgfVxuICBmZXRjaEZha2VEYXRhKCkge1xuICAgIHRoaXMuZG9udXREYXRhID0gW1xuICAgICAgeyBuYW1lOiAnUmVkJywgdmFsdWU6ICcyMCcsIGNvbG9yOiAnI0UyNTMyNScgfSxcbiAgICAgIHsgbmFtZTogJ0JsdWUnLCB2YWx1ZTogJzMwJywgY29sb3I6ICcjNjA2NENGJyB9LFxuICAgICAgeyBuYW1lOiAnQmxhY2snLCB2YWx1ZTogJzEwJywgY29sb3I6ICcjNUE1QzU5JyB9LFxuICAgICAgeyBuYW1lOiAnR3JlZW4nLCB2YWx1ZTogJzQwJywgY29sb3I6ICcjNTBGRDFEJyB9XG4gICAgXTtcbiAgfVxuXG59XG4iXX0=