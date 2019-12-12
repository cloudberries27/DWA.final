import React from "react";
import * as firebase from "firebase/app";
import UserInformation from "../../components/UserProfileComponents/index";

export default function UserProfile({ user }){
	var currUser = firebase.auth().currentUser;
	currUser.updateProfile({
		displayName: "Rebecca Foster",
		photoURL: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
	  }).then(function() {
		console.log('user', user);
	  }).catch(function(error) {
		console.log("error", error);
	  });
	return (
		<div className='user-profile'>
			<img alt='user profile image' src={user.photoURL}/>
			<h1>{user.displayName}</h1>
			<UserInformation uid = {user.uid ? user.uid: 'oops'} email={user.email ? user.email : 'oh no'}/>
		</div>
	);
}