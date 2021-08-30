import firebaseApp from "../../firebase";

const login = (email, password) => {
  return firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          return { error: true, type: "email", message: "E-mail inválido" };
        case "auth/wrong-password":
          return { error: true, type: "password", message: "Senha incorreta" };
        case "auth/too-many-requests":
          return {
            error: true,
            type: "default",
            message:
              "Muitas tentativas foram realizadas, tente novamente mais tarde",
          };
        default:
          return { error: false, type: "", message: "" };
      }
    });
};

const createUser = (email, password) => {
  firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        case "auth/operation-not-allowed":
          return "E-mail inválido ou já utilizado";
        default:
          return;
      }
    });
};

const logout = () => {
  firebaseApp.auth().signOut();
};

export { login, createUser, logout };
