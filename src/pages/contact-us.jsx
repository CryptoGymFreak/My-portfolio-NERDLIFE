import "./contact-us.css"

function ContactUs() {
    return (
        <section id="contact" className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat nisi sit amet ante convallis vulputate.</p>
            
            <form id="form-contact" className="mt-4">
                <div className="mb-4 w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Name"/>
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Email"/>
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Message"></textarea>
                </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Send</button>
            </form>
        </section>
    )
  }
  
export default ContactUs