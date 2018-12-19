import { Component, HostListener, AfterViewInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    storyNames: string[] = ['stair','seed','talk','journey','proposal','altar'];

    activeStory: string = '';

    isTimelineVisible: boolean = false;

    timelineStyle: number = 100;

    @ViewChild('timelinenav') timelineNav: ElementRef | undefined;

    @ViewChild('intro') intro: ElementRef | undefined;

    @ViewChildren(['stair','seed','talk','journey','proposal','altar'].join(',')) stories: any;

    constructor(private router: Router) {
        router.events.subscribe(s => {
            if(s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if(tree.fragment){
                    this.activeStory = tree.fragment.replace('the-', '');
                }else{
                    this.activeStory = '';
                }
            }
        });
    }

    ngAfterViewInit(){
        const tree = this.router.parseUrl(this.router.url);
        if(tree.fragment){
            this.scrollToElem(document.querySelector('#' + tree.fragment));
        }
    }
    
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e: any){
        if(e.target.documentElement && this.timelineNav && this.intro && this.stories){
            const doc = e.target.documentElement;
            const intro = this.intro.nativeElement;

    
            const vpTop = doc.scrollTop;
            const vpHeight = doc.clientHeight;
            const vpBot = vpTop + vpHeight;
    
            const introTop = intro.getBoundingClientRect().y;
            const introBot = introTop + intro.clientHeight;
    
            // Show & Hide the timeline
            this.isTimelineVisible = vpTop + vpHeight >= introTop;
    
            // Height & opacity of the timeline
            /*var svpTop = storyTop - vpTop;
            var tlTop = (svpTop > 0 ? svpTop : 0);
            $timelineNav.css('top', tlTop + 'px');
    
            var svpBot = vpBot - storyBot;
            var tlBot = (svpBot > 0 ? svpBot : 0)
            $timelineNav.css('bottom', tlBot + 'px');
    
            var opacity = 1 - ((tlTop >= tlBot ? tlTop : tlBot) / vpHeight);
            $timelineNav.css('opacity', opacity);
    
            // Focus on the current section
            if(!window.isStoryClicked){
                $('.tl-section-container').each(function(index) {
                    var $el = $(this);
                    var elTop = $el.offset().top;
                    var elBot = elTop + $el.height();
                    var diffTop = vpTop >= elTop ? vpTop : elTop;
                    var diffBot = vpBot <= elBot ? vpBot : elBot;
                    var diffHeight = diffBot - diffTop;
    
                    if(diffHeight > vpHeight * 3/5)
                    {
                        var selector = 'a.tl-nav-link[href="#{id}"]'.replace('{id}', $el.attr('id'));
                        var $anchor = $(selector);
                        $('a.tl-nav-link').removeClass('active')
                        $anchor.addClass('active');
                    }
                });
            }*/
        }
    }

    scrollToElem(elem: Element | null){
        if(elem) {
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    scrollTo(id?: string) {
        if(id){
            this.scrollToElem(document.querySelector('#the-' + id));
        }else{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    isStoryActive(story: string){
        return this.activeStory === story;
    }

    private getElemOffsetTop(elem: any){
        let offsetTop = 0;
        let el = elem;
    
        while(el){
            offsetTop += el.offsetTop;
            el = elem.parentElement;
        }
        return offsetTop;
    }
}
