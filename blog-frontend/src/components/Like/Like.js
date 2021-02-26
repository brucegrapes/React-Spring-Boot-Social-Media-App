import React, { Fragment } from 'react';
import styles from './Like.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class LikeButton extends React.Component {
    addLike = () => {
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
        let red="liked";
        this.setState({
            color:red
        });    
      };
    

    state = {
        likes: 0
      };render() {
        
          return <i className={"far fa-heart "+this.state.color} onClick={this.addLike}><span className="space-like">{this.state.likes}</span></i>
      }
}

export default LikeButton;