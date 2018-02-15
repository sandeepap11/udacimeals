import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'
import '../App.css';

class App extends Component {


  render() {

    console.log('Props', this.props)
    return (
      <div>
        Hello
      </div>
    );
  }
}

function mapStateToProps (calendar){
const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

return{

calendar : dayOrder.map((day) => ({

	day, meals: Object.keys(calendar[day]).reduce((meals, meal) => {

		meals[meal]= calendar[day][meal] ? calendar[day][meal] : null

		return meals
	}, {})
}
))
}
}

function mapDispatchToProps(dispatch){

  return{

    selectMeal: (data) => {dispatch(addRecipe(data))},
    removeMeal: (data) => {dispatch(removeFromCalendar(data))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
