const DiaryItem = ({id, author, content,emotion, created_date}) => {
  return(
     <div key={id}>
      <div>작성자: {author}</div>
      <div>내용: {content}</div>
      <div>감정: {emotion}</div>
      <div>작성 시간: {created_date}</div>
      <hr/>
    </div>
  );
};

export default DiaryItem;