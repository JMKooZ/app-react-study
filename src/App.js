import './diary/Diary.css';
import DiaryEditor from "./diary/DiaryEditor";
import DiaryList from "./diary/DiaryList";

const dummyList = [
  {
    id:1,
    author: "author 1",
    content: "study",
    emotion: 5,
    create_date: new Date().getDate()
  },
  {
    id:2,
    author: "author 2",
    content: "react",
    emotion: 3,
    create_date: new Date().getDate()
  },
  {
    id:3,
    author: "author 3",
    content: "hello",
    emotion: 1,
    create_date: new Date().getDate()
  },
]
function App() {
  return (
    <div className="Diary">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
