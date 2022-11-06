import React, { useState, useRef, useEffect } from 'react'
import { Button, ButtonGroup , useDisclosure, Lorem} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Displaywatch from './Displaywatch'

const Stopwatch = () => {

    const [time, setTime] = useState(0)
    const [ans, setAns] = useState(0)
    const timerRef = useRef(null)
    let [hour, setHour]= useState(0)
    let [minutes, setMinutes]= useState(0)
    let [seconds, setSeconds]= useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [text, setText] = useState([])

    const handleStart = ()=>{
      if(timerRef.current){
        return
      }

        timerRef.current = setInterval(()=>{
            setTime((prev)=> prev + 1)
        },1000)
    }
    const handleStop = ()=>{
        if(timerRef.current){
            clearInterval(timerRef.current);
            timerRef.current = null
        }
    }

    const handleReset=()=>{
        handleStop();
        setTime(0);
    }

  useEffect(()=>{
         return handleStop;
  },[])


    return (
        <div>
           <h1>Stop Watch</h1>      
            <h1>{time} Seconds</h1>
            <div>
                <Button border="2px solid green" onClick={handleStart}>Start</Button>
                <Button border="2px solid green" onClick={handleStop}>Stop</Button>
            
                <Button border="2px solid green" onClick={onOpen}>Save</Button>
            
            </div>


            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Task Model</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            This is Timer Task manager, Kindly add your Tasks, will visible at task page
            <br/>
            <input 
                className="input1"
                type="text"
                placeholder="add Task"
                onChange={(e) => {
                    setText(e.target.value)
                }}
                />
                <button className="button1"
                onClick={() => {
                
                    fetch("http://localhost:4000/TodoList", {
                        method: "POST",
                        body: JSON.stringify({ title: text, purchased: false , time: time }),
                        headers: {
                            "content-type": "application/json"
                        },
                    })
                    alert("task added")
                }
            
                } 
                > Add Todo </button>
                
            </ModalBody>

            <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    {/* <Button variant='ghost'>Cancel</Button> */}
                </ModalFooter>
            </ModalContent>
            </Modal>

      <Displaywatch />
    </div>
    )
}

export default Stopwatch
