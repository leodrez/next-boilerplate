import Link from 'next/link'

import getCollection from "../firebase/queries/getCollection";

export const config = { amp: true };

const Projects = ({ projects }) => {
  return (
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h1>Projects</h1>
      <div>
        {projects.map(p => (
          <Link href={{ pathname: `/project/${p.id}` }}>
            <a>
              {p.name}
              <br />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

Projects.getInitialProps = async () => {
  const projects = await getCollection("projects");
  return { projects };
};

export default Projects;
