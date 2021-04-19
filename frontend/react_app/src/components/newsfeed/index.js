import './newsfeed.css';
import React, { Component } from "react";
import { Table, Container } from "@material-ui/core";


export default class Newsfeed extends Component {
    render() {
        return (
<div>
    <Table striped boredered hover variant="dark">
        <tr>
            <th>NewsFeed</th>
        </tr>
        <tr>

    <Container className="newsfeed">
        <p>
            Testing
        </p>
        <p>
            Testing
        </p>
        <p>
            Testing
        </p>
        <p>
            Testing
        </p>
        <p>
            Testing
        </p>
    </Container>
        </tr>
    </Table>
</div>

        )
    }
}