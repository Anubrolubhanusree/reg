function validation(){
    let username=document.getElementById('name').value;
    let password=document.getElementById('passcode').value;
    let mail=document.getElementById('mailid').value;
    let mobile=document.getElementById('mobile').value;
    let male=document.getElementById('genderm');
    let female=document.getElementById('genderf');
    let lang=document.getElementById('language');
    let address =document.getElementById('address');
    if(username==''|| password==''|| mail==''|| mobile==''|| (male.checked!=1 &
        female.checked!=1)|| (lang[0].checked!=1 & lang[1]!=1 & lang[2]!=1 & lang[3]!=1)||
        address==''){
            alert('please fill all the fields');
            return false;
        }
        else{
            if(username.length<6 & username!=(/^(A-Z)||(a-z)/)){
                alert('enter valid username')
            }
            else{
                return true;
            }
            if(password.length<6){
                alert('enter valid password')
            }
            else{
                return true;
            }
            if(mobile.value!=(/^[1-9][0-9]{9}$/)){
                alert('enter valid mobile number')
            }
            else{
                return true;
            }
        }
    
}