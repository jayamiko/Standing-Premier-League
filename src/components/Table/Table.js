import React from "react";
import {Table, Container} from "reactstrap";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
// import {Link} from "react-router-dom";

export default function TableComponent({data}) {
  console.log(data);
  return (
    <Container style={{marginTop: "50px"}}>
      <Table>
        <thead style={{backgroundColor: "skyblue"}}>
          <tr>
            <th>No</th>
            <th>Name Club</th>
            <th>SG</th>
            <th>Point</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={`standing-${item.id}`}>
                <th scope="row">{index + 1}</th>
                <td>{item.club}</td>
                <td>{item.sg}</td>
                <td>{item.point}</td>
                <td>
                  {
                    <div>
                      {/* <Link to={"/detail" + item.id}> */}
                      <Button color="warning" className="mr-2">
                        <FontAwesomeIcon icon={faInfo} /> Detail
                      </Button>
                      {/* </Link> */}

                      {/* <Link to={"/edit" + item.id}> */}
                      <Button
                        color="primary"
                        className="mr-2"
                        style={{marginLeft: "10px"}}
                      >
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </Button>
                      {/* </Link> */}

                      <Button
                        color="danger"
                        className="mr-2"
                        style={{marginLeft: "10px"}}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </Button>
                    </div>
                  }
                  ,
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
