import Image from 'next/image';
import defaultAvatar from '../../public/defaultAvatar.jpg';

// #region Type aliases (1)

type Avatar = {
  imgAvatar?: string;
};

// #endregion Type aliases (1)

// #region Functions (1)

export default function Avatar({ imgAvatar }: Avatar) {
  return (
    <div className="h-10 w-10 rounded-full bg-primary">
      <Image
        src={imgAvatar || defaultAvatar}
        alt="Avatar"
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
}

// #endregion Functions (1)
