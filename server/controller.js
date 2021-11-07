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
        let {description, imageURL} = req.body;
        let newGoal = {
            id: globalId,
            description: description,
            imageURL: imageURL
        }
        goals.push(newGoal);
        res.status(200).send(goals);
        globalId++;
    }
}