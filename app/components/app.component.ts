import { Component, OnInit } from '@angular/core';

import { APIService } from '../services/api.service';

@Component({
    selector: 'app-root',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
})
export class AppComponent implements OnInit {

    public text = 'world';

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
