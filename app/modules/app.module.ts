import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "../components/app/app.component";
import { WelcomeComponent } from "../components/welcome/welcome.component";

import { APIService } from "../services/api.service";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, WelcomeComponent],
    providers: [APIService],
    bootstrap: [AppComponent]
})
export class AppModule {}
