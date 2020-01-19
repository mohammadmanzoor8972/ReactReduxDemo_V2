import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchPosts from "./Services/post.services";

class Posts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <p>Total Count : {this.props.counts}</p>
        <button
          onClick={() => {
            this.props.fetchPosts();
          }}
        >
          Get Data
        </button>
        {this.props.pending && <div>Loading...</div>}
        {this.props.posts &&
          this.props.posts.map(item => {
            return <p key={item.id}>{item.body}</p>;
          })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.posts.error,
  posts: state.posts.posts,
  pending: state.posts.pending,
  counts: state.posts.counts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPosts: fetchPosts
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
