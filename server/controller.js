const goals = require("./goalsdb.json");
let globalId = 2

module.exports = {
    getGoals: (req, res) => {
        res.status(200).send(goals)
    },
    deleteGoals: (req, res) => {
        let index = goals.findIndex((elem) => elem.id === +req.params.id);
        goals.splice(index, 1);
        res.status(200).send(goals);
    },
    createGoals: (req, res) => {
        let {description, date, imageURL} = req.body;
        let newGoal = {
            id: globalId,
            description: description,
            date: date,
            imageURL: imageURL
        }
        goals.push(newGoal);
        res.status(200).send(goals);
        globalId++;
    },
    updateGoals: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = goals.findIndex((elem) => elem.id === +id)

        if (goals[index].date <= 1 && type === "minus") {
            goals[index].date = 1;
            res.status(200).send(goals);
        } else if (goals[index].date > 1 && type === "minus") {
            goals[index].date -= 1;
            res.status(200).send(goals);
        } else if (goals[index].date < 12 && type === "plus") {
            goals[index].date += 1;
            res.status(200).send(goals);
        }
    }
}