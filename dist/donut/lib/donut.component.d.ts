import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { DonutService } from './donut.service';
import { Donut } from './donut.model';
export declare class DonutComponent implements OnInit, AfterViewInit {
    private donutService;
    strokeWidth: number;
    innerLabelText: string;
    _showLegend: boolean;
    sum: number;
    _showTotal: boolean;
    width: number;
    height: number;
    parent: ElementRef;
    showTotal: boolean;
    showLegend: boolean;
    dim: number[];
    donutData: Donut[];
    innerLabel: string;
    constructor(donutService: DonutService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    fetchFakeData(): void;
}
