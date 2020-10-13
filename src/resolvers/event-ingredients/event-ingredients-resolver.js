const eventIngredientsModel = require("../../models/event-ingredients/event-ingredient-models");

const getIngredientsByEventId = async (_, args, context) => {
  const eventIngredients = await eventIngredientsModel.findByEventId(
    args.event_id
  );

  if (eventIngredients) {
    return eventIngredients;
  } else {
    throw new Error("The specified event id does not exist");
  }
};

const addEventIngredients = async (_, args, context) => {
  const eventIngredients = args.input.ingredients;
  const newEventIngredients = await eventIngredientsModel.addEventIngredients(
    eventIngredients
  );
  if (newEventIngredients) {
    return newEventIngredients;
  } else {
    throw new Error("The specified event id does not exist");
  }
};

const EventIngredientUpdate = async (_, args, context) => {
  const updatedIngredient = await eventIngredientsModel.updateEventIngredient(
    args.input
  );

  if (updatedIngredient) {
    return updatedIngredient;
  } else {
    throw new Error("The specified event id does not exist");
  }
};

const removeEventIngredient = async (_, args, context) => {
  const removedIngredient = await eventIngredientsModel.removeIngredient(
    args.id
  );

  if (removedIngredient) {
    return removedIngredient;
  } else {
    throw new Error("The specified event id does not exist");
  }
};

module.exports = {
  getIngredientsByEventId,
  addEventIngredients,
  EventIngredientUpdate,
  removeEventIngredient,
};
