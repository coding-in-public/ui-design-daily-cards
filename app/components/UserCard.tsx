import Image from "next/image";
import { User } from "../types/User";

const UserCard = ({ user }: { user: User }) => {
  return (
    <a
      className="flex gap-2 p-4 rounded-2xl bg-slate-50 hover:shadow-xl shadow-slate-200
      border border-transparent hover:border-slate-400
      focus:outline-transparent
      focus-visible:ring-4 ring-offset-2 ring-slate-400 transition-all
      "
      href="http://localhost:3000/#"
    >
      <Image
        alt={user.name}
        src={user.avatar}
        width={100}
        height={100}
        priority
        className="rounded-full aspect-square object-cover"
      />
      <div className="grid gap-0.5">
        <h2 className="text-bold text-lg">{user.name}</h2>
        <p>{user.location}</p>
        <div className="flex flex-wrap gap-2 items-center">
          {user.tags.map((t) => (
            <span
              key={t}
              className="text-sky-600 px-1.5 rounded-full border border-sky-700 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
export default UserCard;
