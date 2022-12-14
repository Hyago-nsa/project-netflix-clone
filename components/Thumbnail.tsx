import Image from "next/image";
import React from "react";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out
    md:min-h-[170px] md:min-w-[300px] md:hover:scale-[120%] md:hover:z-10">
      <Image
      className="rounded-sm object-cover md:rounded"
      fill
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=""
      />
    </div>
  );
};

export default Thumbnail;
