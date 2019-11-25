import Link from "next/link";

import getDocument from '../../firebase/queries/getDocument';

export const config = { amp: true };

const Project = ({data}) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>Project</p>
      <h1>{data.name}</h1>
    </div>
  );
};

Project.getInitialProps = async ({ query }) => {
  const projectId = query.id;
  const data = await getDocument('projects', projectId);
  return { data };
};

export default Project;
