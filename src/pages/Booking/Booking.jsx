import "./Booking.scss"
import "./st.css"
import React, { useState } from 'react'
import clsx from 'clsx'
import { useSelector } from "react-redux"
import { selectFavouritesList } from "../../redux/favourites/favourites.selectors"
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const movies = [
  {
    name: '',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: '',
    price: 10,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: '',
    price: 10,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: '', 
    price: 10,
    occupied: [10, 12, 50, 33, 28, 47],
  },
]


const seats = Array.from({ length: 8 * 8 }, (_, i) => i)



const Booking = () => {
  const favs = useSelector(selectFavouritesList);
  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])


  return (
    
    
    
    <div className="tickets">
         <h3 className="p-3 text-center">Make a Cinema Reservation</h3>
      <Movies 
        favs = {favs}
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of{' '}
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
        </span>
      </p>

      <Link
								className="BanNner__button"
							>

								<span>Make a reservation</span>
                <FaCheck className="check"/>
							</Link>
    </div>
  )
}
export default Booking;

function Movies({favs, movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Pick a movie from your favourites</label>
      <select
        id="movie"
        value={movie}
        onChange={e => {
          onChange(movies.find(movie => movie.name === e.target.value))
        }}
      >
         {favs.map(fav => (
            <option key = {fav.id} value={fav.title || fav.original_title || fav.name || fav.original_name}> {fav.title || fav.original_title || fav.name || fav.original_name} </option>
         ))}

      </select>
    </div>
  )
}


function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}


function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </div>
    </div>
  )

}
