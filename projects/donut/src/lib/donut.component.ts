import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DonutService } from './donut.service';
import { Donut } from './donut.model';

@Component({
  selector: 'ng-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit, AfterViewInit {

  public strokeWidth: number;
  public innerLabelText: string;
  public _showLegend: boolean;
  public sum: number;
  public _showTotal: boolean;
  public width: number;
  public height: number;
  @ViewChild('parent') parent: ElementRef;
  // Should total be shown inside Donut
  @Input() set showTotal(value: boolean) {
    if (value && value === true) {
      this._showTotal = true;
    }
    else {
      this._showTotal = false;
    }
  }
  @Input() set showLegend(value: boolean) {
    if (value && value === true) {
      this._showLegend = true;
    }
    else {
      this._showLegend = false;
    }
  }
  @Input() set dim(value: number[]) {
    if (value) {
      this.height = value[0];
      this.width = value[1];

    }

  }
  // Data which needs to be rendered
  @Input() donutData: Donut[];
  // Inner Label text
  @Input() set innerLabel(value: string) {
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

}
