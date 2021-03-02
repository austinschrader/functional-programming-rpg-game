const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state, characterNameObj) => {
    const newState = stateChangeFunction(currentState, characterNameObj);
    currentState = { ...newState };
    return newState;
  }
}

const addCharacter = (defaultCharacterObj) => {
  return (characterNameObj) => {
    return (state) => ({
      ...state,
      [characterNameObj]: defaultCharacterObj
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
  level: 1,
  hasStaff: false
};

const defaultBalrogObj = {
  health: 100,
  strength: 100,
  name: "Balrog"
};

// function setDefault() {
// Create Gandalf Wizard
const gandalf = "Gandalf";
const newWizard = addCharacter(defaultCharacterObj)(gandalf); // Set it up
const newCharacterState = updateStateObj(newWizard); // Push it to state

// return newCharacterState;
// }

// console.log(setDefault());

// Battle
function battle(currentState) {
  if (!currentState.Balrog) {
    balrog = "Balrog";
    newBalrog = addCharacter(defaultBalrogObj)(balrog);
    newBalrogState = updateStateObj(newBalrog);
  }

  const roundInitializationState = updateStateObj();
  // console.log(currentState);
  // termination case

  // conditional base case
  if (roundInitializationState.Gandalf.health <= 0) {
    console.log("Oh no, Gandalf, you are dead!");
    // return setDefault();
  } else if (roundInitializationState.Balrog.health <= 0) {
    console.log("Victory! Balrog has been defeated!");
    const levelUp = changeState("health", "magic")(10, 20);
    const updateState = updateStateObj(levelUp);
    return;
  } else {
    // recursion
    const castMagicAttack = changeState("health", "strength")(-(Math.floor(currentState.Gandalf.magic * Math.random())), 0);
    const applyMagicAttack = updateStateObj(castMagicAttack, balrog);
    console.log(`Balrog's health remaining: ${updateStateObj().Balrog.health}!`);

    const physicalAttack = changeState("health", "magic")(-(Math.floor(roundInitializationState.Balrog.strength * Math.random())), 0);
    console.log("no error");
    // const applyPhysicalAttack = updateStateObj(physicalAttack, currentState.Gandalf.health);
    const applyPhysicalAttack = updateStateObj(physicalAttack, gandalf);
    console.log("error");
    console.log(`Gandalf's health remaining: ${updateStateObj().Gandalf.health}!`);

    const endOfRoundState = updateStateObj();

    return battle(endOfRoundState);
  }
}

// 2 new functions
// level up function, and return to default function (maybe just return newCharacterState line 53)

battle(updateStateObj());
console.log(updateStateObj());


