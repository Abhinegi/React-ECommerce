import  {Form,Row,Col} from 'react-bootstrap';
import React from 'react';
import {typeOfService,saveToLocalStorage,vehicles} from './booking-data'
import { Typeahead } from 'react-bootstrap-typeahead';
  
const BookingForm = (props, ref) => {

  React.useImperativeHandle(props.passedRef, () => ({
    next: validateForm,
    saveToStorage: saveToStorage,
    bookingFormData:formData
  }));

  var todayDate = new Date();
  todayDate = todayDate.getFullYear()+"-"+
  (todayDate.getMonth()<10?"0"+(todayDate.getMonth()+1):todayDate.getMonth()+1)+"-"+todayDate.getDate();
  console.log(todayDate)

  const [formData,SetFormData] = React.useState({
    typeOfService:'',date:'',time:'',pickUp:[],dropOff:[],passenger:'',luggage:'',vehicle:'',emailId:'',childSeat:'',travelTime:''
  });


  //use to call services 
  React.useEffect(()=>{
   if(localStorage.getItem("bookingFormData")!=undefined){
     var  bookingFormData = JSON.parse(localStorage.getItem("bookingFormData"));
     console.log(bookingFormData)
     SetFormData(bookingFormData)
   }
  },[]);


    function getPassengerAndLuggageNumber(){
      const passengerAndLuggageNumber = []
      for(var i =0;i<=15;++i)
        passengerAndLuggageNumber.push(i)
      return passengerAndLuggageNumber;
    }
  
  function getTimeArray(){
    const time=[];
    for(var i=1;i<=11;++i){
        time.push(i+":"+"00 AM");
        time.push(i+":"+"30 AM");
    }
    time.push("12:00 AM")
    time.push("12:30 PM")
    for(i=1;i<=11;++i){
        time.push(i+":"+"00 PM");
        time.push(i+":"+"30 PM");
    }
    time.push("12:00 PM")
    time.push("12:30 AM")
    return time;
   } 

  function saveToStorage(){
    console.log("Dtaa to save ", formData)
    saveToLocalStorage(formData);
  }

   const options=["state1","state2"]

   const validateForm = ()=>{
   var errorFields = [];
   for(var key of Object.keys(formData)){
    if(Array.isArray(formData[key]) && formData[key].length==0)
      errorFields.push(key);
     else if(formData[key]==='') 
      errorFields.push(key);
   }
   if(formData?.typeOfService !== "HS")
    errorFields = errorFields.filter(e=> e !== "travelTime")

   return errorFields;
  }  


  return (<>
  <Form className="p-5">
  <Form.Group as={Row} >
    <Form.Label  column sm={3} className="font-weight-bold ">Type of Service</Form.Label>
    <Col sm={9}>
    <Form.Control  as="select" value={formData.typeOfService} custom onChange={e=>SetFormData({...formData,typeOfService:e.target.value})}>
        <option value=''> Select Type Of service</option>
      {
          typeOfService.map(option=><option key={Math.random()} value={option}>{option}</option>)
      }
    </Form.Control>
    </Col>
  </Form.Group>

  <Form.Group>
  <Form.Row  >
  <Form.Label column sm={3} className="font-weight-bold">Date / Time</Form.Label>
  <Col sm={4}>
    <Form.Control type="date"  min={todayDate} value={formData.date}  onChange={e=>SetFormData({...formData,date:e.target.value})}/>
    </Col>
    <Col as={Col} sm={4}>
    <Form.Control value={formData.time} as="select" custom onChange={e=>SetFormData({...formData,time:e.target.value})}>
        <option value=''> Select Time</option>
      {
          getTimeArray().map(option=><option key={Math.random()} value={option}>{option}</option>)
      }
    </Form.Control>
    </Col>
    
  </Form.Row>
  </Form.Group>

  <Form.Group>
  <Form.Row >
        <Form.Label column sm={3} className="font-weight-bold"> Pick Up </Form.Label>
        <Col sm={9}>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={(value) =>SetFormData({...formData,pickUp:value})}
          options={options}
          placeholder="Choose a state"
          selected={formData.pickUp}
        />
        </Col>
        </Form.Row>
  </Form.Group>

  <Form.Group>
  <Form.Row >
        <Form.Label column sm={3} className="font-weight-bold "> Drop Off </Form.Label>
        <Col sm={9}>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={(value) =>SetFormData({...formData,dropOff:value})}
          options={options}
          placeholder="Choose a state..."
          selected={formData.dropOff}
        />
        </Col>
        </Form.Row>
  </Form.Group>

  {
  formData?.typeOfService === "HS" ? <Form.Group>
    <Form.Row>
    <Form.Label column sm={3} className="font-weight-bold ">Travel Hours</Form.Label>
    <Col sm={9}>
    <Form.Control type="number" placeholder="Enter Travel Hours" value={formData.travelTime} onChange={e=>SetFormData({...formData,travelTime:e.target.value})} />
    </Col>
  </Form.Row>
  </Form.Group>  : null
 }
  
  <Form.Group >
  <Form.Row >
    <Form.Label column sm={3}  className="font-weight-bold "> Passenger </Form.Label>
    <Col sm={3}>
    <Form.Control  as="select" value={formData.passenger} custom onChange={e=>SetFormData({...formData,passenger:e.target.value})}>
        <option value=""> Select No. Of Passengers </option>
      {
          getPassengerAndLuggageNumber().filter(el=>el<=12).map(option=><option  key={Math.random()} value={option}>{option}</option>)
      }
    </Form.Control>
      </Col>
    <Form.Label column sm={3}  className="font-weight-bold "> Luggage </Form.Label>
    <Col sm={3}>
    <Form.Control value={formData.luggage}  as="select" custom onChange={e=>SetFormData({...formData,luggage:e.target.value})}>
        <option value="">Select Luggage</option>
      {
          getPassengerAndLuggageNumber().map(option=><option  key={Math.random()} value={option}>{option}</option>)
      }
    </Form.Control>
      </Col>
    </Form.Row>
    </Form.Group>

    <Form.Group as={Row} >
    <Form.Label  column sm={3} className="font-weight-bold ">Select Vehicles</Form.Label>
    <Col sm={9}>
    <Form.Control  as="select" custom value={formData.vehicle} onChange={e=>SetFormData({...formData,vehicle:e.target.value})}>
        <option value=''> Select Vehicles </option>
      {
          vehicles.map(option=><option  key={Math.random()} value={option}>{option}</option>)
      }
    </Form.Control>
    </Col>
  </Form.Group>

  <Form.Group>
    <Form.Row>
    <Form.Label column sm={3} className="font-weight-bold ">Email address</Form.Label>
    <Col sm={9}>
    <Form.Control type="email" placeholder="Enter email" value={formData.emailId} onChange={e=>SetFormData({...formData,emailId:e.target.value})} />
    </Col>
  </Form.Row>
  </Form.Group>
  
  <Form.Group>
    <Form.Row>
  <Form.Label column sm={3}  className="font-weight-bold "> Child Seat </Form.Label>
    <Col sm={3}>
    <Form.Control value={formData.childSeat}  as="select" custom onChange={e=>SetFormData({...formData,childSeat:e.target.value})}>
        <option value="">Select Child Seat</option>
      {
          getPassengerAndLuggageNumber().map(option=><option  key={Math.random()} value={option}>{option}</option>)
      }
    </Form.Control>
      </Col>
      </Form.Row>
    </Form.Group>
  
</Form>
  </>)
}

export default React.forwardRef(BookingForm);