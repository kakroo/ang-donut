import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { DonutService } from './donut.service';
import { Donut } from './donut.model';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DonutComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DonutComponent, "ng-donut", never, { "showTotal": "showTotal"; "showLegend": "showLegend"; "dim": "dim"; "innerLabel": "innerLabel"; "donutData": "donutData"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImRvbnV0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbnV0U2VydmljZSB9IGZyb20gJy4vZG9udXQuc2VydmljZSc7XG5pbXBvcnQgeyBEb251dCB9IGZyb20gJy4vZG9udXQubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRG9udXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIHByaXZhdGUgZG9udXRTZXJ2aWNlO1xuICAgIHN0cm9rZVdpZHRoOiBudW1iZXI7XG4gICAgaW5uZXJMYWJlbFRleHQ6IHN0cmluZztcbiAgICBfc2hvd0xlZ2VuZDogYm9vbGVhbjtcbiAgICBzdW06IG51bWJlcjtcbiAgICBfc2hvd1RvdGFsOiBib29sZWFuO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgcGFyZW50OiBFbGVtZW50UmVmO1xuICAgIHNob3dUb3RhbDogYm9vbGVhbjtcbiAgICBzaG93TGVnZW5kOiBib29sZWFuO1xuICAgIGRpbTogbnVtYmVyW107XG4gICAgZG9udXREYXRhOiBEb251dFtdO1xuICAgIGlubmVyTGFiZWw6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihkb251dFNlcnZpY2U6IERvbnV0U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBmZXRjaEZha2VEYXRhKCk6IHZvaWQ7XG59XG4iXX0=