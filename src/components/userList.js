import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const UserList = () => {
    const [data, setData] = useState({ posts: [] });
    const [search, setSearch] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await Axios(
                    `https://jsonplaceholder.typicode.com/posts?userId=${search}`,
                );

                setData({
                    posts: result.data
                });
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [search]);

    return [{ data, isLoading, isError, setSearch }];
}

export default UserList