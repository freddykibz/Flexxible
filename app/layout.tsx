import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
    title: 'Flexxible',
    description: 'Showcase and deiscover remakarble developer projects',
}

export default function RootLayout({
    children,
}:{ 
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Navbar/>
            <main>
            {children}
            </main>
            <Footer/>
        </html>
    )
}