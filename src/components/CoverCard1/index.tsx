import React from "react";
import { Text, Img, Button } from "./..";

interface Props {
  className?: string;
  findFriends?: string;
  featured?: string;
  takepartin?: string;
}

export default function CoverCard1({
  findFriends = "Find Friends",
  featured = "FEATURED",
  takepartin = "Take part in challenges with friends or other players",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="w-full bg-deep_purple-300 rounded-[20px]">
        <div className="h-[232px] relative">
          <Img
            src="images/img_group_white_a700.svg"
            alt="image_two"
            className="justify-center h-[232px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[20px]"
          />
          <Button
            size="4xl"
            shape="round"
            leftIcon={<Img src="images/img_icon_deep_purple_400_20x20.svg" alt="Icon" />}
            className="gap-2.5 bottom-[14%] right-0 left-0 m-auto font-medium min-w-[146px] absolute"
          >
            {findFriends}
          </Button>
          <Img
            src="images/img_2_blue_100.svg"
            alt="two_one"
            className="h-[56px] bottom-[18%] right-[5%] m-auto absolute"
          />
          <div className="flex justify-between items-center w-[61%] left-[5%] top-[7%] gap-5 m-auto absolute">
            <Img src="images/img_1_blue_100.svg" alt="one_one" className="h-[48px] w-[48px]" />
            <Text size="s" as="p" className="self-end !text-white-A700_a2 tracking-[1.12px] opacity-0.8">
              {featured}
            </Text>
          </div>
          <Text
            size="lg"
            as="p"
            className="w-[61%] top-[29%] right-0 left-0 m-auto !text-white-A700 text-center absolute"
          >
            {takepartin}
          </Text>
        </div>
      </div>
    </div>
  );
}
