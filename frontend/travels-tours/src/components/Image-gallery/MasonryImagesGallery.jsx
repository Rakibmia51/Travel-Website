import React from 'react'
import GalleryImages from './GalleryImages'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {GalleryImages.map((item, index) => (
          <img 
            className="masonry__img"
            src={item} 
            key={index} 
            alt={`Customer tour gallery ${index + 1}`} 
            style={{ 
              width: '100%', 
              display: 'block', 
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            // className="gallery__img"
            // onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            // onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery
