import { useEffect, useState } from "react";
import { api } from "../services/api";

const initialForm = {
    title: "",
    description: "",
    category: "",
    github_url: "",
    live_url: "",
    technologies: "",
};

function AdminProjects() {
    const [projects, setProjects] = useState([]);
    const [form, setForm] = useState(initialForm);
    const [editingId, setEditingId] = useState(null);

    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const loadProjects = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await api.getProjects();

            setProjects(data.projects);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProjects();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    };

    const handleCreate = async (event) => {
        event.preventDefault();

        setCreating(true);
        setError("");
        setSuccess("");

        try {
            const project = {
                title: form.title.trim(),
                description: form.description.trim(),
                category: form.category.trim() || null,
                github_url: form.github_url.trim() || null,
                live_url: form.live_url.trim() || null,
                technologies: form.technologies
                    .split(",")
                    .map((technology) => technology.trim())
                    .filter(Boolean),
            };

            await api.createProject(project);

            setForm(initialForm);

            setSuccess("Project created successfully.");

            await loadProjects();
        } catch (error) {
            setError(error.message);
        } finally {
            setCreating(false);
        }
    };

    const handleDelete = async (id, title) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${title}"?`
        );

        if (!confirmed) {
            return;
        }

        try {
            setError("");
            setSuccess("");

            await api.deleteProject(id);

            setProjects((currentProjects) =>
                currentProjects.filter((project) => project.id !== id)
            );

            setSuccess("Project deleted successfully.");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEdit = (project) => {
        setEditingId(project.id);

        setForm({
            title: project.title || "",
            description: project.description || "",
            category: project.category || "",
            github_url: project.github_url || "",
            live_url: project.live_url || "",
            technologies: project.technologies?.join(", ") || "",
        });

        setError("");
        setSuccess("");
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            setCreating(true);
            setError("");
            setSuccess("");

            const project = {
                title: form.title.trim(),
                description: form.description.trim(),
                category: form.category.trim() || null,
                github_url: form.github_url.trim() || null,
                live_url: form.live_url.trim() || null,
                technologies: form.technologies
                    .split(",")
                    .map((technology) => technology.trim())
                    .filter(Boolean),
            };

            const data = await api.updateProject(editingId, project);

            setProjects((currentProjects) =>
                currentProjects.map((project) =>
                    project.id === editingId
                        ? data.project
                        : project
                )
            );

            setForm(initialForm);
            setEditingId(null);
            setSuccess("Project updated successfully.");
        } catch (error) {
            setError(error.message);
        } finally {
            setCreating(false);
        }
    };

    return (
        <section className="mt-10">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold">
                        Projects
                    </h2>

                    <p className="text-slate-400 mt-1">
                        Manage projects stored in your database.
                    </p>
                </div>

                <button
                    onClick={loadProjects}
                    disabled={loading}
                    className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 disabled:opacity-50 transition"
                >
                    Refresh
                </button>
            </div>


            {/* Create / Edit Project */}

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold">
                    {editingId ? "Edit Project" : "Create Project"}
                </h3>

                <p className="text-slate-400 text-sm mt-1 mb-6">
                    {editingId
                        ? "Update the selected project."
                        : "Add a new project to your portfolio database."}
                </p>

                <form
                    onSubmit={editingId ? handleUpdate : handleCreate}
                    className="space-y-5"
                >

                    {/* Title */}

                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium mb-2"
                        >
                            Title
                        </label>

                        <input
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="e.g. DeployNow"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-teal-400"
                        />
                    </div>


                    {/* Description */}

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium mb-2"
                        >
                            Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Describe the project..."
                            rows="4"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-teal-400 resize-y"
                        />
                    </div>


                    {/* Category */}

                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium mb-2"
                        >
                            Category
                        </label>

                        <input
                            id="category"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            placeholder="e.g. FULL STACK + DEVOPS"
                            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-teal-400"
                        />
                    </div>


                    {/* URLs */}

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                            <label
                                htmlFor="github_url"
                                className="block text-sm font-medium mb-2"
                            >
                                GitHub URL
                            </label>

                            <input
                                id="github_url"
                                name="github_url"
                                type="url"
                                value={form.github_url}
                                onChange={handleChange}
                                placeholder="https://github.com/..."
                                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-teal-400"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="live_url"
                                className="block text-sm font-medium mb-2"
                            >
                                Live URL
                            </label>

                            <input
                                id="live_url"
                                name="live_url"
                                type="url"
                                value={form.live_url}
                                onChange={handleChange}
                                placeholder="https://..."
                                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-teal-400"
                            />
                        </div>

                    </div>


                    {/* Technologies */}

                    <div>
                        <label
                            htmlFor="technologies"
                            className="block text-sm font-medium mb-2"
                        >
                            Technologies
                        </label>

                        <input
                            id="technologies"
                            name="technologies"
                            value={form.technologies}
                            onChange={handleChange}
                            placeholder="React, Node.js, Docker, PostgreSQL"
                            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-teal-400"
                        />

                        <p className="text-xs text-slate-500 mt-2">
                            Separate technologies with commas.
                        </p>
                    </div>


                    {/* Messages */}

                    {error && (
                        <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="rounded-lg bg-green-500/10 border border-green-500/30 px-4 py-3 text-sm text-green-400">
                            {success}
                        </div>
                    )}


                    {/* Submit */}

                    <div className="flex items-center gap-3">

                        <button
                            type="submit"
                            disabled={creating}
                            className="px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition"
                        >
                            {creating
                                ? editingId
                                    ? "Updating..."
                                    : "Creating..."
                                : editingId
                                    ? "Update Project"
                                    : "Create Project"}
                        </button>

                        {editingId && (
                            <button
                                type="button"
                                onClick={() => {
                                    setEditingId(null);
                                    setForm(initialForm);
                                    setError("");
                                    setSuccess("");
                                }}
                                disabled={creating}
                                className="px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 disabled:opacity-50 transition"
                            >
                                Cancel
                            </button>
                        )}

                    </div>

                </form>
            </div>


            {/* Project List */}

            <div>

                <h3 className="text-xl font-semibold mb-5">
                    Existing Projects
                </h3>

                {loading ? (
                    <div className="text-slate-400">
                        Loading projects...
                    </div>
                ) : projects.length === 0 ? (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-400">
                        No projects found.
                    </div>
                ) : (
                    <div className="space-y-4">

                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                            >

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-400 mt-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies?.map(
                                            (technology) => (
                                                <span
                                                    key={technology}
                                                    className="px-3 py-1 rounded-lg bg-slate-800 text-sm text-slate-300"
                                                >
                                                    {technology}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>


                                {/* Project Actions */}

                                <div className="flex items-center gap-4 mt-5 text-sm">

                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            GitHub
                                        </a>
                                    )}

                                    {project.live_url && (
                                        <a
                                            href={project.live_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-teal-400 hover:text-teal-300"
                                        >
                                            Live Demo
                                        </a>
                                    )}

                                    <button
                                        onClick={() =>
                                            handleEdit(project)
                                        }
                                        className="text-yellow-400 hover:text-yellow-300"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                project.id,
                                                project.title
                                            )
                                        }
                                        className="text-red-400 hover:text-red-300"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </section>
    );
}

export default AdminProjects;