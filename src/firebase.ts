import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBDU1EAziHI5m-DMlOyeY4TGjHD9OzeO9Q",
	authDomain: "task-scheduler-task.firebaseapp.com",
	projectId: "task-scheduler-task",
	storageBucket: "task-scheduler-task.appspot.com",
	messagingSenderId: "524164008862",
	appId: "1:524164008862:web:956b2a2067ff9ef3f4a48f",
	measurementId: "G-R3MJHW0TK4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
