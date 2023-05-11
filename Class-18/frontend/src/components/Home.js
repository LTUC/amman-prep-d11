import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function Home() {
    const [memesData, setMemesData] = useState([]);
    const sendReq = async () => {
        // console.log('data');
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}allMemes`;
        const result = await axios.get(serverUrl);
        console.log(result.data);
        setMemesData(result.data);

    }
    useEffect(() => {
        sendReq();
    }, []);
    // useEffect(() => {
    //     sendReq();
    // }, [name]);
    return (
        <>
            <h1>Home</h1>
            {/* <button onClick={sendReq} >send req</button> */}
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
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Home;