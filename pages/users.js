import Link from "next/link";
import BaseLayout from "../components/BaseLayout";
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'


const Index = (props) => ( 
  <BaseLayout>
    <Head> 
      <title>Users Title</title>
    </Head>
    <h1>List User</h1>
    <ul>
      {props.users.map( (user) => (
        <li key={user.id}>
          <Link as={`/user/${user.id}`} href={`user?id=${user.id}`}>
            <a>{user.username}</a>
          </Link>
        </li>
      ) )}
    </ul>
      <style jsx>{`
        a {
          color: green
        }
        a:hover {
          color: #313131
        }
      `}</style>
  </BaseLayout>
)

Index.getInitialProps = async ()=> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {users: data}
}

export default Index