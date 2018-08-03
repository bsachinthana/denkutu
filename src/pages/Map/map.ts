import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  kmlLayer: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.initMap();
  }

  initMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    this.kmlLayer = new google.maps.KmlLayer("https://sites.google.com/site/peraharagis/red.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

}
