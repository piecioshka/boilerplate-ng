import { Component, OnInit } from "@angular/core";

import { APIService } from "../../services/api.service";

@Component({
    selector: "app-welcome",
    template: require("./welcome.component.html")
})
export class WelcomeComponent implements OnInit {
    public text = "world";

    public constructor(public api: APIService) {}

    public ngOnInit() {
        this.render();
    }

    public async render() {
        const data = await this.api.getData();
        this.text = data;
    }
}
