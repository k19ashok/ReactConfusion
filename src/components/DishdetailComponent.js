import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Modal,
  Row,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from './LoadingComponent'

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleSubmit = (values) => {
    this.toggleModal()
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
  }

  render() {
    return (
      <>
        <Button type="submit" outline onClick={this.toggleModal}>
          <i className="fa fa-pencil" aria-hidden="true"></i> Submit Comment
        </Button>

        <Modal toggle={this.toggleModal} isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal}>Comment Form</ModalHeader>
          <ModalBody>
            <div className="container">
              <LocalForm onSubmit={this.handleSubmit}>
                <Row>
                  <Label htmlFor="author">Author</Label>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    className="form-control"
                    validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors className="text-danger" model=".author" show="touched" messages={{
                    required: 'Required',
                    minLength: 'Must be greater than 2 numbers',
                    maxLength: 'Must be less than 15 numbers',
                  }} />
                  </Row>
                  <Row>
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  </Row>
                  <Row>
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea
                    model=".comment"
                    rows="6"
                    id="comment"
                    name="comment"
                    className="form-control"
                  />
                </Row>
                <Row className="mt-2"><Button color="primary" type="submit">Submit</Button></Row>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

function RenderComments({ coms, addComment, dishId }) {
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
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

function DishDetail(props) {
  if (props.isLoading){
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  }
  else if (props.errMess){
    return(
      <div className="container">
        <div className="row">
          <h1>{ props.errMess }</h1>
        </div>
      </div>
    )
  }
  const dish = props.selectedDish;
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
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
            <RenderComments coms={props.comments} addComment={props.addComment} dishId={dish.id}/>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
