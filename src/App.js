import './diary/Diary.css';
import DiaryEditor from "./diary/DiaryEditor";
import DiaryList from "./diary/DiaryList";
import {useRef, useState} from "react";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) =>{
    const created_date = new Date().getDate();
    const newItem={
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;

    setData([newItem, ...data]);
  };
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((diary)=> diary.id !== targetId);
    setData(newDiaryList);
  };

  const onUpdate = (targetId) => {

    console.log(data[targetId]);
  };

  return (
    <div className="Diary">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
