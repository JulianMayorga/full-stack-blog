import { connect } from 'react-redux-lodash-fix-fork';

import PostPage from './PostPage';

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post._id === props.params.postId)
  };
};

export default connect(
  mapStateToProps,
  null
)(PostPage);
