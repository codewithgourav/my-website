import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { AboutComponent } from "./about.component"; 

@NgModule({
    declarations: [AboutComponent],
    imports:[
        CommonModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,        
    ]
})

export class AboutModule {}