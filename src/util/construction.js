
import fs, { db } from "../firebase";
import firebase from "firebase/app";

const createStaticPost = async () => {
  return await db.collection("posts").doc().set({
        "Conteudo": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    vulputate odio at purus vulputate, vel cursus magna vehicula. Ut               
                    posuere a erat eget lobortis. Mauris id dui porta, facilisis sem               
                    nec, sagittis eros. Ut eros elit, commodo et justo at, suscipit               
                    auctor massa. Integer consectetur quis mauris et rutrum. Sed               
                    imperdiet tempus nulla, ac euismod dolor molestie gravida. Nunc               
                    mollis ex id dolor congue efficitur.`,
        "Data": firebase.firestore.Timestamp.fromDate(new Date()),
        "Imagem": null,
        "Usuario": db.doc("usuários/LxhoblGK0pUSU18HoMnQsdL2Lt93"),
        "Comentarios": [{
          "Usuario": db.doc("usuários/LxhoblGK0pUSU18HoMnQsdL2Lt93"),
          "Comentario": "Legal"
        },{
          "Usuario": db.doc("usuários/LxhoblGK0pUSU18HoMnQsdL2Lt93"),
          "Comentario": "Impressionante"
        }],
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

const showLinkImage = async () => {
  return await fs.storage("gs://checkpoint-socialnetwork.appspot.com").ref("Dota-2.jpg").getDownloadURL()
};

const uploadImage = async (file) => {
  const storageRef = fs.storage("gs://checkpoint-socialnetwork.appspot.com").ref();
  const metadata = {contentType: "image/jpeg"};
  const fileRef = storageRef.child("test.jpg");
  const uploadTaskSnapshot = await fileRef.put(file, metadata);
  return await uploadTaskSnapshot.ref.getDownloadURL();
};

export { createStaticPost, showLinkImage, uploadImage };