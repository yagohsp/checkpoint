import { db } from "../../firebase";
import { getDocReference } from "../index";

const getFriends = async (referenceList) => {
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

const getFriend = async (uid) => {
    const data = await db.collection("usuários").doc(uid).get();
    return data?.data();
};

export { getFriends, getFriend };
