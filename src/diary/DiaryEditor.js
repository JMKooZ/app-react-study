import {useRef, useState} from "react";

const DiaryEditor = ({onCreate}) =>{
    const [state, setState] = useState({
        author: "",
        content:"",
        emotion:1,
    });
    const authorInput = useRef();
    const contentInput = useRef();

    const handleChangeState = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit=()=>{
      if(state.author.length < 1){
        authorInput.current.focus();
        return;
      }else if(state.content.length < 5){
        contentInput.current.focus();
        return;
      }
      onCreate(state.author, state.content, state.emotion);
      console.log(state);
      setState({author: "", content: "", emotion: 1});
      alert("저장 성공");
    }

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    ref={authorInput}
                    value={state.author}
                    onChange={handleChangeState}
                    name="author"
                    placeholder="작성자"
                    type="text"
                />
                <span className="notification">작성자 를 입력 해 주세요.</span>

                <textarea
                    ref={contentInput}
                    value={state.content}
                    onChange={handleChangeState}
                    name="content"
                    placeholder="일기"
                />
                <span className="notification">본문은 5자 이상 입력 해 주세요.</span>

                <div>
                    <span>오늘의 감정지수: </span>
                    <select
                        name="emotion"
                        value={state.emotion}
                        onChange={handleChangeState}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <span className="notification">감정 지수를 선택하세요. (택 1)</span>
                </div>
            </div>
            <div>
                <button onClick={handleSubmit}>저장 하기</button>
          </div>
        </div>
    );
};
export default DiaryEditor;