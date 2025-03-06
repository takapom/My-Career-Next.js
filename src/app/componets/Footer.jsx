import styles from "./css/footer.module.css"

export default function Footer(){
    return(
        <div>
            <footer class="container-fluid mt-5 text-center bg-light">
                <div class="row">
                    <ul class="nav justify-content-center py-5">
                        <li class="nav-item">
                            <a class="nav-link link-secondary" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link-secondary" href="#">navMenu</a>
                        </li>
                    </ul>
                    <div class="col-10 offset-1 mb-3">
                        <a class="px-2 link-secondary" href="#"><span class="bi bi-instagram fs-1"></span></a>
                        <a class="px-2 link-secondary" href="#"><span class="bi bi-github fs-1"></span></a>
                        <a class="px-2 link-secondary" href="#"><span class="bi bi-twitter fs-1"></span></a>
                    </div>
                </div>
                <small>&copy; 2025 Yuki Takagi. by  Takapom</small>
            </footer>
        </div>
    )
}