import { useState } from "react";

const initGuestbook = {
    author: "",
    password: "",
    message: ""
}

const GuestbookInput = ({ onAdd }) => {

    const [guestbook, setGuestbook] = useState(initGuestbook);

    const handleChangeGuestbook = (e) => {
        setGuestbook({
            ...guestbook,
            [e.target.name]: e.target.value
        });
    };

    const handleClickAdd = () => {
        onAdd(guestbook);
        setGuestbook(initGuestbook);
    }

    return (<>
        <div className="row pt-3">
            <div className="col ps-2 pe-1">
                <input
                    className="form-control rounded-bottom-0 rounded-end-0"
                    placeholder="작성자"
                    type="text"
                    name="author"
                    value={guestbook.author}
                    onChange={handleChangeGuestbook}>
                </input>
            </div>

            <div className="col-5 pe-2 ps-1">
                <input
                    className="form-control rounded-bottom-0 rounded-start-0"
                    placeholder="비밀번호 4자리"
                    type="password"
                    name="password"
                    value={guestbook.password}
                    onChange={handleChangeGuestbook}>
                </input>
            </div>
        </div>

        <div className="row py-2 px-2">
            <textarea
                className="col form-control rounded-top-0 py-3"
                placeholder="여러분의 소중한 댓글을 입력해주세요."
                style={{ height: "7em" }}
                name="message"
                value={guestbook.message}
                onChange={handleChangeGuestbook}>
            </textarea>
        </div>

        <div className="row justify-content-end">
            <div className="col-auto px-2">
                <button
                    type="button"
                    className="btn btn-dark form-control rounded-pill px-4 fw-semibold"
                    style={{ fontSize: "0.8em" }}
                    onClick={handleClickAdd}>
                    등록
                </button>
            </div>
        </div>
    </>);
};

export default GuestbookInput;