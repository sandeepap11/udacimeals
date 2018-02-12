export const ADD_MEAL = 'ADD_MEAL'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe({ day, recipe, meal }){

  return{

    type: ADD_MEAL,
    day,
    recipe,
    meal
  }

}

export function removeFromCalendar({ day, meal }){

  return{

    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  }

}
