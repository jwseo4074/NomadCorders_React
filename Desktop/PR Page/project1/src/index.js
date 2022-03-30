import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	// <React.StrictMode>
		<App />,
	// </React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 외부의 모듈을 로드하는import
// 최초에 "react", "react-dom"라는 모듈을 로드하고 있고, 이것들이 React의 본체이다.

// ReactDOM.render(첫번째인수, 두번째인수)
// 첫번째 인수는 App.js으로 정의하고 있는 App 컴포넌트를 지정하고 있다. 그리고 두번째 인수는 root라는 ID의 요소를 지정
// ● App 컴포넌트가 root 태그에 포함된 코드가 렌더링되고 출력
