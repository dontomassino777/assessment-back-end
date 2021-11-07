document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };
  document.getElementById("magic8ball").onclick = function () {
    axios.get("http://localhost:4000/api/eightball/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
  };

const goalsContainer = document.querySelector('#goals-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/goals/`

const goalsCallback = ({data: goals}) => displayGoals(goals)
const errCallback = err => console.log(err)

const getGoals = () => axios.get(baseURL).then(goalsCallback).catch(errCallback)
const createGoals = body => axios.post(baseURL, body).then(goalsCallback).catch(errCallback)
const deleteGoals = id => axios.delete(`${baseURL}${id}`).then(goalsCallback).catch(errCallback)
const updateGoals = (id, type) => axios.put(`${baseURL}${id}`, {type}).then(goalsCallback).catch(errCallback)

function submitHandler(event) {
    event.preventDefault()
    let description = document.querySelector('#goal-description')
    let date = document.querySelector('#goal-date')
    let imageURL = document.querySelector('#goal-image')
    let bodyObj = {
        description: description.value,
        date: +date.value,
        imageURL: imageURL.value
    }

    createGoals(bodyObj)

    description.value = ''
    date.value = ''
    imageURL.value = ''
}

function createGoalCard(goal) {
    const goalCard = document.createElement('div')

    goalCard.innerHTML = 
        `<img src="${goal.imageURL}"/>
        <p>Goal: ${goal.description}</p>
        <div class="btns-container">
            <p>Month to complete by: ${goal.date}/2022</p>
            <button onClick="updateGoals(${goal.id}, 'minus')">-</button>
            <button onClick="updateGoals(${goal.id}, 'plus')">+</button>
        </div>
        <button onclick="deleteGoals(${goal.id})">Remove</button>
        `
    goalsContainer.appendChild(goalCard)
}

function displayGoals(arr) {
    goalsContainer.innerHTML = ``
    for (let i = 0; i <arr.length; i++) {
        createGoalCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getGoals()