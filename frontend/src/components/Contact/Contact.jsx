import React, { useEffect, useState } from "react";
import "./Contact.css";
import { useSelector, useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { clearErrors, messageSendAction } from "../../store/action/dataAction";

const Contact = () => {
  const [messageData, setmessageData] = useState({name:"",email:"",message:""})
  const dispatch = useDispatch();
  const {error , message} = useSelector(state => state.updatePaper)

  const onChangeHandle = (e) => {
    const {name , value} = e.target
    setmessageData(preData => ({
      ...preData,
      [name]:value
    }))
  }

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }

    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch(clearErrors());
    }
  
   
  }, [error , message , dispatch])
  

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(messageSendAction(messageData))
  }

  return (
    <div className="contact-main">
      <h1 className="contact-title">Contact us</h1>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Enter Your name" value={messageData.name} onChange={onChangeHandle} required />
        <input type="email" name="email" placeholder="abc@xyz.com" value={messageData.email} onChange={onChangeHandle} required />
        <input
          type="text"
          name="message"
          placeholder="Enter Your query"
          value={messageData.message} 
          onChange={onChangeHandle}
          required
        />
        <button type="submit" onClick={onSubmit}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
