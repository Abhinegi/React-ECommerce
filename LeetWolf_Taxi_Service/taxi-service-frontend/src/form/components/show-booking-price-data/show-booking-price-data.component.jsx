import React from 'react';
import {Table } from 'react-bootstrap'
import {calculateFare} from './show-booking-price-util'


    const ShowBookingPriceData = (props)=>{
        const [priceDetails,setPrice]=React.useState({})

        const [formData,setFormData] = React.useState({});

        React.useEffect(()=>{
            var storageData =  localStorage.getItem("bookingFormData")!=null? JSON.parse(localStorage.getItem("bookingFormData")):{}
            setFormData(storageData)
        },[localStorage.getItem("bookingFormData")]);

        React.useEffect(()=>{
            setPrice(calculateFare(formData,10));
            
        },[formData])
        console.log("price details ",priceDetails)
        return (
            <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th colSpan='2'>{formData?.vehicle} </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="font-weight-bold">Distance Covered</td>
                    <td>100 </td>
                    </tr>
                    <tr>
                    <td class="font-weight-bold">Estimated Fare</td>
                    <td>{"$ " + priceDetails?.estimatedFare}</td>
                    </tr>
                    <tr>
                    <td class="font-weight-bold">Gratuity(20% of fare)</td>
                    <td>{"$ " + priceDetails?.gratuity}</td>
                    </tr>
                    <tr>
                    <td class="font-weight-bold">Night Charges</td>
                    <td>{"$ " + priceDetails?.nightCharges}</td>
                    </tr>
                    <tr>
                    <td class="font-weight-bold">Total Payble</td>
                    <td>{`$ ${priceDetails?.totalPrice}`}</td>
                    </tr>
                </tbody>
                </Table>

</>
        );
    }

    export default ShowBookingPriceData;