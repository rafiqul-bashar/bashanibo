import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/apiAxios";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();



  //Register User Data

  const registerUser = async (email, name) => {
    try {
      const newUser = { name: name, email: email };
      let res = await api.post("/users/register", newUser);
      console.log(res.data);
    } catch (error) {
      // window.location.reload();
      console.log(error);
    }
  };

  //Get User Data from DB on Login

  const getUserData = async (email) => {
    try {
      const res = await api.get(`/users/${email}`);
      setUserData(res.data)
      if(res.data.isAdmin===true){
        setAdmin(true)
        navigate("/dashboard")
      }

    } catch (error) {
      // window.location.reload();
      console.log(error);
    }
  };

  ///update user data
  const putUserToDB = async (fetchData) => {
    console.log(fetchData);
    try {
      const res = await api.put("/users", fetchData);
      console.log(res.data);
    } catch (error) {
      // window.location.reload();
      console.log(error);
    }
  };
  //Post Order to DB

  const signInUsingGoogle = (location) => {
    signInWithPopup(auth, googleProvider).then((res) => {
      setUser(res.user);
      // console.log(res.user);
      const newUser = {
        name: res.user.displayName,
        email: res.user.email || res.user.uid,
        userPhoto: res.user.photoURL,
      };
      putUserToDB(newUser);
      const destination = location?.state?.from || "/explore";
      navigate(destination);
    });
  };

  const createAccount = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        registerUser(email, name);
      
        alert("User Created !");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };
  const loginWithEmailAndPassword = (email, password, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // Signed in
        setUser(res.user);
        getUserData(email);
        const destination = location?.state?.from || "/explore";
        navigate(destination);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => {
        setIsLoading(false);
        window.location.reload();
      });
  };

  return {
    user,
    userData,
    admin,
    putUserToDB,
    token,
    setIsLoading,
    isLoading,
    loginWithEmailAndPassword,
    signInUsingGoogle,
    createAccount,
    logOut,
  };
};

export default useFirebase;
