import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: 'Korey',
  lastName: 'Earl'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  } 
  return <h1>Hello, Stranger!</h1>
}

const element = getGreeting(user);


ReactDOM.render(
  element,
  document.getElementById('root')
);