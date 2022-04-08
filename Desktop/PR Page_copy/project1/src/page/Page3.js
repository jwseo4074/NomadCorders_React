import "../css/page3.css";

function Page3() {
	return (
		<>
            {/* Third Page */}
            <div className="section section3">
                <h1> Experience</h1>
                <div className="section3_box">
                    <div className="section3_project">
                        <div className="box">
                            <div className="project">
                                <a href="https://qkrtmfqls.gabia.io/#/">
                                    <div className="number">
                                        <p>01</p>
                                        <p>Refri Bank</p>
                                        <p className="explain"> 설명 간단하게 적어봅시다</p> 
                                    </div>
                                </a>
                            </div>

                            <div className="project">
                                <a href="http://www.naver.com">
                                    <div className="number">
                                        <p>02</p>
                                        <p>프로젝트 2</p> 
                                        <p className="explain"> 설명 간단하게 적어봅시다</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                        <div className="box">
                            <div className="project">
                                <a href="http://www.naver.com">
                                    <div className="number">
                                        <p>03</p>
                                        <p>프로젝트 3</p> 
                                        <p className="explain"> 설명 간단하게 적어봅시다</p>
                                    </div>
                                </a>
                            </div>
                            <div className="project">
                                <a href="http://www.naver.com">
                                    <div className="number">
                                        <p>04</p>
                                        <p>프로젝트 4</p> 
                                        <p className="explain"> 설명 간단하게 적어봅시다</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Page3;


