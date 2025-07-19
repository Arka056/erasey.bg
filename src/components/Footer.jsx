import {assets, FOOTER_CONSTANTS} from "../assets/assets.js";

const Footer = () =>{
    return (
        <footer className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
            <img src={assets.logo} alt="Logo" width={32}/>
            <p className="flex-1 border-l border-gray-100 max-sm:hidden">
                &copy; {new Date().getFullYear()} @arka056 | All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-950 font-semibold text-sm">
                <span>Follow us on </span>
                {FOOTER_CONSTANTS.map((item, index) => (
                    <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
                        <img src={item.logo} alt={item.title} width={24} />
                    </a>
                ))}
            </div>

            <p className="text-center text-gray-700 font-medium"></p>
        </footer>
    )
}
export default Footer;
