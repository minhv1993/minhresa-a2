import { Component, OnDestroy } from '@angular/core';
import { Bio } from './Models';

@Component({
    selector: 'wedding-party',
    templateUrl: 'wedding-party.component.html',
    styleUrls: ['wedding-party.component.scss']
})
export class WeddingPartyComponent implements OnDestroy {
    groomsmen: Bio[] = [
        <Bio>{
            name: 'James Tran',
            title: 'Best Man',
            text: `Minh and I met during our second year at UCI through Mustard Seeds. Not sure how we became close but it most likely started at Yardhouse Happy Hour when we realized we both like to discuss philosophy.<br/><br/>
            <b>Favorite memories</b>: playing One Night Werewolf; eating Dino Nuggets and drinking nuoc mia; staying up all night to grind on Maplestory (Minh had work at 9am the next day); cooking for Family Night; snowboarding; gossiping during “Boys Night Out”.<br/><br/>
            <b>Quirky facts</b>: Minh’s biggest fear is FOMO. Minh is actually 3 years younger than what he says`,
            class: 'gm bb',
            imageClass: 'james'
        },
        <Bio>{
            name: 'Chris Tran',
            title: 'Best Man',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            class: 'gm bb',
            imageClass: 'chris'
        },
        <Bio>{
            name: 'Joseph Widjaja',
            title: 'Groomsman',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            class: 'gm',
            imageClass: 'joseph'
        },
        <Bio>{
            name: 'Jason Pham',
            title: 'Groomsman',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            class: 'gm',
            imageClass: 'jason'
        },
        <Bio>{
            name: 'Andrew Dinh',
            title: 'Groomsman',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            class: 'gm',
            imageClass: 'andrew'
        },
        <Bio>{
            name: 'Brandon Nguyen',
            title: 'Groomsman',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            class: 'gm',
            imageClass: 'brandon'
        },
        <Bio>{
            name: 'Alex Pham',
            title: 'Groomsman',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            class: 'gm',
            imageClass: 'alex'
        }
    ];
    bridesmaids: Bio[] = [
        <Bio>{
            name: 'Karen Bui',
            title: 'Maid of Honor',
            text: `Theresa and I met when we were just babies! She was born about a month after me and we have been on and off partners in crime ever since. On and off meaning ... cycles of loving and hating each other every couple years. Our grandma always tells the story of me learning to walk first, with Resa crawling behind me trying to bite me. She would also randomly pinch me with her claws for nails, and then act like nothing happened. Despite all this, we became bffs as kids, and started making “potion” together from all my grandma’s plants and soap products. We we were inseparable and shared dreams of living together when we were older and opening a family restaurant together. Then ... we took a joint family trip to Vegas, and I kept jinxing her before she got the chance to do it to me ... and then she got mad and we hated each other all over again. But this only goes to show that we have been completing each other’s sentences for a lifetime!! Our favorite saying is “great minds think alike” because well ... we’re great! Eventually we grew up into adults who pushed each other to pursue our dreams and became each other’s biggest fan club. 
            <br/><br/>
            TLDR: Despite our rocky start and eventful childhood, I am glad that Resa is my second sister ❤`,
            class: 'bm moh',
            imageClass: 'karen'
        },
        <Bio>{
            name: 'Van-Anh Hoang',
            title: 'Maid of Honor',
            text: `So here’s a fun fact if you didn’t already know, we’re cousins that were born 7 days apart! Some of our silly highlights include singing in the van, while both our families sat quietly, for almost 8 hours straight on a road trip in the East Coast. We thought that we were so amazing but we must’ve been SO annoying HAHA. Or, even just 2 years ago when we were driving back from San Francisco to Orange County and car-karaoked to the entire Annie soundtrack (on repeat). We happened to have another cousin in the car and yes, she’s scarred. At the end of the day, Theresa is someone who you can be yourself around and will act crazy with you.`,
            class: 'bm moh',
            imageClass: 'van-anh'
        },
        <Bio>{
            name: 'Linh Duong',
            title: 'Bridemaid',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
            class: 'bm',
            imageClass: 'linh'
        },
        <Bio>{
            name: 'Tessie Nguyen',
            title: 'Bridemaid',
            text: `Theresa and I met when I was 4 years old. I don’t remember it at all and I doubt she does either! We’ve pretty much grown up together since our families are very close. She is considered the family miracle baby since she was born a tiny little premmie. Some of my favorite memories with Theresa throughout the years include Christmas tree decoration parties at her house, witnessing Theresa’s epic wine bag slapping skills and a random day participating in the Hobby Lobby challenge. Theresa was a bridesmaid in my wedding earlier this year, so I’m happy to return the favor to her!`,
            class: 'bm',
            imageClass: 'tessie'
        },
        <Bio>{
            name: 'Thy Vu',
            title: 'Bridemaid',
            text: `Theresa and I met during my 2nd year of college. Campus village apartments had a mentorship program, and I was assigned as a mentor for Theresa. On the day that I was supposed to meet my mentee (Theresa), I almost ditched the event to study, but the person in charge of the mentorship program texted me to come to the event because my mentee was waiting so I came and met her. Not sure how I became close to her but she came over for dinner with my roommates, and we just kept hanging out. Funny memory -- I came over to her apartment, and her and her roommate were taking photos on their laptop. They wanted to take a “sexyback” photo, and I didn’t know what that meant so I just turned around, and it was literally a picture of me with my back turned to the camera.`,
            class: 'bm',
            imageClass: 'thy'
        },
        <Bio>{
            name: 'Angela Hoang',
            title: 'Bridemaid',
            text: `My friendship with Theresa developed through our interactions in Mustard Seeds/Hat Cai. When we first met she thought I was too cool for her (I'm not, I just thought she was loud) but we grew to be close friends! We got closer as first-time S.E.E.D. leaders, through our weirdness, and when we would complain to each other a lot. Like a lot a lot. One of my favorite memories with Theresa was when some of us surprised her for her birthday and we dropped the cake on the ground. It was unfortunate. I've seen Minhresa's relationship grow and endure, from when Minh was shamelessly flirting with her until now as they're happily engaged. It's been awesome being friends with them and witnessing their journey. Theresa quirk: she gets emotional when she drinks so sometimes I have to tell her she's not allowed to cry. Pretty sure this will happen on their big day.`,
            class: 'bm',
            imageClass: 'angela'
        },
        <Bio>{
            name: 'Christine Nguyen',
            title: 'Bridemaid',
            text: `Theresa and I met 7 years ago during our first year of college in Mustard Seeds. We were both young, innocent, fresh, and ready to explore the world! My earliest memory of her was when we all had a sleepover at her place. There was about 10 of us and we were squeezed side by side on the floor and couches in her apartment. Theresa is one of those friends that are great at getting people together and making sure they’re taken care of. `,
            class: 'bm',
            imageClass: 'christine'
        }
    ];

    bioActive: boolean[] = [];

    constructor() {
        const bm = this.bridesmaids.map(() => { return false; });
        const gm = this.groomsmen.map(() => { return false; });
        this.bioActive = bm.concat(gm);
    }

    toggleBio(id: number){
        const val = this.bioActive[id];
        this.bioActive = this.bioActive.map(() => { return false; });
        this.bioActive[id] = !val;
        if(!val){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = null;
        }
    }

    ngOnDestroy(): void {
        document.body.style.overflow = null;
    }
}