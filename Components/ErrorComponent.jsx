import {BiSad} from 'react-icons/bi'

const ErrorComponent = ()=>{
    return (<>
        <h1>Something went wrong! <BiSad /> </h1>
          <p>  The Reddit Api Took too long to respond</p>
    </>
    )
}

export default ErrorComponent