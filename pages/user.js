import {withRouter} from 'next/router'
import BaseLayout from '../components/BaseLayout'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'


const Page = (props) => {
   return (
      <BaseLayout>
         <Head> 
            <title>Profile {props.user.username}</title>
         </Head>
         <h1>User Detail</h1>
         <hr/>
         <h3>Name: {props.user.username}</h3>
         <p>Email: {props.user.email}</p>
      </BaseLayout> 
   )
} 

Page.getInitialProps = async (context)=> {
   const {id} = context.query
   const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
   const user = await res.json()
   return {user}
}

export default withRouter(Page)
