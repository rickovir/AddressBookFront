import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { UserContact } from '../UserContact';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  userContacts:Array<UserContact>;
  user:UserContact;
  address:string;
  status:string;
  isShowMap:boolean;

  constructor() { 
    this.userContacts = [];
    this.kosongkanUser();
    this.status = "add";
    this.isShowMap= false;
  }

  ngOnInit() {

  }

  kosongkanUser()
  {
    this.user = {
        ID : 0,
        firstname : "",
        lastname : "",
        phone : "",
        address : "",
        email : "",
        lat:0,
        lng:0
    };
  }
  setAlamat(alamat)
  {
    this.user.address = alamat;
  }

  setLokasi(lat,lng)
  {
    this.user.lat = lat;
    this.user.lng = lng;
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
          this.setAlamat(place.formatted_address);
          this.setLokasi(place.geometry.location.lat(), place.geometry.location.lng());
          console.log(place.name);
          console.log(this.user.lat);
          console.log(this.user.lng);

          if (!place.geometry) {
            alert("No details available for input: '" + place.name + "'");
          return;
        }
        });
  }

  submitInput()
  {
    if(this.status == "add"){
      this.user.ID = this.getRandomInt(100,999);
      this.userContacts.push(this.user);
    }
    else if(this.status == "update")
    {
      this.userContacts.map((data)=>{
        if(data.ID == this.user.ID)
        {
          data = this.user;
        }
      })
    }
    
    console.log(this.user);
    this.kosongkanUser();
    this.status = "add";
  }

  updateData(dataUser:UserContact)
  {
    this.user = dataUser;
    this.status = "update";
  }

  hapusData(dataUser:UserContact)
  {
    this.userContacts = this.userContacts.filter((data)=>{
      if(data.ID != dataUser.ID)
        return data;
    })
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  showMap(dataUser:UserContact)
  {
    this.isShowMap=true;
    setTimeout(()=>{
      this.loadMap(dataUser.lat, dataUser.lng);
    }, 3000);
  }
  
  closeMaps(){
    this.isShowMap = false;

  }
  loadMap(lat, lng)
  {
    let latLng = new google.maps.LatLng(lat, lng);
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
