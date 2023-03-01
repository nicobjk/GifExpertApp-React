import PropTypes from 'prop-types';

export const GifItem = ({title, url, id}) => {
    console.log({title,url, id})
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

/* Tarea
1. Añadir PropTypes ??? yarn add
    a. title obligatorio
    b. url obligatoirio

2. Evaluar el snapshot 
*/ 

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
