import { getDocReference } from "../index";

const getFriends = async (referenceList) => {
    var friendList = [];
    const promises = referenceList.map(async (friend) => friendList.push(await getDocReference(friend)));
    await Promise.all(promises);
    return friendList;
};

export { getFriends };
