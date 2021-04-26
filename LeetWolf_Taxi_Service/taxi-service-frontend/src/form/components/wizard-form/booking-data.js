export const typeOfService = [
  "Ride To The Airport",
  "Ride From The Airport",
  "Hourly Service",
  "Door To Door Service",
  "Long Distance Service",
   ];

   export const vehicles = [
    "2-Passenger Sedan","2-Passenger Suburban SUV","2/3 Passenger SUV Lincoln Navigator","3/4 Passenger Mid SUV",
    "3/4 Chevrolet Suburban SUV","4/5 Passenger Lincoln Navigator","3/4 Passenger MiniVan","5/6 Passenger MiniVan",
    "5/6 Passenger Chevrolet Suburban"
   ];

  export const  saveToLocalStorage  = data=>{
    console.log(data)
    localStorage.setItem("bookingFormData",JSON.stringify(data))
  }

  
 