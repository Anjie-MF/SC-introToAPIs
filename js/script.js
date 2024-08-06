const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    console.log(data); //this line is for debugging purposes;it prints the parsed data

    const userResults = data.results // "results" was the name of the array(5); 
    // "map it to that property" means assign the array name to the new var
    displayUsers(userResults);
};
getData(); //this line is for calling a function

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for (const user of userResults) {
        let country = user.location.country;
        let name = user.name.first;
        let imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
        randomFolks.append(userDiv);
    }
}