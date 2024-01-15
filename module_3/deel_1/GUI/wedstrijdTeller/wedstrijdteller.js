// inputTeams = document.getElementById('input-teams');

// inputTeam1.value = 'Deetos'; // testdata
// inputTeam2.value = 'PKC'; // testdata

// function start(event){
// }
// startButton.addEventListener('click',start);

// function count(event){
//     counterTeam1.classlist.remove("serving");
//     counterTeam2.classlist.remove("serving");
//     const button = event.srcElement;
//     let score = parseInt(button.innerText)
//     score++;
//     button.innerText = score;
//     button.classlist.add("serving");
// }
// counterTeam1.addEventListener('click',count);
// counterTeam2.addEventListener('click',count);

// function displayNames(event){
//     nameTeam1.innerText = inputTeam1.value||"";
//     nameTeam2.innerText = inputTeam2.value||"";
// }

// inputTeam1.addEventListener('change',displayNames);
// inputTeam2.addEventListener('change',displayNames);

inputTeams = document.getElementById('input-teams');

inputTeam1.value = ''; // testdata
inputTeam2.value = ''; // testdata

function start(event){
    console.dir(servingTeam1)
    if (servingTeam1.checked) {
        console.log("Button 1 is active");
    }
    if (servingTeam2.checked) {
        console.log("Button 2 is active");
    }
}
startButton.addEventListener('click',start);

function count(event){
    counterTeam1.classList.remove('serving')
    counterTeam2.classList.remove('serving')
    console.dir(event)
    const button = event.srcElement;
        let score = parseInt(button.innerText) + 1
        button.innerText = score;
        button.classList.add('serving');
}
counterTeam1.addEventListener('click',count);

counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;
}




inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);