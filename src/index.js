import './index.css';
import { getUsers, deleteUser } from './api/userApi';

//STRIP_ON_CLONE
// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

// ES6 template string needs back-tick
  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  // in a real app will use Angualr or React or ..
  global.document.getElementById('users').innerHTML = usersBody;

const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
