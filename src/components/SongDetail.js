import React from 'react'

const SongDetail = ({song}) => {
  if (!song) return null
  return (
    <div className='collected-song-info'>
      <div className='song-text-and-player'>
        <h3>{song['im:name'].label}</h3>
        <h3>{song['im:artist'].label}</h3>
        <audio controls src={song.link[1].attributes.href}/>
      </div>
      <div className='image-and-position-num'>
        <h1 id='position-num'>{song['position']}</h1>
        <img src={song["im:image"][2].label}/>
      </div>
    </div>
  )
}

export default SongDetail;
