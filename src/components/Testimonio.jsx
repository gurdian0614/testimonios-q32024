import '../styles/Testimonio.css';
import imagen from '../images/testimonio-shawn.png'

function Testimonio(props) {
    return(
        <div className='contenedorTestimonio'>
            <img className='imagenTestimonio' src={imagen} alt='Imagen' />
            <div className='contenedorTextoTestimonio'>
                <p className='nombreTestimonio'>{props.nombre} de {props.lugar}</p>
                <p className='cargoTestimonio'>{props.cargo} en {props.empresa}</p>
                <p className='textoTestimonio'>{props.testimonio}</p>
            </div>
        </div>
    )
}

export default Testimonio;