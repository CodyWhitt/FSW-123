import './Card.css'

function Card({bgColor, width, title, subTitle, info}) {

    return (
        <div 
            className='card'
            style= {{
                backgroundColor: bgColor,
                width: width
            }}
        > 
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <hr/>
            <p>{info}</p>
        </div>
    );
}

export default Card;