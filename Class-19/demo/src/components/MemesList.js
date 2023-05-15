import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import MemeModal from './MemeModal';
import UpdateModal from './UpdateModal';
import { useState } from 'react';
function MemesList(props) {
    const [show, setShow] = useState(false);
    const [clickedMeme, setClickedMeme] = useState({});
    const [showUpdate, setShowUpdate] = useState(false);

    const handleshow = (item) => {
        setShow(true);
        setClickedMeme(item);
    }
    const handleclose = () => {
        setShow(false);
        setShowUpdate(false);
    }
    const handleupdate = (item) => {
        setShowUpdate(true);
        setClickedMeme(item);
    }
    const takeNewArrFromChild = (arr) => {
        props.takeNewArr(arr);
    }

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.favData.map((item, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={item.image_path} />
                            <Card.Body>
                                <Card.Title>{item.meme_name}</Card.Title>
                                <Card.Text>
                                    <p>{item.top_text}</p>
                                    <p>{item.tags}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={() => { handleshow(item) }}>More</Button>
                                <Button variant="success" onClick={() => { handleupdate(item) }}>Update</Button>
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <MemeModal showFlag={show} handleclose={handleclose} memeData={clickedMeme} />
            <UpdateModal showFlag={showUpdate} handleclose={handleclose} item={clickedMeme} takeNewArrFromChild={takeNewArrFromChild} />
        </>
    )
}


export default MemesList;