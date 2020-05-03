import { Injectable } from '@angular/core';
import { Donut } from './donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  public sum: number;
  constructor() { }

  public getProcessedData(donutData: Donut[]): Donut[] {
    this.sum = this.fetchSum(donutData);
    donutData = this.calculatePercentages(donutData, this.sum);
    donutData = this.calculateDashArrays(donutData);
    donutData = this.getOffsets(donutData);
    return donutData;
  }


  private calculateDashArrays(donutData: Donut[]): Donut[] {
    donutData.forEach(data => {
      data.strokeDasharray = this.getDasharrayString(data.percentage);
    });
    return donutData;
  }

  private calculatePercentages(donutData: Donut[], sum: number): Donut[] {
    donutData.forEach(data => {
      data.percentage = this.getRoundedPercentage(parseInt(data.value), sum);
    });
    return donutData;
  }

  private fetchSum(donutData: Donut[]): number {
    return donutData.map(d => parseInt(d.value)).reduce((a, b) => a + b, 0);
  }

  private getRoundedPercentage(numerator: number, denominator: number): number {
    if (!denominator) {
      return 0;
    }
    return (Math.round(((numerator / denominator) * 100) * 10) / 10);
  }

  private getDasharrayString(dash: number): string {
    return dash + ' ' + (100 - dash);
  }

  private getOffsets(donutData: Donut[]): Donut[] {
    let firstOffset = 0;
    let sumTillNow = 0;
    donutData.forEach((data, i) => {
      if (i === 0) {
        data.strokeOffset = 0;
        sumTillNow = data.percentage;
      } else {
        data.strokeOffset = 100 - sumTillNow;
        sumTillNow += data.percentage;

      }
    });
    return donutData;
  }
}
