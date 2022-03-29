import "./style.css"

function Header(props) {
    return ( 
        <header>
            <div>
                <p style={{fontWeight: "600", fontSize:"1.3rem"}}>Denny Ribeiro</p>
                <ul className="header-menu">
                    {props.conteudo.map(item => {
                        return (
                            <li className="header-item" key={item.c} onClick={() => {props.onClick(item.c)}}>
                                {item.c}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
     );
}

export default Header;