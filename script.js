function myFunction(loginForm){
    if(loginForm.username.value && loginForm.password.value){
        var username=document.getElementById("username").value;
        document.write('<html><body><h1><center>');
        document.write("Welcome" + " ");
        document.write(username+"!!");
        document.write("\n You will be redirected to the home page in 5 seconds.");
        document.write('</center></h1></body></html>');
        setTimeout(function(){
            window.location.href = 'index1.html';
         }, 5000);
    }
    else{
        alert("Please Enter your username and password");
    }
    
    
} 