import { useEffect, useState } from "react";
import { getCNY, getEUR, getGBP, getUSD } from "../../services/Coins.services";


const Home = () => {
    const [time, setTime] = useState(new Date());
    const [coins, setCoins] = useState({
        USD : 0,
        EUR : 0,
        CNY : 0,
        GBP : 0,
    })
    const getCoins = async() => {
        try {
            setTime(new Date())
            const [USD, EUR, CNY, GBP] = await Promise.all([getUSD(), getEUR(), getCNY(), getGBP()]);
            setCoins({ USD, EUR, CNY, GBP });
        } catch (error) {
            console.error("Hubo un error al obtener los datos de las monedas", error);
        }
    }
    useEffect(() => {
        getCoins()
    },[])

    return(
    <>
        <div className="mainbody">
            <br></br>
            <div className="container container-fluid text-center">
                <div className="row ">
                    <article className="col">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://img.kiosko.net/2023/12/02/cl/cl_ultimas_noticias.750.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://pbs.twimg.com/media/Fk_Rp3YXoAEV6tq.jpg:large" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </article>
                    <div className="col">
                    </div>
                    <aside className="col">
                        <div className="card text-bg-dark mb-3" style={{width: '18rem'}}>
                            <div className="card-header">
                                Monedas Basadas CLP
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Yuan Chino CNY : $ {coins.CNY}</li>
                                <li className="list-group-item">Dolar Usa USD : $ {coins.USD}</li>
                                <li className="list-group-item">Euro  EUR Є : $ {coins.EUR}</li>
                                <li className="list-group-item">Libra esterlina GBP £ : $ {coins.GBP}</li>
                            </ul>
                            <div className="card-footer">
                                Calculo hecho a la fecha de : {time.toLocaleDateString()}
                            </div>
                        </div>  
                    </aside>
                    <article className="row">
                                <h1>Importaciones y Asesoria</h1>
                                <p className="lead">
                                    Somos Importa tu servicio de importaciones y asesoria con el que puedes cumplir el sueño de ser un 
                                    emprendendor, traer innovaciones de otros mercados, crear nuevos productos, crear tendencias o despejar
                                    las dudas de como funciona este mercado, con nuestros profesionales dispuestos a dar la mejor
                                    atención posible y alentarte a traer esos productos que necesitas.
                                </p>
                                <p className="lead">
                                    Gracias a la geografia de nuestro pais tenemos una amplia gama de tratados que nos
                                    permite traes productos a costos reducidos y una variedad sin igual.
                                </p>
                    </article>
                </div>
            </div>
        </div>
    </>
    )
}
export default Home;