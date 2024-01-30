import React, { Fragment } from "react";
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import FeedbackForm from "./FeedbackForm";
import {Link,useNavigate}from 'react-router-dom'
import Feedback from "react-bootstrap/esm/Feedback";

function Home(){

    let history=useNavigate();

    const handleEdit=(id,email,Feedback,rating) =>{
        localStorage.setItem('Email',email);
        localStorage.setItem('Feedback',Feedback);
        localStorage.setItem('Rating',rating);
        localStorage.setItem('Id',id);

    }

    const handleDelete=(id)=>{
        var index=FeedbackForm.map(function(e){
            return e.id

        }).indexOf(id);
        FeedbackForm.splice(index,1);
        history('/');
    }
    return(
        <Fragment>
            <div style={{margin:"10rem "}}>
                <Table striped bordered hover size="5m" >
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'green', color: 'white' }}>
                                Email
                            </th>
                            <th style={{ backgroundColor: 'green', color: 'white' }}>
                                Feedback
                            </th>
                            <th style={{ backgroundColor: 'green', color: 'white' }}>
                                Rating
                            </th>
                            <th style={{ backgroundColor: 'green', color: 'white' }}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            FeedbackForm && FeedbackForm.length>0
                            ?
                            FeedbackForm.map((item)=>{
                                return(
                                <tr key={item.id}>
                                    <td>
                                        {item.Email}
                                    </td>
                                    <td>
                                        {item.Feedback}
                                    </td>
                                    <td>
                                        {renderStars(item.Rating)}
                                    </td>
                                    <td>
                                        <Link to={'/edit'}>
                                        <Button onClick={()=>handleEdit(item.id,item.Email,item.Feedback,item.Rating)}>EDIT</Button>
                                        </Link>
                                        &nbsp;
                                        <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={()=>handleDelete(item.id)}>DELETE</Button>
                                    </td>
                                </tr>
                                );
                            })
                            :
                            "No feedbacks available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link  to="/create" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="lg" style={{backgroundColor:'green',color:'white'}}
                    onMouseOver={(e)=>(e.target.style.backgroundColor='blue')} onMouseOut={(e)=>(e.target.style.backgroundColor='green')}>CREATE</Button>
                </Link>
            </div>
        </Fragment>
    );

}

// Function to render stars based on the review rating
const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push('⭐');
    }
    return stars.join(' '); // Join stars to display them as text
  };

export default Home;

