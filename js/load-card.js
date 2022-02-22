
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
    characterDiv.setAttribute('id', character.ID);

    //Create character information
    const infoDiv = document.createElement('div');
    const name = document.createElement('p');
    name.innerText = character.Name;
    const district = document.createElement('p');
    district.innerText = "District: " + character.District;
    const image = document.createElement('img');
    image.setAttribute("src", character.ImageSource);
    image.setAttribute("alt", "Image of District " + character.District + " Tribute");
    infoDiv.appendChild(image);
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
    }

    return characterArray;
}

function getNewCharacterList () {
    let characterList = [{"ID": "1M", "Name": "Garnet", "District": 1, "Health": 25, "ImageSource": "/images/M1.png"}, {"ID": "2M", "Name": "Marshal", "District": 2, "Health": 25, "ImageSource": "/images/M2.png"}, {"ID": "3M", "Name": "Acer", "District": 3, "Health": 25, "ImageSource": "/images/M3.png"}, {"ID": "4M", "Name": "Neptune", "District": 4, "Health": 25, "ImageSource": "/images/M4.png"}, {"ID": "5M", "Name": "Watson", "District": 5, "Health": 25, "ImageSource": "/images/M5.png"}, {"ID": "6M", "Name": "Aaron", "District": 6, "Health": 25, "ImageSource": "/images/M6.png"}, {"ID": "7M", "Name": "Ash", "District": 7, "Health": 25, "ImageSource": "/images/M7.png"}, {"ID": "8M", "Name": "Rayon", "District": 8, "Health": 25, "ImageSource": "/images/M8.png"}, {"ID": "9M", "Name": "Bran", "District": 9, "Health": 25, "ImageSource": "/images/M9.png"}, {"ID": "10M", "Name": "Cooper", "District": 10, "Health": 25, "ImageSource": "/images/M10.png"}, {"ID": "11M", "Name": "Russ", "District": 11, "Health": 25, "ImageSource": "/images/M11.png"}, {"ID": "12M", "Name": "Flint", "District": 12, "Health": 25, "ImageSource": "/images/M12.png"}, {"ID": "1F", "Name": "Opal", "District": 1, "Health": 25, "ImageSource": "/images/F1.png"}, {"ID": "2F", "Name": "Artemis", "District": 2, "Health": 25, "ImageSource": "/images/F2.png"}, {"ID": "3F", "Name": "Wren", "District": 3, "Health": 25, "ImageSource": "/images/F3.png"}, {"ID": "4F", "Name": "Kallis", "District": 4, "Health": 25, "ImageSource": "/images/F4.png"}, {"ID": "5F", "Name": "Solar", "District": 5, "Health": 25, "ImageSource": "/images/F5.png"}, {"ID": "6F", "Name": "Raven", "District": 6, "Health": 25, "ImageSource": "/images/F6.png"}, {"ID": "7F", "Name": "Maple", "District": 7, "Health": 25, "ImageSource": "/images/F7.png"}, {"ID": "8F", "Name": "Polly", "District": 8, "Health": 25, "ImageSource": "/images/F8.png"}, {"ID": "9F", "Name": "Rye", "District": 9, "Health": 25, "ImageSource": "/images/F10.png"}, {"ID": "10F", "Name": "Cleave", "District": 10, "Health": 25, "ImageSource": "/images/F11.png"}, {"ID": "11F", "Name": "Shia", "District": 11, "Health": 25, "ImageSource": "/images/F11.png"}, {"ID": "12F", "Name": "Mist", "District": 12, "Health": 25, "ImageSource": "/images/F12.png"}];

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