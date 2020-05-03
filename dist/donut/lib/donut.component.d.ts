import { OnInit } from '@angular/core';
import { DonutService } from './donut.service';
import { Donut } from './donut.model';
import * as i0 from "@angular/core";
export declare class DonutComponent implements OnInit {
    private donutService;
    strokeWidth: number;
    innerLabelText: string;
    showLegend: boolean;
    sum: number;
    _showTotal: boolean;
    showTotal: boolean;
    donutData: Donut[];
    innerLabel: any;
    constructor(donutService: DonutService);
    ngOnInit(): void;
    fetchFakeData(): void;
    static ɵfac: i0.ɵɵFactoryDef<DonutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DonutComponent, "ng-donut", never, { "showTotal": "showTotal"; "donutData": "donutData"; "innerLabel": "innerLabel"; }, {}, never, never>;
}
