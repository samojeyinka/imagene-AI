import React,{useState} from 'react';
import '../styles/Modal.css';
import {FaTimes} from 'react-icons/fa';
import Header from '../components/Header';
import {fetchRandomImage} from '../api';
import '../styles/GenerateImage.css';



const GenerateImage = ({close}) => {
 
  const [image, setImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const image = await fetchRandomImage(searchTerm);
      setImage(image);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleDownload() {
    const link = document.createElement('a');
    link.href = image.largeImageURL;
    link.download = image.tags;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  }



  return (
    <section className='modal generate'>
        <div className='modal-con generate-img'>
        <h1>Generate quality images for free</h1>
        <i className='close-icon'>
        <FaTimes onClick={close}/>
        </i>
          <div className='generate-center'>
        <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder='Search your idea image...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      {isLoading && <p className='loading'>Loading...</p>}
      {error && <p className='error-alert'>{error}</p>}
      {image && (
        <div>
          <h2>{image.tags}</h2>
          <div className='image-generated'>
          <img src={image.webformatURL} alt={image.tags} />
          </div>
          <div className='downl-btn'>
          <button onClick={handleDownload} className='dl-btn'>Download</button>
        </div>
        </div>
      )}


    </div>
    </div>
    </section>
  )
}

export default GenerateImage