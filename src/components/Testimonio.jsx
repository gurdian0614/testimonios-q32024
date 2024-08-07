import '../styles/Testimonio.css';
import imagen from '../images/testimonio-shawn.png'

function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={imagen} alt='Imagen' />
            <div className='contenedor-text-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} de {props.lugar}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    )
}

export default Testimonio;