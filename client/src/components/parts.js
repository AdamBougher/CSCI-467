import { Component } from 'react';
import { ItemCard } from "../components/itemCard"; // Use named import

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
            {this.state.parts.map((part) => (
              <ItemCard
                image={part.pictureURL}
                name={part.number}
                cost={part.price}
                quantity={part.weight}
                descr={part.description}
              />
            ))}
          </div>
        );
  }
}


export default Parts;