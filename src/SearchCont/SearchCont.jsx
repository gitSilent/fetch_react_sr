import React, { useEffect, useState } from 'react'
import Film from './Film'
import Pagination from './Pagination'
import './SearchCont.css'

function SearchCont() {

    const [inputValue, setInputValue] = useState("")
    const [filmsArray, setFilmsArray] = useState({})
    const [page, setPage] = useState(1)
 
   
    function searchFilm(){
        window.scrollTo(0, 0);
        // setPage(1)
        let correct_url = inputValue.split(" ").join("-")
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${inputValue}&page=${page}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': '269aca79-2087-4564-b536-efecc2b2c484',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then((films)=>{
            setFilmsArray(films)
        })
    }

     useEffect(() => {
        searchFilm()
    }, [page])

    useEffect(()=>{

    },[filmsArray])


  return (
    <div className='main_cont'>

        <form onSubmit={(event)=>{
            setPage(1)
            if(page == 1){
                searchFilm()
            }
            event.preventDefault()
        }} className='search_cont'>
            <input type="text" value={inputValue} placeholder="Введите название фильма" onChange={(event)=>{
                setInputValue(event.target.value)
            }}/>
            <button>Search</button>
            </form>
            {
                filmsArray.films ? filmsArray.films.map((film, index)=>(
                    <Film  title={film.nameRu ? film.nameRu : film.nameEn} img_src={film.posterUrl}/>
                )) : <></>
            }

            {
                filmsArray.pagesCount > 1 ? <Pagination searchFilm = {searchFilm} page = {page} setPage = {setPage} pageQty = {filmsArray.pagesCount} url = {`https://kinopoiskapiunofficial.tech/api/v2.2/films/?keyword=${inputValue}&page=${page}`}/> : <></>
            }
    </div>
  )
}

export default SearchCont;
