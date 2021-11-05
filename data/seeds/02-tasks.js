
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_id: 1, task_description: 'Project Description', project_id:1},
        {task_id: 2, task_description: 'Project Description', task_completed: true, project_id:2},
        {task_id: 3, task_description: 'Project Description',  task_notes: 'NOTES', task_completed: false, project_id:2},
        {task_id: 4, task_description: 'Project Description', task_notes: 'NOTES', task_completed: false, project_id:2}
      ]);
    });

};
