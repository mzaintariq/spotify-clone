import React from 'react'
import './SongRow.scss'
import ExplicitIcon from '@material-ui/icons/Explicit';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function SongRow({ track, id }) {
    return (
        <div className="songrow">
            <div className="songrow__number">
                <h1>{id+1}</h1> 
            </div>
            <img className="songrow__album" src={track.album.images[0].url} alt=""/>
            <div className="songrow__info">
                <h1>{track.name}</h1>
                {track.explicit ? 
                    <div className="songrow__name">
                        <ExplicitIcon className="explicit__icon" />
                        <p>
                            {track.artists.map(artist => artist.name).join(", ")} - { }
                            {track.album.name}
                        </p>
                    </div>
                    :
                    <p>
                        {track.artists.map(artist => artist.name).join(", ")} - { }
                        {track.album.name}
                    </p>
                }
            </div>
        </div>
    )
}

export default SongRow
