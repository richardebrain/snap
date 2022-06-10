import Header from "./Header";


const Layout = ({children}) => {
    return (
        < >
        <Header/>
        <div className="">
           
           {children}
        </div>
        </>
    );
}

export default Layout