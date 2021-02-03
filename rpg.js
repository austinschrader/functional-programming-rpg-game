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
  name: "Gandalf"
};

const defaultBalrogObj = {
  intelligence: 100,
  magic: 100,
  name: "Balrog"
};

// Create Gandalf Wizard
const gandalf = "Gandalf";
const newWizard = addCharacter(defaultCharacterObj)(gandalf); // Set it up
const newCharacterState = updateStateObj(newWizard); // Push it to state

const activateGandalfIntel = changeState("intelligence", "magic")(105, 54); // Set it up
const newCharacterState2 = updateStateObj(activateGandalfIntel, gandalf); // Push it to state

// Grab current state
const currentState1 = updateStateObj();
// console.log(`this is the intelligence level way #1: ${currentState.Gandalf.intelligence}`);
// console.log(`this is the intelligence level way #2: ${newCharacterState2.Gandalf.intelligence}`);

// Update Wizard with Multiple Props - Target nested storeObj value
// const deathOfGandalf = changeState("intelligence", "magic")(-(updateStateObj().Gandalf.intelligence), -(updateStateObj().Gandalf.magic));
// const newCharacterState3 = updateStateObj(deathOfGandalf, gandalf);

// console.log("state obj", newCharacterState);
// console.log("state obj", newCharacterState2);
// console.log("state obj", newCharacterState3);

// Battle starts
// if newcharacter state 2 is less than or equal to current character state; && magic/intelligence depleted

function battle(currentState) {
  if (!currentState1.Balrog) {
    balrog = "Balrog";
    newBalrog = addCharacter(defaultBalrogObj)(balrog);
    newBalrogState = updateStateObj(newBalrog);
  }

  const currentStateBattleStart = updateStateObj();
  console.log(currentStateBattleStart);
  // termination case


  // conditional base case
  // if either balrog or galdalf's currentstate.Gandalf.intelligence <= 0 then the fight is over

  // recursion
  // fighter1 attacks first, and so fighter2 gets their stats reduced first
  // the reduction of fighter2's stats depends on fighter1's strength/magic
  const firstAttack = changeState("intelligence", "magic")(-10, -10);

  // return battle();
  return;
}

battle(currentState1);


