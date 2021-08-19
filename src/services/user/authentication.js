import firebase from '../../firebase';

const login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user =>{
    console.log(user);
  })
  .catch(error => {
    switch(error.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        return "E-mail inválido";
      case "auth/wrong-password":
        return "Senha incorreta";
    }
  })
}

const createUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    switch(error.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
      case "auth/operation-not-allowed":
        return "E-mail inválido ou já utilizado";
    }
  })
}

const logout = () => {
  firebase.auth().signOut();
  localStorage.removeItem("user");
}

export { login, createUser, logout }