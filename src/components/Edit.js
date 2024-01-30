import React,{useState,useEffect}from "react";
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import FeedbackForm from "./FeedbackForm";
import {Link,useNavigate}from 'react-router-dom';

function Edit(){
    const [email,setEmail]=useState('');
    const [feedback,setFeedback]=useState('');
    const [rating,setRating]=useState('');
    const [id,setId]=useState('');

    let history=useNavigate();

    
    var index=FeedbackForm.map(function(e){
            return e.id

        }).indexOf(id);

        const handleSubmit=(e)=>{
            e.preventDefault();
    
            if (!email || !feedback || !rating) {
                alert('Please fill in all fields');
                return;
              }
    
           let a=FeedbackForm[index];
           a.Email=email;
           a.Feedback=feedback;
           a.Rating=rating;
    
            history("/");
    
        }
        useEffect(()=>{
            setEmail(localStorage.getItem('Email'))
            setFeedback(localStorage.getItem('Feedback'))
            setRating(localStorage.getItem('Rating'))
            setId(localStorage.getItem('Id'))
        },[])

        return(
            <div>
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
                <Button onClick={(e)=>handleSubmit(e)} type="submit" style={{ backgroundColor: 'green', color: 'white'}}>Update</Button>
            </Form>
            </div>
        )
}

export default Edit;