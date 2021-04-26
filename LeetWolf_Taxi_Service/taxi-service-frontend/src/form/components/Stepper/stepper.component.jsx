import { Steps, Button, message } from 'antd';
import React from 'react';
import './stepper.component.css'
import 'antd/dist/antd.css';
import BookingForm from '../wizard-form/booking-form.component'
import ShowFormData from '../show-booking-form-data/show-booking-form-data.component'
import {Alert} from 'react-bootstrap';
import ShowBookingPriceData from '../show-booking-price-data/show-booking-price-data.component';


const { Step } = Steps;
const Stepper = () => {
  const bookingFormRef = React.useRef();
  const [errorMsg,setErrorMsg]= React.useState("");
  const steps = [
    {
      title: 'Vehicle Booking',
      content: <BookingForm passedRef={bookingFormRef}/>,
    },
    {
      title: 'Booking/Vehicle Details',
      content: <ShowFormData formData={bookingFormRef?.current?.bookingFormData}/>
    },
    {
      title: 'Price Details',
      content: <ShowBookingPriceData formData={bookingFormRef?.current?.bookingFormData}/>,
    }
  ];

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onNextHandler = () =>{
    if(current==0){
    if( bookingFormRef?.current?.next()?.length==0)
     { 
       console.log("Saving data")
       bookingFormRef?.current?.saveToStorage();
       setErrorMsg("");
       next();
     }
    else  
    {
      setErrorMsg("Please add data in "+bookingFormRef?.current?.next().join(', ').toUpperCase() +" fields");
    }
  }
  else{
    next();
  }
  }
  return (
    <div className="container mt-5">
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
     { errorMsg==''?null:<Alert variant={'danger'}>
      {errorMsg}
          </Alert>
}
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={onNextHandler}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};


export default Stepper;