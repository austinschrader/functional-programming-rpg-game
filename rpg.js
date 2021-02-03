const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state, characterName) => {
    const newState = stateChangeFunction(currentState, characterName);
    currentState = { ...newState };
    return newState;
  }
}

const addCharacter = (defaultCharacterObj) => {
  return (characterName) => {
    return (state) => ({
      ...state,
      [characterName]: defaultCharacterObj
    })
  }
}

const changeState = (prop) => {
  return (value) => {
    return (state, characterName) => ({
      ...state,
      [characterName]: { ...state[characterName], [prop]: (state[characterName][prop] || 0) + value }
    })
  }
}

const updateStateObj = storeState();

const defaultCharacterObj = {
  intelligence: 0,
  magic: 0,
  name: ""
};
const characterName = "Gandalf";
const wizard1 = addCharacter(defaultCharacterObj)(characterName);

const newCharacterState = updateStateObj(wizard1);
console.log("state obj", newCharacterState);

const activateGandalfIntel = changeState("intelligence")(100);
const newCharacterState2 = updateStateObj(activateGandalfIntel, "Gandalf");

console.log("state obj", newCharacterState2);

