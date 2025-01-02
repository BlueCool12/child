import Header from "../components/Header";


const BasicLayout = ({ children }) => {

    return (<>
        <Header />

        <main
            className="py-2 px-4"
            style={{ position: 'relative' }}>
            {children}
        </main>
    </>);
};

export default BasicLayout;