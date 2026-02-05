import { Outlet, Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="min-h-screen">
      <h1>Projects Page</h1>

      <Link to="list">Go to Projects List</Link>

      <Outlet />
    </section>
  );
};

export default Projects;
