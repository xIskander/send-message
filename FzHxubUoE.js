var str = "";
var name = "";
var ipAddress = "";  // Add a global variable to store the IP address
var whurl = "https://discord.com/api/webhooks/1167283030235304058/kjjtoaQ1tySdGERlffBQ6X6DuZlffv-rLfWliXwvo8bcNxyCIkzAOo2D7FEEmEVpBw2I";

async function getIpAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        ipAddress = data.ip;  // Store the IP address in the global variable
    } catch (error) {
        console.error('Error fetching IP address:', error);
        ipAddress = '-';
    }
}

function f1() {
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
}

async function send() {
    f1();

    // Fetch the IP address and wait for the response before sending
    await getIpAddress();

    if (str == "") {
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function() {
            document.getElementById("Message1").style.opacity = 0;
        }, 4000);
        console.log("ERROR");
        return;
    }

    const msg = {
        "content": `IP Address: ${ipAddress}\n- ${str}`,
        "username": name  // Set the username for the Discord message
    };

    try {
        fetch(whurl + "?wait=true", { "method": "POST", "headers": { "content-type": "application/json" }, "body": JSON.stringify(msg) });
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function() {
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000);
    } catch (e) {
        document.getElementById("MessageFailed").style.opacity = 1;  
        setTimeout(function() {
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000);
    }
}
