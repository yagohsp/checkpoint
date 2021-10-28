import { db } from "../../firebase";
import { getUser } from "./friends";

const createNotification = async (uid, type, params={}) => {
    const data = await getUser(uid);
    var notification = {
        Tipo: "",
        Visualizado: false
    };

    switch(type){
        case "friend_request":
            const {senderUid} = params;
            notification = {
                ...notification,
                Tipo: type,
                EnviadoPorUid: senderUid,
                Status: null
            }
            break;
        default:
            notification = {
                ...notification,
                Tipo: "test",
                Mensagem: "testing notifications"
            }
    }

    await db.collection("usuários").doc(uid).update({
        "Notificacoes": [...data.Notificacoes, notification]
    });

    return ;
};

const changeNotificationStatus = async (uid, notificationId, status) => {
    var data = await getUser(uid);
    data.Notificacoes[notificationId].Status = status;

    await db.collection("usuários").doc(uid).update({
        "Notificacoes": data.Notificacoes
    });

    return ;
};

export {createNotification, changeNotificationStatus};