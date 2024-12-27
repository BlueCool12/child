const NotFound = () => {
    return (<div
        style={{ height: "90vh" }}
        className="text-center align-content-center">
        <div className="row">
            <div className="col">
                <div
                    style={{ fontSize: "3em", fontVariationSettings: '"FILL" 1' }}
                    className="material-symbols-outlined">
                    error
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <span className="fs-3">페이지를 찾을 수 없습니다.</span>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col">
                <span style={{ fontSize: "0.75em" }}>
                    방문하시려는 페이지의 주소가 잘못 입력되었거나,<br></br>
                    페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.<br></br>
                    입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
                </span>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col">
                <button
                    style={{ fontSize: "0.8em" }}
                    className="btn btn-outline-dark fw-semibold rounded-0">
                    메인 페이지
                </button>
            </div>
        </div>
    </div>);
};

export default NotFound;