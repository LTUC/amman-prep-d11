import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
function MemeModal(props) {

    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.memeData.meme_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.memeData.image_path} rounded width='100%' />
                    <p>{props.memeData.top_text}</p>
                    <p>{props.memeData.tags}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MemeModal;