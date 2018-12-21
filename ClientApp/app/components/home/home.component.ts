import { Component, HostListener, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    storyNames: string[] = ['stair','seed','talk','journey','proposal','altar'];

    storyActive: boolean[] = [false, false, false, false, false, false];

    timelineStyle: any = {
        top: '100vh',
        opacity: '0',
        bottom: '0'
    };

    @ViewChild('story') story: ElementRef | undefined;

    @ViewChildren(['stair','seed','talk','journey','proposal','altar'].join(',')) stories: QueryList<ElementRef> | undefined;

    constructor(){}
    
    ngAfterViewInit(): void {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e: any){
        if(e && e.target && e.target.documentElement){
            this.calcTimelineAttr(e.target.documentElement);
        }
    }

    calcTimelineAttr(doc: any){
        if(doc && this.story && this.stories){
            const storyElem = this.story.nativeElement;

            const vpTop = doc.scrollTop;
            const vpHeight = doc.clientHeight;
            const vpBot = vpTop + vpHeight;

            const storyBox = storyElem.getBoundingClientRect();
            const storyTop = storyBox.top + vpTop;
            const storyBot = storyTop + storyBox.height;
    
            // Height & opacity of the timeline
            const fourth = vpHeight/4;
            const svpTop = storyTop - vpTop;
            const tlTop = (svpTop > 0 ? svpTop : 0);
            const tlTopFourth = (svpTop > fourth ? svpTop : fourth);
    
            const svpBot = vpBot - storyBot;
            const tlBot = (svpBot > 0 ? svpBot : 0)
    
            const opacity = 1 - ((tlTop >= tlBot ? tlTop : tlBot) / vpHeight);

            this.timelineStyle = {
                top: tlTopFourth + 'px',
                bottom: tlBot + 'px',
                opacity: opacity,
                display: opacity > 0.5 ? 'flex': 'none'
            }
    
            // Focus on the current section
            if(this.stories.length > 0){
                this.stories.forEach((elemRef, i) => {
                    this.storyActive[i] = false;
                    const elem = elemRef.nativeElement;
                    const elemBox = elem.getBoundingClientRect();

                    const elTop = elemBox.top + vpTop;
                    const elBot = elTop + elemBox.height;
                    const diffTop = vpTop >= elTop ? vpTop : elTop;
                    const diffBot = vpBot <= elBot ? vpBot : elBot;
                    const diffHeight = diffBot - diffTop;
    
                    if(diffHeight > vpHeight * 3/5)
                    {
                        this.storyActive[i] = true;
                    }
                })
            }
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
}
