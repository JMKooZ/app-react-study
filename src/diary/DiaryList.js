import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList})=>{
  return(
    <div className="DiaryList">
      <h2>일기 목록</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다.</h4>
      <h1>https://maystar8956.tistory.com/141</h1>
      <div>
        <hr/>
        {diaryList.map((m, idx) => (
          <DiaryItem key={m.id} {...m}/>
        ))}
      </div>
    </div>
  );
};


export default DiaryList;
