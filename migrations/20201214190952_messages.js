exports.up = async function(knex) {
  await knex.schema.createTable('messages', mes => {
     mes.increments('id').primary();
     mes.string('email').notNullable();
     mes.string('subject').notNullable();
     mes.text('message').notNullable();
  });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('messages');
}