import { format } from 'date-fns';

const GuestbookList = ({ guestbookList }) => {

    return (<>
        {guestbookList.map(guestbook => (
            <div
                key={guestbook.id}
                className="row border-bottom py-4">

                <div className="col-auto text-center">
                    {/* 나중에 프로필 사진 넣을 공간 */}
                </div>

                <div className="col text-secondary">

                    <div className="row" style={{ fontSize: "0.9em" }}>
                        <div className="col-auto pe-1">
                            {guestbook.author}
                        </div>
                        <div className="col-auto px-0">
                            • {format(new Date(guestbook.createdAt), 'yyyy.MM.dd')} •
                        </div>
                        <div className="col-auto ps-1">
                            신고
                        </div>
                        <div className="col-auto material-symbols-outlined ms-auto pe-1">
                            more_vert
                        </div>
                    </div>

                    <div className="row">
                        <div className="col" style={{ fontSize: "0.95em" }}>
                            {guestbook.message}
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col" style={{ fontSize: "0.9em" }}>
                            답변
                        </div>
                    </div>

                </div>
            </div>
        ))}
    </>);
};

export default GuestbookList;