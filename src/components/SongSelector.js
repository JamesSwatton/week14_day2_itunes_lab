import React from 'react'

const SongSelector = (props) => {

  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song.title.label}</option>
  })

  function handleChange(event){
    //console.log(event.target.value)
    props.onSongSelected(event.target.value)
  }

  return (
    <select id="song-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a song...</option>
    {options}
    </select>
  )

}

export default SongSelector;
