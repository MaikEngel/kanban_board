let tasks = [];
let avatarsDatas = [
  {
    'picture': 'img/a1.jpg',
    'name': 'John Doe',
    'email': 'john.doe@.company-email.com',
  },
  {
    'picture': 'img/a2.jpg',
    'name': 'Clara Stuff',
    'email': 'clara.stuff@.company-email.com',
  },
  {
    'picture': 'img/a3.jpg',
    'name': 'Dean Specter',
    'email': 'dean.specter@.company-email.com',
  }
]
  ;
let title;
let date;
let description;
let catergory;
let urgency;
let counter;
let id;
let selectetAvatar;
let position;

async function addTask(e) {

  title = document.getElementById("title").value;
  date = document.getElementById("date").value;
  description = document.getElementById("description").value;
  catergory = document.getElementById("category").value;
  urgency = document.getElementById("urgency").value;
  position = 'todo';
  id = counter;
  let time = new Date().getTime();
  let createdAt = new Date(time).toLocaleString();
  e.preventDefault();

  tasks.push({
    title,
    date,
    description,
    catergory,
    urgency,
    date,
    createdAt,
    id,
    selectetAvatar,
    position
  });
  console.log(tasks);
  await backend.setItem("tasks", tasks);
  counter++;
  await backend.setItem("counter", counter);
  window.location.href = "./index.html";
  clearInput();
}


function clearInput() {
  title = document.getElementById("title");
  date = document.getElementById("date");
  description = document.getElementById("description");
  catergory = document.getElementById("category");
  urgency = document.getElementById("urgency");
  title.value = ``;
  date.value = ``;
  description.value = ``;
  catergory.value = ``;
  urgency.value = ``;
}

async function init() {
  await downloadFromServer();
  counter = backend.getItem("counter") || 1;
  tasks = backend.getItem("tasks") || [];
}

function deleteTask() {
  backend.deleteItem("tasks");
}

function loadAvatars() {
  let avatars = document.getElementById('avatars');
  avatars.innerHTML = ``;
  for (let i = 0; i < avatarsDatas.length; i++) {
    let image = avatarsDatas[i]['picture'];
    avatars.innerHTML += `<img src="${image}" class="avatarStyle" id="avatar${i}"onclick="selectAvatar(${i})">`;
  }
}

function selectAvatar(i) {
  let create = document.getElementById('create');
  let elems = document.querySelectorAll(".avatarSelected");
  let avatar = document.getElementById('avatar' + i);
  [].forEach.call(elems, function (el) {
    el.classList.remove("avatarSelected");
  });
  avatar.classList.toggle('avatarSelected');
  create.classList.remove('disabled')
  create.disabled = false;
  selectetAvatar = avatarsDatas[i];
}

function resetCounterAndTasks() {
  backend.deleteItem("tasks");
  counter = 1;
  backend.setItem("counter", counter);
}