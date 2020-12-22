import Header from './Header'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Charater from './Character'
import Pagination from './Pagination'
import Filter from './Filter'
const Home = () => {
  const [items,setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [query, setQuery] = useState('')
  useEffect(() => {
    const fetchData = async ()=>{
      const res = await axios (
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setItems(res.data)
    } 
    fetchData()
  }, [query])
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="App container-fluid">
      <Header/>
      <Filter getQuery={(q) => setQuery(q) } paginate={paginate} />
      <Charater items = {currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
        currentPage = {currentPage}
      />
    </div>
  );
}

export default Home;
