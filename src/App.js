import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addNote, removeNote } from "./Action";

class App extends React.Component {
  state = {
    id: "",
    title: "",
    content: ""
  };

  element = React.createRef();

  render() {
    return (
      <div className="App">
        <h1>Sticky Notes</h1>
        <h4>Start adding notes!</h4>
        <div>
          <label>Notes</label>
          <input
            type="text"
            value={this.state.content}
            ref={this.element}
            onChange={({ target }) => {
              this.setState({ content: target.value });
            }}
          />
          <button
            onClick={e => {
              e.preventDefault();

              this.props.addNote(this.state.title, this.state.content);
              this.setState({ title: "", content: "" });
              this.element.current.focus();
            }}
          >
            Add
          </button>
          <ul>
            {this.props.notes.map(note => {
              return (
                <li
                  key={note.id}
                  onClick={() => {
                    this.props.removeNote(note.id);
                  }}
                >
                  {note.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

//export default App;

const mapStateToProps = state => {
  return {
    notes: state.notes,
    visibility: state.visibility
  };
};

const mapDispatchToProps = {
  addNote: addNote,
  removeNote: removeNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
