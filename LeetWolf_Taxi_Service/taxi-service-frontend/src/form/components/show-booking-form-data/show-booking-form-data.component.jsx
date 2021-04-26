import React from 'react';
import {Table } from 'react-bootstrap'



    const ShowFormData = (props)=>{
        const [formData,setFormData] = React.useState({});

        React.useEffect(()=>{
            var storageData =  localStorage.getItem("bookingFormData")!=null? JSON.parse(localStorage.getItem("bookingFormData")):{}
            setFormData(storageData);
        },[localStorage.getItem("bookingFormData")]);


        return (
            <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th colSpan='2'>Booking Details </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="font-weight-bold">Service</td>
                    <td>{formData?.typeOfService}</td>
                    </tr>
                    <tr>
                    <td className="font-weight-bold">Date</td>
                    <td>{formData?.date}</td>
                    </tr>
                    <tr>
                    <td className="font-weight-bold">Time</td>
                    <td>{formData?.time}</td>
                    </tr>
                    <tr>
                    <td className="font-weight-bold">Pick-Up City</td>
                    <td>{formData?.pickUp}</td>
                    </tr>
                    <tr>
                    <td className="font-weight-bold">Drop-Off City</td>
                    <td>{formData?.dropOff}</td>
                    </tr>
                    <tr>
                    <td className="font-weight-bold">Passengers</td>
                    <td>{formData?.passenger}</td>
                    </tr>
                    <tr>
                    <td className="font-weight-bold">Luggage</td>
                    <td>{formData?.luggage}</td>
                    </tr>
                </tbody>
                </Table>


<Table striped bordered hover>
<thead>
    <tr>
    <th colSpan='2'>Vehicle Details </th>
    </tr>
</thead>
<tbody>
    <tr>
    <td className="font-weight-bold">Vehicle</td>
    <td>{formData?.vehicle}</td>
    </tr>
    <tr>
    <td className="font-weight-bold">Total Payable </td>
    <td>$54.90</td>
    </tr>
</tbody>
</Table>
</>
        );
    }

    export default ShowFormData;