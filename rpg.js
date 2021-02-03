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
  health: 0,
  magic: 0,
  name: "Gandalf"
};

const defaultBalrogObj = {
  health: 100,
  magic: 100,
  name: "Balrog"
};

// Create Gandalf Wizard
const gandalf = "Gandalf";
const newWizard = addCharacter(defaultCharacterObj)(gandalf); // Set it up
const newCharacterState = updateStateObj(newWizard); // Push it to state

const activateGandalfIntel = changeState("health", "magic")(105, 54); // Set it up
const newCharacterState2 = updateStateObj(activateGandalfIntel, gandalf); // Push it to state

// Grab current state
const currentState1 = updateStateObj();

function battle(currentState) {
  if (!currentState.Balrog) {
    balrog = "Balrog";
    newBalrog = addCharacter(defaultBalrogObj)(balrog);
    newBalrogState = updateStateObj(newBalrog);
  }

  const battleInitializationState = updateStateObj();
  console.log(battleInitializationState);
  // termination case


  // conditional base case
  // if (currentStateBattleStart)
  // if either balrog or galdalf's currentstate.Gandalf.health <= 0 then the fight is over

  // recursion
  // fighter1 attacks first, and so fighter2 gets their stats reduced first
  // the reduction of fighter2's stats depends on fighter1's strength/magic
  // const currentState
  const firstAttack = changeState("health", "magic")(-10, -10);

  // return battle();
  return;
}

battle(currentState1);


