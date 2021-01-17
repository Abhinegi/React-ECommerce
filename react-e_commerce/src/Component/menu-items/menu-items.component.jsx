import './menu-items.scss';
import {withRouter} from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2.5) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const MenuItem = (prop)=>{
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <>
         <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }} >
        <div className="menu-item" style={{backgroundImage: 'url('+prop.imageUrl+')'}} 
        onClick={()=>prop.history.push(`${prop.match.url}${prop.linkUrl}`)}>
                <div className="title">
                     <h3>{prop.title.toUpperCase()}</h3>
                </div>
        </div>
        </animated.div>
        </>
    );
}

export default withRouter(MenuItem);