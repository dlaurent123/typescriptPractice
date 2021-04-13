
// Instructions to ever other class on how they can be an argument to addMaker method
interface Mappable {
    location:{
        latitude:number
        longitude:number
    }
    
}


export class CustomMap {
    private googleMap: google.maps.Map;

     constructor(divId:string){
         this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom:2,
            center:{
                lat:0,
                lng:0 
            }
        })
     }

     addMarker(mappable:Mappable):void{
      new google.maps.Marker({
          map:this.googleMap,
          position:{
              lat:mappable.location.latitude,
              lng:mappable.location.longitude
          }
      })
     }

     
}