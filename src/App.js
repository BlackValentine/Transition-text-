import React, {useRef, useEffect, useState} from 'react'
import {gsap} from 'gsap'
import './App.css';

function App() {

    const [mouse, setMouse] = useState([null, null])

    const shape = useRef([]);
    const shape2 = useRef([]);
    const shape3 = useRef([]);
    const cursor = useRef([]);

    const onMove = (e) => {
        setMouse([e.clientX, e.clientY])
    }

    useEffect(() => {
        const shapes = [
            shape.current,
            shape2.current,
            shape3.current
        ];

        gsap.to(shapes, {
            x: mouse[0],
            y: mouse[1],
            stagger: -0.1
        })
    })

    useEffect(() => {
        gsap.set(cursor.current, {
            x: mouse[0],
            y: mouse[1],
            stagger: -0.1
        })
    })

    return (
       <div 
            className=""
            onMouseMove = {(e) => onMove(e)}
        >
            <div className="cursor" ref={cursor}></div>
            <div className="shapes">
                <div className="shape shape-1" ref={shape}></div>
                <div className="shape shape-2" ref={shape2}></div>
                <div className="shape shape-3" ref={shape3}></div>
            </div>

            <div className="content">
                <h1>BlackValentine!</h1>
            </div>
       </div>
    );
}

export default App;
