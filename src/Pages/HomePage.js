import React, {Component} from "react";
import Table from "../components/Table/Table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button, Container} from "reactstrap";
import {getClubList} from "../actions/clubActions";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(getClubList());
  }

  render() {
    return (
      <Container style={{marginTop: "70px"}}>
        <Link to="/add">
          <Button className="mr-2">
            <FontAwesomeIcon icon={faUserPlus} /> Create Club
          </Button>
        </Link>
        <Table data={""} />
      </Container>
    );
  }
}

export default connect()(HomePage);
