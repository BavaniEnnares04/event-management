import React from 'react';

class Feedback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedbacks: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:3002/posts").then((res) => res.json()).then(
            (result) => {
                this.setState({ feedbacks: result });
            }
        )
    }
    render() {
        return (
            <div>
                <h2>Customer Feedback...</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Feedback</th>
                            <th>Reviews</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbacks.map(feed => (
                            <tr key={feed.Id}>
                                <td>{feed.id}</td>
                                <td>{feed.Name}</td>
                                <td>{feed.Feedback}</td>
                                <td>{feed.Reviews}</td>
                                <td>{feed.Date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Feedback;