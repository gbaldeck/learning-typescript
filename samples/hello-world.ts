

import {objectDesctucturing} from './module'

let message = "Hello World!!!!";

console.log(message);



const personData = {
  firstName: 'Kobe',
  lastName: 'Bryant',
  address: 'Staples Center'
};



objectDesctucturing(personData);

const firstName = 'Kobe',
  lastName = 'Bryant',
  address = 'Staples Center';

//The below is equivalent to the assignments in personData above
const personDataDestructureInit = {
  firstName,
  lastName,
  address
};

///////////////////////////////////////////////////
//////////////////////////////////////////////////

const otherPersonData = {
  firstName,
  lastName
};

const partialAddress1 = ["Street Name", "Street Number", "Po Box"]

function ojds({firstName, lastName}, address = ['']){
  return `${firstName} ${lastName} ${address}`;
}

const address1 = [...partialAddress1, 'Staples Center']

ojds(otherPersonData, address1)

///////////////////////////////////////////////////
//////////////////////////////////////////////////
//Rest operator ... takes varargs and passes in as array
function ojdsRest({firstName, lastName}, ...address){
  return `${firstName} ${lastName} ${address}`;
}

ojdsRest(otherPersonData, ...partialAddress1, 'Staples Center')
