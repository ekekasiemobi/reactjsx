import React from 'react';
import Emoji from './Emoji';
import '../components/styles.css';


function CreateEmoji(emojipedia){
    return(
      <Emoji 
        name ={emojipedia.name}
        meaning={emojipedia.meaning}
        stick={emojipedia.emoji}
      /> 
    );
  }



export default CreateEmoji;