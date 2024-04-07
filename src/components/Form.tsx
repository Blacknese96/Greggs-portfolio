import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    emailjs.sendForm('service_s1umydk', 'template_rvhbix1', e.target, 'bX5uTuEepuVqmq7iy')
    .then((result) => {
      console.log('Email sent successfully:', result.status);
      toast.success('Email sent successfully!', {
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      date: '',
      time: '',
      message: ''
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      toast.error('Please try again later.', {
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    });
  };

  return (
    <form className="w-full sm:max-w-[580px] bg-[#DDDDDD]  p-8" onSubmit={handleSubmit}>
    <ToastContainer />
      <div className="mb-4">
        <label className="block text-[#37393F] text-sm font-bold mb-2" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-[#37393F] text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-[#37393F] text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        
      </div>

      <div className="mb-4 flex gap-5 justify-between w-full">
      <div className='w-[50%]'>
      <label htmlFor="date" className="block text-[#37393F] text-sm font-bold mb-2">
                Select Date:
              </label>
              <input
                type="date"
                id='date'
                name='date'
                value={formData.date}
            onChange={handleChange}
            required
            className="shadow appearance-none border h-12 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    
    <div className='w-[50%]'>
    <label htmlFor="time" className="block text-[#37393F] text-sm font-bold mb-2">
                Select Time:
              </label>
    <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="shadow appearance-none h-12 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled hidden>
              Select a time
            </option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="11:00">12:00 PM</option>
            <option value="11:00">01:00 PM</option>
            <option value="17:00">5:00 PM</option>
          </select>
                
    </div>
      </div>

      <div className="mb-4">
        <label className="block text-[#37393F] text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded h-[140px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="bg-primary hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default MyForm;
