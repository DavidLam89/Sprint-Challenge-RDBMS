const knexConfig = require('../knexfile');
const knex = require('knex');

const db = knex(knexConfig.development);

module.exports = {
  addProject,
  getProject,
};

function addProject(project) {
  return db('project')
    .insert(project);
}

function getProject(id) {
  return db('project')
    .join('action', 'project.id', 'action.project_id')
    .select('project.id', 'project.name', 'project.description', 'project.completed', 'action.id as action_id', 'action.description as action_description',
      'action.notes as action_notes', 'action.completed as action_completed')
    .where('project.id', id)
    .reduce((accumulator, currentObj) => {

      accumulator.id = currentObj.id;
      accumulator.name = currentObj.name,
      accumulator.description = currentObj.description,
      accumulator.completed = currentObj.completed,

      accumulator.actions.push({id:currentObj.action_id,
        description:currentObj.action_description,
        notes:currentObj.action_notes,
        completed:currentObj.action_completed
      });

      return accumulator;
    }, { actions: [] });
}


