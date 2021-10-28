import { db } from "../../firebase";
import { getDocReference, generateReference } from "../index";
import { createNotification, changeNotificationStatus } from "./notifications";
import { arrayRemove } from "../../util/array";

const getUsers = async (referenceList) => {
    var friendList = [];
    const promises = referenceList.map(
        async (friend) => friendList.push({
            ...await getDocReference(friend),
            uid: friend.id
        })
    );
    await Promise.all(promises);
    return friendList;
};

const getUser = async (uid) => {
    const data = await db.collection("usuários").doc(uid).get();
    return data?.data();
};

const getUserWithStatistics = async (uid) => {
    var data = await db.collection("usuários").doc(uid).get();
    data = {
        statistics: {
            gameHours: 0,
            friendsQuantity: 0,
            gamesQuantity: 0
        },
        ...data?.data()
    };
    data?.Jogos.forEach((game) => data.statistics.gameHours = data.statistics.gameHours + parseInt(game?.TempoJogo));
    data.statistics.friendsQuantity = data.Amigos ? data.Amigos.length : 0;
    data.statistics.gamesQuantity = data.Jogos ? data.Jogos.length : 0;
    return data;
};

const appendFriend = async (uidX, uidY) => {
    const currentData = {
        x: await getUser(uidX),
        y: await getUser(uidY)
    };

    await db.collection("usuários").doc(uidX).update({
        "Amigos": [generateReference("usuários", uidY)].concat(currentData.x.Amigos)
    });
    await db.collection("usuários").doc(uidY).update({
        "Amigos": [generateReference("usuários", uidX)].concat(currentData.y.Amigos)
    });

    return ;
};

const addFriendRequest = async (params={}) => {
    const {from, to} = params;
    var currentData = {
        from: await getUser(from),
        to: await getUser(to)
    };

    await db.collection("usuários").doc(from).update({
        "Pedidos.Enviados": [to].concat(currentData.from.Pedidos.Enviados)
    });
    await db.collection("usuários").doc(to).update({
        "Pedidos.Recebidos": [from].concat(currentData.to.Pedidos.Recebidos)
    });
    await createNotification(to, "friend_request", {senderUid: from});

    return ;
};

const resolveFriendRequest = async (params={}) => {
    const {from, to, id, decision} = params;
    var currentData = {
        from: await getUser(from),
        to: await getUser(to)
    };

    await db.collection("usuários").doc(from).update({
        "Pedidos.Enviados": arrayRemove(currentData.from.Pedidos.Enviados, to)
    });
    await db.collection("usuários").doc(to).update({
        "Pedidos.Recebidos": arrayRemove(currentData.to.Pedidos.Recebidos, from)
    });
    await changeNotificationStatus(to, id, decision);

    if(decision === "accept") await appendFriend(to, from);

    return ;
};

export { 
    getUsers, 
    getUser, 
    getUserWithStatistics, 
    addFriendRequest, 
    resolveFriendRequest 
};
