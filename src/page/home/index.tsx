import React from "react";
import "./styles.css";
import { checkHome, decoHome, logo } from "../../assets";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { path } from "../navigation/path";
const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: "user",
};
export default function Home() {
  const [code, setCode] = React.useState("");
  const navigate = useNavigate();
  const webcamRef = React.useRef<any>(null);
  const [imgSrc, setImgSrc] = React.useState<any>(null);

  const capture = () => {
    try {
        console.log('r',webcamRef.current);
        
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-[#E2F6FF] relative ">
      <div className="relative">
        <img src={decoHome} className="absolute top-0 right-0 w-60 h-28" />
      </div>
      <div className="flex items-center flex-col pt-12 relative">
        <img src={logo} className="w-40 h-auto" />
        <img src={checkHome} className="w-32 h-42 object-contain mt-10" />
        {code && (
          <p className="text-[#28A3F2] text-xl mx-6 text-center font-bold mt-5 uppercase">
            Bạn đã checkin
          </p>
        )}
        <p className="text-[#28A3F2] text-xl leading-9 text-center font-bold my-5">
          Chào mừng bạn đến với
          <br /> Sự Kiện
        </p>
        <div className="w-full px-6">
          <p className="text-[#405062] text-base text-center font-normal mb-20">
            {/* {data?.description} */} mô tả
          </p>
        </div>
      </div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        minScreenshotWidth={180}
        minScreenshotHeight={180}
      />
      <div className="absolute w-full bottom-[5%] flex flex-col items-center justify-center py-2 bg-[#E2F6FF] z-10">
        <button
          className="bg-[#1E9FF2] min-h-[50px] rounded-full flex items-center justify-center w-[90%]"
          //   onClick={() => {
          //     if (isFollowOA && !code) {
          //       handleCheckin();
          //     } else if (!!code && isFollowOA) {
          //       Swal.fire({
          //         title: "Bạn đã Checkin",
          //         icon: "info",
          //         confirmButtonText: "Xác nhận",
          //       });
          //     } else {
          //       refModalAlertFollow.current?.setShowModal(true);
          //     }
          //   }}
          onClick={()=>navigate(path.Checkin)}
        >
          <span className="text-[#FFFFFF] text-base text-center font-normal">
            Chụp Ảnh Check In
          </span>
        </button>
      </div>
    </div>
  );
}
