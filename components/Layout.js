import Header from "./Header";


const Layout = ({children}) => {
    return (
        < >
        <Header/>
        <div className="w-full">
           
           {children}
        </div>
        </>
    );
}

export default Layout