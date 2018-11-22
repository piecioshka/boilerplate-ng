import { Component, OnInit } from '@angular/core';

import { APIService } from '../services/api.service';

@Component({
    selector: 'app-root',
    // templateUrl: './app.component.html',
    template: `
        hi {{ text }}!
    `,
})
export class AppComponent implements OnInit {

    public text = 'Piotr';

    constructor(
        public api: APIService,
    ) { }

    public ngOnInit() {
        this.api.getData()
            .then((data) => {
                this.text = data;
            });
    }

}
