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
    console.log("constructor called #1");
  }
  componentDidMount() {
    console.log("componentDidMount called #3");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
        .then((data) => {
            this.setState({products: data});
            console.log("Products fetched:", data);
        })
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called ");
  }
  componentWillUnmount(): void {
      
    console.log("componentWillUnmount called #4");
    // Cleanup code can go here, like removing event listeners or cancelling API requests
  }
  render() {
    console.log("render called #2");
    return <div className="home-page">
        <h2>counter : {this.state.counter}</h2>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>
            Increment Counter
        </button>
    </div>;
  }
}


    export default HomePage;
    

    //mounting phase (constructor, render, componentDidMount )
    // here we are using the constructor to initialize the state
    // constructor is called only once when the component is created during the mounting phase 
    // constructor is used to initialize the state and bind the methods
