import { Link, useLocation } from "react-router-dom";
import useNavigateTo from "../hooks/useNavigateTo";

const Header = () => {

    const location = useLocation();

    const pathSegment = location.pathname.split('/')[1];

    return (<>
        <header>
            <div className="row px-1 d-flex justify-content-between align-items-center">
                <Link
                    to={"/"}
                    className="col-auto py-4 text-decoration-none">
                    <h1
                        className="mb-0 fw-semibold link-dark"
                        style={{ cursor: "pointer" }}>
                        Dev.P
                    </h1>
                </Link>

                <div className="col-auto">
                    <div
                        style={{ cursor: "pointer" }}
                        className="material-symbols-outlined fw-lighter border rounded-circle p-1 me-2">search
                    </div>
                    <div
                        style={{ cursor: "pointer" }}
                        className="material-symbols-outlined fw-lighter border rounded-circle p-1">menu
                    </div>
                </div>
            </div>

            <div className="row py-2 border-bottom">
                <Link
                    className={`col-auto px-4 link-dark text-decoration-none`}
                    to={"/"}><span className={`py-2 ${pathSegment === '' ? 'border-bottom border-dark border-3 fw-semibold' : 'text-secondary'}`}>홈</span>
                </Link>

                <Link
                    className={`col-auto px-4 link-dark text-decoration-none`}
                    to={"/guestbook"}><span className={`py-2 ${pathSegment === 'guestbook' ? 'border-bottom border-dark border-3 fw-semibold' : 'text-secondary'}`}>방명록</span>
                </Link>

                <Link
                    className={`col-auto px-4 link-dark text-decoration-none`}
                    to={"/posts"}><span className={`py-2 ${pathSegment === 'posts' ? 'border-bottom border-dark border-3 fw-semibold' : 'text-secondary'}`}>게시글</span>
                </Link>
                
            </div>
        </header>
    </>);
};

export default Header;