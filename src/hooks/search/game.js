import { useState, useEffect, useCallback } from "react";
import { useDebounce } from 'use-debounce';

import { getUsersByGames } from "../../services/search/user";

export default function Game(props={}) {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState({
        name: "",
        level: "",
        rank: "",
        playedHours: "",
        gamingMode: ""
    });
    const [debouncedSearch] = useDebounce(search, 1500);
    const {changeShow, setLoading} = props;

    const changeSearch = useCallback((field, e) => setSearch({
        ...search,
        [field]: e.target.value
    }), [search]);

    const doSearch = useCallback(async () => {
        changeShow && changeShow("games");
        setLoading && setLoading(true);
        setData(await getUsersByGames(debouncedSearch));
        setLoading && setLoading(false);
    }, [debouncedSearch, changeShow, setLoading]);

    useEffect(() => {
        if(Object.values(debouncedSearch).filter(x => x === "").length !== 5) doSearch();
    }, [debouncedSearch]);

    return {data, search, changeSearch};
};