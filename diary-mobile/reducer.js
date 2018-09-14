// Import
import uuidv1 from "uuid/v1";

// Action
const ADD_DIARY = "ADD_DIARY";
const EDIT_DIARY = "EDIT_DIARY";
const REMOVE_DIARY = "REMOVE_DIARY";

// Action Creators
function addDiary(title, text, img) {
  return {
    type: ADD_DIARY,
    title,
    text,
    img
  };
}

function editDiary(id, title, text, img) {
  return {
    type: EDIT_DIARY,
    id,
    title,
    text,
    img
  };
}

function removeDiary(id) {
  return {
    type: REMOVE_DIARY,
    id
  };
}

// Reducer
let DATA = [
  {
    title: "선인장",
    text:
      "선인장은 죽을 때가 되어서야 꽃을 피운다. 그것은 명멸하는 생명력 앞에서 최후 변론을 하는 셈이기도 하다.",
    img: require("./public/images/ex1.png"),
    date: "Thu Sep 13 2018 22:14:11 GMT+0900 (한국 표준시)"
  },
  {
    title: "커피를 마시며",
    text:
      "커피는 쓰다. 커피는 향기롭다. 커피향을 맡은 사람은 커피를 찾지만, 정작 커피는 마시면 쓰다. 그것은 어쩌면 멀리서 볼 때는 희극이지만 가까이서 보면 비극인 인생과 닮았는지도 모른다.",
    img: require("./public/images/ex2.png"),
    date: "Thu Sep 13 2018 22:14:11 GMT+0900 (한국 표준시)"
  }
];

const diaries = DATA.map(diary => {
  const ID = uuidv1();
  const newData = {
    ...diary,
    id: ID
  };
  return newData;
});

const initialState = {
  diaries
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DIARY:
      return applyAddDiary(state, action);
    case EDIT_DIARY:
      return applyEditDiary(state, action);
    case REMOVE_DIARY:
      return applyRemoveDiary(state, action);
    default:
      return state;
  }
}
// Create Reducer Functions
function applyAddDiary(state, action) {
  const ID = uuidv1();
  const newState = {
    ...state,
    title: action.title,
    text: action.text,
    img: action.img,
    id: ID,
    date: new Date()
  };
  return newState;
}

function applyEditDiary(state, action) {
  const newDiary = {
    [action.id]: {
      title: action.title,
      img: action.img,
      text: action.text
    }
  };
  return {
    ...state,
    newDiary
  };
}

function applyRemoveDiary(state, action) {
  const newState = state;
  delete newState[action.id];
  return newState;
}

// Export Action Creators
const actionCreators = {
  addDiary,
  editDiary,
  removeDiary
};

export { actionCreators };

// Export Reducer
export default reducer;
