
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NgModule, OnInit } from '@angular/core';



@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

    ngOnInit(): void {
        console.log("logg");
    }


}