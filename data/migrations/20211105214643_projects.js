
exports.up = async function(knex) {
  await knex.schema
.createTable('projects', (table)=>{
      table.increments('project_id')
      table.string('project_name', 50).notNullable()
      table.string('project_description', 100)
      table.boolean('project_completed').default(0)
  })
  .createTable('resources', (table)=>{
    table.increments('resource_id')
    table.string('resource_name', 100)
    table.string('resource_description',100).unique().notNullable()
})
.createTable('tasks', (table)=>{
    table.increments('task_id')
    table.string('task_description', 100).notNullable()
    table.string('task_notes', 100)
    table.boolean('task_completed').default(0)
    table.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
})
.createTable('project_resources', (table)=>{
    table.increments('project_resources_id')
    table.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    table.integer('resource_id')
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        
})
};

exports.down = async function(knex) {
    await knex.schema
    
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
  
};
