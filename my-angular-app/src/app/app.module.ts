import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routing.module";
import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";

@NgModule({

    declarations :[
     AppComponent       
    ],
    imports:[
BrowserModule,
AppRoutingModule,
DropDownListModule

    ],
    providers:[],
    bootstrap:[AppComponent]


})

export class appModule { }