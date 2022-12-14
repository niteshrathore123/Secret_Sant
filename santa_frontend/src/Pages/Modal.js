import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { showSuccessAlert } from './alert';
import './home.css';


function Example() {
  const [show, setShow] = useState(false);
  const [email,setEmail]=useState('');
  const [msg,setMsg]=useState('');
  const [flag,setFlag]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const handlerEmail=(e)=>{
    e.preventDefault();
    
    setEmail(e.target.value.toLowerCase());
  }

  const  validateEmail =  (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }
  const handleReveal=()=>{
    let errorMsg=null;
    if(email===""){
      errorMsg="Please Enter Your Email";
      setMsg(errorMsg);
      setFlag(true);
      setTimeout(()=>{
        setFlag(false);
      },2000)
      return
    }
    else if(!validateEmail(email)){
      errorMsg="Please Enter Valid Email";
      setMsg(errorMsg);
      setFlag(true);
      setTimeout(()=>{
        setFlag(false);
      },2000)
      return
    }
    else{
      errorMsg="";
      axios.get(`http://159.65.155.28:5000/Secret-Santa/get_person_name/${email}`)
      .then(res=>{
        setShow(false);
          showSuccessAlert(res.data.message);
      })
      setEmail("");
      setMsg(errorMsg)
    }
    
    
  }
  

  return (
    <>
    <center style={{marginTop:"30px"}}>
      <Button variant="primary" onClick={handleShow} >
        Gets Started
      </Button>
      </center>

      <Modal 

      show={show} onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title >Secret Santa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          
         <Row>
            <Col xs={6} md={2}>
              
            </Col>
            
            <Col xs={6} md={8}  >
              <input placeholder='Enter Your Email' onChange={(e)=>handlerEmail(e)} style={{width:"100%",textAlign:"center"}}/>
              {
                flag && 
                <div className="errorMsg mt-2"><span className="err">{msg}</span></div>
              }
              
            </Col>
            <Col xs={6} md={2}>
              
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col xs={6} md={4}>
              
            </Col>
            <Col xs={6} md={3} className='mx-3'>
              <Button variant="primary" onClick={handleReveal}>
            Reveal
          </Button>
            </Col>
            <Col xs={6} md={4}>
            
            </Col>
          </Row>
          
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default Example;