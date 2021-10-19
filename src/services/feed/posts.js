import firebase from "firebase/app";
import { db } from "../../firebase";
import { fileToBase64 } from "../../util/files";
import { arrayRemove } from "../../util/array";

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

const currentLiked = async (postUid) => {
  const data = await db.collection("posts").doc(postUid).get();
  return data.data();
};

const like = async (postUid, userUid) => {
  var updated_liked_pool = await currentLiked(postUid);
  updated_liked_pool = updated_liked_pool?.Curtidas;
  updated_liked_pool?.push(userUid);

  await db.collection("posts").doc(postUid).update({"Curtidas": updated_liked_pool});
  return updated_liked_pool;
};

const deslike = async (postUid, userUid) => {
  var updated_liked_pool = await currentLiked(postUid);
  updated_liked_pool = arrayRemove(updated_liked_pool?.Curtidas, userUid);

  await db.collection("posts").doc(postUid).update({"Curtidas": updated_liked_pool});
  return updated_liked_pool;
};

export { getPosts, createPost, like, deslike };
