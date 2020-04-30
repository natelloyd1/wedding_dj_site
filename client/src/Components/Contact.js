import React, { Component } from 'react';
import axios from 'axios';


class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
        }; 
        this.handleChange = this.handleChange.bind(this); 
    }

        handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value })
        }

        async handleSubmit(event) {
            event.preventDefault()

            const { name, email, message } = this.state; 

            const form = await axios.post('/api/form', {
                name, email, message }) 
        }


    render() {
        return (
            <form>
                <div class="details-area">
                    <h2>Contact</h2>
                        <label for="message"></label>
                        <legend>Message</legend>
                        <textarea id="message" name="message" onChange={this.handleChange}></textarea>

                        <label for="name"></label>
                        <legend>Name*</legend>
                        <input required type="text" name="name" id="name" onChange={this.handleChange} />

                        <label for="inputemail"></label>
                        <legend>Email*</legend>
                        <input required type="email" id="inputemail" name="email" onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
};

export default Contact;



