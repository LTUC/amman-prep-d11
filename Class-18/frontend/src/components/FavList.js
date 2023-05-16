import { useEffect, useState } from "react";
import axios from "axios";
import MemesList from './MemesList';
function FavList() {
    const [favMemes, setFavMemes] = useState([]);
    const sendReq = async () => {
        // console.log('data');
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}favMeme`;
        const result = await axios.get(serverUrl);
        console.log(result.data);
        setFavMemes(result.data);
    }
    useEffect(() => {
        sendReq();
    }, []);
    return (
        <>
            <h1>Favlist</h1>
            <MemesList favData={favMemes} />
        </>
    )
}

export default FavList;