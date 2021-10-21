import { db } from "../../firebase";
import { getDocReference } from "../index";

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

export { getUsers, getUser };
