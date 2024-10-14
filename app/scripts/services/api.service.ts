import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class APIService {
    constructor() {
        console.log("APIService created");
    }

    public getData(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(resolve, 500, "there (async data)");
        });
    }
}
