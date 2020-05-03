import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./donut.service";
import * as i2 from "@angular/common";
function DonutComponent__svg_circle_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle", 10);
} if (rf & 2) {
    var data_r3 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("stroke", data_r3.color)("stroke-width", ctx_r0.strokeWidth)("stroke-dasharray", data_r3.strokeDasharray)("stroke-dashoffset", data_r3.strokeOffset);
} }
function DonutComponent__svg_text_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.innerLabelText, " ");
} }
function DonutComponent__svg_text_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.sum, " ");
} }
var DonutComponent = /** @class */ (function () {
    function DonutComponent(donutService) {
        this.donutService = donutService;
    }
    Object.defineProperty(DonutComponent.prototype, "showTotal", {
        // @Input() showTotal: boolean;
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
    Object.defineProperty(DonutComponent.prototype, "innerLabel", {
        // donutData: Donut[];
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
    DonutComponent.prototype.fetchFakeData = function () {
        this.donutData = [
            { name: 'Red', value: '20', color: '#E25325' },
            { name: 'Blue', value: '30', color: '#6064CF' },
            { name: 'Black', value: '10', color: '#5A5C59' },
            { name: 'Green', value: '40', color: '#50FD1D' }
        ];
    };
    DonutComponent.ɵfac = function DonutComponent_Factory(t) { return new (t || DonutComponent)(i0.ɵɵdirectiveInject(i1.DonutService)); };
    DonutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DonutComponent, selectors: [["ng-donut"]], inputs: { showTotal: "showTotal", donutData: "donutData", innerLabel: "innerLabel" }, decls: 11, vars: 3, consts: [[1, "figure-class"], ["fxFlex", "57%", 1, "figure-content"], ["width", "100%", "height", "100%", "viewBox", "0 0 42 42", "aria-labelledby", "beers-title beers-desc", "role", "img", 1, "donut"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "#fff", "role", "presentation", 1, "donut-hole"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "stroke", "#d2d3d4", "stroke-width", "3", "role", "presentation", 1, "donut-ring"], ["class", "donut-segment", "cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 3, "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", 4, "ngFor", "ngForOf"], [1, "chart-text"], ["x", "50%", "y", "50%", "class", "chart-label", 4, "ngIf"], ["x", "50%", "y", "50%", "class", "chart-number", 4, "ngIf"], ["fxFlex", "43%", 1, "figure-key"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 1, "donut-segment"], ["x", "50%", "y", "50%", 1, "chart-label"], ["x", "50%", "y", "50%", 1, "chart-number"]], template: function DonutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "figure", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 2);
            i0.ɵɵelement(4, "circle", 3);
            i0.ɵɵelement(5, "circle", 4);
            i0.ɵɵtemplate(6, DonutComponent__svg_circle_6_Template, 1, 8, "circle", 5);
            i0.ɵɵelementStart(7, "g", 6);
            i0.ɵɵtemplate(8, DonutComponent__svg_text_8_Template, 2, 1, "text", 7);
            i0.ɵɵtemplate(9, DonutComponent__svg_text_9_Template, 2, 1, "text", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(10, "figcaption", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.donutData);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.innerLabelText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx._showTotal);
        } }, directives: [i2.NgForOf, i2.NgIf], styles: ["body[_ngcontent-%COMP%]{font:16px/1.4em Montserrat,Arial,sans-serif}*[_ngcontent-%COMP%]{box-sizing:border-box}.chart-text[_ngcontent-%COMP%]{fill:#000;transform:translateY(.25em)}.chart-number[_ngcontent-%COMP%]{font-size:.6em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label[_ngcontent-%COMP%]{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content[_ngcontent-%COMP%]{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:auto}.figure-key[_ngcontent-%COMP%]{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key[_ngcontent-%COMP%]   [class*=shape-][_ngcontent-%COMP%]{margin-right:6px}.figure-key-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.figure-key-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue[_ngcontent-%COMP%]{background-color:#0091ea}.shape-orange[_ngcontent-%COMP%]{background-color:#ff6d00}.shape-green[_ngcontent-%COMP%]{background-color:#00c853}.shape-gray[_ngcontent-%COMP%]{background-color:#4a4a4a}.shape-yellow[_ngcontent-%COMP%]{background-color:#eec400}.shape-red[_ngcontent-%COMP%]{background-color:#c00}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure[_ngcontent-%COMP%]{flex-direction:row}}.figure-class[_ngcontent-%COMP%]{flex-direction:row;display:flex}.donut-data-count-percentage[_ngcontent-%COMP%]{float:right;margin-right:15%}"] });
    return DonutComponent;
}());
export { DonutComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DonutComponent, [{
        type: Component,
        args: [{
                selector: 'ng-donut',
                templateUrl: './donut.component.html',
                styleUrls: ['./donut.component.css']
            }]
    }], function () { return [{ type: i1.DonutService }]; }, { showTotal: [{
            type: Input
        }], donutData: [{
            type: Input
        }], innerLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9udXQvIiwic291cmNlcyI6WyJsaWIvZG9udXQuY29tcG9uZW50LnRzIiwibGliL2RvbnV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNTL0MsNkJBR1M7Ozs7SUFGWSx1Q0FBMkIsb0NBQUEsNkNBQUEsMkNBQUE7Ozs7SUFLOUMsZ0NBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU87OztJQURMLGVBQ0Y7SUFERSxzREFDRjs7OztJQUNBLGdDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFPOzs7SUFETCxlQUNGO0lBREUsMkNBQ0Y7O0FEaEJaO0lBbUNFLHdCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUF0Qm5ELHNCQUFhLHFDQUFTO1FBRHRCLCtCQUErQjthQUMvQixVQUF1QixLQUFjO1lBQ25DLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO2lCQUNJO2dCQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQzs7O09BQUE7SUFLRCxzQkFBYSxzQ0FBVTtRQUZ2QixzQkFBc0I7YUFFdEIsVUFBd0IsS0FBSztZQUMzQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzthQUM3QjtpQkFDSTtnQkFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzthQUM1QjtRQUNILENBQUM7OztPQUFBO0lBS0QsaUNBQVEsR0FBUjtRQUNFLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGNBQWM7SUFDaEIsQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtTQUNqRCxDQUFDO0lBQ0osQ0FBQztnRkFoRFUsY0FBYzt1REFBZCxjQUFjO1lDVDNCLDJCQUNJO1lBQUEsaUNBQ0U7WUFBQSw4QkFDRTtZQUFBLG1CQUVFO1lBRkYsOEJBRUU7WUFBQSw0QkFBMEc7WUFDMUcsNEJBQ2dEO1lBRWhELDBFQUdBO1lBRUEsNEJBQ0U7WUFBQSxzRUFDRTtZQUVGLHNFQUNFO1lBRUosaUJBQUk7WUFDTixpQkFBTTtZQUNSLGlCQUFNO1lBQ04sb0JBa0NhO1lBbENiLGlDQWtDYTtZQUNmLGlCQUFTO1lBQ1gsaUJBQU07O1lBbkRVLGVBQStCO1lBQS9CLHVDQUErQjtZQU0vQixlQUFzQjtZQUF0Qix5Q0FBc0I7WUFHdEIsZUFBa0I7WUFBbEIscUNBQWtCOzt5QkRsQnBDO0NBMkRDLEFBdkRELElBdURDO1NBbERZLGNBQWM7a0RBQWQsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOztrQkFTRSxLQUFLOztrQkFTTCxLQUFLOztrQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb251dFNlcnZpY2UgfSBmcm9tICcuL2RvbnV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9udXQgfSBmcm9tICcuL2RvbnV0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZG9udXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZG9udXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kb251dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG9udXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBzdHJva2VXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgaW5uZXJMYWJlbFRleHQ6IHN0cmluZztcbiAgcHVibGljIHNob3dMZWdlbmQ6IGJvb2xlYW47XG4gIHB1YmxpYyBzdW06IG51bWJlcjtcbiAgcHVibGljIF9zaG93VG90YWw6IGJvb2xlYW47XG4gIC8vIEBJbnB1dCgpIHNob3dUb3RhbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2V0IHNob3dUb3RhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fc2hvd1RvdGFsID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zaG93VG90YWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBkb251dERhdGE6IERvbnV0W107XG4gIC8vIGRvbnV0RGF0YTogRG9udXRbXTtcblxuICBASW5wdXQoKSBzZXQgaW5uZXJMYWJlbCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5pbm5lckxhYmVsVGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5uZXJMYWJlbFRleHQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb251dFNlcnZpY2U6IERvbnV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5mZXRjaEZha2VEYXRhKCk7XG4gICAgdGhpcy5kb251dERhdGEgPSB0aGlzLmRvbnV0U2VydmljZS5nZXRQcm9jZXNzZWREYXRhKHRoaXMuZG9udXREYXRhKTtcbiAgICAvL1NldHRpbmdzIFN0YXJ0IC8vIE5lZWQgdG8gYmluZCB0aGVzZSB0byBpbnB1dCB2YXJpYWJsZXMgbGF0ZXJcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gMztcbiAgICB0aGlzLnN1bSA9IHRoaXMuZG9udXRTZXJ2aWNlLnN1bTtcbiAgICB0aGlzLnNob3dMZWdlbmQgPSBmYWxzZTtcbiAgICAvL1NldHRpbmdzIEVuZFxuICB9XG4gIGZldGNoRmFrZURhdGEoKSB7XG4gICAgdGhpcy5kb251dERhdGEgPSBbXG4gICAgICB7IG5hbWU6ICdSZWQnLCB2YWx1ZTogJzIwJywgY29sb3I6ICcjRTI1MzI1JyB9LFxuICAgICAgeyBuYW1lOiAnQmx1ZScsIHZhbHVlOiAnMzAnLCBjb2xvcjogJyM2MDY0Q0YnIH0sXG4gICAgICB7IG5hbWU6ICdCbGFjaycsIHZhbHVlOiAnMTAnLCBjb2xvcjogJyM1QTVDNTknIH0sXG4gICAgICB7IG5hbWU6ICdHcmVlbicsIHZhbHVlOiAnNDAnLCBjb2xvcjogJyM1MEZEMUQnIH1cbiAgICBdO1xuICB9XG5cbn1cbiIsIjxkaXY+XHJcbiAgICA8ZmlndXJlIGNsYXNzPSdmaWd1cmUtY2xhc3MnPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlndXJlLWNvbnRlbnRcIiBmeEZsZXg9JzU3JSc+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA0MiA0MlwiIGNsYXNzPVwiZG9udXRcIiBhcmlhLWxhYmVsbGVkYnk9XCJiZWVycy10aXRsZSBiZWVycy1kZXNjXCJcclxuICAgICAgICAgIHJvbGU9XCJpbWdcIj5cclxuICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJkb251dC1ob2xlXCIgY3g9XCIyMVwiIGN5PVwiMjFcIiByPVwiMTUuOTE1NDk0MzA5MTg5NTRcIiBmaWxsPVwiI2ZmZlwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2NpcmNsZT5cclxuICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJkb251dC1yaW5nXCIgY3g9XCIyMVwiIGN5PVwiMjFcIiByPVwiMTUuOTE1NDk0MzA5MTg5NTRcIiBmaWxsPVwidHJhbnNwYXJlbnRcIiBzdHJva2U9XCIjZDJkM2Q0XCJcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2NpcmNsZT5cclxuICBcclxuICAgICAgICAgIDxjaXJjbGUgKm5nRm9yPVwibGV0IGRhdGEgb2YgZG9udXREYXRhO1wiIGNsYXNzPVwiZG9udXQtc2VnbWVudFwiIGN4PVwiMjFcIiBjeT1cIjIxXCIgcj1cIjE1LjkxNTQ5NDMwOTE4OTU0XCJcclxuICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCIgW3N0eWxlLnN0cm9rZV09XCJkYXRhLmNvbG9yXCIgW3N0eWxlLnN0cm9rZS13aWR0aF09XCJzdHJva2VXaWR0aFwiIFtzdHlsZS5zdHJva2UtZGFzaGFycmF5XT1cImRhdGEuc3Ryb2tlRGFzaGFycmF5XCJcclxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZS1kYXNob2Zmc2V0XT1cImRhdGEuc3Ryb2tlT2Zmc2V0XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZG9udXQtc2VnbWVudC0xLXRpdGxlIGRvbnV0LXNlZ21lbnQtMS1kZXNjXCI+XHJcbiAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgIDwhLS0gdW51c2VkIDEwJSAtLT5cclxuICAgICAgICAgIDxnIGNsYXNzPVwiY2hhcnQtdGV4dFwiPlxyXG4gICAgICAgICAgICA8dGV4dCAqbmdJZj0naW5uZXJMYWJlbFRleHQnIHg9XCI1MCVcIiB5PVwiNTAlXCIgY2xhc3M9XCJjaGFydC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIHt7aW5uZXJMYWJlbFRleHR9fVxyXG4gICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0ICpuZ0lmPSdfc2hvd1RvdGFsJyB4PVwiNTAlXCIgeT1cIjUwJVwiIGNsYXNzPVwiY2hhcnQtbnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAge3tzdW19fVxyXG4gICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbiBjbGFzcz1cImZpZ3VyZS1rZXlcIiBmeEZsZXg9JzQzJSc+XHJcbiAgXHJcbiAgICAgICAgPCEtLSA8dWwgY2xhc3M9XCJmaWd1cmUta2V5LWxpc3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hhcGUtY2lyY2xlIHNoYXBlLWdyYXlcIj48L3NwYW4+PGI+T3BlbiA8L2I+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZG9udXQtZGF0YS1jb3VudC1wZXJjZW50YWdlXCI+XHJcbiAgICAgICAgICAgICAge3tvcGVuV29ya09yZGVyc0NvdW50fX0oe3tvcGVuUGVyY2VudGFnZX19JSlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaGFwZS1jaXJjbGUgc2hhcGUtYmx1ZVwiPjwvc3Bhbj48Yj4gUGVuZC4gQXVkaXQgPC9iPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvbnV0LWRhdGEtY291bnQtcGVyY2VudGFnZVwiPlxyXG4gICAgICAgICAgICAgIHt7YXVkaXRQZW5kaW5nV29ya09yZGVyc0NvdW50fX0oe3twZW5kaW5nQXVkaXRQZXJjZW50YWdlfX0lKVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNoYXBlLWNpcmNsZSBzaGFwZS1vcmFuZ2VcIj48L3NwYW4+IDxiPkF1ZGl0IEluIFByb2cuPC9iPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvbnV0LWRhdGEtY291bnQtcGVyY2VudGFnZVwiPlxyXG4gICAgICAgICAgICAgIHt7YXVkaXRJbnByb2dyZXNzV29ya09yZGVyc0NvdW50fX0oe3tpblByb2dyZXNzUGVyY2VudGFnZX19JSlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaGFwZS1jaXJjbGUgc2hhcGUtcmVkXCI+PC9zcGFuPiA8Yj5OZWVkcyBSZXZpZXc8L2I+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZG9udXQtZGF0YS1jb3VudC1wZXJjZW50YWdlXCI+XHJcbiAgICAgICAgICAgICAge3tuZWVkc1Jldmlld1dvcmtPcmRlcnNDb3VudH19KHt7bmVlZHNSZXZpZXdQZXJjZW50YWdlfX0lKVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNoYXBlLWNpcmNsZSBzaGFwZS1ncmVlblwiPjwvc3Bhbj4gPGI+QXVkaXQgQ21wbHQgPC9iPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvbnV0LWRhdGEtY291bnQtcGVyY2VudGFnZVwiPlxyXG4gICAgICAgICAgICAgIHt7YmlsbGluZ0F1ZGl0Q29tcGxldGVkV29ya09yZGVyc0NvdW50fX0oe3thdWRpdENvbXBsZXRlUGVyY2VudGFnZX19JSlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPiAtLT5cclxuICAgICAgPC9maWdjYXB0aW9uPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgPC9kaXY+Il19