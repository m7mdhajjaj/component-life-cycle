import React, {Component} from "react";
interface Iprops {}
interface Istate {
   counter: number;
   products: [];
}
class HomePage extends Component<Iprops, Istate> {
  constructor(probs: Iprops) {
    super(probs);
    this.state = {
        counter : 0,
        products: []
    }
    console.log("constructor called");
  }

  render() {
    console.log("render called");
    return <div className="home-page">
        <h2>counter : {this.state.counter}</h2>
    </div>;
  }
}


    export default HomePage;
    

    //mounting phase (constructor, render, componentDidMount )
    // here we are using the constructor to initialize the state
    // constructor is called only once when the component is created during the mounting phase 
    // constructor is used to initialize the state and bind the methods
