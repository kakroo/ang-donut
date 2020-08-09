import { __decorate } from "tslib";
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
    DonutService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DonutService_Factory() { return new DonutService(); }, token: DonutService, providedIn: "root" });
    DonutService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], DonutService);
    return DonutService;
}());
export { DonutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZy1kb251dC8iLCJzb3VyY2VzIjpbImxpYi9kb251dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQztJQUdFO0lBQWdCLENBQUM7SUFFVix1Q0FBZ0IsR0FBdkIsVUFBd0IsU0FBa0I7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFHTywwQ0FBbUIsR0FBM0IsVUFBNEIsU0FBa0I7UUFBOUMsaUJBS0M7UUFKQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU8sMkNBQW9CLEdBQTVCLFVBQTZCLFNBQWtCLEVBQUUsR0FBVztRQUE1RCxpQkFLQztRQUpDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU8sK0JBQVEsR0FBaEIsVUFBaUIsU0FBa0I7UUFDakMsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU8sMkNBQW9CLEdBQTVCLFVBQTZCLFNBQWlCLEVBQUUsV0FBbUI7UUFDakUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU8seUNBQWtCLEdBQTFCLFVBQTJCLElBQVk7UUFDckMsT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxpQ0FBVSxHQUFsQixVQUFtQixTQUFrQjtRQUNuQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztnQkFDckMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7YUFFL0I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7O0lBekRVLFlBQVk7UUFIeEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFlBQVksQ0EwRHhCO3VCQWhFRDtDQWdFQyxBQTFERCxJQTBEQztTQTFEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9udXQgfSBmcm9tICcuL2RvbnV0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRG9udXRTZXJ2aWNlIHtcblxuICBwdWJsaWMgc3VtOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGdldFByb2Nlc3NlZERhdGEoZG9udXREYXRhOiBEb251dFtdKTogRG9udXRbXSB7XG4gICAgdGhpcy5zdW0gPSB0aGlzLmZldGNoU3VtKGRvbnV0RGF0YSk7XG4gICAgZG9udXREYXRhID0gdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlcyhkb251dERhdGEsIHRoaXMuc3VtKTtcbiAgICBkb251dERhdGEgPSB0aGlzLmNhbGN1bGF0ZURhc2hBcnJheXMoZG9udXREYXRhKTtcbiAgICBkb251dERhdGEgPSB0aGlzLmdldE9mZnNldHMoZG9udXREYXRhKTtcbiAgICByZXR1cm4gZG9udXREYXRhO1xuICB9XG5cblxuICBwcml2YXRlIGNhbGN1bGF0ZURhc2hBcnJheXMoZG9udXREYXRhOiBEb251dFtdKTogRG9udXRbXSB7XG4gICAgZG9udXREYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBkYXRhLnN0cm9rZURhc2hhcnJheSA9IHRoaXMuZ2V0RGFzaGFycmF5U3RyaW5nKGRhdGEucGVyY2VudGFnZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRvbnV0RGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlUGVyY2VudGFnZXMoZG9udXREYXRhOiBEb251dFtdLCBzdW06IG51bWJlcik6IERvbnV0W10ge1xuICAgIGRvbnV0RGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgZGF0YS5wZXJjZW50YWdlID0gdGhpcy5nZXRSb3VuZGVkUGVyY2VudGFnZShwYXJzZUludChkYXRhLnZhbHVlKSwgc3VtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZG9udXREYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBmZXRjaFN1bShkb251dERhdGE6IERvbnV0W10pOiBudW1iZXIge1xuICAgIHJldHVybiBkb251dERhdGEubWFwKGQgPT4gcGFyc2VJbnQoZC52YWx1ZSkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb3VuZGVkUGVyY2VudGFnZShudW1lcmF0b3I6IG51bWJlciwgZGVub21pbmF0b3I6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKCFkZW5vbWluYXRvcikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiAoTWF0aC5yb3VuZCgoKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKSAqIDEwMCkgKiAxMCkgLyAxMCk7XG4gIH1cblxuICBwcml2YXRlIGdldERhc2hhcnJheVN0cmluZyhkYXNoOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXNoICsgJyAnICsgKDEwMCAtIGRhc2gpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPZmZzZXRzKGRvbnV0RGF0YTogRG9udXRbXSk6IERvbnV0W10ge1xuICAgIGxldCBmaXJzdE9mZnNldCA9IDA7XG4gICAgbGV0IHN1bVRpbGxOb3cgPSAwO1xuICAgIGRvbnV0RGF0YS5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBkYXRhLnN0cm9rZU9mZnNldCA9IDA7XG4gICAgICAgIHN1bVRpbGxOb3cgPSBkYXRhLnBlcmNlbnRhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLnN0cm9rZU9mZnNldCA9IDEwMCAtIHN1bVRpbGxOb3c7XG4gICAgICAgIHN1bVRpbGxOb3cgKz0gZGF0YS5wZXJjZW50YWdlO1xuXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRvbnV0RGF0YTtcbiAgfVxufVxuIl19