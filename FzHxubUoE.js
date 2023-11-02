whurl = "https://discord.com/api/webhooks/1167283030235304058/kjjtoaQ1tySdGERlffBQ6X6DuZlffv-rLfWliXwvo8bcNxyCIkzAOo2D7FEEmEVpBw2I"
var str= "";
var name= "";
function f1(){
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    console.log(document.getElementById("InputField").value)
}
function send(){
    f1();
    const msg = {
        "content": str,
        "username": name
    };
    console.log(msg)
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        console.log("ERROR")
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;  
        
        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }

} 
