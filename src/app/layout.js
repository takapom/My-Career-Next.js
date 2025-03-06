import Script from 'next/script';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./global.css"



export const metadata = {
  title: 'Carousel Template · Bootstrap v5.3',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="auto">
      <body>
        {children}
      </body>
    </html>
  );
}
