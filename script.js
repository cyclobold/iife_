const toggle = (function(name){
    console.log(name);
    const toggleBtn = document.querySelector("button");
    init();


    function init(){
        currentBtnState = getButtonState();
        if(currentBtnState === "logged-in"){
            toggleBtn.setAttribute("onclick", "toggle.logout()")
            toggleBtn.textContent = "Log Out";
        }else{
            toggleBtn.setAttribute("onclick", "toggle.login()")
            toggleBtn.textContent = "Log In";
        }
    }

    function loginUserAction(){

        toggleBtn.textContent = "Log Out";
        
        toggleBtn.removeAttribute("onclick");
        toggleBtn.setAttribute("onclick", "toggle.logout()")

        setButtonState("logged-in");
       
    }

    function logoutUserAction(){
        toggleBtn.textContent = "Log In";
        setButtonState("logged-out");
        init();
    }

    function setButtonState(btnState){
        localStorage.setItem("btn-state", btnState);
    }

    function getButtonState(){
        return localStorage.getItem("btn-state");
    }





    return {
        login: loginUserAction,
        logout: logoutUserAction
    }
    
    

   

}('James'))





