import { Component } from '@angular/core';
import {EventItem, EventCalType} from './Models';

@Component({
    selector: 'schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: ['schedule.component.scss']
})
export class ScheduleComponent {
    eventApiKey: string = '5bd163c580b3f20018520354';
    eventCalType = EventCalType;
    events: EventItem[] = [
        /*<EventItem>{
            name: 'Tea Ceremony',
            addressTitle: 'The Duong Residence',
            addressLine1: '5056 Barlin Avenue',
            addressLine2: 'Lakewood, CA 90712',
            date: new Date('9/28/2019'),
            time: '6:00AM - 12:00PM',
            eventKey: '5bd163c75d962a008a66928e',
            description: 'Please arrive 10-15 minutes early. Please park on the side of the street next to the school. Lunch will be served afterward.',
            mapUrl: 'https://goo.gl/maps/r4odU4fLhrK2',
            icon: 'ico-champagne-1'
        },*/
        <EventItem>{
            name: 'Wedding Ceremony',
            addressTitle: 'St. Christopher Church',
            addressLine1: '629 S Glendora Ave',
            addressLine2: 'West Covina, CA 91790',
            date: new Date('9/28/2019'),
            time: '2:00PM - 4:00PM',
            eventKey: '5bd2dbf1a4f79000ac0a734e',
            mapUrl: 'https://goo.gl/maps/73LUcdHZDAJ2',
            description: 'Please arrive 10-15 minutes early. After mass, pictures will be taken with family inside the church and with guests outside the church.',
            icon: 'ico-wedding'
        },
        <EventItem>{
            name: 'Reception',
            addressTitle: 'Diamond Seafood #3',
            addressLine1: '6731 Westminster Blvd',
            addressLine2: 'Westminster, CA 92683',
            date: new Date('9/28/2019'),
            time: '6:00PM - 11:00PM',
            note: 'Cocktail Hour starts at 6:00 PM<br/>Dinner & Dancing starts at 7:00 PM',
            eventKey: '5bd2deb9a4f79000ac0a76dd',
            description: '*If you plan to take entrance photos, please plan to arrive on-time/early. Entrance photos will end at 6:50 PM.<br/>**Due to time constraints and the amount of guests, we will only formally greet the tables (chao ban) of designated elders. Please drop off your gifts at the check-in table. Thank you!',
            mapUrl: 'https://goo.gl/maps/cpFKGUYGMrR2',
            icon: 'ico-cake'
        }
    ];

    calAddMode: boolean[] = [];
    calHiddenMode: boolean[] = [];

    constructor(){
        this.calAddMode = this.events.map(x => {return false});
        this.calHiddenMode = this.events.map(x => {return true});
    }

    toggleCalButton(i: number){
        this.calAddMode[i] = !this.calAddMode[i];
        setTimeout(()=>{
            this.calHiddenMode[i] = !this.calAddMode[i];
        }, 250);
    }

    addToCal(type: EventCalType, event: EventItem){
        window.open(`https://add.eventable.com/generate/${this.eventApiKey}/?events[]=${event.eventKey}&opt_in=True&cal_type=${type}`, "_blank");
    }
}
