function FirstCom() {
    let imgSrc = "https://www.erasmuslifebudapest.com/wp-content/uploads/2018/11/reactjs-thumb.jpg";
    let colorMode = 'lightgreen';
    let altValue = "react js";
    return (
        <>
            <h2 style={{ color: colorMode }}>Hello this is my first component</h2>
            <img src={imgSrc} alt={altValue} />
        </>
    )
}

export default FirstCom;