const skills = [
    {id: 1111, skill: 'javascript', level: 'beginner'},
    {id: 2222, skill: 'html', level: 'intermediate'},
    {id: 3333, skill: 'css', level: 'intermediate'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id= Date.now() % 100000000;
    skill.level = skill.level;
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill)
}