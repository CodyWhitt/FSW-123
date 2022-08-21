import {v4 as uuidv4} from "uuid"; //unique ID maker

//todos original array
export const todos = [
    { 
      id: uuidv4(),
      text: " goto gym ",
      completed: true
    },
    { 
      id: uuidv4(),
      text: " do laundry ",
      completed: false
    },
    { 
      id: uuidv4(),
      text: " food shopping ",
      completed: false
    },
    { 
      id: uuidv4(),
      text: " do homework ",
      completed: false
    }
];