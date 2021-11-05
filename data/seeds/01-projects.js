
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name: 'Coding Project1'},
        {project_id: 2, project_name: 'Coding Project2'},
        {project_id: 3, project_name: 'Coding Project3', project_completed: true}
      ]);
    });
};
