import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../components/app.component';
import { APIService } from '../services/api.service';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        APIService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
