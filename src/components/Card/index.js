import "./style.css"

function Card(props) {
    const [...data] = props.projetos
    console.log(props.projetos)
    console.log(data)

    return (


        <ul className='cards'>
            {data.map(projeto => {
                return (
                    <li className='cards-item' key={projeto.title}>
                        <img src={projeto.img} />
                        <div className="cards-desc">
                            <a style={{textDecoration: "none", color: "black"}} href={projeto.url}>
                                <h3>{projeto.nome}</h3>
                                <p>{projeto.desc}</p>
                            </a>
                        </div>
                    </li>
                )
            })}
        </ul>

    );
}

export default Card;