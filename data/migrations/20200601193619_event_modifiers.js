exports.up = function(knex) {
    return knex.schema
        .createTable('Recipes', tbl => {
            tbl.increments();
            tbl.string('name', 64).notNullable();
            tbl.string('description', 255).notNullable();
            tbl.text('instructions').notNullable();
            tbl.decimal('servings', 5, 2).notNullable();
            tbl.binary('photo');
        })
        .createTable('IngredientTypes', tbl => {
            tbl.increments();
            tbl.string('ingredientType', 64).unique().notNullable();
        })
        .createTable('Ingredients', tbl => {
            tbl.increments();
            tbl.integer('ingredientType_id').notNullable().unsigned().references('IngredientTypes.id');
            tbl.string('name', 64).notNullable();
            tbl.string('description', 255).notNullable();
            tbl.text('instructions').notNullable();
            tbl.decimal('servings', 5, 2).notNullable();
            tbl.binary('photo');
        })
        .createTable('MeasurementTypes', tbl => {
            tbl.increments();
            tbl.string('name', 64).notNullable().unique();
        })
        .createTable('UnitsOfMeasure', tbl => {
            tbl.increments();
            tbl.integer('type_id').notNullable().unsigned().references('MeasurementTypes.id').onUpdate('CASCADE').onDelete('CASCADE');
            tbl.string('name', 64).notNullable().unique();
            tbl.string('description', 255);
        })
        ;
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('UnitsOfMeasure')
        .dropTableIfExists('MeasurementTypes')
        .dropTableIfExists('Ingredients')
        .dropTableIfExists('IngredientTypes')
        .dropTableIfExists('Recipes')
        ;
};
