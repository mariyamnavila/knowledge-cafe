import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 ml-4 rounded-lg mt-2">
            <div className="border border-[#6047EC] px-12 py-5 bg-[#6047EC1A] rounded-lg">
                <h3 className="text-2xl font-semibold text-[#6047EC]"> Reading Time: {readingTime}</h3>
            </div>
            <div className=" bg-gray-300 rounded-lg py-2 mt-2 ">
                <h2 className="font-bold text-3xl text-center m-7">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>

    );
};

export default Bookmarks;