//Showing and Hidding contents
const btn= document.querySelector(".btnNav");
btn.addEventListener('click',function(e){
	e.preventDefault();
	const data=document.querySelector(".showEntry");
	const entry=document.querySelector(".addEntry");

	if(e.target.textContent=="Add A New Entry")
	{
		e.target.textContent="Go Back";
		data.classList.add("hidden");
		entry.classList.remove("hidden");
	}
	else{
		e.target.textContent="Add A New Entry";
		data.classList.remove("hidden");
		entry.classList.add("hidden");
	}
})

//Event Listner For Adding Contacts
const frm= document.querySelector("#entForm");
const list= document.querySelector("#conList");
if(frm!=null){
frm.addEventListener('submit',function(e){
	e.preventDefault();

	//create Elements
	var name= document.querySelector("#name");
	var number= document.querySelector("#number");


	if((name.value && number.value)!=""){
	const nameEl=document.createElement('td');
	const phoneEl=document.createElement('td');
	const delEl=document.createElement('td');
	const el= document.createElement('tr');

	//Adding content
	nameEl.textContent = name.value;
	phoneEl.textContent= number.value;
	delEl.textContent="X";

	//Adding Classes
	delEl.classList.add('delete');

	//Adding to table
	el.appendChild(nameEl);
	el.appendChild(phoneEl);
	el.appendChild(delEl);
	list.appendChild(el);

	//

	//Clear Fields
	name.value=null;
	number.value=null;
	document.querySelector(".showName").textContent = name.value;
  document.querySelector(".showPhone").textContent = number.value;
	//Show Alert

	document.querySelector(".alert").textContent="Entry Added To Directory";
	document.querySelector(".alert").style.background = "green";
	setTimeout(clearAlert,1500);
}
else{
	document.querySelector(".alert").textContent="Please Fill All The Fields";
	document.querySelector(".alert").style.background = "red";
	setTimeout(clearAlert,1500);
}
function clearAlert()
{
	document.querySelector(".alert").textContent="";

}
});}



//Event Listner For Deleting Contacts

if(list!=null){
list.addEventListener('click',function(e){
 if(e.target.className=="delete")
 {
 	const el= e.target.parentElement;
 	el.parentElement.removeChild(el);
 }
});}



//To Show Real-Time data

frm.addEventListener('input',function() {

	var name= document.querySelector("#name");
	var number= document.querySelector("#number");
	if(name.value!=null){
  document.querySelector(".showName").textContent = name.value;
  document.querySelector(".showPhone").textContent = number.value;}
  else{
  	document.querySelector(".showName").textContent = " ";
  document.querySelector(".showPhone").textContent = " ";
  }
})