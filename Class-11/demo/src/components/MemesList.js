
function MemesList(props) {
    return (
        <>
            <h2>Memes list</h2>
            {
                props.arrayData.map((item, i) => {
                    // console.log(item.name)
                    return (
                        <div key={i}>
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} />
                            <p>{item.bottomText}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MemesList;