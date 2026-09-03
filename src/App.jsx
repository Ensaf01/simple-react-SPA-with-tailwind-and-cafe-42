
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'
import BookMarks from './components/Bookmarks/BookMarks';

function App() {
  const [bookmarks, setbookmarks] = useState([]);
  const [spentTime,setSpentTime]=useState(0);

  const handleBookMarks = (blog) => {
    const NewBookMarks = [...bookmarks, blog];
    setbookmarks(NewBookMarks);
  }
  const handleSpentTime =(oldTime) =>{
    const newTime=spentTime+oldTime;
    setSpentTime(newTime);
  }
  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs handleBookMarks={handleBookMarks} handleSpentTime={handleSpentTime}></Blogs>
        <BookMarks bookmarks={bookmarks} spentTime={spentTime}></BookMarks>
      </div>

    </>
  )
}

export default App
