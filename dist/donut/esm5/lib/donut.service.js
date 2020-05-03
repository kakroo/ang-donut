import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    DonutService.ɵprov = i0.ɵɵdefineInjectable({ token: DonutService, factory: DonutService.ɵfac, providedIn: 'root' });
    return DonutService;
}());
export { DonutService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DonutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RvbnV0LyIsInNvdXJjZXMiOlsibGliL2RvbnV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0M7SUFNRTtJQUFnQixDQUFDO0lBRVYsdUNBQWdCLEdBQXZCLFVBQXdCLFNBQWtCO1FBQ3hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBR08sMENBQW1CLEdBQTNCLFVBQTRCLFNBQWtCO1FBQTlDLGlCQUtDO1FBSkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVPLDJDQUFvQixHQUE1QixVQUE2QixTQUFrQixFQUFFLEdBQVc7UUFBNUQsaUJBS0M7UUFKQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVPLCtCQUFRLEdBQWhCLFVBQWlCLFNBQWtCO1FBQ2pDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsRUFBTCxDQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVPLDJDQUFvQixHQUE1QixVQUE2QixTQUFpQixFQUFFLFdBQW1CO1FBQ2pFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVPLHlDQUFrQixHQUExQixVQUEyQixJQUFZO1FBQ3JDLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8saUNBQVUsR0FBbEIsVUFBbUIsU0FBa0I7UUFDbkMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUM7Z0JBQ3JDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBRS9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzRFQXpEVSxZQUFZO3dEQUFaLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07dUJBSnBCO0NBZ0VDLEFBN0RELElBNkRDO1NBMURZLFlBQVk7a0RBQVosWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb251dCB9IGZyb20gJy4vZG9udXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEb251dFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBzdW06IG51bWJlcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgZ2V0UHJvY2Vzc2VkRGF0YShkb251dERhdGE6IERvbnV0W10pOiBEb251dFtdIHtcbiAgICB0aGlzLnN1bSA9IHRoaXMuZmV0Y2hTdW0oZG9udXREYXRhKTtcbiAgICBkb251dERhdGEgPSB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VzKGRvbnV0RGF0YSwgdGhpcy5zdW0pO1xuICAgIGRvbnV0RGF0YSA9IHRoaXMuY2FsY3VsYXRlRGFzaEFycmF5cyhkb251dERhdGEpO1xuICAgIGRvbnV0RGF0YSA9IHRoaXMuZ2V0T2Zmc2V0cyhkb251dERhdGEpO1xuICAgIHJldHVybiBkb251dERhdGE7XG4gIH1cblxuXG4gIHByaXZhdGUgY2FsY3VsYXRlRGFzaEFycmF5cyhkb251dERhdGE6IERvbnV0W10pOiBEb251dFtdIHtcbiAgICBkb251dERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGRhdGEuc3Ryb2tlRGFzaGFycmF5ID0gdGhpcy5nZXREYXNoYXJyYXlTdHJpbmcoZGF0YS5wZXJjZW50YWdlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZG9udXREYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVQZXJjZW50YWdlcyhkb251dERhdGE6IERvbnV0W10sIHN1bTogbnVtYmVyKTogRG9udXRbXSB7XG4gICAgZG9udXREYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBkYXRhLnBlcmNlbnRhZ2UgPSB0aGlzLmdldFJvdW5kZWRQZXJjZW50YWdlKHBhcnNlSW50KGRhdGEudmFsdWUpLCBzdW0pO1xuICAgIH0pO1xuICAgIHJldHVybiBkb251dERhdGE7XG4gIH1cblxuICBwcml2YXRlIGZldGNoU3VtKGRvbnV0RGF0YTogRG9udXRbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRvbnV0RGF0YS5tYXAoZCA9PiBwYXJzZUludChkLnZhbHVlKSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gIH1cblxuICBwcml2YXRlIGdldFJvdW5kZWRQZXJjZW50YWdlKG51bWVyYXRvcjogbnVtYmVyLCBkZW5vbWluYXRvcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIWRlbm9taW5hdG9yKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIChNYXRoLnJvdW5kKCgobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpICogMTAwKSAqIDEwKSAvIDEwKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGFzaGFycmF5U3RyaW5nKGRhc2g6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhc2ggKyAnICcgKyAoMTAwIC0gZGFzaCk7XG4gIH1cblxuICBwcml2YXRlIGdldE9mZnNldHMoZG9udXREYXRhOiBEb251dFtdKTogRG9udXRbXSB7XG4gICAgbGV0IGZpcnN0T2Zmc2V0ID0gMDtcbiAgICBsZXQgc3VtVGlsbE5vdyA9IDA7XG4gICAgZG9udXREYXRhLmZvckVhY2goKGRhdGEsIGkpID0+IHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGRhdGEuc3Ryb2tlT2Zmc2V0ID0gMDtcbiAgICAgICAgc3VtVGlsbE5vdyA9IGRhdGEucGVyY2VudGFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuc3Ryb2tlT2Zmc2V0ID0gMTAwIC0gc3VtVGlsbE5vdztcbiAgICAgICAgc3VtVGlsbE5vdyArPSBkYXRhLnBlcmNlbnRhZ2U7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZG9udXREYXRhO1xuICB9XG59XG4iXX0=