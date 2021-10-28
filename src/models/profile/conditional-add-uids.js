import { cloneDeep } from "lodash";

export default function getObject() {
    return cloneDeep({
        hide: [],
        received: [],
        sended: []
    });
};