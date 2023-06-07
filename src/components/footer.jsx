function Footer() {
    return <footer className="page-footer yellow darken-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Любим кушац
                <a className="grey-text text-lighten-4 right" href="https://corcka.github.io/spa_react/">Ссылочка</a>
            </div>
        </div>   
    </footer>
}
export { Footer };