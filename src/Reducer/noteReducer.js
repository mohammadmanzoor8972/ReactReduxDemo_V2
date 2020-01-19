import { ADD_NOTE, REMOVE_NOTE } from "../Action/";

function noteReducer(notes = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...notes,
        {
          title: action.title,
          content: action.content,
          id: action.id
        }
      ];
    case REMOVE_NOTE:
      return notes.filter((note, index) => note.id !== action.id);

    default:
      return notes;
  }
}

export default noteReducer;
