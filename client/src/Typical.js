import Typical from 'react-typical'

const Type =()=>{
    return (
        <Typical
        steps={['Graphic Designer !', 1000, 'UI/UX Designer !', 1000,'Sketch Artist !',1000,'Full Stack Developer !',1000]}
        loop={Infinity}
        wrapper="b"
      />
    )
}
export default Type;