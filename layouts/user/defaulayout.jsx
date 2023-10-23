import {Header,Footer} from '../../components'
const DefaultLayout = ({children}) =>{
    return (<> 
    <Header></Header>
    {children}
    <Footer></Footer>
</>)
}
export default DefaultLayout