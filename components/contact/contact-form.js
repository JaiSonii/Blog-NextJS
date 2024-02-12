import classes from './contact-form.module.css';
import { useState, useContext } from 'react';
import { NotificationContext } from '../../store/notification-context';

export default function ContactForm(){

    const notificationCtx = useContext(NotificationContext)
    
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    async function sendData(message){
        const response = await fetch('/api/contact',{
            method: 'POST',
            body: JSON.stringify(message),
            headers:{
                'Content-Type' : 'application/json'
            }
        })

        const data = response.json();
        if(!response.ok){
            console.log('error'); 
            throw new Error(data.message || "something went wrong")  
             
        }
        
    }

    async function formSubmitHandler(event){
        event.preventDefault();

        notificationCtx.showNotification({
            title: 'Pending!',
            message : 'Sending the message',
            status: 'pending'
        })

        const newMessage = {
            email : enteredEmail,
            name : enteredName,
            message: enteredMessage
        }

        try {
           await sendData(newMessage);
            notificationCtx.showNotification({
                title: 'Success!',
                message:  "message sent successfully",
                status: 'success'
            })
        } catch (error) {
            console.log(error)
            notificationCtx.showNotification({
                title: 'Error!',
                message:  "Something went wrong",
                status: 'error'
            })
        }
        
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' placeholder='youreamil@xyz' value={enteredEmail} onChange={event=>setEnteredEmail(event.target.value)}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' placeholder='John Doe' value={enteredName} onChange={event=>setEnteredName(event.target.value)}/>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' rows={5} value={enteredMessage} onChange={event=>setEnteredMessage(event.target.value)}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    )
}