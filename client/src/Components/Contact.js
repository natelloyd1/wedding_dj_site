import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    const [name, setName] = useState('');
	const handleName = e => {
		setName(e.currentTarget.value);
    };
    
    const [subject, setSubject] = useState('');
    const handleSubject = e => {
        setSubject(e.currentTarget.value); 
    }

	const [email, setEmail] = useState('');
	const handleEmail = e => {
		setEmail(e.currentTarget.value);
	};

	const [message, setMessage] = useState('');
	const handleMessage = e => {
		setMessage(e.currentTarget.value);
	};

  function sendEmail(e) {
    e.preventDefault();

    let templateParams = {
        from_name: {name},
        email: {email},
        subject: {subject},
        message: {message},
       }

    emailjs.sendForm('wedding_dj', 'template_KIhfb3qe', templateParams, 'user_IMkRHHnMyI2k74WIRnqQJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (

    <>
    <div className="sub-wrap">

    <h3 className="small-text">Call me on the telephone</h3>
    
    <h3 className="numb">07879 698 398</h3>

    <h3 className="small-text">Or punch your deets into the form below</h3>

    </div>

    <div className="form-wrap">

    <form onSubmit={ sendEmail } >
        <div className="input-wrap">
			<legend>Name</legend>
				<input
					value={ name }
					type='text'
					name='name'
					onChange={ handleName }
				/>
        </div>

        <div className="input-wrap">   
            <legend>Email</legend>
				<input
					value={ email }
					type='email'
					name='email'
					onChange={ handleEmail }
				/>
        </div>

        <div className="input-wrap">  
            <legend>Subject</legend>
				<input
					value={ subject }
					type='subject'
					name='subject'
					onChange={ handleSubject }
				/>
        </div>
            
        <div className="input-wrap">  
			<legend>Message</legend>
				<textarea
                    className="msg-box"
					value={ message }
					name='message'
					onChange={ handleMessage }
				/>
            </div>

			<button className='input-button' type='submit'>Send</button>
		</form>
        </div>
        </>
  );
}