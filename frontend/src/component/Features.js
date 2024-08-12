import tickright from '../assets/cicon.png';
const RegisterFeatures=({placeholder})=>{
    return(
     <div className="register-feature">
       <img src={tickright} alt="tickright" />
       <div>{placeholder}</div>
   </div>
    )
 }

export default RegisterFeatures;