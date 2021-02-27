import React, { Fragment } from 'react';

import styles from './PostList.scss';
import classNames from 'classnames/bind';
import PostPreview from 'components/PostList/PostPreview';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import Like from "components/Like";
import ShareExample from "components/ShareExample";

const cx = classNames.bind(styles);

const PostList = ({ isAuthenticated, posts }) => {
  if (posts === undefined) {
    return null;
  }
  const postList = posts.map((post) => {

    let postBody = post.get("body");
    let isReadMore = false;
    if (postBody.length > 200) {
      isReadMore = true;
    }
    return (
      <div key={post.get("id")}>
        <div className={cx('post')}>
          <PostPreview post={post} />
          {isReadMore &&
            <Button
              className={cx('more-btn')}
              color='primary'
              size='sm'
              tag={Link}
              to={"/posts/" + post.get("id")}>
              View Post
            </Button>}
            
        </div>
        <div className="social-cons">
        <Like></Like>
        <Button className={"fas fa-comment ali-left"} to={"/posts/"+post.get("id")} tag={Link}>Comment</Button>
        <ShareExample></ShareExample>
        </div>
        <hr />
      </div>
    )
  });

  return (
    <Fragment>
      {isAuthenticated && <Button className={cx('write-btn')} color='info' tag={Link} to={"/editor"}>NEW POST</Button>}
      {postList}
    </Fragment>
  )
};

export default PostList;