import { useEffect, useState } from "react";
import GuestbookInput from "../../components/guestbook/GuestbookInput";
import GuestbookList from "../../components/guestbook/GuestbookList";
import { getGuestbookList, postGuestbook } from "../../api/guestbookApi";
import BasicLayout from "../../layouts/BasicLayout";

const initGuestbookList = [];

const GuestbookPage = () => {

    const [guestbookList, setGuestbookList] = useState(initGuestbookList);

    useEffect(() => {
        getGuestbookList().then(res => {
            setGuestbookList(res.data.guestbooks);
        });
    }, []);

    const handleAddGuestbook = (guestbook) => {
        postGuestbook(guestbook).then(() => {
            getGuestbookList().then(res => {
                setGuestbookList(res.data.guestbooks);
            });
        });
    };

    return (<>
        <BasicLayout>
            <GuestbookInput onAdd={handleAddGuestbook} />
            <GuestbookList guestbookList={guestbookList} />
        </BasicLayout>
    </>);
};

export default GuestbookPage;