import { Donut } from './donut.model';
import * as i0 from "@angular/core";
export declare class DonutService {
    sum: number;
    constructor();
    getProcessedData(donutData: Donut[]): Donut[];
    private calculateDashArrays;
    private calculatePercentages;
    private fetchSum;
    private getRoundedPercentage;
    private getDasharrayString;
    private getOffsets;
    static ɵfac: i0.ɵɵFactoryDef<DonutService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DonutService>;
}
