import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: 'navigate.page.html',
  styleUrls: ['navigate.page.scss'],
})
export class NavegatePage implements OnInit {
  posicio: google.maps.LatLngLiteral;
  origin: string;
  destination: string;
  search: boolean = false;
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  apiLoaded: boolean = false;
  @ViewChild('map2') mapElement;
  getValue() {
    console.log(this.mapElement);
  }
  ngAfterViewInit() {
    console.info('ngAfterViewInit');
  }
  async ngOnInit() {
    this.search = false;
    this.zoom = 15;

    this.origin = 'Collins St, Melbourne, Australia';
    this.destination = 'MCG Melbourne, Australia';
  }
  constructor() {}
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
        setTimeout(() => {
          let map = new google.maps.Map(
            document.getElementById('map').getElementsByTagName('div')[0]
          );
          console.log('Arribe');
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap(map);
          new google.maps.Marker({
            position: { lat: -37.81797151240914, lng: 144.9566299734581 },
            icon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/a4/f5/09/a4f5097c-207f-31df-3e91-69f7c632bff1/source/60x60bb.jpg',

            map,
            title: 'Hello World!',
          });
          directionsDisplay.setPanel(document.getElementById('status2'));
          //$scope.directions.showList = true;
        }, 100);
      } else {
        alert('Google route unsuccesfull!');
      }
    });
    this.search = true;
  }
}
