import React from 'react';
import './App.css';
import Tweet from './components/Tweet/Tweet';
import SendTweet from './components/SendTweet/Sendtweet';

export const server = 'http://192.168.115.16:1337';

function App() {
  const [ tweets, setTweets ] = React.useState([]);

  React.useEffect(() => {
    getTweets();
  }, []);

  const getTweets = () => {
    fetch(server + '/tweets?_sort=created_at:DESC')
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        console.log(info);

        setTweets(info);
      });
  }

  return (
    <div className="App">

     <SendTweet onSend={getTweets}></SendTweet>
      {tweets.map((item) => {
       return <Tweet key={item.id} 
        text={item.text}
        background={item.background}
        media={item.media} />
      })}

    </div>
  );
}

export default App;
