import Image from "next/image";
import defaultAvatar from "../../public/defaultAvatar.jpg";

type Avatar = {
  imgAvatar: string;
};

export default function Avatar({ imgAvatar }: Avatar) {
  return (
    <div className="min-h-12 min-w-12 max-h-12 max-w-12 rounded-full bg-primary">
      <Image
        src={imgAvatar || defaultAvatar}
        alt="Avatar"
        width={100}
        height={100}
        className="rounded-full"
      />
    </div>
  );
}
