import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../Home.css';
function Home() {
    const [memesData, setMemesData] = useState([]);
    const [show, setShow] = useState(false);
    const sendReq = async () => {
        // console.log('data');
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}allMemes`;
        const result = await axios.get(serverUrl);
        console.log(result.data);
        setMemesData(result.data);
    }
    const addFavMeme = async (item) => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}`;
        const obj = {
            meme_name: item.name,
            top_text: item.topText,
            tags: item.tags,
            rank: item.rank,
            image_path: item.image,
        }
        const result = await axios.post(`${serverUrl}addFavMeme`, obj);
        if (result) {
            setShow(true);
        }
    }
    useEffect(() => {
        sendReq();
    }, []);

    return (
        <>
            <h1>Home</h1>
            {/* <button onClick={sendReq} >send req</button> */}
            <Alert show={show} variant="success" className="alertMessage">
                <Alert.Heading>Item Inserted</Alert.Heading>
                <p>
                    done!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close
                    </Button>
                </div>
            </Alert>
            <Row xs={1} md={4} className="g-4">
                {memesData.map((item, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <p>{item.topText}</p>
                                    <p>{item.tags}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={() => { addFavMeme(item) }}>add to fav ❤️</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home;