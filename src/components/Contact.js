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
        console.log(formData); // Handle form submission logic here
        // You can add logic to submit the form data to a backend or process it further
    };

    return (
        <div className="container contact-form" id='contact'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
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