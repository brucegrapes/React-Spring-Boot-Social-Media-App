import React, { Component } from 'react';
import { Share, View, Button } from 'react-native';
import classNames from 'classnames/bind';
import styles from './ShareExample.scss';

const cx = classNames.bind(styles);
class ShareExample extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Join the new messaging app',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
        <i className={"fas fa-share share-btn"} onClick={this.onShare} title="Share" />
    );
  }
}

export default ShareExample;