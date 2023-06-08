import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { HomeComponent } from "./home.component"; 
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    declarations: [HomeComponent],
    imports:[
        CommonModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule, 
        ReactiveFormsModule    
    ]
})

export class HomeModule {}