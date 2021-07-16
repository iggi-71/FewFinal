import React from 'react'
import ReactDOM from 'react-dom'
import './Like.css'

class Like extends React.Component {
    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    delLike = () => {
        let newCount = this.state.likes - 1;
        this.setState({
            likes: newCount
        });
    };

    render() {
        const likes = this.state.likes;
        if (likes === 0) {
            return (
                <div>
                    <button
                        className="button"
                        onClick={this.addLike}
                    >
                        <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
                    </button>
                    <button
                        className="button"
                        onClick={this.delLike}
                    >
                        <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
                    </button>
                </div>
            );
        }
        if (likes === 1) {
            return (
                <div>
                    <button className="button" onClick={this.addLike}>
                        <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
                    </button>
                    <button
                        className="button"
                        onClick={this.delLike}
                    >
                        <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
                    </button>
                </div>
            );
        }
        if (likes > 1) {
            return (
                <div>
                    <button className="button" onClick={this.addLike}>
                        <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
                        {likes}
                    </button>
                    <button
                        className="button"
                        onClick={this.delLike}
                    >
                        <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
                    </button>
                </div>
            );
        }
    }
}

export default Like

ReactDOM.render(
    <Like />, document.getElementById('root'));