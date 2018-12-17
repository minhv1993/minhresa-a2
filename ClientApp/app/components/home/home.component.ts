import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(private router: Router) {
        router.events.subscribe(s => {
            if(s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if(tree.fragment){
                    const elem = document.querySelector('#' + tree.fragment);
                    if(elem) {
                        elem.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }
        });
    }

    toTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
