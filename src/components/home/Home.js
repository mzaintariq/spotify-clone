import React, { useEffect } from 'react'
import './Home.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getFeatured } from '../../actions';
import Thumbnail from '../thumbnail/Thumbnail'


function Home() {
    const myState = useSelector((state) => state.authReducer);
    const myState2 = useSelector((state) => state.featuredReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (myState2.featuredPlaylists == null) {
            console.log("DISPATCHING")
            dispatch(getFeatured(myState.accessToken));
        }
    }, [])

    console.log("CHECK: ", myState2.featuredPlaylists);

    return (
        <div>
            {/* HOME */}
            {/* <h1>HOME</h1> */}
            {/* <p>{myState2.featuredPlaylists.items[0].description}</p> */}
            {/* <img src={myState2.featuredPlaylists.items[0].images[0].url} alt="" /> */}
            {/* <div className="playlist__grid">
                {myState2.featuredPlaylists.items.map((item, index) => (
                    // <p>Hello, {person.name} from {person.country}!</p>
                    // <p>{check.description}</p>
                    <div>
                        <p>{item.description}</p>
                        <img src={item.images[0].url} alt="" />
                    </div>
                ))}
            </div> */}
            {myState2.featuredPlaylists ?
                <div className="container">
                    <h2>Featured Playlists</h2>
                    <div className="gallery">
                        {myState2.featuredPlaylists.items.map((item) => (
                            <Thumbnail key={item.id} data={item}/>
                        ))}
                    </div>
                </div>
                : 
                // <div className="container">
                //     <h2>HOME</h2>
                // </div>
                <div className="container">
                    <div class="snippet" data-title=".dot-flashing">
                        <div class="stage">
                            <div class="dot-flashing"></div>
                        </div>
                    </div>
                </div>
            }

            {/* <div className="container">
                <h1>Featured Playlists</h1>
                <div className="gallery">
                    {myState2.featuredPlaylists.items.map((item, index) => (
                        <Thumbnail data={item}/>
                    ))}
                </div>
            </div> */}
                
        </div>
    )
}

export default Home