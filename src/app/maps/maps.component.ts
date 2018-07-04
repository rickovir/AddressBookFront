import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var google: any;

@Component({
	selector: 'app-maps',
	templateUrl: './maps.component.html',
	styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	constructor() {
		// this.loadMap();
	}

	ngOnInit() {
		setTimeout(()=>{
			this.loadMap();
		}, 3000);
	}

	loadMap()
	{
		let latLng = new google.maps.LatLng(-6.548, 106.945);
		// let latLng = {lat:-6.548, lng:106.945};
		let mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		// init maps
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
		let marker = new google.maps.Marker({position: latLng, map: this.map});
	}

}
