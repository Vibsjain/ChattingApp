import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from 'react-redux'
import "./display_detail.css";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import Avatar from "react-avatar";

const name = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors],
  separator: " ",
  style: "capital",
  length: 2,
});

const color = uniqueNamesGenerator({
  dictionaries: [colors],
  length: 1,
});

class detail extends Component {
  prop = toString(color);
  render() {
    return (
      <div className="mainBlockDis">
      <Container className="disCon">
        <div className="avatar">
          <Avatar
            className="avatar-box"
            color={Avatar.getRandomColor(["red", "green", "blue"])}
            name={name}
          />
        </div>
        <div>
          <h1>{name}</h1>
          <h2>You can waste your time here upto 3 hrs</h2>
        </div>
      </Container>
    </div>
    );
  }
};


const mapStateToProps = (state) => ({
  // state to props matching for data access
})

const mapDispatchToProps = {
  // dispatch action goes here
}

export default connect(mapStateToProps, mapDispatchToProps)(detail);
