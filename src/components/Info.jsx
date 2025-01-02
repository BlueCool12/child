
const Info = () => {
    return (<>
        <div className="row mt-3">
            <div className="col text-center">
                <span className="fs-3 fw-semibold">Welcome to MY WORLD!</span>
            </div>
        </div>

        <div className="row">
            <div className="col text-center lh-1">
                <span className="text-secondary">Hope you have an amazing day</span>
            </div>
        </div>

        <div className='row mt-5'>
            <div className='col text-center'>
                <img
                    src="/img/music_cat.png"
                    className='img-fluid'
                    style={{ height: '12em' }}>
                </img>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col text-center">
                <audio
                    controls
                    loop
                    controlsList="noplaybackrate nodownload"
                    src="/audio/I Will.mp3"
                    type="audio/mpeg">
                    오디오가 지원되지 않는 브라우저입니다.
                </audio>
            </div>
        </div>

        <div className="row mt-4 px-4">
            <div className="col text-center fw-medium text-secondary border rounded-2 p-2">
                Developed with React, Java, Spring Boot, JPA, and PostgreSQL
            </div>
        </div>
    </>);
};

export default Info;