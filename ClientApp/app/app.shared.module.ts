import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { RegistryComponent } from './components/registry/registry.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TravelComponent } from './components/travel/travel.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ScheduleComponent,
        RegistryComponent,
        GalleryComponent,
        TravelComponent,
        RsvpComponent,
        WeddingPartyComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'schedule', component: ScheduleComponent },
            { path: 'wedding-party', component: WeddingPartyComponent},
            { path: 'registry', component: RegistryComponent},
            { path: 'gallery', component: GalleryComponent},
            { path: 'travel', component: TravelComponent},
            { path: 'rsvp', component: RsvpComponent},
            { path: '**', redirectTo: 'home' }
        ]),
        NgxMasonryModule,
        LightboxModule
    ]
})
export class AppModuleShared {}
