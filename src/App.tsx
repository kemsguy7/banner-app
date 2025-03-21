import { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  // State variables for banner content
  const [title, setTitle] = useState('Photography Adventures');
  const [description, setDescription] = useState(
    'Exploring the world through my lens, capturing moments that tell stories of places, people, and cultures.',
  );
  const [bgColor, setBgColor] = useState('from-blue-50 to-indigo-50');
  const [bannerImage, setBannerImage] = useState('nature'); // othe states 'nature', 'urban', 'portrait'

  // Image options
  const imageOptions = {
    nature:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    urban:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    portrait:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  };

  // Background color options
  const bgOptions = [
    { name: 'Blue-Indigo', value: 'from-blue-50 to-indigo-50' },
    { name: 'Purple-Pink', value: 'from-purple-50 to-pink-50' },
    { name: 'Green-Teal', value: 'from-green-50 to-teal-50' },
    { name: 'Amber-Red', value: 'from-amber-50 to-red-50' },
  ];

  // Handle form submit to prevent page reload
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColor} p-4`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-4xl mx-auto'
      >
        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='bg-white p-6 rounded-xl shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300 overflow-hidden'
        >
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='md:w-2/3'>
              <h1 className='text-4xl font-bold mb-4 text-indigo-800'>{title}</h1>
              <p className='text-gray-600 mb-6'>{description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full'>
                  #photography
                </span>
                <span className='px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full'>
                  #adventure
                </span>
                <span className='px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full'>
                  #travel
                </span>
              </div>
            </div>
            <div className='md:w-1/3'>
              <img
                src={imageOptions[bannerImage as keyof typeof imageOptions]}
                alt='Banner'
                className='w-full h-48 object-cover rounded-lg shadow-md'
              />
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='bg-white p-6 rounded-xl shadow-lg mb-6'
        >
          <h2 className='text-2xl font-semibold mb-6 text-indigo-800 border-b pb-2'>
            Customize Banner
          </h2>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Title Input */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className='transition-all duration-300'
              >
                <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1'>
                  Banner Title
                </label>
                <input
                  type='text'
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200'
                />
              </motion.div>

              {/* Description Input */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className='transition-all duration-300'
              >
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Banner Description
                </label>
                <textarea
                  id='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200'
                />
              </motion.div>
            </div>

            {/* Background Select */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className='transition-all duration-300'
            >
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Background Color
              </label>
              <div className='flex flex-wrap gap-2'>
                {bgOptions.map((option) => (
                  <button
                    key={option.value}
                    type='button'
                    onClick={() => setBgColor(option.value)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      bgColor === option.value
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Image Select */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className='transition-all duration-300'
            >
              <label className='block text-sm font-medium text-gray-700 mb-1'>Banner Image</label>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(imageOptions).map((key) => (
                  <div
                    key={key}
                    onClick={() => setBannerImage(key)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      bannerImage === key ? 'border-indigo-500 shadow-md' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={imageOptions[key as keyof typeof imageOptions]}
                      alt={key}
                      className='w-full h-24 object-cover'
                    />
                    <div className='p-2 bg-gray-50 text-center capitalize'>{key}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Submit Button */}
            <div className='flex justify-end'>
              <button
                type='submit'
                className='px-6 py-3 rounded-lg font-medium text-white shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all duration-200'
              >
                Apply Changes
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='mt-6 text-center text-gray-500 text-sm'
        >
          <p>
            &copy; {new Date().getFullYear()} Photography Adventures | Built with React &
            TailwindCSS
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
