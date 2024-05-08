import DiaryItem from "./DiaryItem";

const DiaryList = ({onUpdate, onDelete, diaryList})=>{
  return(
    <div className="DiaryList">
      <h2>일기 목록</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다.</h4>
      <h1>https://maystar8956.tistory.com/141</h1>
      <h1>{new Date().getUTCHours()}</h1>
      <div>
        <hr/>
        {diaryList.map((diary, idx) => (
          <DiaryItem key={diary.id} {...diary} onDelete={onDelete} onUpdate={onUpdate}/>
        ))}
      </div>
    </div>
  );
};


export default DiaryList;
