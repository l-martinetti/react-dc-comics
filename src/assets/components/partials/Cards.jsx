import comics from '../../data/comics'

const Cards = () => {
    return (
        <div className="container card-container">
            {
                comics.map(comic => (
                    <div key={comic.id} className="card">
                        <div className='img-container'>
                            <img src={comic.thumb} alt="Immagine" />
                        </div>
                        <p>{comic.series}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards