const DiaryItem = ({id, author, content,emotion, create_date, onDelete, onUpdate}) => {
  return(
      <div className="DiaryItem" key={id}>
          <div className="onfo">
             <span className="author_info">
                 | 작성자 : {author} | 감정 지수: {emotion} |
             </span>
              <br/>
              <span className="date">{new Date(create_date).toLocaleString()}</span>
          </div>
          <div className="content">
              {content}
          </div>
          <button onClick={() => {
              if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) onDelete(id);
          }}>삭제하기
          </button>
          <button onClick={() => {
              if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) onUpdate(id);
          }}>수정하기
          </button>
      </div>
  );
};

export default DiaryItem;