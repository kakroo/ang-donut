import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { DonutService } from './donut.service';
import { Donut } from './donut.model';
import * as i0 from "@angular/core";
export declare class DonutComponent implements OnInit, AfterViewInit {
    private donutService;
    strokeWidth: number;
    innerLabelText: string;
    showLegend: boolean;
    sum: number;
    _showTotal: boolean;
    width: number;
    height: number;
    parent: ElementRef;
    showTotal: boolean;
    dim: number[];
    donutData: Donut[];
    innerLabel: string;
    constructor(donutService: DonutService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    fetchFakeData(): void;
    static ɵfac: i0.ɵɵFactoryDef<DonutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DonutComponent, "ng-donut", never, { "showTotal": "showTotal"; "dim": "dim"; "donutData": "donutData"; "innerLabel": "innerLabel"; }, {}, never, never>;
}
