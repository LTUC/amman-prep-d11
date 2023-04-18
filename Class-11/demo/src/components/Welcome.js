function Welcome(props) {
    const { name, favFood } = props;// de structuring
    return (
        <>
            {/* <p>
                welcome {props.name}
            </p> */}
            <p>Hello my name is {name} and my favFood is {favFood}</p>
        </>
    )
}

export default Welcome;