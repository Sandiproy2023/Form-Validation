let name = document.getElementById('name')
let password = document.getElementById('password')
flag = 1;

    function loginfrom(){
        if(name.value == ""){
            // console.log('name emty');
            document.getElementById('error').innerHTML = "name is empty"
            flag = 0;
        }else if(name.value.length < 4){
            document.getElementById('error').innerHTML = "name requre min 3 char"
            flag = 0;
        }else{
            document.getElementById('error').innerHTML = "";
            flag = 1;

        }




       if(password.value == ""){
        document.getElementById('passworderror').innerHTML = "password is empty";
        flag =0;
       }else{
        document.getElementById('passworderror').innerHTML = "" ;
        flag = 1
       }
         
       if(flag){
        return true
       }else{
        return false
       }


        
    }

    // const isEmailValid = (email) => {
    //     const regexForEmail =
    //       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //     return regexForEmail.test(email);
    //   };
      
    //   const isPassValid = (password) => {
    //     const regexForPassword =
    //       /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/;
      
    //     return regexForPassword.test(password);
    //   };
