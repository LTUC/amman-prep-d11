import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
function Child(props) {
    const [takenToys, setTakenToys] = useState(0);

    const incrementTakenToys = () => {
        setTakenToys(takenToys + 1);
        if (takenToys < 5) {
            props.decrementFun(false);
        } else if (takenToys >= 5) {
            props.decrementFun(true);
        }
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <p>{props.age}</p>
                        <p>Number of Taken Toys: {takenToys}</p>
                    </Card.Text>
                    <Button onClick={incrementTakenToys} variant="primary">I need a Toy!</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Child;