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

export default {
    getCharacterList
}