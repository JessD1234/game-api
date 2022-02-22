
document.querySelector("#loadGame").onclick = loadCharacters;
document.querySelector("#newGame").onclick = loadNewCharacters;

function loadNewCharacters () {
    document.querySelector('#characterGrid').innerHTML = '';

    const characterList = getNewCharacterList();


    characterList.forEach(character => {
        createCharacterCard(character);
    }); 
}

function loadCharacters () {
    document.querySelector('#characterGrid').innerHTML = '';

    const characterList = getCharacterList();


    characterList.forEach(character => {
        createCharacterCard(character);
    }); 
}

function createCharacterCard(character) {

    //Create individual character div
    const characterDiv = document.createElement('div');
    characterDiv.classList.add("CharacterCard");
    characterDiv.setAttribute('id', character.id);

    //Create character information
    const infoDiv = document.createElement('div');
    const name = document.createElement('p');
    name.innerText = character.Name;
    const district = document.createElement('p');
    district.innerText = "District: " + character.District;
    infoDiv.appendChild(name);
    infoDiv.appendChild(district);


    //Create health section
    const healthValue = document.createElement('p');
    healthValue.classList.add("characterHealth");
    healthValue.innerText = "Health Points: " + character.Health;
    

    const minusOneButton = document.createElement('button');
    const buttonOneMinusId = character.ID;
    minusOneButton.setAttribute('id', buttonOneMinusId);
    minusOneButton.setAttribute('buttonType', "minusOneButton");
    minusOneButton.classList.add("buttonMinusOne");
    minusOneButton.innerText = "Minus 1 health";
    minusOneButton.onclick = minusHealth;

    const minusFiveButton = document.createElement('button');
    const buttonFiveMinusId = character.ID;
    minusFiveButton.setAttribute('id', buttonFiveMinusId);
    minusFiveButton.setAttribute('buttonType', "minusFiveButton");
    minusFiveButton.classList.add("buttonMinusFive");
    minusFiveButton.innerText = "Minus 5 health";
    minusFiveButton.onclick = minusHealth;

    const minusTenButton = document.createElement('button');
    const buttonTenMinusId = character.ID;
    minusTenButton.setAttribute('id', buttonTenMinusId);
    minusTenButton.setAttribute('buttonType', "minusTenButton");
    minusTenButton.classList.add("buttonMinusTen");
    minusTenButton.innerText = "Minus 10 health";
    minusTenButton.onclick = minusHealth;

    const plusOneButton = document.createElement('button');
    const buttonOnePlusId = character.ID;
    plusOneButton.setAttribute('id', buttonOnePlusId);
    plusOneButton.setAttribute('buttonType', "plusOneButton");
    plusOneButton.classList.add("buttonPlusOne");
    plusOneButton.innerText = "Plus 1 health";
    plusOneButton.onclick = plusHealth;

    const plusFiveButton = document.createElement('button');
    const buttonFivePlusId = character.ID;
    plusFiveButton.setAttribute('id', buttonFivePlusId);
    plusFiveButton.setAttribute('buttonType', "plusFiveButton");
    plusFiveButton.classList.add("buttonPlusFive");
    plusFiveButton.innerText = "Plus 5 health";
    plusFiveButton.onclick = plusHealth;

    const plusTenButton = document.createElement('button');
    const buttonTenPlusId = character.ID;
    plusTenButton.setAttribute('id', buttonTenPlusId);
    plusTenButton.setAttribute('buttonType', "plusTenButton");
    plusTenButton.classList.add("buttonPlusTen");
    plusTenButton.innerText = "Plus 10 health";
    plusTenButton.onclick = plusHealth;

    /* if (character.health == 0) {
        // Add overlay? What? How to indicate dead?
        // Debating creating a separate list at the bottom/top of the board listing the dead characters.
    } */

    characterDiv.appendChild(infoDiv);
    characterDiv.appendChild(healthValue);
    characterDiv.appendChild(minusOneButton);
    characterDiv.appendChild(minusFiveButton);
    characterDiv.appendChild(minusTenButton);
    characterDiv.appendChild(plusOneButton);
    characterDiv.appendChild(plusFiveButton);
    characterDiv.appendChild(plusTenButton);
    document.querySelector('#characterGrid').appendChild(characterDiv);

}


//Edit health values
function minusHealth(e) {
    const characterList = getCharacterList();
    const button = e.currentTarget;
    const buttonType = button.getAttribute("buttonType");
    console.log(buttonType);
    const buttonId = button.getAttribute("id");
    var character;
    for (i in characterList) {
        if (characterList[i].ID == buttonId) {
            character = characterList[i];
            break;
        }
    }
    let characterHealth;
    
    switch (buttonType) {

        case "minusOneButton":
            characterHealth = character.Health - 1;
            editCharacter(character, characterHealth, buttonId);
            break;
        
        case "minusFiveButton":
            characterHealth = character.Health - 5;
            editCharacter(character, characterHealth, buttonId);
            break;

        case "minusTenButton":
            characterHealth = character.Health - 10;
            editCharacter(character, characterHealth, buttonId);
            break;

    } 

}

function plusHealth(e) {
    const characterList = getCharacterList();
    const button = e.currentTarget;
    const buttonType = button.getAttribute("buttonType");
    console.log(buttonType);
    const buttonId = button.getAttribute("id");
    var character;
    for (i in characterList) {
        if (characterList[i].ID == buttonId) {
            character = characterList[i];
            break;
        }
    }
    let characterHealth;
    
    switch (buttonType) {

        case "plusOneButton":
            characterHealth = character.Health + 1;
            editCharacter(character, characterHealth, buttonId);
            break;
        
        case "plusFiveButton":
            characterHealth = character.Health + 5;
            editCharacter(character, characterHealth, buttonId);
            break;

        case "plusTenButton":
            characterHealth = character.Health + 10;
            editCharacter(character, characterHealth, buttonId);
            break;

    } 

}


//Storage functions
function getCharacterList () {
    const characterList = localStorage.getItem("characterList");

    let characterArray = [];

    if(characterList) {
        characterArray = JSON.parse(characterList);
    } else {
        characterArray = [{"ID": "1M", "Name": "Garrett", "District": 1, "Health": 24}, {"ID": "11F", "Name": "Shia", "District": 11, "Health": 24}];
    }

    return characterArray;
}

function getNewCharacterList () {
    let characterList = [{"ID": "1M", "Name": "Garrett", "District": 1, "Health": 24}, {"ID": "11F", "Name": "Shia", "District": 11, "Health": 24}];

    localStorage.setItem("characterList", JSON.stringify(characterList));

    return characterList;
}

function saveCharacter (character) {
    const characterList = getCharacterList();
    characterList.push(character);
    localStorage.setItem("characterList", JSON.stringify(characterList));
    loadCharacters();

}

function deleteCharacter(character, id) {
    const characterList = getCharacterList();
    const updatedCharacters = characterList.filter(character => character.ID != id);
    console.log(updatedCharacters);
    localStorage.setItem("characterList", JSON.stringify(updatedCharacters));
}

function editCharacter(character, characterHealth, id) {
    const characterList = getCharacterList(); 
    if (character.ID === id){
        character.Health = characterHealth;
    } 
    console.log(characterList)
    console.log(character);
    deleteCharacter(character, id);
    saveCharacter(character);

    
}