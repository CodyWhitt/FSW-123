import {v4 as uuidv4} from "uuid"; //unique ID maker

//todos original array
export const userInfo = [
    { 
      id: uuidv4(),
      userName: " goto gym ",
      saving: 0,
      income: 0,
    },
];

export const transactions = [
    {
        id: uuidv4(),
        price: 0,
        description: 'null'
    },
]