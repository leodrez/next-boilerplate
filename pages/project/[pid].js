import React, { Component } from 'react';

import { useRouter } from "next/router";
import Link from "next/link";

export const config = { amp: true };

// const Post = () => {
//   const router = useRouter();
//   // const { id } = router;
//   const id = router.query.pid;

//   console.log("ID: ", id)

//   return (
//     <div>
//       <p>Post: {id}</p>
//       <Link href="/">
//         <a>Home</a>
//       </Link>
//     </div>
//   );
// };

// Post.getInitialProps = async () => {
//   return {}
// }

class Post extends Component {
  static async getInitialProps({ req }){
    console.log(req)
  }

  render() {
    return <div>Test id: {this.props.id}</div>
  }
}


export default Post;
