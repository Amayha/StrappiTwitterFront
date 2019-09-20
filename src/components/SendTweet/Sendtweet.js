import React from 'react';
import superagent from 'superagent';

function SendTweet(props) {

    const [message, setMessage] = React.useState('');
    const [color, setColor] = React.useState('');

    const handleInput = (event) =>{
      setMessage(event.target.value) ;
    }

    const handelColor=(event)=>{
        setColor(event.target.value);
    }

    const handleClick = () => {//aqui vamos a enviar a strappi
        superagent 
            .post('http://192.168.115.16:1337/tweets' )
            .send({text: message, background: color})
            .then(response =>{
                console.log(response);
                props.onSend();
            });
        
    }

    return (
        <div>
            <textarea onInput= {handleInput}></textarea>
            <button onClick= {handleClick}>Enviar</button>
            {message}
            <input type='color' onChange={handelColor}/>
            <input type='file'/>
        </div>
    );
}

export default SendTweet;