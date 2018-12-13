import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({   
    template: `<a routerLink="/user-profile/{{params.value}}"> Edit </a>`
})
export class ParamsComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return false;
    }
}