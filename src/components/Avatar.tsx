import Image from "next/image";

import defaultAvatar from "../../public/defaultAvatar.jpg";

type Avatar = {
  letter?: string;
  imgAvatar?: string;
};

export default function Avatar({ letter, imgAvatar }: Avatar) {
  return (
    <div className="h-10 w-10 rounded-full bg-secondary flex justify-center items-center">
      {letter ? (
        <h2 className="text-3xl font-bold text-center text-primary">
          {letter[0]}
        </h2>
      ) : (
        <Image
          src={imgAvatar || defaultAvatar}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
    </div>
  );
}
