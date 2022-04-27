import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  posicio: google.maps.LatLngLiteral = {
    lat: -37.81215,
    lng: 144.971008,
  };
  loadMap: boolean = true;
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  apiLoaded: boolean = false;
  @ViewChild('map') mapElement: ElementRef;
  getValue() {
    console.log(this.mapElement);
  }
  constructor() {}
  async ngOnInit() {
    var directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
    });

    var directionsService = new google.maps.DirectionsService();
    var geocoder = new google.maps.Geocoder();
    var request = {
      origin: 'Collins St, Melbourne, Australia',
      destination: 'MCG Melbourne, Australia',
      travelMode: google.maps.TravelMode.DRIVING,
    };
    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log('Arribe');
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap(
          new google.maps.Map(
            document.getElementById('map3').getElementsByTagName('div')[0]
          )
        );
        directionsDisplay.setPanel(document.getElementById('directionsList'));
        //$scope.directions.showList = true;
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  }
}
