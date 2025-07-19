const TryNow = () => {
    return(
        <div className="flex flex-col items-center justify-center bg-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-7 text-center">
                Remove Image Background
            </h2>
            <p className="text-gray-700 mb-8 font-semibold text-xl text-center">
                Get a transparent background for any image
            </p>
            <div className="rounded-2xl shadow-lg p-10 flex flex-col items-center bg-violet-50 hover:bg-violet-100 space-y-4">
                <input type="file" id="upload2" hidden accept="image/*"/>
                <label htmlFor="upload2" className="bg-indigo-500 hover:bg-blue-800 text-white px-6 py-3
                text-lg font-semibold rounded-full">
                    Upload Image
                </label>
                <p className="text-gray-700 text-sm">
                    or drop a file, paste image or <a href="#" className="text-blue-500 underline">URL</a>
                </p>
            </div>
        </div>
    )}
export default TryNow