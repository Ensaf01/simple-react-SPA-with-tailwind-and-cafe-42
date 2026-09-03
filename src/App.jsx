
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'
import BookMarks from './components/Bookmarks/BookMarks';

function App() {
  const [bookmarks, setbookmarks] = useState([]);

  const handleBookMarks = (blog) => {
    const NewBookMarks = [...bookmarks, blog];
    setbookmarks(NewBookMarks);
  }
  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs handleBookMarks={handleBookMarks}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>

    </>
  )
}

export default App
