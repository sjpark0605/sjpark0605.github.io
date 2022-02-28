import React, { useEffect } from 'react';
import Typed from 'typed.js';

function MainFront() {

	const el = React.useRef(null);
	const typed = React.useRef(null);

    useEffect(() => {
        const options = {
            strings: [
            'Student',
            'Software Engineer'
          ],
          loop: true,
          typeSpeed: 50,
          backSpeed: 50,
        };
        
        typed.current = new Typed(el.current, options);
        
        return () => {
          // Make sure to destroy Typed instance during cleanup
          // to prevent memory leaks
          typed.current.destroy();
        }
      }, [])

    return (
        <div id="MainFrameComponent">
            <section id="MainFront" className="d-flex flex-column justify-content-around">
                <div className="container">
                    <h1>Sejin Park</h1>
                    <p>I'm a <span ref={el}/></p>
                </div>
            </section>
        </div>
    )
}

export default MainFront;