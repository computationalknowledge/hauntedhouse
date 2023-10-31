Here's a step-by-step implementation of how to create the components (HauntedHouse, RoomOne, RoomTwo, RoomThree, Door) 
  and add the code to your Haunted House Explorer app in the src directory of your project:

Create the HauntedHouse Component:

In your project's src directory, create a file named HauntedHouse.js and add the following code to create the HauntedHouse component:

jsx
Copy code
// src/HauntedHouse.js
import React from 'react';
import Door from './Door';
import RoomOne from './RoomOne';
import RoomTwo from './RoomTwo';
import RoomThree from './RoomThree';

function HauntedHouse() {
  return (
    <div className="haunted-house">
      <h1>Welcome to the Haunted House!</h1>
      <Door />
      <RoomOne />
      <RoomTwo />
      <RoomThree />
    </div>
  );
}

export default HauntedHouse;
Create the RoomOne, RoomTwo, and RoomThree Components:

Create three separate files, RoomOne.js, RoomTwo.js, and RoomThree.js, in the src directory. Add the following code to each of these files:

jsx
Copy code
// src/RoomOne.js
import React from 'react';

function RoomOne() {
  return (
    <div className="room one">
      <h2>Room One</h2>
      <p>This is the first room in the haunted house.</p>
      <button onClick={() => console.log("You've entered Room One!")}>Click me!</button>
    </div>
  );
}

export default RoomOne;
jsx
Copy code
// src/RoomTwo.js
import React from 'react';

function RoomTwo() {
  return (
    <div className="room two">
      <h2>Room Two</h2>
      <p>This is the second room in the haunted house.</p>
      <button onClick={() => console.log("You've entered Room Two!")}>Click me!</button>
    </div>
  );
}

export default RoomTwo;
jsx
Copy code
// src/RoomThree.js
import React from 'react';

function RoomThree() {
  return (
    <div className="room three">
      <h2>Room Three</h2>
      <p>This is the third and final room in the haunted house.</p>
      <button onClick={() => console.log("You've entered Room Three!")}>Click me!</button>
    </div>
  );
}

export default RoomThree;
Create the Door Component:

Create a file named Door.js in the src directory and add the following code for the Door component:

jsx
Copy code
// src/Door.js
import React from 'react';
import RoomOne from './RoomOne'; // Import RoomOne component
import RoomTwo from './RoomTwo'; // Import RoomTwo component
import RoomThree from './RoomThree'; // Import RoomThree component

function Door(props) {
  return (
    <div className="door">
      <h1>Choose a room to enter:</h1>
      <button onClick={() => props.onClick(RoomOne)}>Room One</button>
      <button onClick={() => props.onClick(RoomTwo)}>Room Two</button>
      <button onClick={() => props.onClick(RoomThree)}>Room Three</button>
    </div>
  );
}

export default Door;
Update App.js to Use the HauntedHouse Component:

Open your src/App.js file and replace its content with the following code to use the HauntedHouse component:

jsx
Copy code
// src/App.js
import React from 'react';
import './App.css';
import HauntedHouse from './HauntedHouse';

function App() {
  return (
    <div className="App">
      <HauntedHouse />
    </div>
  );
}

export default App;
Now, you have successfully created the components (HauntedHouse, RoomOne, RoomTwo, RoomThree, Door) 
  and added their code to your Haunted House Explorer app. Remember to make sure your project structure
    matches the file names and directories mentioned in the code. Your app is ready to run with npm start.



*** Activity 2:  Lab Workbook Instructions: Haunted House Activity 2
Objective: In this lab, you will enhance the Haunted House Explorer app by incorporating React Hooks for state management, Redux for global state management, React Router 
  for app navigation, and WebSockets for real-time updates.

Detailed step-by-step guide for the "Haunted House Activity 2" lab:

Lab Workbook Instructions: Haunted House Activity 2
Objective: In this lab, you will enhance the Haunted House Explorer app by incorporating React Hooks for state management, Redux for global state management, React Router for app navigation, and WebSockets for real-time updates.

Prerequisites:

Basic knowledge of React and JavaScript.
Familiarity with Create React App, Redux, React Router, and WebSocket libraries is helpful but not required.
Step-by-Step Instructions:
Step 1: Setting Up Redux

Create Redux Files:

Create a new directory named redux in the src directory of your project.
Inside the redux directory, create a file named hauntedHouseSlice.js.
Install Redux and React Redux:

Open your terminal and navigate to the project directory.

Run the following command to install Redux and React Redux:

bash
Copy code
npm install redux react-redux
Configure Redux Store:

In hauntedHouseSlice.js, create a Redux slice that defines the initial state and reducers for managing the haunted house state.
Export the slice and set up the Redux store in your index.js file.
Step 2: Implementing React Hooks

Refactor Components:

Open the existing components (HauntedHouse.js, RoomOne.js, RoomTwo.js, RoomThree.js, Door.js) located in the src directory.
Refactor these components to use React Hooks (e.g., useState, useEffect) for state management and side effects.
Migrate State to Redux:

Identify the relevant state variables in your components and migrate them to the Redux store.
Update the components to use Redux for state management. Import the necessary Redux actions and selectors.
Step 3: Implementing React Router

Install React Router:

Run the following command to install React Router:

bash
Copy code
npm install react-router-dom
Set Up Routes:

Create a new directory named components in the src directory.
Inside the components directory, create separate components for each room (e.g., RoomOne.js, RoomTwo.js, RoomThree.js) and configure React Router routes in a new file named AppRouter.js.
Define routes for each room and the main HauntedHouse component in AppRouter.js.
Update Navigation:

In your Door.js component, replace the button click handlers with React Router links to navigate between rooms based on the defined routes.
Step 4: Adding WebSockets

Install WebSocket Library:

Run the following command to install a WebSocket library (e.g., react-websocket):

bash
Copy code
npm install react-websocket
WebSocket Setup:

Create a WebSocket connection to a backend server in a new file named WebSocketService.js. Implement WebSocket event listeners to handle messages and errors received from the WebSocket server.
Update State with WebSocket Data:

Modify the components (e.g., HauntedHouse.js) to update the app's state based on WebSocket updates received from the backend server.
Step 5: Testing and Debugging

Testing:

Test your app thoroughly to ensure that React Hooks, Redux, React Router, and WebSockets are working as expected.
Verify that navigation between rooms and real-time updates from the WebSocket server function correctly.
Debugging:

Use browser developer tools and Redux DevTools extension to debug any issues that may arise during development.
Step 6: Running the App

Start the Development Server:

In your terminal, navigate to the project directory.

Run the following command to start the development server:

bash
Copy code
npm start
View the App:

Open your web browser and navigate to http://localhost:3000 to see your Haunted House Explorer app in action.
Step 7: Submission

Submit the Updated Code:

Submit the updated code of your Haunted House Explorer app that includes React Hooks, Redux, React Router, and WebSockets integration.
Ensure that the Redux files (hauntedHouseSlice.js) are placed in the redux directory, and components are organized in the src directory.
Include Documentation:

Include a comprehensive README file that explains the changes you made to the app and how each of the mentioned technologies (React Hooks, Redux, React Router, WebSockets) was implemented.
Optionally, mention any additional features or improvements you made to the app.
These detailed instructions should guide students through each step of enhancing the Haunted House Explorer app with React Hooks, Redux, React Router, and WebSockets, leaving nothing out.


*--- Fix One:  Introducing React Router:

You are trying to pass components (e.g., RoomOne, RoomTwo, RoomThree) as props to the onClick handler in your Door.js component. 
  However, React expects functions to be passed as event handlers, not components.

If you intend to navigate to different rooms (i.e., render different room components) when a button is clicked, 
  you should handle the navigation logic using React Router. 
  
  Here's how you can modify your Door.js component to achieve this:


// src/Door.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Door() {
  return (
    <div className="door">
      <h1>Choose a room to enter:</h1>
      {/* Use Link to navigate to different rooms */}
      <Link to="/room-one">Room One</Link>
      <Link to="/room-two">Room Two</Link>
      <Link to="/room-three">Room Three</Link>
    </div>
  );
}
export default Door;


In this updated code: We import Link from react-router-dom.
We use the Link component to create navigation links to different rooms ('/room-one', '/room-two', '/room-three').
When a link is clicked, React Router will handle the navigation and render the corresponding room component based on the defined routes.

  Make sure you have set up your React Router routes to render the appropriate room components when these paths are accessed.



if you want to start your React application directly without navigating into the project directory every time, you can use the following command from the root directory (C:\lab_react_Oct31b):

bash
Copy code
npm --prefix my-haunted-house start
This command tells npm to run the start script in the my-haunted-house directory, even if you are in a different directory. It allows you to start your React application without changing your current working directory.

Make sure to replace my-haunted-house with your actual project folder name if it's different.

This should start your React application as expected.



