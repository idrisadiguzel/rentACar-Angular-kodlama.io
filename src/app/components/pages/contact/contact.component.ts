import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;

  zoom = 12;
  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }
  markers = []  as  any;
  infoContent = ''

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        // lat: position.coords.latitude,
        // lng: position.coords.longitude,
        lat: 40.031052,
        lng: 32.898996,
      }
    })
  }

  zoomIn() {
    if (this.zoom < this.maxZoom) this.zoom++;
    console.log('Get Zoom',this.map.getZoom());
  }

  zoomOut() {
    if (this.zoom > this.minZoom) this.zoom--;
  }

  eventHandler(event: any ,name:string){
    console.log(event,name);

    // Add marker on double click event
    if(name === 'mapDblclick'){
      this.dropMarker(event)
    }
  }

  // Markers
  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

  dropMarker(event:any) {
    this.markers.push({
      position: {
        // lat: event.latLng.lat(),
        // lng: event.latLng.lng(),
        lat: 40.031052,
        lng: 32.898996,
      },
      label: {
        color: 'blue',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker)
  }
}
