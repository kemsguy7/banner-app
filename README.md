# Photography Adventures Banner Project

A responsive React application featuring a customizable banner about photography and a form that allows users to modify the banner's content in real-time.

## Features

- **Interactive Banner**: Displays information about photography adventures with customizable content
- **Real-time Updates**: Changes to the banner occur instantly without page reload
- **Responsive Design**: Fully mobile-responsive layout that adapts to different screen sizes
- **Animations**: Smooth transitions and hover effects using Framer Motion
- **Customization Options**: Change the banner title, description, background color, and featured image

## Technologies Used

- **React**: Frontend library for building the user interface
- **TypeScript**: For type-safe code
- **TailwindCSS**: For styling and responsive design
- **Framer Motion**: For animations and transitions
- **Jest & React Testing Library**: For unit testing

## Project Structure

```
src/
├── App.tsx             # Main application component
├── App.test.tsx        # Unit tests for the App component
├── index.tsx           # Entry point
├── react-app-env.d.ts  # TypeScript declarations
└── ...
```

## Setup and Installation

1. Clone the repository:

   ```
   git clone [your-repository-url]
   ```

2. Navigate to the project directory:

   ```
   cd photography-adventures
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Running Tests

To run the unit tests:

```
npm test
```

## Implementation Details

### Banner Component

The banner component features:

- A responsive layout that changes from vertical to horizontal on larger screens
- A title and description about photography adventures
- Related tags displayed as pill buttons
- A featured image that can be changed through the form

### Form Controls

The form allows users to:

- Change the banner title
- Modify the banner description
- Select from four different background gradient colors
- Choose from three different photography images (nature, urban, portrait)

### State Management

The application uses React's useState hooks to manage the state of:

- Banner title
- Banner description
- Background color
- Featured image

All changes to these states are immediately reflected in the banner without requiring a page reload.

### Animation

Framer Motion is used to add subtle animations:

- Page elements fade in on initial load
- Hover effects on form controls
- Smooth transitions when changing banner content

## Future Enhancements

Potential future improvements for the project:

- Add local storage to persist user customizations
- Implement theme switching (dark/light mode)
- Add more customization options (fonts, layout styles)
- Enable image upload functionality
- Add more advanced animations and transitions

---

&copy; 2025 Photography Adventures
