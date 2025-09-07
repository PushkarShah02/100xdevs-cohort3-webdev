import { useState, useEffect } from "react";

export function usefetch(url) {
    const [data, setdata] = useState({});
    const [loading, setloading] = useState(true);
    
    async function getdata() {
        setloading(true)
        const response = await fetch(url);
        const data = await response.json();
        setdata(data)
        setloading(false)
    }

    useEffect(() => {
        getdata();
    }, [url])

    return {
       data,
       loading 
    }
}