module.exports = {
    index,
    show
};

const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skills: Skill.getOne(req.params.id)
    });
}