import Image from "next/image"
import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import {AiFillLike} from 'react-icons/ai'

const ImageBox=({item})=>{
    const [count,setcount] = useState(0)
    const shareit = ()=>{
      
    }
    const Likeit = ()=>{
        setcount(count+=1)
    }
    return(
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img width={200} height={200} variant="top" src={item} /> */}
            <Image src={item} width={200} height={200} />
        <Card.Body>
          <Card.Title><AiFillLike />: {count}</Card.Title>
          <Button onClick={Likeit} variant="success">Like</Button>
          <Button onClick={shareit} variant="primary" style={{marginLeft:10}}>Share</Button>
        </Card.Body>
      </Card>
        )
}

export default ImageBox