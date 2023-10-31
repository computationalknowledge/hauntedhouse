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



*** Activity 2:

Here are detailed instructions for students to complete the "Haunted House Activity 2." This includes where to put code, file naming conventions, directory structure, and how to run the app:

Objective: In this lab, you will enhance the Haunted House Explorer app by incorporating React Hooks for state management, Redux for global state management, React Router for app navigation, and WebSockets for real-time updates.

Prerequisites:

Basic knowledge of React and JavaScript.
Familiarity with Create React App and Redux is helpful but not required.
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
Connect to Redux Store:

In the src directory, open index.js and wrap your entire app with the Provider component, providing it with the Redux store.
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
Ensure that the Redux files (hauntedHouseSlice.js) are placed in the redux directory and components are organized in the src directory.
Include Documentation:

Include a brief report or README file that explains the changes you made to the app and how each of the mentioned technologies (React Hooks, Redux, React Router, WebSockets) was implemented.
Optionally, mention any additional features or improvements you made to the app.
That's it! You've successfully completed the "Haunted House Activity 2" lab, incorporating advanced features into your Haunted House Explorer app.




