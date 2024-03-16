import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
  recentquiz?: string;
  abasicmusic?: string;
  sixtyfive?: string;
}

export default function CoverCard({
  recentquiz = "RECENT QUIZ",
  abasicmusic = "A Basic Music Quiz",
  sixtyfive = "65%",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="w-full bg-red-100_02 rounded-[20px]">
        <div className="h-[84px] relative">
          <Img
            src="images/img_mask_group_white_a700_84x327.svg"
            alt="image_one"
            className="justify-center h-[84px] left-0 bottom-0 right-0 top-0 m-auto absolute"
          />
          <div className="flex justify-between items-center w-max h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto absolute">
            <div className="flex flex-col items-start gap-[9px]">
              <Text size="s" as="p" className="!text-pink-900_87 tracking-[1.12px] opacity-0.5">
                {recentquiz}
              </Text>
              <div className="flex items-center gap-2">
                <Img src="images/img_icon_pink_900.svg" alt="icon_one" className="h-[24px] w-[24px]" />
                <Text size="lg" as="p" className="!text-pink-900">
                  {abasicmusic}
                </Text>
              </div>
            </div>
            <div className="self-start w-[17%]">
              <div className="h-[48px] w-[48px] bg-pink-100_02 relative rounded-[50%]">
                <div className="justify-center h-[48px] w-[48px] left-0 bottom-0 right-0 top-0 m-auto border-pink-A100 border-[3px] border-solid bg-pink-A100 absolute rounded-[50%]" />
                <Text
                  size="s"
                  as="p"
                  className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 text-center absolute"
                >
                  {sixtyfive}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
