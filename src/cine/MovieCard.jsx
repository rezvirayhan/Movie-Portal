import { useContext, useState } from "react";
import { MovieContext } from "../context/Index";
import { getImageUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)
    const { cartDta, setCartData } = useContext(MovieContext)

    function handleAddToCart(event, movie) {
        event.stopPropagation()
        const found = cartDta.find((item) => {
            return item.id === movie.id;
        })
        if (!found) {
            setCartData([...cartDta, movie])
        }
        else {
            alert(`The Movie ${movie.title} Has Been Added To The Cart Already`)
        }
    }
    function handleModalClose() {
        setSelectedMovie(null)
        setShowModal(false)
    }
    function handleMovieSelection(movie) {
        setSelectedMovie(movie)
        setShowModal(true)
    }
    return (
        <>
            {showModal &&
                <MovieDetailsModal
                    movie={selectedMovie}
                    onClose={handleModalClose}
                    onCartAdd={handleAddToCart}
                />
            }
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={getImageUrl(movie.cover)} alt={movie.title} />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">
                            {movie.genre}
                        </p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                        <a onClick={(e) => handleAddToCart(e, movie)} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#">
                            <img src="./assets/tag.svg" alt="" />
                            <span>${movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </a>
            </figure>
        </>
    );
};
export default MovieCard;