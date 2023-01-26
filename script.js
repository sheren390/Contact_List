var idx =0;
var Contact = function(name, phone, email, gender){
    this.id = idx++;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.gender= gender;
}


var contacts = [];
contacts.push(new Contact("Shereen", "0111111100","sherry@gmail.com","female"));
contacts.push(new Contact("Haidi", "0155811100","haidi@gmail.com","female"));
contacts.push(new Contact("Mariam", "0145871100","mariam@gmail.com","female"));
contacts.push(new Contact("Haidi", "0155811100","haidi@gmail.com","female"));
contacts.push(new Contact("Mariam", "0145871100","mariam@gmail.com","female"));

var listContacts = function () {
    document.getElementById('displayContacts').innerHTML = " ";

    for (var i = 0; i < contacts.length; i++) { 
        //document.getElementById('displayContacts').innerHTML +=  '<li id="name'+i+'" class="ui-li-has-alt ui-li-has-thumb ui-first-child"><a href="#secondPage" class="ui-btn" onclick="viewContact(' + contacts[i].id +')"><img src="./female.jpeg"><h2>'+contacts[i].name+'</h2></a><a href="./female.jpeg" class="ui-btn ui-btn-inline ui-icon-phone ui-btn-icon-right ui-btn-icon-notext ui-icon-carat-r" title=""></a></li>';
        if(contacts[i].gender == "female"){
            document.getElementById('displayContacts').innerHTML +=  '<li id="name'+i+'" class="ui-li-has-alt ui-li-has-thumb ui-first-child"><a href="#secondPage" class="ui-btn" onclick="viewContact(' + contacts[i].id +')"><img src="./female.jpeg"><h2>'+contacts[i].name+'</h2></a><a href="./female.jpeg" class="ui-btn ui-btn-inline ui-icon-phone ui-btn-icon-right ui-btn-icon-notext ui-icon-carat-r" title=""></a></li>';
            }else{
                document.getElementById('displayContacts').innerHTML +=  '<li id="name'+i+'" class="ui-li-has-alt ui-li-has-thumb ui-first-child"><a href="#secondPage" class="ui-btn" onclick="viewContact(' + contacts[i].id +')"><img src="./male.png"><h2>'+contacts[i].name+'</h2></a><a href="./male.png" class="ui-btn ui-btn-inline ui-icon-phone ui-btn-icon-right ui-btn-icon-notext ui-icon-carat-r" title=""></a></li>';
            }
    }
}
var selectedId;
function viewContact(i){
   const object = contacts.find(obj => obj.id == i);
   selectedId =i;
  
   // document.getElementById("contactInfo").innerHTML = " ";
    document.getElementById("diplayedName").innerHTML = '<h3 style="text-align:center;">' + object.name +'</h3>';
    document.getElementById("contactInfo").innerHTML =  
    '<div id="phone">' + object.phone +
     '</div><div id="email">' + object.email  +
      '</div>';
      //document.getElementById("contactInfo").innerHTML = " ";
}

document.getElementById("add").addEventListener("click", function(){
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn1").style.display = "block";
})
var addNewContact = function () {
   
   
    var name = document.getElementById('nameEdit').value;
    var phone = document.getElementById('phoneEdit').value;
    var email = document.getElementById('emailEdit').value;
    console.log(name);
    console.log(phone);
    console.log(email);
    var gender = document.getElementsByName('gender');

            for(i = 0; i < gender.length; i++) {
                if(gender[i].checked)
                var result = gender[i].value;}

    // var gender = document.getElementsByName('gender').value;
    // var contact = new Contact(name, phone, email);
    contacts.push(new Contact(name, phone, email, result));
    listContacts();
    location.assign("#firstPage");
   
   
}


var deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}

document.getElementById("delete").addEventListener("click", function(){
    deleteContact(selectedId);
    location.assign("#firstPage");
})

  
function updateContact () {
    document.getElementById("btn2").style.display = "block";
    document.getElementById("btn1").style.display = "none";
    contactId = selectedId;
  //  $("#name").val(contacts[contactId].name);
    document.getElementById("nameEdit").value = contacts[contactId].name;
   document.getElementById("emailEdit").value = contacts[contactId].email;
   document.getElementById("phoneEdit").value = contacts[contactId].phone;
    console.log(contactId);
    // console.log(contacts[contactId].email);
    // console.log(contacts[contactId].phone);
   // document.getElementById("submit").innerHTML = '<button id="updateButton" class="btn btn-warning" onclick="submitUpdatedContact(' + contactId + ')">Submit</button>';
   
}
document.getElementById("update").addEventListener("click", function(){
    console.log(selectedId);
    contacts[selectedId].name = document.getElementById("nameEdit").value;
    contacts[selectedId].email = document.getElementById("emailEdit").value;
    contacts[selectedId].phone = document.getElementById("phoneEdit").value;
    
    viewContact(selectedId);
    document.getElementById("nameEdit").value = "";
    document.getElementById("emailEdit").value = "";
    document.getElementById("phoneEdit").value = "";
    location.assign("#secondPage");
})
var submitUpdatedContact = function (i) {
    contacts[i].name = document.getElementById("nameEdit").value;
    contacts[i].email = document.getElementById("emailEdit").value;
    contacts[i].phone = document.getElementById("phoneEdit").value;
    console.log(contacts[i].id);
    console.log(contacts[i].email);
    console.log(contacts[i].phone);
    document.getElementById("nameEdit").value = "";
    document.getElementById("emailEdit").value = "";
    document.getElementById("phoneEdit").value = "";
    viewContact(i);

    listContacts();
}


listContacts();