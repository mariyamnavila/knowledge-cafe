

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, posted_date, reading_time,hashtags } = blog;
    return (
        <div className="space-y-4">
            <img className="w-[900px] h-[628px] mb-8 rounded-lg" src={cover} alt={`cover picture of ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex">
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl font-semibold">{author}</h3>
                        <p className="text-gray-700">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className="text-gray-700">{reading_time} Min read</span>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-gray-700">{
            hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}  </a></span>)
            }</p>
        </div>
    );
};

export default Blog;