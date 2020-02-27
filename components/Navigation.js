import Link from 'next/link'
import { Fragment } from 'react'

const Navigation = () => (
  <Fragment>
    <hr/>
    <nav>
      <Link href="/">
        <a>Index </a> 
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      
      <style jsx global>{`
        body{
          font-family: sans-serif;
        } 
        a {
          text-decoration: none;
        }
        a:not(:last-child){
          margin-right: 20px
        }
      `}</style>
    </nav>
    <hr/>
  </Fragment>
)

export default Navigation