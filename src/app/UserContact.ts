export class UserContact{
	ID:number;
	firstname:string;
	lastname:string;
	email:string;
	phone:string;
	address:string;
	lat:number;
	lng:number;

	constructor(){
		this.ID = 0;
		this.firstname = "";
		this.lastname = "";
		this.email = "";
		this.address = "";
		this.phone = "";
		this.lat= 0;
		this.lng= 0;
	}
}