import React, { useState } from 'react';
import "./contact-us.css"

function ContactUs() {

    const [isHovered1, setIsHovered1] = useState(false);
    const [inputValue1, setInputValue1] = useState(''); 
    const handleInputChange1 = (e) => {
      setInputValue1(e.target.value);
    };
  
  
    const [isHovered2, setIsHovered2] = useState(false);
    const [inputValue2, setInputValue2] = useState(''); 
    const handleInputChange2 = (e) => {
      setInputValue2(e.target.value);
    };
    
    const [isHovered3, setIsHovered3] = useState(false);
    const [inputValue3, setInputValue3] = useState(''); 
    const handleInputChange3 = (e) => {
      setInputValue3(e.target.value);
    }; 

    return (
        <section id="contact" className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat nisi sit amet ante convallis vulputate.</p>
            
            <form id="form-contact" className="mt-4">
                <div className="mb-4 w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Name"
                        value={inputValue1} 
                        onChange={handleInputChange1}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    />
                   {isHovered1 && inputValue1.trim() === '' && <p style={{ color: 'red' }}>Please fill in your name</p>}
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Email"
                        value={inputValue2} 
                        onChange={handleInputChange2}
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    />
                    {isHovered2 && inputValue2.trim() === '' && <p style={{ color: 'red' }}>Please fill in email</p>}                    
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Message"
                        value={inputValue3} 
                        onChange={handleInputChange3}
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    ></textarea>
                    {isHovered3 && inputValue3.trim() === '' && <p style={{ color: 'red' }}>Please fill in message</p>}                    
                </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Send</button>
            </form>
            <br/><br/>
        </section>
    )
  }
  
export default ContactUs