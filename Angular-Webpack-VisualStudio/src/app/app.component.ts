﻿import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `app.component.html`,
})


export class AppComponent implements OnInit {
    ngOnInit(): void {
        console.log("initialized");
    }

   

}
