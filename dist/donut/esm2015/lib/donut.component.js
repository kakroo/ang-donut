import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./donut.service";
import * as i2 from "@angular/common";
const _c0 = ["parent"];
function DonutComponent__svg_circle_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle", 13);
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("stroke", data_r5.color)("stroke-width", ctx_r1.strokeWidth)("stroke-dasharray", data_r5.strokeDasharray)("stroke-dashoffset", data_r5.strokeOffset);
} }
function DonutComponent__svg_text_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.innerLabelText, " ");
} }
function DonutComponent__svg_text_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.sum, " ");
} }
function DonutComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "span", 16);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 17);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", data_r6.color);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", data_r6.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", data_r6.value, "(", data_r6.percentage, "%) ");
} }
export class DonutComponent {
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
        this.showLegend = false;
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
}
DonutComponent.ɵfac = function DonutComponent_Factory(t) { return new (t || DonutComponent)(i0.ɵɵdirectiveInject(i1.DonutService)); };
DonutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DonutComponent, selectors: [["ng-donut"]], viewQuery: function DonutComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.parent = _t.first);
    } }, inputs: { showTotal: "showTotal", dim: "dim", donutData: "donutData", innerLabel: "innerLabel" }, decls: 15, vars: 4, consts: [["parent", ""], [1, "figure-class"], ["fxFlex", "57%", 1, "figure-content"], ["width", "100%", "height", "100%", "viewBox", "0 0 42 42", "aria-labelledby", "beers-title beers-desc", "role", "img", 1, "donut"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "#fff", "role", "presentation", 1, "donut-hole"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "stroke", "#d2d3d4", "stroke-width", "3", "role", "presentation", 1, "donut-ring"], ["class", "donut-segment", "cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 3, "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", 4, "ngFor", "ngForOf"], [1, "chart-text"], ["x", "50%", "y", "50%", "class", "chart-label", 4, "ngIf"], ["x", "50%", "y", "50%", "class", "chart-number", 4, "ngIf"], ["fxFlex", "43%", 1, "figure-key"], ["aria-hidden", "true", "role", "presentation", 1, "figure-key-list"], [4, "ngFor", "ngForOf"], ["cx", "21", "cy", "21", "r", "15.91549430918954", "fill", "transparent", "aria-labelledby", "donut-segment-1-title donut-segment-1-desc", 1, "donut-segment"], ["x", "50%", "y", "50%", 1, "chart-label"], ["x", "50%", "y", "50%", 1, "chart-number"], [1, "shape-circle"], [1, "donut-data-count-percentage"]], template: function DonutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵelementStart(2, "figure", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(4, "svg", 3);
        i0.ɵɵelement(5, "circle", 4);
        i0.ɵɵelement(6, "circle", 5);
        i0.ɵɵtemplate(7, DonutComponent__svg_circle_7_Template, 1, 8, "circle", 6);
        i0.ɵɵelementStart(8, "g", 7);
        i0.ɵɵtemplate(9, DonutComponent__svg_text_9_Template, 2, 1, "text", 8);
        i0.ɵɵtemplate(10, DonutComponent__svg_text_10_Template, 2, 1, "text", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(11, "div", 10);
        i0.ɵɵelementStart(12, "figcaption");
        i0.ɵɵelementStart(13, "ul", 11);
        i0.ɵɵtemplate(14, DonutComponent_li_14_Template, 6, 5, "li", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.donutData);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.innerLabelText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._showTotal);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.donutData);
    } }, directives: [i2.NgForOf, i2.NgIf], styles: ["body[_ngcontent-%COMP%]{font:16px/1.4em Montserrat,Arial,sans-serif}*[_ngcontent-%COMP%]{box-sizing:border-box}.chart-text[_ngcontent-%COMP%]{fill:#000;transform:translateY(.25em)}.chart-number[_ngcontent-%COMP%]{font-size:.4em;line-height:1;text-anchor:middle;transform:translateY(.7em) translateX(-.1em)}.chart-label[_ngcontent-%COMP%]{font-size:.2em;text-anchor:middle;transform:translateY(-1.3em)}figure[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:column;margin-left:-15px;margin-right:-15px}.figure-content[_ngcontent-%COMP%]{flex:1;padding-left:15px;padding-right:15px;-ms-grid-row-align:center;align-self:center}.figure-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:auto}.figure-key[_ngcontent-%COMP%]{flex:1;-ms-grid-row-align:center;align-self:center;min-width:calc(8 / 12)}.figure-key[_ngcontent-%COMP%]   [class*=shape-][_ngcontent-%COMP%]{margin-right:6px}.figure-key-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.figure-key-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 0 8px;padding:0;font-size:7pt}.shape-circle[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:20%}.shape-blue[_ngcontent-%COMP%]{background-color:#0091ea}.shape-orange[_ngcontent-%COMP%]{background-color:#ff6d00}.shape-green[_ngcontent-%COMP%]{background-color:#00c853}.shape-gray[_ngcontent-%COMP%]{background-color:#4a4a4a}.shape-yellow[_ngcontent-%COMP%]{background-color:#eec400}.shape-red[_ngcontent-%COMP%]{background-color:#c00}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (min-width:768px){figure[_ngcontent-%COMP%]{flex-direction:row}}.figure-class[_ngcontent-%COMP%]{flex-direction:row;display:flex}.donut-data-count-percentage[_ngcontent-%COMP%]{float:right;margin-right:15%}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DonutComponent, [{
        type: Component,
        args: [{
                selector: 'ng-donut',
                templateUrl: './donut.component.html',
                styleUrls: ['./donut.component.scss']
            }]
    }], function () { return [{ type: i1.DonutService }]; }, { parent: [{
            type: ViewChild,
            args: ['parent']
        }], showTotal: [{
            type: Input
        }], dim: [{
            type: Input
        }], donutData: [{
            type: Input
        }], innerLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9udXQvIiwic291cmNlcyI6WyJsaWIvZG9udXQuY29tcG9uZW50LnRzIiwibGliL2RvbnV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNTckYsNkJBR1M7Ozs7SUFGWSx1Q0FBMkIsb0NBQUEsNkNBQUEsMkNBQUE7Ozs7SUFLOUMsZ0NBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU87OztJQURMLGVBQ0Y7SUFERSxzREFDRjs7OztJQUNBLGdDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFPOzs7SUFETCxlQUNGO0lBREUsMkNBQ0Y7OztJQU9GLDBCQUNFO0lBQUEsMkJBQXdFO0lBQUEseUJBQUc7SUFBQSxZQUFjO0lBQUEsaUJBQUk7SUFDN0YsZ0NBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU87SUFDVCxpQkFBSzs7O0lBSndCLGVBQXFDO0lBQXJDLGlEQUFxQztJQUFXLGVBQWM7SUFBZCw0Q0FBYztJQUV2RixlQUNGO0lBREUseUVBQ0Y7O0FEdEJaLE1BQU0sT0FBTyxjQUFjO0lBd0N6QixZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUE5Qm5ELHFDQUFxQztJQUNyQyxJQUFhLFNBQVMsQ0FBQyxLQUFjO1FBQ25DLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFDSTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUNELElBQWEsR0FBRyxDQUFDLEtBQWU7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUV2QjtJQUVILENBQUM7SUFHRCxtQkFBbUI7SUFDbkIsSUFBYSxVQUFVLENBQUMsS0FBYTtRQUNuQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO2FBQ0k7WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7SUFLRCxRQUFRO1FBQ04sd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEUsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsY0FBYztJQUdoQixDQUFDO0lBRUQsZUFBZTtRQUNYLFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFFOUQsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtTQUNqRCxDQUFDO0lBQ0osQ0FBQzs7NEVBbkVVLGNBQWM7bURBQWQsY0FBYzs7Ozs7O1FDVDNCLG9DQUNJO1FBQUEsaUNBQ0U7UUFBQSw4QkFDRTtRQUFBLG1CQUVFO1FBRkYsOEJBRUU7UUFBQSw0QkFBMEc7UUFDMUcsNEJBQ2dEO1FBRWhELDBFQUdBO1FBRUEsNEJBQ0U7UUFBQSxzRUFDRTtRQUVGLHdFQUNFO1FBRUosaUJBQUk7UUFDTixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sb0JBQ0E7UUFEQSxnQ0FDQTtRQUFBLG1DQUNFO1FBQUEsK0JBQ0U7UUFBQSxnRUFDRTtRQTZCSixpQkFBSztRQUNQLGlCQUFhO1FBQ2YsaUJBQU07UUFDTixpQkFBUztRQUNYLGlCQUFNOztRQXBEVSxlQUErQjtRQUEvQix1Q0FBK0I7UUFNL0IsZUFBc0I7UUFBdEIseUNBQXNCO1FBR3RCLGVBQWtCO1FBQWxCLHFDQUFrQjtRQVN0QixlQUErQjtRQUEvQix1Q0FBK0I7O2tERGxCaEMsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztrQkFVRSxTQUFTO21CQUFDLFFBQVE7O2tCQUVsQixLQUFLOztrQkFRTCxLQUFLOztrQkFTTCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbnV0U2VydmljZSB9IGZyb20gJy4vZG9udXQuc2VydmljZSc7XG5pbXBvcnQgeyBEb251dCB9IGZyb20gJy4vZG9udXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kb251dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb251dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvbnV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG9udXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIHB1YmxpYyBzdHJva2VXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgaW5uZXJMYWJlbFRleHQ6IHN0cmluZztcbiAgcHVibGljIHNob3dMZWdlbmQ6IGJvb2xlYW47XG4gIHB1YmxpYyBzdW06IG51bWJlcjtcbiAgcHVibGljIF9zaG93VG90YWw6IGJvb2xlYW47XG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIEBWaWV3Q2hpbGQoJ3BhcmVudCcpIHBhcmVudDogRWxlbWVudFJlZjtcbiAgLy8gU2hvdWxkIHRvdGFsIGJlIHNob3duIGluc2lkZSBEb251dFxuICBASW5wdXQoKSBzZXQgc2hvd1RvdGFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9zaG93VG90YWwgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX3Nob3dUb3RhbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBzZXQgZGltKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB2YWx1ZVswXTtcbiAgICAgIHRoaXMud2lkdGggPSB2YWx1ZVsxXTtcblxuICAgIH1cblxuICB9XG4gIC8vIERhdGEgd2hpY2ggbmVlZHMgdG8gYmUgcmVuZGVyZWRcbiAgQElucHV0KCkgZG9udXREYXRhOiBEb251dFtdO1xuICAvLyBJbm5lciBMYWJlbCB0ZXh0XG4gIEBJbnB1dCgpIHNldCBpbm5lckxhYmVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJMYWJlbFRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlubmVyTGFiZWxUZXh0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9udXRTZXJ2aWNlOiBEb251dFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuZmV0Y2hGYWtlRGF0YSgpO1xuICAgIHRoaXMuZG9udXREYXRhID0gdGhpcy5kb251dFNlcnZpY2UuZ2V0UHJvY2Vzc2VkRGF0YSh0aGlzLmRvbnV0RGF0YSk7XG4gICAgLy9TZXR0aW5ncyBTdGFydCAvLyBOZWVkIHRvIGJpbmQgdGhlc2UgdG8gaW5wdXQgdmFyaWFibGVzIGxhdGVyXG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IDM7XG4gICAgdGhpcy5zdW0gPSB0aGlzLmRvbnV0U2VydmljZS5zdW07XG4gICAgdGhpcy5zaG93TGVnZW5kID0gZmFsc2U7XG4gICAgLy9TZXR0aW5ncyBFbmRcblxuICBcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIC8vU2V0IERpbVxuICAgICAgdGhpcy5wYXJlbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB0aGlzLnBhcmVudC5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG5cbiAgfVxuICBmZXRjaEZha2VEYXRhKCkge1xuICAgIHRoaXMuZG9udXREYXRhID0gW1xuICAgICAgeyBuYW1lOiAnUmVkJywgdmFsdWU6ICcyMCcsIGNvbG9yOiAnI0UyNTMyNScgfSxcbiAgICAgIHsgbmFtZTogJ0JsdWUnLCB2YWx1ZTogJzMwJywgY29sb3I6ICcjNjA2NENGJyB9LFxuICAgICAgeyBuYW1lOiAnQmxhY2snLCB2YWx1ZTogJzEwJywgY29sb3I6ICcjNUE1QzU5JyB9LFxuICAgICAgeyBuYW1lOiAnR3JlZW4nLCB2YWx1ZTogJzQwJywgY29sb3I6ICcjNTBGRDFEJyB9XG4gICAgXTtcbiAgfVxuXG59XG4iLCI8ZGl2ICNwYXJlbnQ+XHJcbiAgICA8ZmlndXJlIGNsYXNzPSdmaWd1cmUtY2xhc3MnPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlndXJlLWNvbnRlbnRcIiBmeEZsZXg9JzU3JSc+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA0MiA0MlwiIGNsYXNzPVwiZG9udXRcIiBhcmlhLWxhYmVsbGVkYnk9XCJiZWVycy10aXRsZSBiZWVycy1kZXNjXCJcclxuICAgICAgICAgIHJvbGU9XCJpbWdcIj5cclxuICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJkb251dC1ob2xlXCIgY3g9XCIyMVwiIGN5PVwiMjFcIiByPVwiMTUuOTE1NDk0MzA5MTg5NTRcIiBmaWxsPVwiI2ZmZlwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2NpcmNsZT5cclxuICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJkb251dC1yaW5nXCIgY3g9XCIyMVwiIGN5PVwiMjFcIiByPVwiMTUuOTE1NDk0MzA5MTg5NTRcIiBmaWxsPVwidHJhbnNwYXJlbnRcIiBzdHJva2U9XCIjZDJkM2Q0XCJcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiM1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2NpcmNsZT5cclxuICBcclxuICAgICAgICAgIDxjaXJjbGUgKm5nRm9yPVwibGV0IGRhdGEgb2YgZG9udXREYXRhO1wiIGNsYXNzPVwiZG9udXQtc2VnbWVudFwiIGN4PVwiMjFcIiBjeT1cIjIxXCIgcj1cIjE1LjkxNTQ5NDMwOTE4OTU0XCJcclxuICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCIgW3N0eWxlLnN0cm9rZV09XCJkYXRhLmNvbG9yXCIgW3N0eWxlLnN0cm9rZS13aWR0aF09XCJzdHJva2VXaWR0aFwiIFtzdHlsZS5zdHJva2UtZGFzaGFycmF5XT1cImRhdGEuc3Ryb2tlRGFzaGFycmF5XCJcclxuICAgICAgICAgICAgW3N0eWxlLnN0cm9rZS1kYXNob2Zmc2V0XT1cImRhdGEuc3Ryb2tlT2Zmc2V0XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZG9udXQtc2VnbWVudC0xLXRpdGxlIGRvbnV0LXNlZ21lbnQtMS1kZXNjXCI+XHJcbiAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgIDwhLS0gdW51c2VkIDEwJSAtLT5cclxuICAgICAgICAgIDxnIGNsYXNzPVwiY2hhcnQtdGV4dFwiPlxyXG4gICAgICAgICAgICA8dGV4dCAqbmdJZj0naW5uZXJMYWJlbFRleHQnIHg9XCI1MCVcIiB5PVwiNTAlXCIgY2xhc3M9XCJjaGFydC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIHt7aW5uZXJMYWJlbFRleHR9fVxyXG4gICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0ICpuZ0lmPSdfc2hvd1RvdGFsJyB4PVwiNTAlXCIgeT1cIjUwJVwiIGNsYXNzPVwiY2hhcnQtbnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAge3tzdW19fVxyXG4gICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmlndXJlLWtleVwiIGZ4RmxleD0nNDMlJz5cclxuICAgICAgPGZpZ2NhcHRpb24+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwiZmlndXJlLWtleS1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBkYXRhIG9mIGRvbnV0RGF0YTtcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaGFwZS1jaXJjbGVcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJkYXRhLmNvbG9yXCI+PC9zcGFuPjxiPnt7ZGF0YS5uYW1lfX0gPC9iPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvbnV0LWRhdGEtY291bnQtcGVyY2VudGFnZVwiPlxyXG4gICAgICAgICAgICAgIHt7ZGF0YS52YWx1ZX19KHt7ZGF0YS5wZXJjZW50YWdlfX0lKVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPCEtLSA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hhcGUtY2lyY2xlIHNoYXBlLWJsdWVcIj48L3NwYW4+PGI+IFBlbmQuIEF1ZGl0IDwvYj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb251dC1kYXRhLWNvdW50LXBlcmNlbnRhZ2VcIj5cclxuICAgICAgICAgICAgICB7ezF9fSh7ezF9fSUpXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hhcGUtY2lyY2xlIHNoYXBlLW9yYW5nZVwiPjwvc3Bhbj4gPGI+QXVkaXQgSW4gUHJvZy48L2I+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZG9udXQtZGF0YS1jb3VudC1wZXJjZW50YWdlXCI+XHJcbiAgICAgICAgICAgICAge3sxfX0oe3sxfX0lKVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNoYXBlLWNpcmNsZSBzaGFwZS1yZWRcIj48L3NwYW4+IDxiPk5lZWRzIFJldmlldzwvYj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb251dC1kYXRhLWNvdW50LXBlcmNlbnRhZ2VcIj5cclxuICAgICAgICAgICAgICB7ezF9fSh7ezF9fSUpXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hhcGUtY2lyY2xlIHNoYXBlLWdyZWVuXCI+PC9zcGFuPiA8Yj5BdWRpdCBDbXBsdCA8L2I+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZG9udXQtZGF0YS1jb3VudC1wZXJjZW50YWdlXCI+XHJcbiAgICAgICAgICAgICAge3sxfX0oe3sxfX0lKVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPiAtLT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZmlndXJlPlxyXG4gIDwvZGl2PiJdfQ==