import { Component } from 'react';
import { ItemCard } from "./itemCard"; // Use named import

class Parts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: []
        };
    }

    componentDidMount() {
        fetch("/api/parts")
            .then((res) => res.json())
            .then((parts) => {
                this.setState({ parts: parts});
            })
    }

    render() {
        return (
        <div>
            <ul>
                {
                this.state.parts.map((part) => (
                    <ItemCard
                        image={part.pictureURL}
                        name={part.number}
                        descr={part.description}
                        cost={part.price}
                        quantity={part.weight}
                    />
                ))
            }



            </ul>
        </div>
    );
  }
}


export default Parts;