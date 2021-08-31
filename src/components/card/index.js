export default function Card ({ image, name, status, specie, gender, lorD}) {
    return (
        <div className="divPai">
            <img src={image} alt={name} title={name} className="imgCx"/>
            <div className="caixaUl">
                <ul className="ul">
                    <li><h1>{name}</h1></li>
                    <li className={status}>{status}</li>
                    <li>specie: {specie}</li>
                    <li>gender: {gender}</li>
                </ul>
            </div>

</div>          
    )

}