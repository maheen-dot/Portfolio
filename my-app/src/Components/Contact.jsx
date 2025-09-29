import react from 'react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
});

    return (
        <div id='contact' className='h-250px bg-gray-950 flex flex-col items-center justify-center text-white'>  
        <h2 className='text-4xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
        Contact Me
        </h2>
        <form className='flex flex-col p-10 w-120 bg-transparent mt-10 rounded-lg '>
            <label className='mb-2 text-lg font-medium' htmlFor='name'>Name</label>
            <input
                type='text'
                id='name'
                name='name'
                className='mb-4 p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-purple-400'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label className='mb-2 text-lg font-medium' htmlFor='email'>Email</label>
            <input
                type='email'
                id='email'
                name='email'
                className='mb-4 p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-purple-400'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label className='mb-2 text-lg font-medium' htmlFor='message'>Message</label>
            <textarea
                id='message'    
                name='message'
                rows='4'
                className='mb-4 p-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-purple-400'
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
                {/* Inner container to hold actual button */}
                <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-purple-600 to-pink-500">
                    <button
                    type="submit"
                    className="bg-gray-900/90 backdrop-blur-md w-full px-3 py-3 rounded-xl text-lg font-semibold hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-pink-500 transition transform shadow-lg text-white"
                    >
                    Send Message
                    </button>
                </div>
        </form>
        </div>
        
    )
}

export default Contact