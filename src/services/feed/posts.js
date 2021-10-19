import firebase from "firebase/app";
import { db } from "../../firebase";
import { fileToBase64 } from "../../util/files";

const getPost = async (uid) => {
  const data = await db.collection("posts").doc(uid).get();
  return data?.data();
};

const getPosts = async () => {
  const data = await db.collection("posts").orderBy("Data", "desc").get();
  return data?.docs;
};

const createPost = async (data) => {
  return await db.collection("posts").doc().set({
    "Conteudo": data.description,
    "Data": firebase.firestore.Timestamp.fromDate(new Date()),
    "Imagem": data.file ? await fileToBase64(data.file) : null,
    "Usuario": db.doc(`usuários/${data.uid}`),
    "Comentarios": [],
    "Curtidas": []
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

export { getPost, getPosts, createPost };
