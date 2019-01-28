function validate() 
{ 
   if(document.myform.email.value == "")
   { 
     alert( "Please provide your Email!" ); 
     document.myform.name.focus() ;
     return false;
   } 
   else if(document.myform.password.value == "") 
   { 
     alert( "Please provide your password!" ); 
     document.myform.password.focus() ; 
     return false; 
   }
   else if(document.getElementById('admin').checkedd==true){
    window.location.href = "admin.html";
    return false;
   }else{
    return true;
   }
   
} 

function checkedbox(){
    if(document.getElementById('admin').checkedd==true){
        alert('yes');
        window.location = 'admin.html';
        return false;
    }return true;
}