import styles from "./css/footer.module.css"

export default function Footer(){
    return(
        <div>
            <footer className="container-fluid mt-5 text-center bg-light">
                <div className="row">
                    <ul className="nav justify-content-center py-5">
                        <li className="nav-item">
                            <a className="nav-link link-secondary" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-secondary" href="#">navMenu</a>
                        </li>
                    </ul>
                    
                    <div className="col-10 offset-1 mb-3">
                        <a className="px-2 link-secondary" href="https://www.instagram.com/takapondes/?next=%2F"><span className="bi bi-instagram fs-1"></span></a>
                        <a className="px-2 link-secondary" href="https://github.com/takapom?tab=repositories"><span className="bi bi-github fs-1"></span></a>
                        <a className="px-2 link-secondary" href="https://x.com/takapom_engin"><span className="bi bi-twitter fs-1"></span></a>
                    </div>
                </div>
                <small>&copy; 2025 Yuki Takagi. by  Takapom</small>
            </footer>
        </div>
    )
}