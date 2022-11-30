import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderComments({coms}) {
  const comments = coms.map((comment) => {
    return (
      <li key={comment.id}>
        {" "}
        {comment.comment}
        <br></br> --{comment.author} &nbsp;&nbsp;{" "}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(Date.parse(comment.date)))}
      </li>
    );
  });
  if (comments != null) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{comments}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function DishDetail(props) {
  const dish = props.selectedDish;
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card key={dish.id}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments coms={props.selectedDish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;