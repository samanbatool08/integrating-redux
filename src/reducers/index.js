const songsReducer = () => {
  // this is going to just be a static list of songs 
  // return a list of songs 

  return [
    {title: "No Scrubs", duration: "4:05"},
    {title: "Macarena", duration: "2:30"},
    {title: "All Star", duration: "3:15"},
    {title: "I want it that way", duration: "1:45"}
  ];
}


const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
}