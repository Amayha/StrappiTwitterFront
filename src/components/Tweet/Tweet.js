import * as React from 'react';
import { server } from '../../App';

const Tweet = (props) => {

    return <div style={{ background: props.background }}>
        {props.media.length > 0 && 
            <img width={200} src={server + props.media[0].url} />}
        <p>{props.text}</p>
    </div>;
}

export default Tweet;