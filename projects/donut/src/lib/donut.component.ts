import { Component, OnInit, Input } from '@angular/core';
import { DonutService } from './donut.service';
import { Donut } from './donut.model';

@Component({
  selector: 'ng-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  public strokeWidth: number;
  public innerLabelText: string;
  public showLegend: boolean;
  public sum: number;
  public _showTotal: boolean;
  // @Input() showTotal: boolean;
  @Input() set showTotal(value: boolean) {
    if (value && value === true) {
      this._showTotal = true;
    }
    else {
      this._showTotal = false;
    }
  }

  @Input() donutData: Donut[];
  // donutData: Donut[];

  @Input() set innerLabel(value) {
    if (value) {
      this.innerLabelText = value;
    }
    else {
      this.innerLabelText = null;
    }
  }


  constructor(private donutService: DonutService) { }

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
