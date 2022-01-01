import React from "react";
import {Button, Container} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";

const JumbotronComponent = (props) => {
  return (
    <div>
      <Container>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="dark">
            <FontAwesomeIcon icon={faInfo} /> Learn More
          </Button>
        </p>
      </Container>
    </div>
  );
};

export default JumbotronComponent;
