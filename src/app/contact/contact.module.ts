import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { ContactComponent } from "./contact.component"; 

@NgModule({
    declarations: [ContactComponent],
    imports:[
        CommonModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,        
    ]
})

export class ContactModule {}