import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Video() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    axios.get('/api/v1/public/youtube/videos')
      .then((res) => {
        const data = res.data.data.data;  // Get only the arrays inside the data(array)
        setVideos(data);
        console.log(data);
      })
  }, []); // Passing an empty dependency array to run the effect only once

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">VIDEOS ARE:</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {videos && videos.map((video) => (

          <li key={video.items.id} className="bg-white p-4 rounded shadow-md">

            <h1 className="text-xl font-bold mb-2">{video.items.snippet.title}</h1>
            {/* <p className="text-gray-600 mb-4">{video.items.snippet.description}</p> */}
            <img src={video.items.snippet.thumbnails.standard.url} alt="Video Thumbnail" className="w-full mb-4" />
            <p className="text-sm text-gray-500">Published at: {video.items.snippet.publishedAt}</p>
            <p className="text-sm text-gray-500">Views: {video.items.statistics.viewCount}</p>

          </li>

        ))}

      </ul>
    </div>
  );
}

export default Video;
