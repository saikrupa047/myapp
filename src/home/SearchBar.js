import './SearchBar.css';
function SearchBar(props)
{
    const searchHandler = () => {

    };
 return(
     <input type="text" className='searchBar' placeholder='Search...' onChange={searchHandler}></input>
 );
}

export default SearchBar;