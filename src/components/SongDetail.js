import React from 'react'

const SongDetail = ({song}) => {
  if (!song) return null
  return (
    <div>
      <h3>Title: {song['im:name'].label}</h3>
      <h3>Artist: {song['im:artist'].label}</h3>
      <h3>Chart Postion: {song['position']}</h3>
      <audio controls src={song.link[1].attributes.href}/>
    </div>
  )
}

export default SongDetail;
