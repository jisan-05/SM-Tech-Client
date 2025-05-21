import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  ListChecks,
  BookOpenCheck,
  BookPlus,
  BadgePlus,
  ShieldCheck,
  Users,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    {
      name: "Manage Departments",
      path: "/dashboardLayout/manageDepartment",
      icon: <ListChecks size={20} />,
    },
    {
      name: "Manage Courses",
      path: "/dashboardLayout/manageCourse",
      icon: <BookPlus size={20} />,
    },
    {
      name: "Manage Student",
      path: "/dashboardLayout/manageStudent",
      icon: <Users size={20} />,
    },
    {
      name: "Manage Teacher",
      path: "/dashboardLayout/manageTeacher",
      icon: <BadgePlus size={20} />,
    },
    {
      name: "Manage Events",
      path: "/dashboardLayout/manageEvents",
      icon: <BadgePlus size={20} />,
    },
    {
      name: "Manage Role",
      path: "/dashboardLayout/manageRole",
      icon: <ShieldCheck size={20} />,
    },
  ];

  return (
    <div className="h-screen w-64 bg-base-200 text-base-content shadow-md fixed left-0 top-0 flex flex-col">
      <div className="p-4 text-2xl font-bold text-primary border-b border-base-300">
        Admin Panel
      </div>
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-base-300"
            >
              <Home size={20} />
              Go Home
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  location.pathname === link.path
                    ? "bg-primary text-white"
                    : "hover:bg-base-300"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
