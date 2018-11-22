import { Injectable } from '@angular/core';

@Injectable()
export class APIService {

    public getData(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(resolve, 500, 'asynchronous data');
        });
    }

}
