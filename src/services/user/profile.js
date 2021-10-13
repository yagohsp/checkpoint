import firebase, { db } from "../../firebase";

const createProfile = async (name, photo) => {
  return await db.collection("usuários").doc(firebase.auth().currentUser.uid).set({
      "Foto": photo,
      "Amigos": [],
      "Jogos": [],
      "Nome": name
    })
    .catch((error) => {
      switch (error.code) {
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

export { createProfile };
