import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import CoverCard from "../../components/CoverCard";
import CoverCard1 from "../../components/CoverCard1";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CoverPage() {
  return (
    <>
      <Helmet>
        <title>Anfaas1618's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-pink-50">
        <div className="flex md:flex-col self-end justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1613px]">
          <div className="flex flex-col items-center w-[11%] md:w-full">
            <div className="h-full w-px opacity-0.2 bg-gray-100_6c" />
          </div>
          <div className="flex md:flex-col justify-between items-start w-[81%] md:w-full gap-5">
            <div className="flex flex-col w-[30%] md:w-full mt-[135px] gap-[74px] md:gap-[55px] sm:gap-[37px]">
              <div className="flex flex-col items-center w-[65%] md:w-full ml-[55px] gap-[52px] md:ml-0 sm:gap-[26px]">
                <Img src="images/img_logo.svg" alt="logo_one" className="h-[100px] w-[100px]" />
                <Heading size="5xl" as="h1" className="!text-gray-900_03 !font-nunito">
                  Queezy
                </Heading>
              </div>
              <div className="p-2.5 bg-white-A700 rounded-[40px]">
                <div className="flex flex-col gap-6 bg-deep_purple-400 rounded-[32px]">
                  <div className="flex flex-col items-center gap-[21px]">
                    <Img
                      src="images/img_iphone_x_11_pro.svg"
                      alt="iphonex11pro"
                      className="self-stretch h-[44px] md:h-auto"
                    />
                    <div className="flex justify-between items-center w-[87%] md:w-full gap-5">
                      <div className="flex flex-col items-start gap-[9px]">
                        <div className="flex items-center gap-2">
                          <Img src="images/img_frame_red_100.svg" alt="image" className="h-[20px] w-[20px]" />
                          <Text size="xs" as="p" className="!text-red-100 tracking-[0.48px] uppercase !font-medium">
                            GOOD MORNING
                          </Text>
                        </div>
                        <Text as="p" className="!text-white-A700 !font-medium">
                          Madelyn Dias
                        </Text>
                      </div>
                      <Img
                        src="images/img_property_1_women.svg"
                        alt="avatar_one"
                        className="self-start h-[56px] w-[56px]"
                      />
                    </div>
                    <CoverCard className="flex justify-center items-center w-[87%] md:w-full" />
                    <CoverCard1 className="flex justify-center items-center w-[87%] md:w-full" />
                  </div>
                  <div>
                    <div className="pt-6 sm:pt-5 rounded-tl-[32px] rounded-tr-[32px] bg-white-A700">
                      <div className="flex flex-col items-center">
                        <div className="flex flex-col w-[87%] md:w-full gap-4">
                          <div className="flex justify-between items-start gap-5">
                            <Text size="xl" as="p" className="!text-gray-900_03">
                              Live Quizzes
                            </Text>
                            <a href="#">
                              <Text size="s" as="p" className="!text-deep_purple-400 text-right">
                                See all
                              </Text>
                            </a>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-center flex-1">
                              <div className="w-full p-2 border-deep_purple-50 border-2 border-solid bg-white-A700 rounded-[20px]">
                                <div className="flex items-center gap-[19px]">
                                  <Img
                                    src="images/img_frame_194.svg"
                                    alt="image"
                                    className="h-[64px] w-[64px] rounded-[20px]"
                                  />
                                  <div className="flex flex-col flex-1">
                                    <div className="flex justify-between gap-5">
                                      <Text size="md" as="p" className="mb-[11px] !text-gray-900_03">
                                        Statistics Math Quiz
                                      </Text>
                                      <Img
                                        src="images/img_arrowdown.svg"
                                        alt="image_one"
                                        className="h-[24px] w-[24px] mt-[11px]"
                                      />
                                    </div>
                                    <Text size="xs" as="p" className="mt-[-5px] !text-gray-500_01">
                                      Math • 12 Quizzes
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-center flex-1">
                              <div className="flex flex-col items-center w-full">
                                <div className="self-stretch p-2 border-deep_purple-50 border-2 border-solid bg-white-A700 rounded-[20px]">
                                  <div className="flex items-center gap-[19px]">
                                    <Img
                                      src="images/img_frame.svg"
                                      alt="image"
                                      className="h-[64px] w-[64px] rounded-[20px]"
                                    />
                                    <div className="flex flex-col flex-1">
                                      <div className="flex justify-between gap-5">
                                        <Text size="md" as="p" className="mb-[11px] !text-gray-900_03">
                                          Integers Quiz
                                        </Text>
                                        <Img
                                          src="images/img_arrowdown.svg"
                                          alt="arrowright_one"
                                          className="h-[24px] w-[24px] mt-[11px]"
                                        />
                                      </div>
                                      <Text size="xs" as="p" className="mt-[-5px] !text-gray-500_01">
                                        Math • 10 Quizzes
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col w-[15%] md:w-full mt-[-47px]">
                                  <Button color="deep_purple_400" shape="circle" className="w-[48px] shadow-xs">
                                    <Img src="images/img_icon_white_a700_48x48.svg" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[83px] mt-[-24px] relative">
                          <Img
                            src="images/img_vector_white_a700.svg"
                            alt="vector_one"
                            className="justify-center h-[83px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="flex md:flex-row w-[86%] gap-[52px] top-1/4 right-0 left-0 m-auto absolute">
                            <div className="flex flex-col w-full">
                              <Img
                                src="images/img_icon_gray_900_03_24x24.svg"
                                alt="icon_one"
                                className="h-[24px] md:w-[24px]"
                              />
                            </div>
                            <div className="flex flex-col w-full">
                              <Img
                                src="images/img_icon_blue_gray_100_24x24.svg"
                                alt="icon_one"
                                className="h-[24px] md:w-[24px]"
                              />
                            </div>
                            <div className="flex flex-col w-full">
                              <Img src="images/img_icon_1.svg" alt="icon_one" className="h-[24px] md:w-[24px]" />
                            </div>
                            <div className="flex flex-col w-full">
                              <Img src="images/img_icon_2.svg" alt="icon_one" className="h-[24px] md:w-[24px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[30%] md:w-full gap-[70px] md:gap-[52px] sm:gap-[35px]">
              <div className="pb-2.5 bg-white-A700 rounded-[40px]">
                <div className="pb-2 bg-deep_purple-400 rounded-[32px]">
                  <div className="h-[203px] relative">
                    <Img
                      src="images/img_rectangle.png"
                      alt="image_three"
                      className="justify-center h-[203px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[32px]"
                    />
                    <div className="flex flex-col w-[91%] gap-4 top-0 right-0 left-0 m-auto absolute">
                      <div>
                        <div className="p-[13px] bg-deep_purple-50 rounded-[20px]">
                          <div className="flex justify-center items-start mb-1">
                            <div className="flex flex-col w-[12%]">
                              <Text
                                size="md"
                                as="p"
                                className="flex justify-center items-center h-[32px] w-[32px] !text-deep_purple-400 text-center bg-white-A700 rounded-[50%]"
                              >
                                5
                              </Text>
                            </div>
                            <div className="flex flex-col ml-4 gap-[9px] flex-1">
                              <Text size="s" as="p" className="!text-gray-900_03">
                                Who was the 2 most streamed artist on Spotify in 2019?
                              </Text>
                              <Text size="xs" as="p" className="!text-blue_gray-400">
                                Checkbox
                              </Text>
                            </div>
                            <div className="h-[56px] w-[56px] ml-2 pt-2 px-2 bg-blue-100 relative rounded-[20px]">
                              <div className="h-[40px] w-[40px] bottom-0 right-0 left-0 m-auto bg-white-A700 absolute rounded-lg" />
                              <Button
                                color="deep_purple_400"
                                size="xs"
                                className="w-[24px] bottom-[14%] right-0 left-0 m-auto absolute rounded-md"
                              >
                                <Img src="images/img_icon_white_a700_24x24.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button color="deep_purple_400" size="7xl" shape="round" className="w-full sm:px-5 font-medium">
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2.5 bg-white-A700 rounded-[40px]">
                <div className="pb-2 bg-deep_purple-400 rounded-[32px]">
                  <div className="flex flex-col items-center gap-[11px]">
                    <div className="self-stretch">
                      <div>
                        <div className="h-[414px] relative">
                          <Img
                            src="images/img_group_blue_100.svg"
                            alt="image_four"
                            className="justify-center h-[414px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="w-full top-0 right-0 left-0 m-auto absolute">
                            <Img
                              src="images/img_iphone_x_11_pro.svg"
                              alt="iphonex11pro"
                              className="self-stretch h-[44px] md:h-auto"
                            />
                            <div className="h-[244px] relative">
                              <Img
                                src="images/img_illustration_deep_purple_300.svg"
                                alt="illustration"
                                className="justify-center h-[244px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <Img
                                src="images/img_icon_white_a700.svg"
                                alt="icon_five"
                                className="h-[24px] w-[24px] left-[6%] top-[7%] m-auto absolute"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-[-130px] z-[1]">
                          <div className="h-[504px] relative">
                            <Img
                              src="images/img_rectangle_white_a700.svg"
                              alt="image_five"
                              className="justify-center h-[504px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[32px]"
                            />
                            <div className="flex flex-col justify-center w-full h-full gap-[68px] left-0 bottom-0 right-0 top-0 m-auto sm:gap-[34px] absolute">
                              <div className="flex flex-col gap-[23px]">
                                <div className="flex flex-col items-start gap-4">
                                  <Text size="s" as="p" className="!text-gray-500_01 tracking-[1.12px]">
                                    SPORTS
                                  </Text>
                                  <Text as="p" className="!text-gray-900_03 !font-medium">
                                    Basic Trivia Quiz
                                  </Text>
                                </div>
                                <div className="flex justify-between gap-8 p-4 bg-deep_purple-50 rounded-[20px]">
                                  <div className="flex justify-center items-center w-[46%] gap-3">
                                    <div className="flex flex-col w-[27%]">
                                      <Button color="deep_purple_400" size="md" shape="circle" className="w-[32px]">
                                        <Img src="images/img_icon_white_a700_32x32.svg" />
                                      </Button>
                                    </div>
                                    <Text size="s" as="p" className="!text-black-900 !font-graphik">
                                      10 questions
                                    </Text>
                                  </div>
                                  <div className="flex justify-center items-start w-[43%] mr-3 gap-3 md:mr-0">
                                    <div className="flex flex-col w-[29%]">
                                      <Button color="pink_A100" size="md" shape="circle" className="w-[32px]">
                                        <Img src="images/img_icon_32x32.svg" />
                                      </Button>
                                    </div>
                                    <Text size="s" as="p" className="mt-1.5 !text-black-900 !font-graphik">
                                      +100 Points
                                    </Text>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-[13px]">
                                    <Text size="s" as="p" className="!text-gray-500_01 tracking-[1.12px]">
                                      DESCRIPTION
                                    </Text>
                                    <Text size="md" as="p" className="!text-gray-900_03 !font-normal">
                                      Any time is a good time for a quiz and even better if that happens to be a
                                      football themed quiz!
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center w-[47%] md:w-full gap-5">
                                  <div className="flex flex-col items-center w-[28%] pt-1.5 px-1.5 bg-blue-100 rounded-[50%]">
                                    <Img
                                      src="images/img_toyfaces_tansparent_bg_29.png"
                                      alt="toyfaces_one"
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start gap-1">
                                    <Text size="s" as="p" className="!text-gray-900_03">
                                      Brandon Curtis
                                    </Text>
                                    <Text size="xs" as="p" className="!text-gray-500_01">
                                      Creator
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-center gap-4">
                                <Button
                                  size="7xl"
                                  shape="round"
                                  className="sm:px-5 font-medium border-deep_purple-400_33 border border-solid min-w-[142px]"
                                >
                                  Play Solo
                                </Button>
                                <Button
                                  color="deep_purple_400"
                                  size="7xl"
                                  shape="round"
                                  className="font-medium min-w-[169px]"
                                >
                                  Play with Friends
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[5px] w-[36%] bg-white-A700 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[30%] md:w-full gap-20 md:gap-[60px] sm:gap-10">
              <div className="pb-2.5 bg-white-A700 rounded-[40px]">
                <div className="h-[602px] pb-2 bg-deep_purple-400 relative rounded-[32px]">
                  <div className="justify-center h-[584px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img
                      src="images/img_group_white_a700_584x375.png"
                      alt="image_six"
                      className="justify-center h-[584px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex justify-center items-center w-[85%] top-[3%] right-0 left-0 m-auto absolute">
                      <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-col items-center gap-[17px]">
                          <Img src="images/img_avatar.svg" alt="avatar_three" className="h-[60px] w-[60px]" />
                          <div className="flex flex-col items-center gap-[7px]">
                            <Text size="md" as="p" className="!text-white-A700 text-center">
                              Ruben Geidt
                            </Text>
                            <Button
                              color="deep_purple_300"
                              size="lg"
                              className="font-medium min-w-[75px] rounded-[12px]"
                            >
                              1,469 QP
                            </Button>
                          </div>
                        </div>
                        <div>
                          <div className="h-[180px] relative">
                            <Img
                              src="images/img_group_deep_purple_300.svg"
                              alt="image_seven"
                              className="justify-center h-[180px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <Heading
                              size="6xl"
                              as="h2"
                              className="w-max top-[14%] right-0 left-0 m-auto !text-white-A700 !font-graphik text-center absolute"
                            >
                              2
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <div>
                          <div className="flex flex-col items-center">
                            <div className="w-[59%] md:w-full">
                              <div className="flex flex-col items-center">
                                <div className="w-[67%] md:w-full z-[1]">
                                  <div className="h-[40px] w-[40px] relative">
                                    <Img
                                      src="images/img_star_2.svg"
                                      alt="image_eight"
                                      className="justify-center h-[40px] w-full md:w-[40px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute rounded"
                                    />
                                    <Img
                                      src="images/img_icon_white_a700_20x20.svg"
                                      alt="icon_eleven"
                                      className="justify-center h-[20px] w-[20px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_avatar_red_100_60x60.png"
                                  alt="avatar_five"
                                  className="h-[60px] w-full md:w-[60px] md:h-auto mt-[-8px] object-cover"
                                />
                              </div>
                            </div>
                            <Text size="md" as="p" className="mt-[17px] !text-white-A700 text-center">
                              Adison Press
                            </Text>
                            <Button
                              color="deep_purple_300"
                              size="lg"
                              className="mt-[7px] font-medium min-w-[77px] rounded-[12px]"
                            >
                              2,569 QP
                            </Button>
                          </div>
                        </div>
                        <div className="h-[262px] relative">
                          <Img
                            src="images/img_group_deep_purple_100.png"
                            alt="image_nine"
                            className="justify-center h-[262px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <Heading
                            size="7xl"
                            as="h3"
                            className="w-max top-[10%] right-0 left-0 m-auto !text-white-A700 !font-graphik text-center absolute"
                          >
                            1
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-col self-end w-full gap-2">
                        <div className="flex flex-col items-center gap-[17px]">
                          <Img src="images/img_avatar_blue_100.svg" alt="avatar_seven" className="h-[60px] w-[60px]" />
                          <div className="flex flex-col items-center gap-[7px]">
                            <Text size="md" as="p" className="!text-white-A700 text-center">
                              Jakob Levin
                            </Text>
                            <Button
                              color="deep_purple_300"
                              size="lg"
                              className="font-medium min-w-[75px] rounded-[12px]"
                            >
                              1,053 QP
                            </Button>
                          </div>
                        </div>
                        <div>
                          <div className="h-[180px] relative">
                            <Img
                              src="images/img_group_deep_purple_300.svg"
                              alt="image_ten"
                              className="justify-center h-[180px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <Heading
                              size="4xl"
                              as="h4"
                              className="w-max top-[13%] right-0 left-0 m-auto !text-white-A700 !font-graphik text-center absolute"
                            >
                              3
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-[96%] bottom-[1%] right-0 left-0 m-auto absolute">
                    <div className="h-[248px] w-full relative">
                      <Img
                        src="images/img_base.svg"
                        alt="base_one"
                        className="justify-center h-[248px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                      <div className="flex flex-col md:flex-row sm:flex-col w-[91%] gap-4 bottom-[6%] right-0 left-0 m-auto absolute">
                        <div className="flex items-center gap-4 p-4 bg-white-A700 flex-1 rounded-[20px]">
                          <div className="flex flex-col w-[12%]">
                            <Text
                              size="xs"
                              as="p"
                              className="flex justify-center items-center h-[24px] !text-gray-500_01 text-center !font-medium border-gray-300 border border-solid rounded-[50%]"
                            >
                              4
                            </Text>
                          </div>
                          <Img
                            src="images/img_avatar_deep_purple_a100.png"
                            alt="image"
                            className="w-[60px] object-cover"
                          />
                          <div className="flex flex-col self-end items-start gap-2">
                            <Text size="md" as="p" className="!text-gray-900_03">
                              Madelyn Dias
                            </Text>
                            <Text size="s" as="p" className="!text-gray-500_01 !font-normal">
                              590 points
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white-A700 flex-1 rounded-[20px]">
                          <div className="flex flex-col w-[12%]">
                            <Text
                              size="xs"
                              as="p"
                              className="flex justify-center items-center h-[24px] !text-gray-500_01 text-center !font-medium border-gray-300 border border-solid rounded-[50%]"
                            >
                              5
                            </Text>
                          </div>
                          <Img src="images/img_avatar_red_100.svg" alt="avatar_one" className="h-[60px] w-[60px]" />
                          <div className="flex flex-col items-start gap-2.5">
                            <Text size="md" as="p" className="!text-gray-900_03">
                              Zain Vaccaro
                            </Text>
                            <Text size="s" as="p" className="!text-gray-500_01 !font-normal">
                              448 points
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pb-[470px] md:pb-5">
                <Img
                  src="images/img_iphone_x_11_pro_gray_900_03.svg"
                  alt="iphonex11pro"
                  className="self-stretch h-[44px] md:h-auto"
                />
                <div className="flex justify-between items-center w-[69%] md:w-full mt-[19px] gap-5">
                  <Text as="p" className="!text-gray-900_03 !font-graphik text-center !font-medium">
                    Review Answers
                  </Text>
                  <Img
                    src="images/img_property_1_reorder.svg"
                    alt="icon_thirteen"
                    className="self-end h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex justify-center w-[87%] md:w-full mt-[21px]">
                  <div className="w-full">
                    <div className="flex flex-col pt-4 gap-6 px-4 bg-deep_purple-400 rounded-[20px]">
                      <div className="flex justify-between items-center mt-2 gap-5">
                        <div className="flex flex-col items-start gap-[9px]">
                          <Text
                            size="s"
                            as="p"
                            className="!text-white-A700_99 tracking-[1.12px] !font-graphik opacity-0.7"
                          >
                            QUIZ NAME
                          </Text>
                          <Text size="md" as="p" className="!text-white-A700">
                            English Premier League Quiz
                          </Text>
                        </div>
                        <div className="h-[48px] w-[48px] relative">
                          <Img
                            src="images/img_icon_15.svg"
                            alt="icon_fifteen"
                            className="justify-center h-[24px] w-[24px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="justify-center h-[48px] w-[48px] left-0 bottom-0 right-0 top-0 m-auto opacity-0.1 bg-white-A700_63 absolute rounded-[12px]" />
                        </div>
                      </div>
                      <div className="h-[148px] relative">
                        <Img
                          src="images/img_mask_group_pink_a100.svg"
                          alt="image_eleven"
                          className="justify-center h-[148px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex justify-center items-start w-full h-full gap-4 left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="w-[45%]">
                            <div className="h-[100px] w-[100px] relative">
                              <CircularProgressbar
                                value={70}
                                styles={{
                                  trail: { strokeWidth: 50 },
                                  path: { strokeLinecap: "square", strokeWidth: 9 },
                                }}
                                className="justify-center h-[100px] w-full left-0 bottom-0 right-0 top-0 m-auto border-white-A700_6c border-[10px] border-solid absolute"
                              />
                              <div className="w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                <Text size="md" as="p" className="!text-white-A700 !font-graphik text-center">
                                  <span className="text-white-A700 text-[28px]">8</span>
                                  <span className="text-white-A700">/10</span>
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Text size="md" as="p" className="mt-[18px] !text-white-A700">
                            You answered 8 out of 10 questions
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[83%] md:w-full mt-6 gap-10">
                  <Text size="lg" as="p" className="!text-gray-900_03 !font-graphik">
                    Your Answers
                  </Text>
                  <div className="flex flex-col items-end justify-center ml-4 pb-[470px] md:pb-5 md:ml-0">
                    <div className="flex flex-col self-stretch gap-4">
                      <div className="flex justify-center items-start gap-4 flex-1">
                        <div className="flex flex-col w-[11%]">
                          <Text
                            size="md"
                            as="p"
                            className="flex justify-center items-center h-[32px] w-[32px] !text-deep_purple-400 text-center bg-white-A700 rounded-[50%]"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-start gap-2">
                              <Text size="s" as="p" className="w-[90%] !text-gray-900_03 !font-graphik">
                                Can you name the top 3 Premier League goal scorers?
                              </Text>
                              <Img src="images/img_icon_info.svg" alt="image" className="h-[24px] w-[24px]" />
                            </div>
                            <Text size="s" as="p" className="!text-blue_gray-400 !font-graphik !font-normal">
                              -
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-start gap-4 flex-1">
                        <div className="flex flex-col w-[11%]">
                          <Text
                            size="md"
                            as="p"
                            className="flex justify-center items-center h-[32px] w-[32px] !text-deep_purple-400 text-center bg-white-A700 rounded-[50%]"
                          >
                            2
                          </Text>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-start gap-2">
                              <Text size="s" as="p" className="w-[90%] !text-gray-900_03 !font-graphik">
                                Name the clubs in England&#39;s top football division for the 2020–21 season.
                              </Text>
                              <Img src="images/img_icon_info.svg" alt="iconinfo_one" className="h-[24px] w-[24px]" />
                            </div>
                            <Text size="s" as="p" className="!text-blue_gray-400 !font-graphik !font-normal">
                              -
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-start gap-4 flex-1">
                        <div className="flex flex-col w-[11%]">
                          <Text
                            size="md"
                            as="p"
                            className="flex justify-center items-center h-[32px] w-[32px] !text-deep_purple-400 text-center bg-white-A700 rounded-[50%]"
                          >
                            3
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                          <Text size="s" as="p" className="!text-gray-900_03 !font-graphik">
                            Which player scored the fastest hat-trick in the Premier League?
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-graphik !font-normal">
                            Sadio Mane
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-center items-start gap-4 flex-1">
                        <div className="flex flex-col w-[11%]">
                          <Text
                            size="md"
                            as="p"
                            className="flex justify-center items-center h-[32px] w-[32px] !text-deep_purple-400 text-center bg-white-A700 rounded-[50%]"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                          <Text size="s" as="p" className="!text-gray-900_03 !font-graphik">
                            Theodorus of Samos is the person who invented keys?
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-graphik !font-normal">
                            True
                          </Text>
                        </div>
                      </div>
                      <div className="flex justify-between items-start gap-5 flex-1">
                        <div className="w-[11%]">
                          <div className="h-[32px] w-[32px] relative">
                            <div className="justify-center h-[32px] w-[32px] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-[50%]" />
                            <Text
                              size="md"
                              as="p"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-deep_purple-400 text-center absolute"
                            >
                              5
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-[46px]">
                          <Text size="s" as="p" className="!text-gray-900_03 !font-graphik">
                            Who are three players share the record for most Premier League red cards (8)?
                          </Text>
                          <Text size="s" as="p" className="!text-blue_gray-400 !font-graphik !font-normal">
                            Light Year
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text size="s" as="p" className="mt-[72px] mr-8 md:mr-0 !text-gray-900_03 !font-graphik">
                      How to pronounce Wojciech Szczesny?
                    </Text>
                    <div className="flex self-stretch justify-between items-start mt-[82px] mr-0.5 gap-5 md:mr-0">
                      <div className="h-[32px] w-[32px] relative">
                        <div className="justify-center h-[32px] w-[32px] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-[50%]" />
                        <Text
                          size="md"
                          as="p"
                          className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-deep_purple-400 text-center absolute"
                        >
                          6
                        </Text>
                      </div>
                      <div className="flex justify-center items-center mt-1">
                        <Img src="images/img_vector_deep_purple_400.svg" alt="vector_three" className="h-[15px]" />
                        <Img
                          src="images/img_vector_deep_purple_400_8x2.svg"
                          alt="vector_five"
                          className="h-[8px] ml-[3px]"
                        />
                        <Img src="images/img_vector_deep_purple_400_8x2.svg" alt="vector_seven" className="h-[14px]" />
                      </div>
                    </div>
                    <Text size="s" as="p" className="self-start mt-4 !text-blue_gray-400 !font-graphik !font-normal">
                      voy·chek shez·nee
                    </Text>
                    <Text size="s" as="p" className="mt-[166px] !text-gray-900_03 !font-graphik">
                      Which three players shared the Premier League Golden Boot in 2018-19?
                    </Text>
                    <div className="self-stretch mt-[166px] mr-[263px] md:mr-0">
                      <div>
                        <div className="h-[32px] w-[32px] relative">
                          <div className="justify-center h-[32px] w-[32px] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-[50%]" />
                          <Text
                            size="md"
                            as="p"
                            className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-deep_purple-400 text-center absolute"
                          >
                            7
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text size="s" as="p" className="mt-9 mr-5 md:mr-0 !text-blue_gray-400 !font-graphik !font-normal">
                      Mohamed Salah, Sadio Mane, Aubameyang
                    </Text>
                    <Text size="s" as="p" className="mt-[290px] !text-gray-900_03 !font-graphik">
                      What is the best club in England?
                    </Text>
                    <div className="self-stretch mt-[290px] mr-[263px] md:mr-0 z-[1]">
                      <div>
                        <div className="h-[32px] w-[32px] relative">
                          <div className="justify-center h-[32px] w-[32px] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-[50%]" />
                          <Text
                            size="md"
                            as="p"
                            className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-deep_purple-400 text-center absolute"
                          >
                            8
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      size="s"
                      as="p"
                      className="mt-[-4px] mr-5 md:mr-0 !text-blue_gray-400 !font-graphik !font-normal"
                    >
                      Manchester United
                    </Text>
                    <Text size="s" as="p" className="mt-[354px] !text-gray-900_03 !font-graphik">
                      Sort the cartoon name in the picture above into order
                    </Text>
                    <div className="self-stretch mt-[354px] mr-[263px] md:mr-0">
                      <div>
                        <div className="h-[32px] w-[32px] relative">
                          <div className="justify-center h-[32px] w-[32px] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-[50%]" />
                          <Text
                            size="md"
                            as="p"
                            className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-deep_purple-400 text-center absolute"
                          >
                            9
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text size="s" as="p" className="mt-4 mr-5 md:mr-0 !text-blue_gray-400 !font-graphik !font-normal">
                      Bart Simpson
                    </Text>
                    <Text size="s" as="p" className="mt-[438px] !text-gray-900_03 !font-graphik">
                      What does UAV stand for drone?
                    </Text>
                    <div className="self-stretch mt-[438px] mr-[263px] md:mr-0 z-[2]">
                      <div>
                        <div className="h-[32px] w-[32px] relative">
                          <div className="justify-center h-[32px] w-[32px] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-[50%]" />
                          <Text
                            size="md"
                            as="p"
                            className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-deep_purple-400 text-center absolute"
                          >
                            10
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      size="s"
                      as="p"
                      className="mt-[-4px] mr-7 md:mr-0 !text-blue_gray-400 !font-graphik !font-normal"
                    >
                      Unmanned Aerial Vehicle
                    </Text>
                  </div>
                </div>
                <div className="self-stretch h-[-534px] w-full mt-16 bg-white-A700 shadow-sm rounded-[-267px]" />
                <Text
                  size="md"
                  as="p"
                  className="flex self-end justify-center items-center h-px mt-[550px] pt-4 px-[35px] sm:px-5 !text-white-A700 text-center bg-deep_purple-400"
                >
                  Submit
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="flex self-start justify-center items-center h-px mt-[550px] pt-4 px-[31px] sm:px-5 !text-deep_purple-400 text-center border-deep_purple-400_33 border border-solid bg-white-A700"
                >
                  Edit Answer
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
