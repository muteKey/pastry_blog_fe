import './App.css';
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentWillMount() {
    fetch('http://127.0.0.1:8000/api/recipes/')
      .then((response) => response.json())
      .then((data) => this.setState({recipes: data}));
  }

  render() {
    const { recipes } = this.state;
    const items = recipes.map((recipe) => 
      <div>
        <p>{recipe.title}</p>
        <textarea>{recipe.text}</textarea>
      </div>
    );
    return items;
  }
}

export default App;