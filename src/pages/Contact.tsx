import React, { Component } from "react";
interface Iprops {}
interface Istate {
  title: string;
  description: string;
}
class Contact extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "Welcome to the Contact Page",
      description: "This is the Contact page of our application.",
    };
  }

  render() {
    return <div className="Contact-page"></div>;
  }
}

export default Contact;
