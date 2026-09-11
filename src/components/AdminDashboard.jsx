import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminProjects from "./AdminProjects";

function AdminDashboard() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-[#07111f] text-slate-100">
            <header className="border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Admin Dashboard
                        </h1>

                        <p className="text-sm text-slate-400 mt-1">
                            Manage your portfolio
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            logout();
                            navigate("/admin/login");
                        }}
                        className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-10">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <h2 className="text-xl font-semibold">
                        Welcome, {user?.email}
                    </h2>

                    <p className="text-slate-400 mt-2">
                        Role: {user?.role}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h3 className="font-semibold">
                            Projects
                        </h3>

                        <p className="text-slate-400 text-sm mt-2">
                            Create, edit and delete portfolio projects.
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h3 className="font-semibold">
                            Account
                        </h3>

                        <p className="text-slate-400 text-sm mt-2">
                            Manage your authenticated session.
                        </p>
                    </div>
                </div>

                <AdminProjects />
            </main>
        </div>
    );
}

export default AdminDashboard;