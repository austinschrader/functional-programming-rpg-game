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


// Character Setup
const defaultCharacterObj = {
  health: 105,
  magic: 54,
  name: "Gandalf",
  hasStaff: false
};

const defaultBalrogObj = {
  health: 100,
  strength: 100,
  name: "Balrog"
};

// Create Gandalf Wizard
const gandalf = "Gandalf";
const newWizard = addCharacter(defaultCharacterObj)(gandalf); // Set it up
const newCharacterState = updateStateObj(newWizard); // Push it to state

// const activateGandalfProps = changeState("health", "magic")(105, 54); // Set it up
// const newCharacterState2 = updateStateObj(activateGandalfProps, gandalf); // Push it to state

// Grab current state
const currentState1 = updateStateObj();

// Battle
function battle(currentState) {
  if (!currentState.Balrog) {
    balrog = "Balrog";
    newBalrog = addCharacter(defaultBalrogObj)(balrog);
    newBalrogState = updateStateObj(newBalrog);
  }

  const roundInitializationState = updateStateObj();
  // termination case

  // conditional base case
  if (roundInitializationState.Gandalf.health <= 0) {
    console.log("Oh no, Gandalf, you are dead!");
    return;
  } else if (roundInitializationState.Balrog.health <= 0) {
    console.log("Victory! Balrog has been defeated!");
    return;
  } else {
    // recursion
    const castMagicAttack = changeState("health", "strength")(-(Math.floor(currentState.Gandalf.magic * Math.random())), 0);
    const applyMagicAttack = updateStateObj(castMagicAttack, balrog);
    console.log(`Balrog's health remaining: ${updateStateObj().Balrog.health}!`);

    console.log(roundInitializationState)

    const physicalAttack = changeState("health", "magic")(-(Math.floor(roundInitializationState.Balrog.strength * Math.random())), 0);
    const applyPhysicalAttack = updateStateObj(physicalAttack, gandalf);
    console.log(`Gandalf's health remaining: ${updateStateObj().Gandalf.health}!`);

    const endOfRoundState = updateStateObj();
    return battle(endOfRoundState);
  }
}

battle(currentState1);


