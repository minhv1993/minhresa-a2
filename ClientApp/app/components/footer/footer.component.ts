import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'mr-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {
    endDate: Date = new Date('09/28/2019');
    ticks: number = 0;
    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;
    seconds: number = 0;
    minutes: number = 0;
    hours: number = 0;
    days: number = 0;

    ngOnInit() {
        let remaining = Math.trunc((this.endDate.getTime() - Date.now())/1000);
        this.ticks = remaining > 0 ? remaining : 0;
        Observable.timer(1, 1000).subscribe(
            t => {
                this.ticks -= 1;
                this.updateTime(this.ticks);
            }
        );
    }

    private updateTime(ticks: number){
        this.seconds = this.clean(ticks % 60);
        const mins = ticks / 60;
        this.minutes = this.clean(mins % 60);
        const hours = mins / 60;
        this.hours = this.clean(hours % 24 + 1);
        const days = hours / 24;
        this.days = this.clean(days + 1);
    }

    private clean(num: number): number {
        return Math.floor(num);
    }
}
