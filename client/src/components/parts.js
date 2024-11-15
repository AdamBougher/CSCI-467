import { Component } from 'react';

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
                {this.state.parts.map((part) => (
                    <li key={part.partID}>
                        {part.partID} - {part.partName} - {part.partCost}
                    </li>
                ))}
            </ul>
        </div>
    );
  }
}


export default Parts;