exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('project', function (tbl) {

            tbl.increments();

            tbl
                .string('name', 128)
                .notNullable()
                .unique();

            tbl
                .string('description', 128)

            tbl
                .boolean('completed')
                .defaultTo(false);
        })

        .createTable('action', tbl => {

            tbl.increments();

            tbl
                .string('description', 128)

            tbl
                .string('notes', 128)

            tbl
                .boolean('completed')
                .defaultTo(false);

            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('project')
        .dropTableIfExists('action')
};
