//import storage from "./storage.js";

document.querySelector("#newGame").onclick = loadCharacters;

function loadCharacters () {

    document.getElementById("characterGrid").innerHTML = '';

    //const characterList = storage.getCharacterList();
    const characterList = [{"ID": "1M", "Name": "Garrett", "District": 1, "Health": 24}, {"ID": "11F", "Name": "Shia", "District": 11, "Health": 24}];

    characterList.forEach(character => {
        createCharacterCard(character);
    }); 
}

function createCharacterCard(character) {
    //Create individual character div
    const characterDiv = document.createElement('div');
    characterDiv.classList.add("CharacterCard");
    characterDiv.setAttribute('id', character.id);

    //Create health section
    const healthValue = document.createElement('p');
    healthValue.innerHtml(character.health);

    const minusOneButton = document.createElement('button');
    minusOneButton.innerText("Minus 1 health");
    minusOneButton.onclick = minusHealth;

    const minusFiveButton = document.createElement('button');
    minusFiveButton.innerText("Minus 5 health");
    minusFiveButton.onclick = minusHealth;

    const minusTenButton = document.createElement('button');
    minusTenButton.innerText("Minus 10 health");
    minusTenButton.onclick = minusHealth;

    const plusOneButton = document.createElement('button');
    plusOneButton.innerText("Plus 1 health");
    plusOneButton.onclick = plusHealth;

    const plusFiveButton = document.createElement('button');
    plusFiveButton.innerText("Plus 5 health");
    plusFiveButton.onclick = plusHealth;

    const plusTenButton = document.createElement('button');
    plusTenButton.innerText("Plus 10 health");
    plusTenButton.onclick = plusHealth;

    /* if (character.health == 0) {
        //Add overlay? What? How to indicate dead?
    } */

    characterDiv.appendChild(healthValue);
    characterDiv.appendChild(minusOneButton);
    characterDiv.appendChild(minusFiveButton);
    characterDiv.appendChild(minusTenButton);
    characterDiv.appendChild(plusOneButton);
    characterDiv.appendChild(plusFiveButton);
    characterDiv.appendChild(plusTenButton);


}