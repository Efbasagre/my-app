import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${formData.name} (${formData.email})`);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form"> 
      
      <label>Name:</label>
     <div> <input type="text" name="name" value={formData.name} onChange={handleChange} /></div>
     <div><label>Email:</label></div>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Submit</button>
      
    </form>
    
  );
}

export default Contact;
