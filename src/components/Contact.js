import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css'; // Import your custom CSS for dark theme styling

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Log form data for testing
        // Handle form submission logic here (e.g., submit to FormBold endpoint)
        const form = e.target;
        const formDataToSend = new FormData(form);

        fetch('https://formbold.com/s/oyDZA', {
            method: 'POST',
            body: formDataToSend
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Form submitted successfully');
            // Add logic here to handle success (e.g., show success message)
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // Add logic here to handle error (e.g., show error message)
        });
    };

    return (
        <div className="container contact-form" id='contact'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} action='https://formbold.com/s/oyDZA' method='POST' encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3" value={formData.description} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="social-links mt-3">
                <a href="https://github.com/itsmessc" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/sai-charan-sanganwar-224878259/" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    );
};

export default ContactForm;
