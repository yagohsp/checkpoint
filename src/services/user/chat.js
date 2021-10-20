import { db } from "../../firebase";

const createChat = async (uids) => {
    return await db.collection("chats").doc().set({
        "users": uids,
        "messages": []
    });
};

const getChat = async (uid) => {
    const data = await db.collection("chats").doc(uid).get();
    return data?.data();
};

const findChat = async (uids) => {
    var docUid = null;

    const data = await db.collection("chats").where("users", "array-contains", uids[0]).get();
    const promises = data.docs.map(async (chat) => {
        const docData = await getChat(chat.id);
        if(docData?.users?.includes(uids[1])) docUid = chat.id;
    });
    await Promise.all(promises);

    if(!docUid) {
        await createChat(uids);
        return await findChat(uids);
    }
    return docUid;
};

const createTrigger = async (uids) => {
    const uid = await findChat(uids);
    const trigger = db.doc(`chats/${uid}`);
    return trigger;
};

export { createTrigger };
