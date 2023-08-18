const skills = [
    {id: 1111, skill: 'javascript', level: 'beginner'},
    {id: 2222, skill: 'html', level: 'intermediate'},
    {id: 3333, skill: 'css', level: 'intermediate'}
]

module.exports = {
    getAll,
    getOne,
    create
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    id= Date.now() % 100000000;
    skill.level = 'beginner';
    skills.push(skill)
}