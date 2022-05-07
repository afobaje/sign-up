import React from "react";
import image from "./img/pexels-los-muertos-crew-8784611.jpg";
// import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import StarRateIcon from '@mui/icons-material/StarRate';

const Intro = () => {
  return (
    <div
      className="col-span-2
    shadow-xl
    shadow-black
    "
    >
      <div
        className="
        p-40
        w-6

        "
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgb(243, 239, 239)",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            // backgroundColor: "rgba(0,0,0,0.5)",
            backgroundColor: "rgba(70, 69, 69, 0.5)",
          }}
        ></div>

        <div className="" style={{position:'relative'}}>
          <StarPurple500SharpIcon style={{color:'white',width:'100px',height:'60px',paddingBottom:'10px',marginBottom:'40px'}}/>
          <h2 className="font-medium text-5xl text-white">
            Start turning your ideas into reality
          </h2>
          <p className="font-medium text-white pt-10">
            Create a free account and get full access to all features for
            30-days.
          </p>
          <p className="font-medium text-white">
            No credit card needed. Trusted by over 4,000 professionals.
          </p>
          <div className="designs flex flex-row text-white">
            
           <span className="flex flex-row pt-5">
            <span style={{width: '2em',backgroundColor:'white',borderRadius:'100%', height:'2em'}}></span>
            <span style={{width: '2em',backgroundColor:'white',borderRadius:'100%', height:'2em'}}></span>
            <span style={{width: '2em',backgroundColor:'white',borderRadius:'100%', height:'2em'}}></span>
            <span style={{width: '2em',backgroundColor:'white',borderRadius:'100%', height:'2em'}}></span>
            <span style={{width: '2em',backgroundColor:'white',borderRadius:'100%', height:'2em'}}></span>
           </span>
            
            
            <span className='pt-5 pl-4'>
              <StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/>{'  '}<code>5.0</code>
              <p>from 200+ reviews</p>
            </span>
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;



