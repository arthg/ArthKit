import './index.css';
import { getUsers, deleteUser } from './api/userApi';

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

});
