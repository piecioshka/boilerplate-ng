import { Injectable } from "@angular/core";

@Injectable()
export class APIService {
    public constructor() {
        console.log("APIService created");
    }

    public getData(): Promise<string> {
        return new Promise(resolve => {
            setTimeout(resolve, 500, "there (async data)");
        });
    }
}
