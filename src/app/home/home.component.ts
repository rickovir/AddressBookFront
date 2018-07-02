import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { UserContact } from '../UserContact';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  start:string;
  userContacts:Array<UserContact>;
  user:UserContact;
  address:string;

  constructor() { 
  	this.start = "";
    this.userContacts = [];
  }

  ngOnInit() {
  }

  setStart(newStart:string)
  {
    this.start = newStart;
  }
  	// untuk autocomplete

  runAutoCompleteAlamat()
  {
    // this just for angular desktop
      var input = document.getElementById('address');
    var options = {componentRestrictions: {country: 'id'}};
    var autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', () =>{
          var place = autocomplete.getPlace();
          // this.setAlamatPengirim(place.formatted_address);
          this.user = place.formatted_address;
          console.log(place.name);
          console.log(place.geometry.location.lat());

          if (!place.geometry) {
            alert("No details available for input: '" + place.name + "'");
          return;
        }
        });
  }


  // startInputFocus()
  // {
  //     var input = document.getElementById('address').getElementsByTagName('input')[0];
  //     let autocomplete = this.autoComplete(input);
  //     autocomplete.addListener('place_changed', () =>{
  //       var place = autocomplete.getPlace();
  //       this.setStart(place.formatted_address);
  //       if (!place.geometry) {
  //         alert("No details available for input: '" + place.name + "'");
  //       return;
  //     }
  //     });
  // }
}
