
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
  const handleMarksRead =(oldTime,id) =>{
    const newTime=spentTime+oldTime;
    setSpentTime(newTime);

    // remove from bookmarks when click mark as read button
  const RemainingBookMarks=bookmarks.filter(read => read.id!==id) // je id click hoyeche seta badhe all 
  setbookmarks(RemainingBookMarks);

  

  }
  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs handleBookMarks={handleBookMarks} handleMarksRead={handleMarksRead}></Blogs>
        <BookMarks bookmarks={bookmarks} spentTime={spentTime}></BookMarks>
      </div>

    </>
  )
}

export default App
