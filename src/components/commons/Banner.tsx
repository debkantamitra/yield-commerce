import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-[#F4F4F4] p-2 text-[14px] font-medium">
      <Image
        src={"/assets/icons/Arrow.svg"}
        alt="arrow"
        width={16}
        height={16}
        className="mr-6"
      />
      Get 10% off on business sign up
      <Image
        src={"/assets/icons/Arrow.svg"}
        alt="arrow"
        width={16}
        height={16}
        className="ml-6 rotate-180 transform"
      />
    </div>
  );
};

export default Banner;
