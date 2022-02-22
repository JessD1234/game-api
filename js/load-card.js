
document.querySelector("#newGame").onclick = loadCharacters;

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
    const buttonOneMinusId = "MinusOneButton" + character.ID;
    minusOneButton.setAttribute('id', buttonOneMinusId);
    minusOneButton.classList.add("buttonMinusOne");
    minusOneButton.innerText = "Minus 1 health";
    minusOneButton.onclick = minusHealth;

    const minusFiveButton = document.createElement('button');
    const buttonFiveMinusId = "MinusFiveButton" + character.ID;
    minusFiveButton.setAttribute('id', buttonFiveMinusId);
    minusFiveButton.classList.add("buttonMinusFive");
    minusFiveButton.innerText = "Minus 5 health";
    minusFiveButton.onclick = minusHealth;

    const minusTenButton = document.createElement('button');
    const buttonTenMinusId = "MinusTenButton" + character.ID;
    minusTenButton.setAttribute('id', buttonTenMinusId);
    minusTenButton.classList.add("buttonMinusTen");
    minusTenButton.innerText = "Minus 10 health";
    minusTenButton.onclick = minusHealth;

    const plusOneButton = document.createElement('button');
    const buttonOnePlusId = "PlusOneButton" + character.ID;
    plusOneButton.setAttribute('id', buttonOnePlusId);
    plusOneButton.classList.add("buttonPlusOne");
    plusOneButton.innerText = "Plus 1 health";
   // plusOneButton.onclick = plusHealth;

    const plusFiveButton = document.createElement('button');
    const buttonFivePlusId = "PlusFiveButton" + character.ID;
    plusFiveButton.setAttribute('id', buttonFivePlusId);
    plusFiveButton.classList.add("buttonPlusFive");
    plusFiveButton.innerText = "Plus 5 health";
   // plusFiveButton.onclick = plusHealth;

    const plusTenButton = document.createElement('button');
    const buttonTenPlusId = "PlusTenButton" + character.ID;
    plusTenButton.setAttribute('id', buttonTenPlusId);
    plusTenButton.classList.add("buttonPlusTen");
    plusTenButton.innerText = "Plus 10 health";
   // plusTenButton.onclick = plusHealth;

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

function minusHealth() {
    const characterList = localStorage.getItem("characterList");
    const button = e.currentTarget;
    const buttonName = button.classList;
    console.log(buttonName);

    //I just realized this won't work, because being able to build case statements for each of the unique button items would take forever/be unrealistic. Considering there's 24 tributes and 6 buttons each, I'd be here a while. So I was thinking of adding a class as well. Select the button by the class, and then also pull in the character information based off the button ID? We need a way to save this back to the character, so maybe just set the button ID to the character's ID? Look at how I edited to-do items or the budget items for reference.
   /*  switch (buttonId) {
        case 
    } */

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

function saveCharacter (character) {
    const characterList = getCharacterList();
    characterList.push(character);
    localStorage.setItem("characterList", JSON.stringify(characterList));

}