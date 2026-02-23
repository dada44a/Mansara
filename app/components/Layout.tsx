import Footer from "./Footer";
import Header from "./Header";

export default function Layouts({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}
