import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

declare var google: any;

@Component({
	selector: 'app-maps',
	templateUrl: './maps.component.html',
	styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	constructor() { }

	ngOnInit() {
		this.loadMap();
	}

	loadMap()
	{
		let latLng = new google.maps.LatLng(-6.548, 106.945);
		let mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		// init maps
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}
	runAutoCompleteAlamat()
	{
	// this just for angular desktop
	  var input = document.getElementById('address');
	var options = {componentRestrictions: {country: 'id'}};
	var autocomplete = new google.maps.places.Autocomplete(input, options);

	autocomplete.addListener('place_changed', () =>{
	      var place = autocomplete.getPlace();
	      // this.setAlamatPengirim(place.formatted_address);
	      // this.user = place.formatted_address;
	      console.log(place.name);
	      console.log(place.geometry.location.lat());

	      if (!place.geometry) {
	        alert("No details available for input: '" + place.name + "'");
	      return;
	    }
	    });
	}

}
