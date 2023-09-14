import Image from "next/image";
import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center flex-x-2">
      <Image
        className="object-contain"
        height={50}
        width={50}
        src="https://www.okta.com/sites/default/files/Dev_Logo-02_White_Large.png"
        alt="logo"
      />
      <>{renderDefault(props)} </>
    </div>
  );
}

export default Logo;
