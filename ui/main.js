var submit =document.getElementById('submit_btn');
submit.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function ()
    {
        if (request.readystate === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                
                alert("logged in");
            } else if (request.status === 403) {
                alert('username/password is incorrect');
            } else if (request.status === 500) {
                alert('somthng went wrong');
            }
        }
            
            
        
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.lod('username');
    console.lod('password');
    request.open('POST', 'http://priyankahazari5.imad.hasura-app.io/login', true);
    request.setRequestHeader;
    request.send(JSON.stringify({username: username, password: password}));
    
};