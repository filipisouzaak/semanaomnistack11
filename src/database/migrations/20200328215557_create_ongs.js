exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
  /***
   * O métido down é para caso precisar desfazer/deletar algo da tabela (ou até ela mesmo)
   */
};
