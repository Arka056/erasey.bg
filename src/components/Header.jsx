import {assets} from "../assets/assets.js";
import {toast} from "react-hot-toast";

const Header = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* left side: Video banner*/}
            <div className="order-2 md:order-1 flex justify-center">
                <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
                    <video src={assets.video_banner} autoPlay loop muted className="w-full max-w-[400px] h-auto object-cover"/>
                </div>
            </div>

            {/* right side: Text content*/}
            <div className="order-1 md:order-2">
                <h1 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight font-bold">The Fastest
                <span className="text-indigo-700"> background eraser</span></h1>
                <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                    Instantly remove backgrounds from your images with just one click ✨! Our powerful AI Background Remover makes your photos clean, professional, and ready to use in seconds. Highlight your subject and create a transparent background, so you can place it in a variety of new designs and destinations — try it now and transform your visuals like never before! 🚀
                    Make every image stand out.
                </p>
                <div>
                    <input type="file" accept="image/*" id="upload1" hidden/>
                    <label htmlFor="upload1"
                        className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition transform over:scale-105 text-lg">
                        Upload image
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Header;