import firebase, { db } from "../../firebase";
import { objectRemoveEmpty } from "../../util/objects";
import { changeEmail, changePass } from "./authentication";
import { uploadImageToBucket } from "../index";

const createProfile = async (name, photo) => {
  return await db.collection("usuários").doc(firebase.auth().currentUser.uid).set({
      "Foto": photo,
      "Amigos": [],
      "Jogos": [],
      "Nome": name,
      "Poster": null,
      "Salvos": [],
      "Descricao": "",
      "Pedidos": {
        "Recebidos": [],
        "Enviados": []
      },
      "Notificacoes": []
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

const saveProfile = async (data) => {
  var missChanges = {};
  var withChanges = await objectRemoveEmpty(data);

  if(Object.keys(withChanges).includes("Email")) missChanges["email"] = await changeEmail(withChanges["Email"]);
  if(Object.keys(withChanges).includes("Password")) missChanges["password"] = await changePass(withChanges["Password"]);
  const promises_games = data?.Jogos.map(async (game, gameIndex) => {
    const promises_screenshots = game?.Capturas.map(async (screenshot, screenshotIndex) => {
      if(typeof(screenshot) !== "string") {
        data.Jogos[gameIndex].Capturas[screenshotIndex] = await uploadImageToBucket(screenshot);
      }
    });
    await Promise.all(promises_screenshots);
  });
  await Promise.all(promises_games);

  const {uid, ...toUpdate} = withChanges;
  missChanges["profile"] = await db.collection("usuários").doc(uid).update(toUpdate)
    .catch((error) => {
      switch (error.code) {
        default:
          return "Erro ocorrido ao atualizar os dados";
      }
    });
    
  return await objectRemoveEmpty(missChanges);
};

export { createProfile, saveProfile };
