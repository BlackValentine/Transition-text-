import React, {useRef, useEffect, useState} from 'react'
import {gsap} from 'gsap'
import './App.css';

function App() {

    const [mouse, setMouse] = useState([null, null])

    const shape = useRef([]);
    const shape2 = useRef([]);
    const shape3 = useRef([]);
    const shape4 = useRef([]);
    const shape5 = useRef([]);
    const shape6 = useRef([]);
    const shape7 = useRef([]);
    const shape8 = useRef([]);
    const shape9 = useRef([]);
    const cursor = useRef([]);

    const onMove = (e) => {
        setMouse([e.clientX, e.clientY])
    }

    useEffect(() => {
        const shapes = [
            shape9.current,
            shape8.current,
            shape7.current,
            shape6.current,
            shape5.current,
            shape4.current,
            shape3.current,
            shape2.current,
            shape.current,
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
                <div className="shape shape-9" ref={shape9}></div>
                <div className="shape shape-8" ref={shape8}></div>
                <div className="shape shape-7" ref={shape7}></div>
                <div className="shape shape-6" ref={shape6}></div>
                <div className="shape shape-5" ref={shape5}></div>
                <div className="shape shape-4" ref={shape4}></div>
                <div className="shape shape-3" ref={shape3}></div>
                <div className="shape shape-2" ref={shape2}></div>
                <div className="shape shape-1" ref={shape}></div>
            </div>

            <div className="content">
                <h1>BLACKVALENTINE!</h1>
            </div>
       </div>
    );
}

export default App;
