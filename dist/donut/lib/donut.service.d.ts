import { Donut } from './donut.model';
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
}
