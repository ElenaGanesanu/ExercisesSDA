import { useParams, useLocation } from "react-router-dom";

const CardDetails= () => {
    let location = useLocation();
    console.log(location.state);

    const { id } = useParams();
    return (
        location.state ? <div style={{margin:"20px"}}>
            <h1>card details: {id}</h1>
            <h2>{location.state.title}</h2>
            <img src={location.state.image}></img>
            <p>{location.state.description}</p>
            <p>{location.state.price}</p>
        </div> : <p>Not Found</p>
    )
}

export default CardDetails;