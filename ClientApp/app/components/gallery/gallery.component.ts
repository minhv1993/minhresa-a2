import { Component } from '@angular/core';
import { GalleryItem } from './Models';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
    selector: 'gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.scss']
})
export class GalleryComponent {
    galleryItems: GalleryItem[] = [
        <GalleryItem> { src: '../img/gallery (1).jpg'},
        <GalleryItem> { src: '../img/gallery (2).jpg' },
        <GalleryItem> { src: '../img/gallery (3).jpg' },
        <GalleryItem> { src: '../img/gallery (4).jpg' },
        <GalleryItem> { src: '../img/gallery (5).jpg' },
        <GalleryItem> { src: '../img/gallery (6).jpg' },
        <GalleryItem> { src: '../img/gallery (7).jpg' },
        <GalleryItem> { src: '../img/gallery (8).jpg' },
        <GalleryItem> { src: '../img/gallery (9).jpg' },
        <GalleryItem> { src: '../img/gallery (10).jpg' },
        <GalleryItem> { src: '../img/gallery (11).jpg' },
        <GalleryItem> { src: '../img/gallery (12).jpg' },
        <GalleryItem> { src: '../img/gallery (13).jpg' },
        <GalleryItem> { src: '../img/gallery (14).jpg' },
        <GalleryItem> { src: '../img/gallery (15).jpg' },
        <GalleryItem> { src: '../img/gallery (16).jpg' },
        <GalleryItem> { src: '../img/gallery (17).jpg' },
    ];

    galleryOptions: NgxMasonryOptions = {
        itemSelector: '.mg-item',
        columnWidth: '.mg-sizer',
    };

    constructor(private lightbox: Lightbox, private lightboxConfig: LightboxConfig){
        lightboxConfig.centerVertically = true;
    }

    open(index: number){
        this.lightbox.open(this.galleryItems, index);
    }
}
