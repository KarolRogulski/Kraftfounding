let projectData = {
        "date":null,
        "description":"",
        "limit":null,
        "student": {
                "email":"",
        },
        "title":null,
        "abilities":[
            {
                    "ability":""
            }
            ]
}

let user = {
        "name":null
}

/*"https://jsonplaceholder.typicode.com/users"*/
fetch("")
    .then(response => response.json())
    .then(response => {
            projectData = JSON.parse(JSON.stringify(response));
            console.log(projectData);

            for (let i=0; i<3; i++){
                    document.querySelectorAll('.date-project')[i].textContent = projectData[i].date
                    document.querySelectorAll('.body-project')[i].textContent = projectData[i].description;
                    document.querySelectorAll('.author-project')[i].textContent = projectData[i].student.email;
                    document.querySelectorAll('.name-project')[i].textContent = projectData[i].title;
            }
    })

function checkLogin(){
        fetch("")
            .then(response => response.json())
            .then(response =>{
                    user = JSON.parse(JSON.stringify(response));
                    if (user.name===null){
                            document.getElementById("user-logout").style.display = "block";
                            document.getElementById("user-login").style.display = "none";
                    }else{
                            document.getElementById("user-login-menu").textContent = user[0].name;
                            document.getElementById("user-logout").style.display = "none";
                            document.getElementById("user-login").style.display = "block";
                    }
            })
}

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