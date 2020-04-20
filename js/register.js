//obiekt
let userData = {
    "login":null,
    "password":null,
    "email":null,
    "firstname":null,
    "lastname":null,
    "age":null,
    "subject":null,
    "abilities":"",
    "description":""
}

let userDataLogin = {
    "username":null,
    "password":null
}
//stałe i zmienne

let userDataString;
let userDataStringLogin;
const url = "https://jsonplaceholder.typicode.com/posts";

//przełączanie okienek w formularzu (rejestracja)
function HideContent(d)
{
    switch (d) {
        case 'part-1':
            if(test1()){
                document.getElementById('part-1').style.display = "none";
                document.getElementById('part-2').style.display = "block";
            }
            break;
        case 'part-2':
            if (test2()){
                document.getElementById('part-2').style.display = "none";
                document.getElementById('part-3').style.display = "block";
            }
            break;
        case 'part-3':
            document.getElementById('part-3').style.display = "none";
            document.getElementById('part-4').style.display = "block";
            break;
        case 'part-4':
            JSONFromForm();
            send();
            break;
        default:
            break;
    }
}

//formular logowanie
function loginAndSend() {
    JSONFromFormLogin();
    sendLogin();
}

//zamiana obiektu na JSON
function JSONFromForm(){
    userData.login = document.forms['register'].login.value;
    userData.password = document.forms['register'].password.value;
    userData.email = document.forms['register'].email.value;
    userData.firstname = document.forms['register'].firstname.value;
    userData.lastname = document.forms['register'].lastname.value;
    userData.age = document.forms['register'].age.value;
    userData.subject = document.forms['register'].subject.value;
    let poleSelect = document.forms['register'].abilities;
    for (let i=0; i<poleSelect.length; i++){
        if (poleSelect.options[i].selected){
            userData.abilities += poleSelect.options[i].value+';';
        }
    }
    userData.description = document.forms['register'].description.value;

    userDataString = JSON.stringify(userData);
    console.log(userDataString);
}

function JSONFromFormLogin(){
    userDataLogin.username = document.forms['login'].username.value;
    userDataLogin.password = document.forms['login'].password.value;
    userDataStringLogin = JSON.stringify(userDataLogin);
    console.log(userDataStringLogin);
}

//wysyłąnei danych na serwer (rejestracja)
function send() {
    fetch(url, {
        method: "post",
        body: userDataString
    })
        .then(res => res.json())
        .then(res => {
            alert("Zarejestrowano")
            console.log("Dodałem użytkownika:");
            console.log(res);
        })
        .catch(error => console.log("Błąd: ", error));
}

//logowanie
function sendLogin() {
    fetch(url, {
        method: "post",
        body: userDataStringLogin
    })
        .then(res => res.json())
        .then(res => {
            alert("Zalogowano")
            console.log(res);
        })
        .catch(error => console.log("Błąd: ", error));
}

//walidacja formularza
function test1() {
    if(document.forms['register'].login.value === "")
        {alert("Nie podałeś loginu"); return false;}
    else if(document.forms['register'].password.value === "")
        {alert("Nie podałeś hasła");return false;}
    else if(document.forms['register'].password.value.length <8)
        {alert("Hasło za któtkie (min 8 liter)");return false;}
    else if(document.forms['register'].email.value === "")
        {alert("Nie podałeś e-maila");return false;}
    else if(document.forms['register'].email.value !== document.forms['register'].email2.value)
        {alert("Podane adresy e-mail nie są takie same");return false;}
    else
        return true;
}
function test2(){
    if(document.forms['register'].firstname.value === "")
        {alert("Nie podałeś imienia"); return false;}
    else if(document.forms['register'].lastname.value === "")
        {alert("Nie podałeś nazwiska"); return false;}
    else if(document.forms['register'].age.value === "")
        {alert("Błędny wiek"); return false;}
    else if(document.forms['register'].subject.value === "disabled")
        {alert("Nie podałeś kierunku");return false;}
    else
        return true;
}

