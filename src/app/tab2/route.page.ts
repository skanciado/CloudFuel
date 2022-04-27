import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: 'route.page.html',
  styleUrls: ['route.page.scss'],
})
export class RoutePage implements OnInit {
  constructor() {}
  posicio: google.maps.LatLngLiteral;
  origin: string;
  destination: string;
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  apiLoaded: boolean = false;
  @ViewChild('map') mapElement;

  ngAfterViewInit() {
    console.info('ngAfterViewInit');
  }
  async ngOnInit() {
    this.zoom = 15;
    console.info('ngOnInit');
    this.origin = 'Collins St, Melbourne, Australia';
    this.destination = 'MCG Melbourne, Australia';
    this.searchFunction();
  }
  searchFunction() {
    var directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
    });

    var directionsService = new google.maps.DirectionsService();
    var geocoder = new google.maps.Geocoder();
    var request = {
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        let map = new google.maps.Map(
          document.getElementById('map2').getElementsByTagName('div')[0]
        );
        google.maps.event.trigger(map, 'resize');
        console.log('Arribe');
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(map);
        new google.maps.Marker({
          position: { lat: -37.81797151240914, lng: 144.9566299734581 },
          icon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/a4/f5/09/a4f5097c-207f-31df-3e91-69f7c632bff1/source/60x60bb.jpg',

          map,
          title: 'Hello World!',
        });
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  }
}
