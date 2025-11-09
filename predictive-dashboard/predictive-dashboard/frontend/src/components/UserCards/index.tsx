// src/components/UserCard/index.tsx
import { User } from "./types";
import { LogOut } from "lucide-react";

const user: User = {
  name: "Arpit Kumar",
  role: "Student",
  avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Arpit%20Kumar",
};

function UserCard() {
  const handleClick = () => {
    // Example interaction (e.g., show profile menu or navigate)
    alert(`Logged in as ${user.name} (${user.role})`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between p-3 rounded-lg hover:bg-white cursor-pointer transition-colors border"
    >
      <div className="flex items-center gap-3">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
      </div>
      <LogOut className="text-gray-400" size={16} />
    </div>
  );
}

export default UserCard;
