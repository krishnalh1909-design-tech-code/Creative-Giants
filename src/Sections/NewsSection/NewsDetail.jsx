import { useParams } from "react-router-dom";
import { NewsData } from "../HomeSection/NewsData";
import Mailing from "../../Components/Mailing";
import Footer from "../../Components/Footer";


const NewsDetail = () => {
  const { id } = useParams();

  const article = NewsData.find(
    (item) => item.id.toString() === id
  );

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Article not found
      </div>
    );
  }

  return (
    <>
      <div className="h-[60vh] w-full overflow-hidden">
        <img className="h-full w-full object-cover" src={article.bgImg} alt="" />
      </div>
      {/* <div className="min-h-screen px-6 py-20 bg-[#FFFEF7]">

        <h1 className="text-4xl mb-6">{article.title}</h1>

        <img
          src={article.img}
          alt={article.title}
          className="w-full h-[60vh] object-cover mb-8"
        />

        <p className="text-lg leading-relaxed max-w-3xl">
          {article.desc}
        </p>
      </div> */}
      
      <Mailing />
      <Footer />
    </>
  );
};

export default NewsDetail;