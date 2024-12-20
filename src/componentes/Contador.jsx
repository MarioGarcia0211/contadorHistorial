import React, {useState, useEffect} from 'react';

export default function Contador() {
    const [contador, setContador] = useState(0); //Estado del contador
    const [historial, setHistorial] = useState([]); //Estado para el historial

    //Efecto para actualizar el historial cada vez que cambia el contador
    useEffect(()=>{
        if(contador !== 0) {
            setHistorial((prevHistorial) => [...prevHistorial, contador]);
        }
    }, [contador]);

    //Incrementar el contador
    const incrementar = () => {
        setContador(contador + 1);
    };

    //Reiniciar el contador y el historial
    const reiniciar = () => {
        setContador(0);
        setHistorial([]);
    };

    //Eliminar un elemento especifico del historial
    const eliminarElemento = (indice) => {
        setHistorial((prevHistorial) =>
            prevHistorial.filter((_, i) => i !== indice)
        );
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar} style={buttonStyle}>
                Incrementar
            </button>
            <button onClick={reiniciar} style={buttonStyle}>
                Reiniciar
            </button>
            <h3>Historial:</h3>
            <ul>
                {historial.map((valor, index) => (
                    <li key={index} style={listItemStyle}>
                        Clic #{index + 1}: {valor}
                        <button
                            onClick={() => eliminarElemento(index)}
                            style={deleteButtonStyle}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
};

const listItemStyle = {
    margin: '5px 0',
    padding: '5px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const deleteButtonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '3px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
};