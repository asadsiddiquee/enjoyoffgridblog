import Image from "next/image";
import Link from "next/link";

function PostCard({ thumbnail, title, slug, description }) {
  return (
    <div className="text-center mb-5  mx-auto pb-4 border-b sm:border-none sm:max-h-max sm:mx-4 sm:hover:opacity-80 delay-75 transition-all ease-in-out sm:hover:backdrop-brightness-75 rounded-lg">
      <div>
        <Link href={`/${slug}`}>
          <div className="relative h-52 my-2 sm:cursor-pointer">
            <Image
              src={`${thumbnail}`}
              layout="fill"
              alt={title}
              placeholder="blur"
              blurDataURL={`${thumbnail}`}
              objectFit="cover"
            />
          </div>
        </Link>
      </div>
      <h2>
        <Link href={`/${slug}`}>
          <a className="text-xl lg:text-2xl font-out my-2 font-bold text-[#000000] sm:cursor-pointer  ">
            {title}
          </a>
        </Link>
      </h2>
      <p className="font-poppins">{description}..</p>

      <Link href={`/${slug}`}>
        <button className="text-lg font-out bg-[#ffca00] hover:underline ">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default PostCard;
