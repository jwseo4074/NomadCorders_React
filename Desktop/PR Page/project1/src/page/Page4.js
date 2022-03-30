import "../css/page4.css";

import seojiwon from "../img/seojiwon.jpeg";
import phone from "../img/phone.png";
import email from "../img/email.png";
import insta from "../img/insta.png";
import blog from "../img/blog.png";
import git from "../img/git.png";

function Page4() {
	return (
		<>
            {/* Fourth Page */}
            <div className="section section4">
                <h1> Connect </h1>

                <div className="big_box">
                    <div className="Fourth_page_First_box">
                        <img src={seojiwon}></img>
                    </div>

                    <div className="Fourth_page_Second_box">
                        <div className="Fourth_page_Second_box_content">
                            <p className="hover_event phone_number"> 
                                <img src={phone}></img>
                                Phone : 010-4074-8927 
                            </p>
                            <p className="hover_event address_email"> 
                                <img src={email}></img>
                                E-mail : jwseo4074@pusan.ac.kr 
                            </p>
                            <p className="hover_event">
                                <a className="address_blog" href="https://velog.io/@zwon">
                                    <img src={blog}></img>
                                    Blog : https://velog.io/@zwon
                                </a>
                            </p>

                            <p className="hover_event">
                                <a className="address_github" href="https://github.com/jwseo4074">
                                    <img src={git}></img>
                                    Git-hub : https://github.com/jwseo4074
                                </a>
                            </p>

                            <p className="hover_event">
                                <a className="address_insta" href="https://www.instagram.com/zwon___/">
                                    <img src={insta}></img>
                                    Instagram : https://www.instagram.com/zwon___/
                                </a>
                            </p>
                        </div>
                    </div>
         
                </div>
            </div>
        </>
    );
}
export default Page4;
