import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: require("./app.component.html").default,
    styles: [require("./app.component.css").default],
})
export class AppComponent {
    public isLabelVisible = true;

    public toggleDisplayLabel() {
        this.isLabelVisible = !this.isLabelVisible;
    }
}
