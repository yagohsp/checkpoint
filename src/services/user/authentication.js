import firebaseApp from "../../firebase";

const login = async (email, password) => {
  return firebaseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then()
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

const createUser = async (email, password) => {
  return firebaseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then()
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

const changeEmail = async (email) => {
  return firebaseApp
    .auth()
    .currentUser
    .updateEmail(email)
    .then()
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        case "auth/operation-not-allowed":
          return "E-mail inválido ou já utilizado";
        case "auth/requires-recent-login":
          return "Relogue para alterar seu e-mail";
        default:
          return;
      }
    });
};

const changePass = async (pass) => {
  return firebaseApp
    .auth()
    .currentUser
    .updatePassword(pass)
    .then()
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        case "auth/operation-not-allowed":
          return "E-mail inválido ou já utilizado";
        case "auth/requires-recent-login":
          return "Relogue para alterar sua senha";
        case "auth/weak-password":
          return "A senha deve ter pelo menos 6 carácteres";
        default:
          return;
      }
    });
};

const logout = () => {
  firebaseApp.auth().signOut();
};

export { login, createUser, logout, changeEmail, changePass };
