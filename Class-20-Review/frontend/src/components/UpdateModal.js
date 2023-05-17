import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
function UpdateModal(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            meme_name: e.target.name.value,
            rank: e.target.rank.value,
            top_text: e.target.toptext.value,
            tags: e.target.tags.value,
            image_path: e.target.image.value
        }
        const serverURL = `${process.env.REACT_APP_SERVER_URL}updatefavMeme/${props.item.id}`
        const axiosRes = await axios.put(serverURL, obj);
        // console.log("data from server", axiosRes);
        props.handleclose();
        props.takeNewArrFromChild(axiosRes.data);
    }
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Meme Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                defaultValue={props.item.meme_name}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image Path</Form.Label>
                            <Form.Control
                                name="image"
                                type="text"
                                defaultValue={props.item.image_path}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Top Text</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="toptext"
                                    defaultValue={props.item.top_text}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rank</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="rank"
                                    defaultValue={props.item.rank}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tags</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="tags"
                                    defaultValue={props.item.tags}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;