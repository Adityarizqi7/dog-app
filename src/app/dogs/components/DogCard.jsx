"use client"

import 'react-toastify/dist/ReactToastify.css';

export default function DogCard({image_url, breed_dog}, key) {
    
    return (
        <>
            <article key={key} onClick={() => {
            }} className="dog-card-wrapper cursor-pointer sm:hover:-translate-y-1 transition-transform">
                <div className="image-wrapper">
                    <img 
                        src={image_url} 
                        alt={`Dog Image - ${breed_dog}`} 
                        className='rounded-[5px] mx-auto' 
                    />
                </div>
            </article>
        </>
    )
}