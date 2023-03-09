//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
    return (
      <div>
        <h3>{props.name}</h3>
        <h3>{props.animal}</h3>
      </div>
    );
  }
  
  export default Card;