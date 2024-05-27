import React, { useState } from 'react';
import axios from 'axios';

function AlbumPhotos({ albumId }) {
    const [photos, setPhotos] = useState([]);
    const [showPhotos, setShowPhotos] = useState(false);

    const togglePhotos = () => {
        if (showPhotos) {
            setShowPhotos(false);
        } else {
            axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                .then(response => {
                    setPhotos(response.data.slice(0, 8));
                    setShowPhotos(true);
                })
                .catch(error => {
                    console.error('There was an error fetching the photos!', error);
                });
        }
    };

    return (
        <div>
            <button className="button" onClick={togglePhotos}>
                {showPhotos ? 'Hide Photos' : 'Show Photos'}
            </button>
            {showPhotos && (
                <div className="photo">
                    {photos.map(photo => (
                        <div key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            <p>{photo.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AlbumPhotos;
