const skills = [
    {id: 125223, skill: 'Skilled in JS', done: true},
    {id: 127904, skill: 'Skilled in Node.JS', done: false},
    {id: 139608, skill: 'Skilled in Python', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
function create (skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

  function getAll() {
    return skills;
  }

 function getOne(id) {
  id = parseInt(id)
  return skills.find(skill => skill.id === id);
 }
  
 