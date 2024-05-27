import React, { useState } from 'react';
import axios from 'axios';
import AlbumPhotos from './AlbumPhotos';

function UserAlbums({ userId }) {
    const [albums, setAlbums] = useState([]);
    const [showAlbums, setShowAlbums] = useState(false);

    const toggleAlbums = () => {
        if (showAlbums) {
            setShowAlbums(false);
        } else {
            axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
                .then(response => {
                    setAlbums(response.data.slice(0, 3));
                    setShowAlbums(true);
                })
                .catch(error => {
                    console.error('There was an error fetching the albums!', error);
                });
        }
    };

    return (
        <div>
            <button className="button" onClick={toggleAlbums}>
                {showAlbums ? 'Hide Albums' : 'Show Albums'}
            </button>
            {showAlbums && albums.map(album => (
                <div key={album.id} className="album-card">
                    <h3>{album.title}</h3>
                    <AlbumPhotos albumId={album.id} />
                </div>
            ))}
        </div>
    );
}

export default UserAlbums;

