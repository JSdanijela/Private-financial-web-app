

//LISTEN FOR AUTH STATUS CHANGES
 auth.onAuthStateChanged(user => {
 	if(user) {
    //Get DATA
db.collection('guides').onSnapshot(snapshot => {
	setupGuides(snapshot.docs);
	setupUI(user);
});
 	} else{
 		setupUI();
 		setupGuides([]);

 	}
 });
//create new
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
	e.preventDefault();
  const date = new Date();
  var options = {day: 'numeric', month: 'numeric', year: 'numeric' };
  const currentDate = date.toLocaleString('en-GB', options).toString();
	db.collection('guides').add({
		title: createForm['title'].value,
		date: currentDate,
		description: createForm['description'].value,
	    content: createForm['content'].value
	}).then(() => {
     //close the modal and reset form 
     const modal = document.querySelector('#modal-create');
     M.Modal.getInstance(modal).close();
     createForm.reset();
	}).catch(err => {
		console.log(err.message)
	})
})

//LOG OUT

const logout= document.querySelector("#logout");

logout.addEventListener('click', (e) => {
	e.preventDefault();
	auth.signOut().then(() => {
	});
});

//Log in
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const email= loginForm['login-email'].value;
	const password = loginForm['login-password'].value;

	auth.signInWithEmailAndPassword(email, password).then(cred =>{
		//close the login modal and reset
		const modal = document.querySelector('#modal-login');
		M.Modal.getInstance(modal).close();
        loginForm.reset();
			});
});

//ORDER BY

