
// mui
import { Box } from "@mui/material"
// components
import Message from "../../../Common/Chat/Message/message"
// style
import "./messages_area.css"



const MessagesArea = ({
    view
}) => {

    return (
        <Box height={view || 'auto'} className='messages-area'>
            
            <Message variant='asdf' time='5:19am' >
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …
            </Message>

            <Message variant='me' time='5:19am' >
                Boom! 🥇🥇🥇🥇
            </Message>

            <Message variant='asdf' time='5:19am' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            </Message>

            <Message variant='me' time='5:19am' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis! 🥇🥇🥇🥇
            </Message>

            <Message variant='asdf' time='5:19am' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. !
            </Message>

            <Message variant='asdf' time='5:19am' >
                Booooomoooooooooooom
            </Message>

            <Message variant='me' time='5:19am'>
                Boom! 🥇🥇🥇🥇
            </Message>

            <Message variant='asdf' time='5:19am' >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi officiis dolorum est ducimus mollitia harum porro labore obcaecati accusamus, voluptatem corporis! Rem voluptates amet asperiores laboriosam corporis, ducimus magnam sit.
            </Message>

            <Message variant='me' time='5:19am' >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quaerat nulla corrupti quae adipisci, tenetur explicabo reprehenderit fugiat inventore libero maxime vero, natus voluptatum odit atque quod ipsa tempore! Modi!
            </Message>

            <Message variant='me' time='5:19am'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis adipisci cumque exercitationem ipsa cupiditate assumenda non veniam saepe a. Illum voluptate voluptas consequuntur officiis corrupti atque nulla, ab vel commodi.
            </Message>

            <Message variant='afdfa' time='5:19am'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt cumque dolorem, eligendi itaque eius quod vel, ratione illo, pariatur veritatis dolore? Aut dolores consectetur, consequatur dolore neque vero tempore ex?
            </Message>

            <Message variant='me' time='5:19am'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi culpa harum, eius possimus doloribus excepturi rerum odio obcaecati, accusantium quos cupiditate dolorum atque eum iste. Earum quidem suscipit eos!
            </Message>
        </Box>
    )

}

export default MessagesArea