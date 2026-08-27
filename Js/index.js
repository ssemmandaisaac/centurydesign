window.onload = init(); 
function init() {
    var rex = document.getElementById('script');
    console.log('Start Up succesful');
    var UserName;
        while (!UserName) {
        UserName = prompt("Dear User, before you get started, please enter your name in the fieldn provided below");
            if (!UserName) {
                alert("You can't get acces to the web UI unless you enter your name");
            } else {
                //Nothing happens
                alert("Dear " + UserName + " ,thank you for your co-operation, we hope you enjoy and benefit from your visit ")
                console.log(UserName + " has just logged in")
                //prepare for memory registry
                localStorage.setItem("user", UserName);
                //var name = localStorage.getItem("user", UserName);
                setTimeout (function() {
                    new Notification('Thank you', {body: "Dear " + UserName + " , thank you for using U learn, we hope you benefit from your visit"} );
                }, 10000)
                
            }
    }
    document.body.removeChild(rex);
}