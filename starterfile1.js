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
