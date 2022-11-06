import React from 'react'
import { Link, Divider, Text, Stack } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>
            <Stack direction='row' h='10vh' border="2px solid #48c8c2" justifyContent="center" backgroundColor="#fffad7">
            
                <Link padding="10px" color='teal.500' href='/'>
                    Timer
                </Link>
            
                <Link padding="10px" color='teal.500' href='/task'>
                   Task
                </Link>
            </Stack>
        </div>
    )
}

export default Navbar
