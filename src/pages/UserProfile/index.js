import React from "react";
import * as firebase from "firebase/app";
import UserInformation from "../../components/UserProfileComponents/index";

export default function UserProfile({ user }){
	var user = firebase.auth().currentUser;
	user.updateProfile({
		displayName: "Rebecca Foster",
		photoURL: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
	  }).then(function() {
		console.log('user', user);
	  }).catch(function(error) {
		console.log("error", error);
	  });
	return (
		<div className='user-profile'>
			<img alt='profile picture' src={user.photoURL}/>
			<h1>{user.displayName}</h1>
			<UserInformation email={user.email ? user.email : 'oh no'}/>
		</div>
	);
}