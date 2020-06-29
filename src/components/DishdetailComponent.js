import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish = dish => {
        if (dish != null) {
            return (
                <div classNames="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments = comments => {
        if (comments != null) {
            const comment_lines = comments.map( (comment) => {
                const date = new Date(comment.date);
                return (
                    <div id={comment.id}>
                        <li>{comment.comment}</li>
                        <li>{`-- ${comment.author}, ${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`}</li>
                    </div>
                )
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment_lines}
                    </ul>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }

    render() {
        const dish = this.props.dish;
        const comments = dish == null ? null : dish.comments;
        return (
            <div className="row">
                {this.renderDish(dish)}
                {this.renderComments(comments)}
            </div>
        )
    }
}

export default Dishdetail;