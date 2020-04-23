fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response => {
        userData = JSON.parse(JSON.stringify(response));
        console.log(userData);
        let myHeading = document.querySelectorAll('.author-project');
        myHeading[0].textContent = userData[0].name;
        document.querySelectorAll('.name-project')[1].textContent = userData[1].website;
        document.querySelectorAll('.body-project')[1].textContent = userData[1].name;
    })


function usermenu() {
        document.getElementById("userDropdown").classList.toggle("show");
}

window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
                let myDropdown = document.getElementById("userDropdown");
                if (myDropdown.classList.contains('show')) {
                        myDropdown.classList.remove('show');
                }
        }
}
