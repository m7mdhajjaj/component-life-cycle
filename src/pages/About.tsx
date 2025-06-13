import React, {Component} from "react";
interface Iprops {}
interface Istate {
    title: string;
    description: string;
}
class About extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
          title: "Welcome to the About",
          description: "This is the About of our application.",
        };
    }
    
    render() {
        return (
        <div className="about-page">
           
        </div>
        );
    }
    }


    export default About;