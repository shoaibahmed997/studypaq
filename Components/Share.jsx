import {WhatsappShareButton,FacebookShareButton,EmailShareButton,TwitterShareButton,LinkedinShareButton,FacebookIcon,WhatsappIcon,EmailIcon,TwitterIcon,LinkedinIcon} from 'react-share'


const ShareComponent = ({item})=>{
    let content = "Check out this amazing picture on Studypaq"

    return (<>
    {/* WHATSAPP */}
    <WhatsappShareButton url={item} title={content}>
        <WhatsappIcon size={40} round={true}></WhatsappIcon>
    </WhatsappShareButton>
    {/* FACEBOOK */}
    <FacebookShareButton url={item} quote={content}>
        <FacebookIcon size={40} round={true} ></FacebookIcon>
    </FacebookShareButton>
    <EmailShareButton url={item} subject={content} >
        <EmailIcon size={40} round={true}></EmailIcon>
    </EmailShareButton>
    {/* Twitter */}
    <TwitterShareButton url={item} title={content} >
        <TwitterIcon size={40} round={true}></TwitterIcon>
    </TwitterShareButton>
    {/* Linkedin */}
    <LinkedinShareButton url={item} title={content}>
        <LinkedinIcon size={40} round={true}></LinkedinIcon>
    </LinkedinShareButton>
    </>)
}

export default ShareComponent