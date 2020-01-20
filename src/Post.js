import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchPosts, { addPosts } from "./Services/post.services";

class Posts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
  }

  addComment = () => {
    if (this.state.title && this.state.body) {
      this.props.addPosts(this.state.title, this.state.body);
    }
  };

  textChangeHandler = ({ target }) => {
    var obj = {};
    obj[target.attributes["name"].value] = target.value;
    this.setState(obj);
  };

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
        <div>
          <div> Title </div>
          <input name="title" onChange={this.textChangeHandler} />
          <div> Comment</div>
          <textarea name="body" onChange={this.textChangeHandler} />
          <div>
            <button disabled={this.props.isPostAdded} onClick={this.addComment}>
              Add
            </button>
          </div>
        </div>
        {this.props.pending && <div>Loading...</div>}
        {this.props.posts &&
          this.props.posts.map(item => {
            return (
              <div key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.posts.error,
  posts: state.posts.posts,
  pending: state.posts.pending,
  counts: state.posts.counts,
  isPostAdded: state.posts.addPostPending
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPosts: fetchPosts,
      addPosts: addPosts
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
