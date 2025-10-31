import Image from "next/image";
import { User } from "../types/User";
import { ViewTransition } from "react";

const UserCard = ({ user }: { user: User }) => {
  return (
    <ViewTransition>
      <div className="flex items-start gap-2 p-6 rounded-md bg-slate-50 border border-transparent hover:border-slate-300 shadow-none hover:shadow-xl shadow-slate-100 transition-all">
        <Image
          src={user.avatar}
          alt={user.name}
          width={70}
          height={70}
          className="object-cover rounded-full aspect-square"
        />
        <div className="grid gap-4">
          <div className="grid gap-1">
            <p className="font-bold">{user.name}</p>
            <div className="text-sm">{user.location}</div>
          </div>
          <div className="flex gap-1 text-xs flex-wrap">
            {user.tags.map((t) => (
              <span
                key={t}
                className="leading-none py-0.5 px-2 border bg-white rounded-full border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ViewTransition>
  );
};
export default UserCard;
