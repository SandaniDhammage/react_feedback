import React,{useState}from "react";
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import FeedbackForm from "./FeedbackForm";
import {v4 as uuid} from "uuid";
import {Link,useNavigate}from 'react-router-dom';

function Add(){
    const [email,setEmail]=useState('');
    const [feedback,setFeedback]=useState('');
    const [rating,setRating]=useState('');

    let history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if (!email || !feedback || !rating) {
            alert('Please fill in all fields');
            return;
          }

        const ids=uuid();
        let uniqueId=ids.slice(0,8);

        let a=email,
        b=feedback,
        c=rating;

        FeedbackForm.push({id:uniqueId,Email:a,Feedback:b,Rating:c});

        history("/");

    }

    return(
        <div>
            <h2 style={{ marginTop: "7rem" }}>Feedback Form</h2>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}required ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFeedback">
                    <Form.Control type="text" placeholder="Enter Feedback" value={feedback} onChange={(e)=>setFeedback(e.target.value)}required ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRating">
                    <Form.Control type="text" placeholder="Enter Rating" value={rating} onChange={(e)=>setRating(e.target.value)}required ></Form.Control>
                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)} type="submit" style={{ backgroundColor: 'green', color: 'white'}}>Submit</Button>
            </Form>

        </div>

    )

}
export default Add;