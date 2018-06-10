import { Injectable } from "@angular/core";

import { News } from "../../models/news";

@Injectable()
export class MockNews {
    items: News[] = [];

    defaultItem: any = {
        
    };

    constructor() {
        let items = [
            {

            },
            {

            }
        ]

        for(let item of items) {
            this.items.push(new News(item));
        }
    }

    
}