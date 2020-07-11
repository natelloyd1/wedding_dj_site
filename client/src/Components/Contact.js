import React from 'react';

// const encode = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//       .join("&");
// }

function Contact() {

  //   const [name, setName] = useState('');
  //   const handleName = e => {
  //     setName(e.currentTarget.value);
  //     };
    
  //   const [subject, setSubject] = useState('');
  //   const handleSubject = e => {
  //       setSubject(e.currentTarget.value); 
  //   }

	// const [email, setEmail] = useState('');
	// const handleEmail = e => {
	// 	setEmail(e.currentTarget.value);
	// };

	// const [message, setMessage] = useState('');
	// const handleMessage = e => {
	// 	setMessage(e.currentTarget.value);
  // };
  
  // const sendEmail = e => {
    
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", ...useState })
  //   }) 
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error));

  //   e.preventDefault();
  //   console.log((name), (email), (message)); 
  // };


  return (

    <>

    <div className="sub-wrap">

    <h3 className="small-text">Call me on the telephone</h3>
    
    <h3 className="numb">07879 698 398</h3>

    <h3 className="small-text">Or punch your deets into the form below</h3>

    </div>

    <div className="form-wrap">

    <form name="contact" action="/" method="POST" data-netlify="true" >
    <input type='hidden' name='form-name' value='contact' />

      
      <div className="input-wrap">
			<label htmlFor="yourname">
        Name
      </label>
          <input
            type='text'
            name='name'
            id="yourname"
          />
        </div>

        <div className="input-wrap">   
        <label htmlFor="youremail">
        Email
        </label>
            <input
              type='email'
              name='email'
              id="youremail"
            />
        </div>

        <div className="input-wrap">  
        <label htmlFor="yoursubject">
        Subject
        </label>
            <input
              type='subject'
              name='subject'
              id="yoursubject"
            />
        </div>
            
        <div className="input-wrap">  
        <label htmlFor="yourmessage">
        Message
        </label>
            <textarea
              className="msg-box"
              name='message'
              id="yourmessage"

				/>
        </div>

        <button type="submit" className="input-button">Send</button>

			{/* <input className='input-button' type='submit' value="Send" /> */}

		  </form>


      </div>

        </>
        
    );
  }

export default Contact; 
