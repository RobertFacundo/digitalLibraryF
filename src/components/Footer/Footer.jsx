import './Footer.scss';

export const Footer = () => {
    return (
        <footer className="footer-container">
            Designed and developed by{" "}
            <a
                href="https://github.com/RobertFacundo"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                Robert
            </a>
        </footer>
    )
}