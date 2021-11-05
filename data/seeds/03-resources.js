
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_id: 1, resource_name: 'rowValue1', resource_description:'Description'},
        {resource_id: 2, resource_name: 'rowValue2', resource_description:'Description2'}
        
      ]);
    });
};
