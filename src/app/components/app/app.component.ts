import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: require("./app.component.html"),
    styles: require("./app.component.scss"),
})
export class AppComponent {
    public isLabelVisible = true;

    public toggleDisplayLabel() {
        this.isLabelVisible = !this.isLabelVisible;
    }
}
