import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  // State variables for banner content
  const [title, setTitle] = useState('Photography Adventures');
  const [description, setDescription] = useState(
    'Exploring the world through my lens, capturing moments that tell stories of places, people, and cultures.',
  );
  const [bgColor, setBgColor] = useState('from-blue-50 to-indigo-50');
  const [customBgColor, setCustomBgColor] = useState('');
  const [bannerImage, setBannerImage] = useState('nature'); // 'nature', 'urban', 'portrait'

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

  // Apply custom background color
  const applyCustomBgColor = () => {
    if (customBgColor) {
      setBgColor(customBgColor);
    }
  };

  return (
    <div className='min-h-screen'>
      {/* Full Width Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full bg-gradient-to-br ${bgColor} p-8 md:p-16`}
        style={{
          background: customBgColor && !bgColor.includes('from-') ? customBgColor : '',
        }}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='md:w-2/3'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4 text-indigo-800'>{title}</h1>
              <p className='text-gray-600 mb-6 text-lg'>{description}</p>
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
                className='w-full h-64 object-cover rounded-lg shadow-md'
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Controls Section */}
      <div className='max-w-6xl mx-auto p-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='bg-white p-6 rounded-xl shadow-lg mb-6'
        >
          <h2 className='text-2xl font-semibold mb-6 text-indigo-800 border-b pb-2'>
            Customize Banner
          </h2>

          <div className='bg-blue-50 p-4 rounded-lg mb-6'>
            <p className='text-blue-800'>
              Change the banner by modifying the fields below. All changes will be applied instantly
              without reloading the page.
            </p>
          </div>

          <div className='space-y-6'>
            {/* Title Input */}
            <div>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1'>
                Banner Title
              </label>
              <input
                type='text'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200'
                placeholder='Enter banner title'
              />
            </div>

            {/* Description Input */}
            <div>
              <label htmlFor='description' className='block text-sm font-medium text-gray-700 mb-1'>
                Banner Description
              </label>
              <textarea
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200'
                placeholder='Enter banner description'
              />
            </div>

            {/* Background Color Input */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-3'>
                Background Color
              </label>

              <div className='flex flex-wrap gap-2 mb-4'>
                {bgOptions.map((option) => (
                  <button
                    key={option.value}
                    type='button'
                    onClick={() => {
                      setBgColor(option.value);
                      setCustomBgColor('');
                    }}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      bgColor === option.value && !customBgColor
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-2 mt-4'>
                <input
                  type='text'
                  value={customBgColor}
                  onChange={(e) => setCustomBgColor(e.target.value)}
                  className='flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200'
                  placeholder='Enter color name, hex, rgb, or gradient (e.g., #f0f0f0, linear-gradient(to right, #ff7e5f, #feb47b))'
                />
                <button
                  type='button'
                  onClick={applyCustomBgColor}
                  className='px-6 py-3 rounded-lg font-medium text-white shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all duration-200'
                >
                  Apply Color
                </button>
              </div>

              <div className='mt-2 text-xs text-gray-500'>
                Try colors like: "lightblue", "#e0f7fa", "rgb(230, 255, 250)", or
                "linear-gradient(to right, #ff9966, #ff5e62)"
              </div>
            </div>

            {/* Image Select */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-3'>Banner Image</label>
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
            </div>
          </div>
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
      </div>
    </div>
  );
}

export default App;
