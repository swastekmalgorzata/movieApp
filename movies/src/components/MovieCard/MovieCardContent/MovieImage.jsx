export const MovieImage = ({ photoUrl, name }) => (
    <div className="image-container">
        <img
            src={photoUrl}
            className="movie-image"
            alt={name}
        />
    </div>
)