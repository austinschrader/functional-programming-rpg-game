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

const changeState = (prop, prop2) => {
  return (value, value2) => {
    return (state, characterName) => ({
      ...state,
      [characterName]: {
        ...state[characterName],
        [prop]: (state[characterName][prop] || 0) + value,
        [prop2]: (state[characterName][prop2] || 0) + value2
      }

    })
  }
}

const updateStateObj = storeState();

const defaultCharacterObj = {
  intelligence: 0,
  magic: 0,
  name: ""
};

// Create Wizard
const gandalf = "Gandalf";
const newWizard = addCharacter(defaultCharacterObj)(gandalf); // Set it up
const newCharacterState = updateStateObj(newWizard); // Push it to state

const activateGandalfIntel = changeState("intelligence", "magic")(105, 54); // Set it up
const newCharacterState2 = updateStateObj(activateGandalfIntel, gandalf); // Push it to state

// Grab current state
console.log(`this is the intelligence level ${updateStateObj().Gandalf.intelligence}`);

// Update Wizard with Multiple Props - Target nested storeObj value
const deathOfGandalf = changeState("intelligence", "magic")(-(updateStateObj().Gandalf.intelligence), -(updateStateObj().Gandalf.magic));
const newCharacterState3 = updateStateObj(deathOfGandalf, gandalf);

console.log("state obj", newCharacterState);
console.log("state obj", newCharacterState2);
console.log("state obj", newCharacterState3);

// Create Warrior



