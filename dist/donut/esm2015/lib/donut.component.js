import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./donut.service";
import * as i2 from "@angular/common";
function DonutComponent__svg_circle_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "circle", 10);
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("stroke", data_r3.color)("stroke-width", ctx_r0.strokeWidth)("stroke-dasharray", data_r3.strokeDasharray)("stroke-dashoffset", data_r3.strokeOffset);
} }
function DonutComponent__svg_text_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.innerLabelText, " ");
} }
function DonutComponent__svg_text_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.sum, " ");
} }
export class DonutComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG9udXQvIiwic291cmNlcyI6WyJsaWIvZG9udXQuY29tcG9uZW50LnRzIiwibGliL2RvbnV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNTL0MsNkJBR1M7Ozs7SUFGWSx1Q0FBMkIsb0NBQUEsNkNBQUEsMkNBQUE7Ozs7SUFLOUMsZ0NBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU87OztJQURMLGVBQ0Y7SUFERSxzREFDRjs7OztJQUNBLGdDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFPOzs7SUFETCxlQUNGO0lBREUsMkNBQ0Y7O0FEWFosTUFBTSxPQUFPLGNBQWM7SUE4QnpCLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQXZCbkQsK0JBQStCO0lBQy9CLElBQWEsU0FBUyxDQUFDLEtBQWM7UUFDbkMsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUNJO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBR0Qsc0JBQXNCO0lBRXRCLElBQWEsVUFBVSxDQUFDLEtBQUs7UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBS0QsUUFBUTtRQUNOLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGNBQWM7SUFDaEIsQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtTQUNqRCxDQUFDO0lBQ0osQ0FBQzs7NEVBaERVLGNBQWM7bURBQWQsY0FBYztRQ1QzQiwyQkFDSTtRQUFBLGlDQUNFO1FBQUEsOEJBQ0U7UUFBQSxtQkFFRTtRQUZGLDhCQUVFO1FBQUEsNEJBQTBHO1FBQzFHLDRCQUNnRDtRQUVoRCwwRUFHQTtRQUVBLDRCQUNFO1FBQUEsc0VBQ0U7UUFFRixzRUFDRTtRQUVKLGlCQUFJO1FBQ04saUJBQU07UUFDUixpQkFBTTtRQUNOLG9CQWtDYTtRQWxDYixpQ0FrQ2E7UUFDZixpQkFBUztRQUNYLGlCQUFNOztRQW5EVSxlQUErQjtRQUEvQix1Q0FBK0I7UUFNL0IsZUFBc0I7UUFBdEIseUNBQXNCO1FBR3RCLGVBQWtCO1FBQWxCLHFDQUFrQjs7a0REVHZCLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQzs7a0JBU0UsS0FBSzs7a0JBU0wsS0FBSzs7a0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9udXRTZXJ2aWNlIH0gZnJvbSAnLi9kb251dC5zZXJ2aWNlJztcbmltcG9ydCB7IERvbnV0IH0gZnJvbSAnLi9kb251dC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWRvbnV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvbnV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG9udXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERvbnV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgcHVibGljIGlubmVyTGFiZWxUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93TGVnZW5kOiBib29sZWFuO1xuICBwdWJsaWMgc3VtOiBudW1iZXI7XG4gIHB1YmxpYyBfc2hvd1RvdGFsOiBib29sZWFuO1xuICAvLyBASW5wdXQoKSBzaG93VG90YWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNldCBzaG93VG90YWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX3Nob3dUb3RhbCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd1RvdGFsID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgZG9udXREYXRhOiBEb251dFtdO1xuICAvLyBkb251dERhdGE6IERvbnV0W107XG5cbiAgQElucHV0KCkgc2V0IGlubmVyTGFiZWwodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJMYWJlbFRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlubmVyTGFiZWxUZXh0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9udXRTZXJ2aWNlOiBEb251dFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuZmV0Y2hGYWtlRGF0YSgpO1xuICAgIHRoaXMuZG9udXREYXRhID0gdGhpcy5kb251dFNlcnZpY2UuZ2V0UHJvY2Vzc2VkRGF0YSh0aGlzLmRvbnV0RGF0YSk7XG4gICAgLy9TZXR0aW5ncyBTdGFydCAvLyBOZWVkIHRvIGJpbmQgdGhlc2UgdG8gaW5wdXQgdmFyaWFibGVzIGxhdGVyXG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IDM7XG4gICAgdGhpcy5zdW0gPSB0aGlzLmRvbnV0U2VydmljZS5zdW07XG4gICAgdGhpcy5zaG93TGVnZW5kID0gZmFsc2U7XG4gICAgLy9TZXR0aW5ncyBFbmRcbiAgfVxuICBmZXRjaEZha2VEYXRhKCkge1xuICAgIHRoaXMuZG9udXREYXRhID0gW1xuICAgICAgeyBuYW1lOiAnUmVkJywgdmFsdWU6ICcyMCcsIGNvbG9yOiAnI0UyNTMyNScgfSxcbiAgICAgIHsgbmFtZTogJ0JsdWUnLCB2YWx1ZTogJzMwJywgY29sb3I6ICcjNjA2NENGJyB9LFxuICAgICAgeyBuYW1lOiAnQmxhY2snLCB2YWx1ZTogJzEwJywgY29sb3I6ICcjNUE1QzU5JyB9LFxuICAgICAgeyBuYW1lOiAnR3JlZW4nLCB2YWx1ZTogJzQwJywgY29sb3I6ICcjNTBGRDFEJyB9XG4gICAgXTtcbiAgfVxuXG59XG4iLCI8ZGl2PlxyXG4gICAgPGZpZ3VyZSBjbGFzcz0nZmlndXJlLWNsYXNzJz5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZ3VyZS1jb250ZW50XCIgZnhGbGV4PSc1NyUnPlxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNDIgNDJcIiBjbGFzcz1cImRvbnV0XCIgYXJpYS1sYWJlbGxlZGJ5PVwiYmVlcnMtdGl0bGUgYmVlcnMtZGVzY1wiXHJcbiAgICAgICAgICByb2xlPVwiaW1nXCI+XHJcbiAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwiZG9udXQtaG9sZVwiIGN4PVwiMjFcIiBjeT1cIjIxXCIgcj1cIjE1LjkxNTQ5NDMwOTE4OTU0XCIgZmlsbD1cIiNmZmZcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwiZG9udXQtcmluZ1wiIGN4PVwiMjFcIiBjeT1cIjIxXCIgcj1cIjE1LjkxNTQ5NDMwOTE4OTU0XCIgZmlsbD1cInRyYW5zcGFyZW50XCIgc3Ryb2tlPVwiI2QyZDNkNFwiXHJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjNcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9jaXJjbGU+XHJcbiAgXHJcbiAgICAgICAgICA8Y2lyY2xlICpuZ0Zvcj1cImxldCBkYXRhIG9mIGRvbnV0RGF0YTtcIiBjbGFzcz1cImRvbnV0LXNlZ21lbnRcIiBjeD1cIjIxXCIgY3k9XCIyMVwiIHI9XCIxNS45MTU0OTQzMDkxODk1NFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiIFtzdHlsZS5zdHJva2VdPVwiZGF0YS5jb2xvclwiIFtzdHlsZS5zdHJva2Utd2lkdGhdPVwic3Ryb2tlV2lkdGhcIiBbc3R5bGUuc3Ryb2tlLWRhc2hhcnJheV09XCJkYXRhLnN0cm9rZURhc2hhcnJheVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5zdHJva2UtZGFzaG9mZnNldF09XCJkYXRhLnN0cm9rZU9mZnNldFwiIGFyaWEtbGFiZWxsZWRieT1cImRvbnV0LXNlZ21lbnQtMS10aXRsZSBkb251dC1zZWdtZW50LTEtZGVzY1wiPlxyXG4gICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICA8IS0tIHVudXNlZCAxMCUgLS0+XHJcbiAgICAgICAgICA8ZyBjbGFzcz1cImNoYXJ0LXRleHRcIj5cclxuICAgICAgICAgICAgPHRleHQgKm5nSWY9J2lubmVyTGFiZWxUZXh0JyB4PVwiNTAlXCIgeT1cIjUwJVwiIGNsYXNzPVwiY2hhcnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICB7e2lubmVyTGFiZWxUZXh0fX1cclxuICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCAqbmdJZj0nX3Nob3dUb3RhbCcgeD1cIjUwJVwiIHk9XCI1MCVcIiBjbGFzcz1cImNoYXJ0LW51bWJlclwiPlxyXG4gICAgICAgICAgICAgIHt7c3VtfX1cclxuICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZpZ2NhcHRpb24gY2xhc3M9XCJmaWd1cmUta2V5XCIgZnhGbGV4PSc0MyUnPlxyXG4gIFxyXG4gICAgICAgIDwhLS0gPHVsIGNsYXNzPVwiZmlndXJlLWtleS1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNoYXBlLWNpcmNsZSBzaGFwZS1ncmF5XCI+PC9zcGFuPjxiPk9wZW4gPC9iPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvbnV0LWRhdGEtY291bnQtcGVyY2VudGFnZVwiPlxyXG4gICAgICAgICAgICAgIHt7b3BlbldvcmtPcmRlcnNDb3VudH19KHt7b3BlblBlcmNlbnRhZ2V9fSUpXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hhcGUtY2lyY2xlIHNoYXBlLWJsdWVcIj48L3NwYW4+PGI+IFBlbmQuIEF1ZGl0IDwvYj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb251dC1kYXRhLWNvdW50LXBlcmNlbnRhZ2VcIj5cclxuICAgICAgICAgICAgICB7e2F1ZGl0UGVuZGluZ1dvcmtPcmRlcnNDb3VudH19KHt7cGVuZGluZ0F1ZGl0UGVyY2VudGFnZX19JSlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaGFwZS1jaXJjbGUgc2hhcGUtb3JhbmdlXCI+PC9zcGFuPiA8Yj5BdWRpdCBJbiBQcm9nLjwvYj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb251dC1kYXRhLWNvdW50LXBlcmNlbnRhZ2VcIj5cclxuICAgICAgICAgICAgICB7e2F1ZGl0SW5wcm9ncmVzc1dvcmtPcmRlcnNDb3VudH19KHt7aW5Qcm9ncmVzc1BlcmNlbnRhZ2V9fSUpXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hhcGUtY2lyY2xlIHNoYXBlLXJlZFwiPjwvc3Bhbj4gPGI+TmVlZHMgUmV2aWV3PC9iPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvbnV0LWRhdGEtY291bnQtcGVyY2VudGFnZVwiPlxyXG4gICAgICAgICAgICAgIHt7bmVlZHNSZXZpZXdXb3JrT3JkZXJzQ291bnR9fSh7e25lZWRzUmV2aWV3UGVyY2VudGFnZX19JSlcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaGFwZS1jaXJjbGUgc2hhcGUtZ3JlZW5cIj48L3NwYW4+IDxiPkF1ZGl0IENtcGx0IDwvYj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb251dC1kYXRhLWNvdW50LXBlcmNlbnRhZ2VcIj5cclxuICAgICAgICAgICAgICB7e2JpbGxpbmdBdWRpdENvbXBsZXRlZFdvcmtPcmRlcnNDb3VudH19KHt7YXVkaXRDb21wbGV0ZVBlcmNlbnRhZ2V9fSUpXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD4gLS0+XHJcbiAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgIDwvZmlndXJlPlxyXG4gIDwvZGl2PiJdfQ==