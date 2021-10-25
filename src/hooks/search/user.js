import { useState, useEffect, useCallback } from "react";
import { useDebounce } from 'use-debounce';

import { getUsers } from "../../services/search/user";

export default function User(props={}) {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 1500);
    const {changeShow, setLoading} = props;

    const changeSearch = useCallback((e) => setSearch(e.target.value), []);

    const doSearch = useCallback(async () => {
        changeShow && changeShow("users");
        setLoading && setLoading(true);
        setData(await getUsers(debouncedSearch));
        setLoading && setLoading(false);
    }, [debouncedSearch, changeShow, setLoading]);

    useEffect(() => {
        if(debouncedSearch) doSearch();
    }, [debouncedSearch]);

    return {data, search, changeSearch};
};