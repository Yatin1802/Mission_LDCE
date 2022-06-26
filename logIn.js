
var validUser = [];

function loadSettings(){
   closeModal();
   loadValidUsers();
   hideButtons();

   document.getElementById('userName').value='';
   document.getElementById('msgOnLogin').style.display='none';
   localStorage.setItem('sessionValidity','false');
//    pwdValue('trial41');
    document.getElementById("check").checked=false;
    myFunction();

}

function hideButtons(){
    list = document.getElementById('list_AOBR');
    quiz = document.getElementById('quiz_AOBR');
    lookup = document.getElementById('lookup_AOBR');

    // list.style.display = 'none';
    quiz.style.display = 'none';
    lookup.style.display = 'none';
}

function showButtons(){
    list = document.getElementById('list_AOBR');
    quiz = document.getElementById('quiz_AOBR');
    lookup = document.getElementById('lookup_AOBR');

    list.style.display = 'block';
    quiz.style.display = 'block';
    lookup.style.display = 'block';
    localStorage.setItem('sessionValidity','true');
}

//after successful login, some elements needs to be removed.
function hideAfterLogIn(){
    console.log('hata');
    document.getElementById("loginSection").style.display = 'none';
    document.getElementById("subscribeInfo").style.display ='none';
    document.getElementById('mainIntro').style.display='none';
    let uName = document.getElementById('userName').value;
    document.getElementById("packDetails").innerHTML = "Welcome " + uName+ ", you now have access to the following:"
    setTimeout(hideBanner,2000);
}

function loadValidUsers(){

    
    for(let i = 0; i< Global_C.length;i++){

        if(Global_C[i][2]==1 || Global_C[i][2]==2){
            validUser.push(Global_C[i][0]);
        }
        
    }
    console.log(validUser);
}

function checkValidity(){
    
    console.log(document.getElementById('userName').value);
    console.log(document.getElementById('passCode').value);
    console.log(document.getElementById('passCode'));

    if(isEmpty()){

        alert("Invalid Credentials!!!");
    }

    //i.e. the username and password fields are not empty
    else{

        if(isUserValid()){
            //this means the username is valid
                console.log("thik hai");
            let uName = document.getElementById('userName').value;
            let enteredPassCode = document.getElementById('passCode').value;
           
            let nPwd = pwdValue(enteredPassCode);
            
            let isValidPassword = false;
            for(let i =0;i<Global_C.length;i++){

                if(uName == Global_C[i][0]){
                    if(nPwd == Global_C[i][1]){
                        document.getElementById('msgOnLogin').style.display='block';
                        document.getElementById('msgOnLogin').innerHTML = "Logged in Successfully!"
                        showButtons();
                        isValidPassword = true;
                        hideAfterLogIn();
                    }
                }
            
            }
            if(!isValidPassword){
                alert("The Password is incorrect");
            }


        }

        else{
            alert('The Username is not Valid');
        }
        
    }

}

function pwdValue(pStr){

    let lastTwo = pStr.slice(-2);
    let pt0 = pStr.slice(0,pStr.length-2);
    let pt1 = lastTwo.codePointAt(0);
    let pt2 = lastTwo.codePointAt(1);
    console.log(pt0+pt1+pt2);
    return pt0+pt1+pt2;

    // console.log(lastTwo);
    // console.log(lastTwo.codePointAt(0));
    // console.log(lastTwo.codePointAt(1));

}

function checkValidity1(){
    
    console.log(e.target);
}

// This function checks whether the credentials are blank
function isEmpty(){

    if(document.getElementById('userName').value===''){
       return true; 
    }

    else{
        console.log("here");
        if(document.getElementById('passCode').value==='')
            {
                return true;
            }
        else
            {
                return false;
            }
    }
    
}

//this function hides the logged in div after 3 seconds

function hideBanner(){
   
    // document.getElementById('msgOnLogin').style.transition = "all 1s ease-out";
    document.getElementById('msgOnLogin').style.opacity = 0;
    setTimeout(()=>{document.getElementById('msgOnLogin').style.display = 'none';},1000); 
}

//This function checks if the usernanme is valid
function isUserValid(){

    let enteredUserName = document.getElementById('userName').value;
    
    let whetherFound = false;
    for(let i=0;i<validUser.length;i++){
        if(enteredUserName==validUser[i]){
            whetherFound = true;
        }
    }

    return whetherFound;

}

function openModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

//Function for Side Menu
function myFunction() {

    var x = document.getElementById("myLinks");
    var menu = document.getElementById("check");
    var menuLabel = document.getElementById("H-menu");

    x.style.visibility='hidden';
    console.log(menu.checked);
    if (menu.checked == true) {
      // x.style.display = "block";
      x.style.visibility='visible';
      x.style.transform = "translateX(0%)";
      menuLabel.style.transition = "all 0.4s ease-in";
      menuLabel.style.transform = "translateX(240px)";
      }

    if (menu.checked == false) {
        x.style.visibility='hidden';
        x.style.transform = "translateX(-110%)";
        menuLabel.style.transform = "translateX(0vw)";
     
      // x.style.display = "none";
    }
  }