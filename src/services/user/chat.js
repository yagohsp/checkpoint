import firebase from "firebase/app";
import { db } from "../../firebase";
import { ordenateArray } from "../../util/array";

const createChat = async (uids) => {
    return await db.collection("chats").doc().set({
        "users": ordenateArray(uids),
        "messages": []
    });
};

const getChat = async (uid) => {
    const data = await db.collection("chats").doc(uid).get();
    return data?.data();
};

const findChatUid = async (uids) => {
    const data = await db.collection("chats").where("users", "==", ordenateArray(uids)).get();

    if(data.docs.length === 0) {
        await createChat(uids);
        return await findChatUid(uids);
    }
    return data.docs[0]?.id;
};

const sendMessage = async (data) => {
    var currentMessages = await getChat(data?.uid);
    currentMessages = currentMessages?.messages;
    currentMessages?.push({
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        message: data?.message,
        userid: data?.useruid
    });
    return await db.collection("chats").doc(data?.uid).update({
        "messages": currentMessages
    });
};

export { findChatUid, getChat, sendMessage };
