import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Text, Button, Switch, SelectBox, Input, TextArea } from "../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ComponentsPage() {
  const [searchBarValue12, setSearchBarValue12] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Anfaas1618's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[120px] gap-[84px] md:gap-[63px] md:pb-5 sm:gap-[42px] bg-white-A700">
        <header className="flex flex-col" />
        <div className="w-full mx-auto md:p-5 max-w-7xl">
          <div className="flex flex-col">
            <Text size="5xl" as="p" className="!text-gray-900_03">
              Form elements
            </Text>
            <div className="h-[4px] mt-[29px] bg-deep_purple-50" />
            <div className="flex md:flex-col justify-between items-start w-[93%] md:w-full mt-[70px] gap-5">
              <div className="flex flex-col w-[62%] md:w-full gap-[30px]">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Button
                </Text>
                <div className="p-6 sm:p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center w-[70%] md:w-full gap-5">
                      <Button
                        color="deep_purple_400"
                        size="7xl"
                        shape="round"
                        leftIcon={<Img src="images/img_icon.svg" alt="Icon" />}
                        className="gap-4 sm:px-5 font-medium min-w-[327px]"
                      >
                        Button
                      </Button>
                      <Button
                        size="4xl"
                        shape="round"
                        leftIcon={<Img src="images/img_icon_deep_purple_400_20x20.svg" alt="Icon" />}
                        className="gap-2.5 font-medium min-w-[118px]"
                      >
                        Button
                      </Button>
                    </div>
                    <div className="flex gap-8">
                      <Button color="deep_purple_400" size="7xl" shape="round" className="w-full sm:px-5 font-medium">
                        Button
                      </Button>
                      <Button
                        size="7xl"
                        shape="round"
                        leftIcon={<Img src="images/img_flatcoloriconsgoogle.svg" alt="flat-color-icons:google" />}
                        className="w-full gap-4 sm:px-5 !text-gray-900_03 font-medium border-gray-300 border-2 border-solid"
                      >
                        Login with Google
                      </Button>
                    </div>
                    <div className="flex gap-8">
                      <Button color="deep_purple_50" size="7xl" shape="round" className="w-full sm:px-5 font-medium">
                        Button
                      </Button>
                      <Button
                        color="light_blue_900"
                        size="7xl"
                        shape="round"
                        leftIcon={<Img src="images/img_vector.svg" alt="Vector" />}
                        className="w-full gap-4 sm:px-5 font-medium"
                      >
                        Login with Facebook
                      </Button>
                    </div>
                    <div className="flex justify-center w-[48%] md:w-full p-[18px]">
                      <Text size="md" as="p" className="self-start !text-deep_purple-400 !font-graphik text-center">
                        Button
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[32%] md:w-full gap-[30px]">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Search Bar
                </Text>
                <div className="flex flex-col items-center gap-8 p-6 sm:p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <Input
                    color="deep_purple_50"
                    shape="round"
                    name="icon"
                    placeholder={`Quiz, categories, or friends`}
                    prefix={<Img src="images/img_icon_gray_900_03.svg" alt="Icon" />}
                    className="self-stretch gap-4 sm:pr-5"
                  />
                  <Input
                    color="deep_purple_50"
                    shape="round"
                    name="search"
                    placeholder={`Quiz, categories, or friends`}
                    value={searchBarValue12}
                    onChange={(e: string) => setSearchBarValue12(e)}
                    prefix={<Img src="images/img_icon_gray_900_03.svg" alt="Icon" className="cursor-pointer" />}
                    suffix={
                      searchBarValue12?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue12("")}
                          height={24}
                          width={24}
                          fillColor="#0b082aff"
                        />
                      ) : null
                    }
                    className="self-stretch gap-4 sm:pr-5"
                  />
                  <div className="flex self-start items-center gap-4 p-4 bg-deep_purple-50 rounded-[20px]">
                    <Img src="images/img_icon_gray_900_03.svg" alt="icon_two" className="h-[24px] w-[24px]" />
                    <Text size="md" as="p" className="self-start !text-gray-900_03 !font-normal">
                      Ma
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-start w-[96%] md:w-full mt-[70px] gap-5">
              <div className="flex flex-col w-[31%] md:w-full gap-[30px]">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Poll
                </Text>
                <div className="flex flex-col gap-8 p-6 sm:p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <Input
                    shape="round"
                    name="optionCounter"
                    placeholder={`Option 1`}
                    className="sm:px-5 border-deep_purple-50 border-2 border-solid"
                  />
                  <div>
                    <div className="flex items-center gap-[21px] border-deep_purple-50 border-2 border-solid bg-white-A700 rounded-[20px]">
                      <Input
                        color="deep_purple_400"
                        shape="round"
                        name="optionCounter"
                        placeholder={`Option 2`}
                        className="sm:px-5 font-medium flex-1"
                      />
                      <Text size="s" as="p" className="!text-deep_purple-400 text-right">
                        92%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[64%] md:w-full gap-[30px]">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Add Answer
                </Text>
                <div className="flex md:flex-col justify-end items-start gap-8 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="w-full my-2">
                    <div className="p-6 sm:p-5 bg-white-A700 rounded-[24px]">
                      <div className="flex flex-col mb-2 gap-4">
                        <div className="flex flex-col gap-[11px]">
                          <Text size="md" as="p" className="!text-gray-900_03">
                            Add Answer
                          </Text>
                          <Input
                            color="deep_purple_50"
                            size="md"
                            name="add_answer"
                            placeholder={`Add answer`}
                            className="sm:px-5 rounded-[16px]"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between items-start gap-5">
                            <Text size="md" as="p" className="mt-0.5 !text-gray-900_03 !font-graphik">
                              Correct answer
                            </Text>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="p-6 sm:p-5 bg-white-A700 rounded-[24px]">
                      <div className="flex flex-col mb-2 gap-4">
                        <div className="flex flex-col gap-3">
                          <Text size="md" as="p" className="!text-gray-900_03 !font-graphik">
                            Add Answer
                          </Text>
                          <Input
                            shape="round"
                            name="input_one"
                            placeholder={`Add answer`}
                            prefix={
                              <div className="flex justify-center items-center w-[24px] h-[24px] border-deep_purple-400 border-2 bg-deep_purple-50 rounded-[50%]">
                                <Img src="images/img_icon_deep_purple_50.svg" alt="Icon" />
                              </div>
                            }
                            className="gap-[11px] sm:pr-5 border-deep_purple-50 border-2 border-solid"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between items-start gap-5">
                            <Text size="md" as="p" className="mt-0.5 !text-gray-900_03 !font-graphik">
                              Correct answer
                            </Text>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[85%] md:w-full mt-[73px] gap-[26px]">
              <Text size="4xl" as="p" className="!text-gray-900_03">
                Input
              </Text>
              <div className="p-6 sm:p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                <div className="flex flex-col items-end gap-8">
                  <div className="flex md:flex-col self-stretch justify-end gap-8">
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`alfonso@gmail.com`}
                      prefix={<Img src="images/img_icon_deep_purple_400.svg" alt="Icon" />}
                      className="w-full gap-4 sm:pr-5 !text-gray-900_03 border-deep_purple-400 border-2 border-solid"
                    />
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Your email address`}
                      prefix={<Img src="images/img_icon_deep_purple_400.svg" alt="Icon" />}
                      className="w-full gap-4 sm:pr-5 border-deep_purple-50 border-2 border-solid"
                    />
                    <Input
                      shape="round"
                      name="enter_quiz"
                      placeholder={`Enter quiz title`}
                      className="w-full sm:px-5 border-deep_purple-50 border-2 border-solid"
                    />
                  </div>
                  <div className="flex md:flex-col self-stretch justify-end gap-8">
                    <div className="flex md:flex-col justify-end gap-8 flex-1">
                      <Input
                        size="sm"
                        shape="round"
                        name="propertyone_one"
                        prefix={<Img src="images/img_icon_deep_purple_400_24x24.svg" alt="Icon" />}
                        suffix={<Img src="images/img_icon_blue_gray_100.svg" alt="Icon" />}
                        className="w-full gap-[35px] border-deep_purple-400 border-2 border-solid"
                      />
                      <Input
                        shape="round"
                        type="password"
                        name="password"
                        placeholder={`Your password`}
                        prefix={<Img src="images/img_icon_deep_purple_400_24x24.svg" alt="Icon" />}
                        suffix={<Img src="images/img_icon_blue_gray_100.svg" alt="Icon" />}
                        className="w-full gap-4 border-deep_purple-50 border-2 border-solid"
                      />
                    </div>
                    <div className="flex justify-between items-center w-[32%] md:w-full gap-5 p-4 border-deep_purple-50 border-2 border-solid bg-white-A700 rounded-[20px]">
                      <Text size="md" as="p" className="self-end !text-gray-500_01 !font-normal">
                        Choose quiz category
                      </Text>
                      <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-end items-center gap-8">
                    <Input
                      shape="round"
                      name="property1name"
                      placeholder={`Alfonso Cader`}
                      prefix={<Img src="images/img_icon_24x24.svg" alt="Icon" />}
                      className="w-full gap-4 sm:pr-5 !text-gray-900_03 border-deep_purple-400 border-2 border-solid"
                    />
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Your name`}
                      prefix={<Img src="images/img_icon_24x24.svg" alt="Icon" />}
                      className="w-full gap-4 sm:pr-5 border-deep_purple-50 border-2 border-solid"
                    />
                    <TextArea
                      shape="round"
                      name="groupeighty"
                      placeholder={`Enter quiz description`}
                      className="w-full sm:pb-5 sm:pl-5 text-gray-500_01"
                    />
                  </div>
                  <Input
                    shape="round"
                    name="icon_three"
                    placeholder={`Add answer`}
                    prefix={
                      <div className="flex justify-center items-center w-[24px] h-[24px] border-deep_purple-400 border-2 bg-deep_purple-50 rounded-[50%]">
                        <Img src="images/img_icon_deep_purple_50.svg" alt="Icon" />
                      </div>
                    }
                    className="w-[30%] mr-4 gap-[11px] md:mr-0 sm:pr-5 border-deep_purple-50 border-2 border-solid"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[166px] gap-8">
              <Text size="5xl" as="p" className="!text-gray-900_03">
                Controls
              </Text>
              <div className="h-[4px] bg-deep_purple-50" />
            </div>
            <div className="mt-[70px]">
              <div className="flex flex-col">
                <div className="flex md:flex-col justify-between items-start gap-5">
                  <div className="flex flex-col w-[26%] md:w-full gap-[30px]">
                    <Text size="4xl" as="p" className="!text-gray-900_03">
                      Tabs
                    </Text>
                    <div className="p-2.5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                      <div className="flex flex-col mt-1.5 gap-10">
                        <div className="flex justify-center pt-px flex-1">
                          <div className="flex flex-col w-full gap-[7px]">
                            <div className="flex justify-between gap-5">
                              <Heading as="h1" className="self-end !text-deep_purple-400">
                                Top
                              </Heading>
                              <Text size="s" as="p" className="self-start !text-gray-500_01 !font-normal">
                                Quiz
                              </Text>
                              <Text size="s" as="p" className="self-end !text-gray-500_01 !font-normal">
                                Categories
                              </Text>
                              <Text size="s" as="p" className="self-start !text-gray-500_01 !font-normal">
                                Friends
                              </Text>
                            </div>
                            <div className="h-[6px] w-[6px] ml-[7px] md:ml-0 bg-deep_purple-400 rounded-[50%]" />
                          </div>
                        </div>
                        <div className="flex justify-center pt-px flex-1">
                          <div className="flex flex-col w-full gap-[7px]">
                            <div className="flex justify-between gap-5">
                              <Text size="s" as="p" className="self-end !text-gray-500_01 !font-normal">
                                Top
                              </Text>
                              <Heading as="h2" className="self-start !text-deep_purple-400">
                                Quiz
                              </Heading>
                              <Text size="s" as="p" className="self-end !text-gray-500_01 !font-normal">
                                Categories
                              </Text>
                              <Text size="s" as="p" className="self-start !text-gray-500_01 !font-normal">
                                Friends
                              </Text>
                            </div>
                            <div className="h-[6px] w-[6px] ml-[78px] md:ml-0 bg-deep_purple-400 rounded-[50%]" />
                          </div>
                        </div>
                        <div className="flex justify-center pt-px flex-1">
                          <div className="flex flex-col items-end w-full gap-2">
                            <div className="flex self-stretch justify-between gap-5">
                              <Text size="s" as="p" className="self-end !text-gray-500_01 !font-normal">
                                Top
                              </Text>
                              <Text size="s" as="p" className="self-start !text-gray-500_01 !font-normal">
                                Quiz
                              </Text>
                              <Heading as="h3" className="self-end !text-deep_purple-400">
                                Categories
                              </Heading>
                              <Text size="s" as="p" className="self-start !text-gray-500_01 !font-normal">
                                Friends
                              </Text>
                            </div>
                            <div className="h-[6px] w-[6px] mr-[120px] md:mr-0 bg-deep_purple-400 rounded-[50%]" />
                          </div>
                        </div>
                        <div className="flex justify-between items-start pr-px gap-5 flex-1">
                          <Text size="s" as="p" className="mt-0.5 !text-gray-500_01 !font-normal">
                            Top
                          </Text>
                          <Text size="s" as="p" className="!text-gray-500_01 !font-normal">
                            Quiz
                          </Text>
                          <Text size="s" as="p" className="mt-0.5 !text-gray-500_01 !font-normal">
                            Categories
                          </Text>
                          <div className="h-[40px] w-[17%] relative">
                            <Heading
                              as="h4"
                              className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto !text-deep_purple-400 absolute"
                            >
                              Friends
                            </Heading>
                            <div className="h-[6px] w-[12%] bottom-[15%] right-0 left-0 m-auto bg-deep_purple-400 absolute rounded-[50%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-[47%] md:w-full mt-[3px]">
                    <div className="flex flex-col items-start w-full gap-[26px]">
                      <Text size="4xl" as="p" className="!text-gray-900_03">
                        Slider, Checkbox, Tags & Toggle
                      </Text>
                      <div className="flex sm:flex-col justify-between items-center w-[83%] md:w-full gap-5">
                        <div className="flex flex-col w-[36%] sm:w-full gap-8">
                          <div className="flex flex-col gap-4 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "10%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "20%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "30%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "40%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "50%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "60%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "70%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "80%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div className="h-[4px] bg-deep_purple-50 relative rounded-sm">
                              <div style={{ width: "90%" }} className="h-full bg-deep_purple-400 absolute rounded-sm" />
                            </div>
                            <div>
                              <div className="h-[4px] bg-deep_purple-50 rounded-sm" />
                              <div className="h-[4px] mt-[-4px] bg-deep_purple-400 rounded-sm" />
                            </div>
                          </div>
                          <div className="flex justify-between w-[67%] md:w-full gap-10 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                            <div className="flex flex-col w-[27%]">
                              <Button
                                color="deep_purple_50"
                                size="xs"
                                className="w-[24px] border-deep_purple-400 border-2 border-solid rounded-lg"
                              >
                                <Img src="images/img_icon_deep_purple_50.svg" />
                              </Button>
                            </div>
                            <div className="flex flex-col w-[27%]">
                              <Button
                                color="deep_purple_400"
                                size="xs"
                                className="w-[24px] border-deep_purple-400 border-2 border-solid rounded-lg"
                              >
                                <Img src="images/img_icon_white_a700_24x24.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col w-[57%] sm:w-full gap-2.5">
                          <div className="flex justify-between items-start gap-5">
                            <div className="flex flex-col w-[31%] gap-10 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                              <Img src="images/img_property_1_1.svg" alt="property1one" className="h-[16px]" />
                              <Img src="images/img_property_1_2.svg" alt="property1two" className="h-[16px]" />
                              <Img src="images/img_property_1_3.svg" alt="property1three" className="h-[16px]" />
                            </div>
                            <div className="flex flex-col items-start w-[58%] gap-6 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                              <SelectBox
                                shape="round"
                                indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                                name="arrowdown"
                                placeholder={`Question Types`}
                                options={dropDownOptions}
                                className="self-stretch gap-px sm:pr-5 font-medium border-deep_purple-50 border-2 border-solid"
                              />
                              <Button
                                size="lg"
                                leftIcon={<Img src="images/img_icon_deep_purple_400_16x16.svg" alt="Icon" />}
                                className="gap-1 !text-gray-900_03 font-medium border-deep_purple-50 border-2 border-solid min-w-[82px] rounded-[12px]"
                              >
                                10 Sec
                              </Button>
                              <Button
                                color="deep_purple_300"
                                size="lg"
                                className="font-medium min-w-[77px] rounded-[12px]"
                              >
                                2,569 QP
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center w-[27%] md:w-full gap-6 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                            <Switch />
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[33%] md:w-full mt-6 pb-6 gap-2 px-6 sm:pb-5 sm:px-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="flex justify-center flex-1">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-col w-[13%] md:w-full z-[1]">
                        <Button color="deep_purple_400" shape="circle" className="w-[48px] shadow-xs">
                          <Img src="images/img_icon_white_a700_48x48.svg" />
                        </Button>
                      </div>
                      <div className="self-stretch h-[83px] mt-[-24px] relative">
                        <Img
                          src="images/img_vector_white_a700.svg"
                          alt="vector_one"
                          className="justify-center h-[83px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex justify-between w-[86%] top-1/4 right-0 left-0 gap-5 m-auto absolute">
                          <div className="flex justify-between w-[31%] gap-5">
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_gray_900_03_24x24.svg"
                                alt="icon_three"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_blue_gray_100_24x24.svg"
                                alt="icon_five"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-[31%] gap-5">
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_1.svg"
                                alt="icon_seven"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_2.svg"
                                alt="icon_nine"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-1">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-col w-[13%] md:w-full z-[1]">
                        <Button color="deep_purple_400" shape="circle" className="w-[48px] shadow-xs">
                          <Img src="images/img_icon_white_a700_48x48.svg" />
                        </Button>
                      </div>
                      <div className="self-stretch h-[83px] mt-[-24px] relative">
                        <Img
                          src="images/img_vector_white_a700.svg"
                          alt="vector_one"
                          className="justify-center h-[83px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex justify-between w-[86%] top-1/4 right-0 left-0 gap-5 m-auto absolute">
                          <div className="flex justify-between w-[31%] gap-5">
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_3.svg"
                                alt="icon_three"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_gray_900_03.svg"
                                alt="icon_five"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-[31%] gap-5">
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_1.svg"
                                alt="icon_seven"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_2.svg"
                                alt="icon_nine"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-1">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-col w-[13%] md:w-full z-[1]">
                        <Button color="deep_purple_400" shape="circle" className="w-[48px] shadow-xs">
                          <Img src="images/img_icon_white_a700_48x48.svg" />
                        </Button>
                      </div>
                      <div className="self-stretch h-[83px] mt-[-24px] relative">
                        <Img
                          src="images/img_vector_white_a700.svg"
                          alt="vector_one"
                          className="justify-center h-[83px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex justify-between w-[86%] top-1/4 right-0 left-0 gap-5 m-auto absolute">
                          <div className="flex justify-between w-[31%] gap-5">
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_3.svg"
                                alt="icon_three"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_blue_gray_100_24x24.svg"
                                alt="icon_five"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-[31%] gap-5">
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_4.svg"
                                alt="icon_seven"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_2.svg"
                                alt="icon_nine"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-1">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex flex-col w-[13%] md:w-full z-[1]">
                        <Button color="deep_purple_400" shape="circle" className="w-[48px] shadow-xs">
                          <Img src="images/img_icon_white_a700_48x48.svg" />
                        </Button>
                      </div>
                      <div className="self-stretch h-[83px] mt-[-24px] relative">
                        <Img
                          src="images/img_vector_white_a700.svg"
                          alt="vector_one"
                          className="justify-center h-[83px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <div className="flex justify-between w-[86%] top-1/4 right-0 left-0 gap-5 m-auto absolute">
                          <div className="flex justify-between w-[31%] gap-5">
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_3.svg"
                                alt="icon_three"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_blue_gray_100_24x24.svg"
                                alt="icon_five"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between w-[31%] gap-5">
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_1.svg"
                                alt="icon_seven"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                            <div className="w-[24%]">
                              <Img
                                src="images/img_icon_5.svg"
                                alt="icon_nine"
                                className="h-[24px] w-full md:w-[24px] md:h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[85%] md:w-full mt-10 gap-10">
                  <div className="flex md:flex-col justify-center gap-8 p-6 sm:p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <div className="flex md:flex-col gap-8 flex-1">
                      <div className="flex flex-col items-end w-full pt-px gap-[11px]">
                        <Text size="md" as="p" className="!text-deep_purple-400 text-right">
                          1 of 3
                        </Text>
                        <div className="self-stretch h-[8px] bg-deep_purple-400 relative rounded">
                          <div style={{ width: "33%" }} className="h-full bg-deep_purple-400 absolute rounded" />
                        </div>
                      </div>
                      <div className="flex flex-col items-end w-full pt-px gap-[11px]">
                        <Text size="md" as="p" className="!text-deep_purple-400 text-right">
                          2 of 3
                        </Text>
                        <div className="self-stretch h-[8px] bg-deep_purple-400 relative rounded">
                          <div style={{ width: "67%" }} className="h-full bg-deep_purple-400 absolute rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end w-[32%] md:w-full pt-px gap-[11px]">
                      <Text size="md" as="p" className="!text-deep_purple-400 text-right">
                        3 of 3
                      </Text>
                      <div className="self-stretch">
                        <div className="h-[8px] bg-deep_purple-400 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-end w-[66%] md:w-full gap-8 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <div className="w-full my-2">
                      <div className="flex justify-between items-start gap-5 p-1 bg-white-A700 rounded-[20px]">
                        <Button
                          color="deep_purple_300"
                          size="2xl"
                          className="sm:px-5 font-medium min-w-[147px] rounded-[16px]"
                        >
                          Weekly
                        </Button>
                        <Text
                          size="md"
                          as="p"
                          className="mt-[9px] mr-11 md:mr-0 !text-gray-500_01 text-center !font-normal"
                        >
                          All Time
                        </Text>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between items-center gap-5 p-1 bg-white-A700 rounded-[20px]">
                        <Text size="md" as="p" className="ml-[47px] md:ml-0 !text-gray-500_01 text-center !font-normal">
                          Weekly
                        </Text>
                        <Button
                          color="deep_purple_300"
                          size="2xl"
                          className="sm:px-5 font-medium min-w-[147px] rounded-[16px]"
                        >
                          All Time
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center w-[72%] md:w-full mt-10 gap-8 p-[23px] sm:p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="w-full pt-px">
                    <div className="flex flex-col gap-[7px]">
                      <div className="flex justify-between gap-5">
                        <Heading as="h5" className="self-end !text-deep_purple-400 text-center">
                          Badge
                        </Heading>
                        <Text size="s" as="p" className="self-start !text-gray-500_01 text-center !font-normal">
                          Stats
                        </Text>
                        <Text size="s" as="p" className="self-start !text-gray-500_01 text-center !font-normal">
                          Details
                        </Text>
                      </div>
                      <div className="h-[6px] w-[6px] ml-[19px] md:ml-0 bg-deep_purple-400 rounded-[50%]" />
                    </div>
                  </div>
                  <div className="w-full pt-px">
                    <div className="flex flex-col items-center gap-[7px]">
                      <div className="flex self-stretch justify-between items-center gap-5">
                        <Text size="s" as="p" className="self-end mt-0.5 !text-gray-500_01 text-center !font-normal">
                          Badge
                        </Text>
                        <Heading as="h6" className="!text-deep_purple-400 text-center">
                          Stats
                        </Heading>
                        <Text
                          size="s"
                          as="p"
                          className="self-start !text-gray-500_01 !font-graphik text-center !font-normal"
                        >
                          Details
                        </Text>
                      </div>
                      <div className="h-[6px] w-[6px] bg-deep_purple-400 rounded-[50%]" />
                    </div>
                  </div>
                  <div className="w-full pt-px">
                    <div className="flex flex-col items-end gap-[7px]">
                      <div className="flex self-stretch justify-between gap-5">
                        <Text size="s" as="p" className="self-end !text-gray-500_01 text-center !font-normal">
                          Badge
                        </Text>
                        <Text size="s" as="p" className="self-start !text-gray-500_01 text-center !font-normal">
                          Stats
                        </Text>
                        <Heading as="p" className="self-start !text-deep_purple-400 text-center">
                          Details
                        </Heading>
                      </div>
                      <div className="h-[6px] w-[6px] mr-[22px] md:mr-0 bg-deep_purple-400 rounded-[50%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text size="5xl" as="p" className="mt-[166px] !text-gray-900_03">
              Contents
            </Text>
            <div className="h-[4px] mt-8 bg-deep_purple-50" />
            <div className="flex w-[93%] md:w-full mt-[90px]">
              <div className="flex md:flex-col justify-between items-center w-full gap-5">
                <div className="flex flex-col self-start w-[35%] md:w-full gap-[30px]">
                  <Text size="4xl" as="p" className="!text-gray-900_03">
                    Avatar
                  </Text>
                  <div className="p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <div className="flex flex-col mb-2 gap-6">
                      <div className="flex flex-col gap-6">
                        <div className="flex justify-between gap-5 flex-1">
                          <Img
                            src="images/img_property_1_women.svg"
                            alt="propertyone_one"
                            className="h-[56px] w-[56px]"
                          />
                          <Img
                            src="images/img_property_1_women_red_100.svg"
                            alt="propertyone"
                            className="h-[56px] w-[56px]"
                          />
                          <Img
                            src="images/img_property_1_women_red_100_56x56.svg"
                            alt="propertyone"
                            className="h-[56px] w-[56px]"
                          />
                          <Img src="images/img_property_1_men.svg" alt="property1men" className="h-[56px] w-[56px]" />
                          <Button color="teal_50" size="6xl" shape="circle" className="w-[56px]">
                            <Img src="images/img_property_1_men_gray_900_03.svg" />
                          </Button>
                        </div>
                        <div className="flex justify-between gap-5 flex-1">
                          <Img
                            src="images/img_property_1_men_red_100.svg"
                            alt="property1men"
                            className="h-[56px] w-[56px]"
                          />
                          <Button color="blue_100" size="6xl" shape="circle" className="w-[56px]">
                            <Img src="images/img_property_1_men_gray_900_03.svg" />
                          </Button>
                          <Img
                            src="images/img_property_1_men_red_100_56x56.svg"
                            alt="property1men"
                            className="h-[56px] w-[56px]"
                          />
                          <Img
                            src="images/img_property_1_men_teal_50.svg"
                            alt="property1men"
                            className="h-[56px] w-[56px]"
                          />
                          <Button color="red_100" size="6xl" shape="circle" className="w-[56px]">
                            <Img src="images/img_property_1_men_gray_900_03_56x56.svg" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex w-[36%] md:w-full gap-6">
                        <Img
                          src="images/img_property_1_men_56x56.svg"
                          alt="property1men"
                          className="h-[56px] w-[56px]"
                        />
                        <Img
                          src="images/img_property_1_men_blue_100.svg"
                          alt="property1men"
                          className="h-[56px] w-[56px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[30%] md:w-full gap-[29px]">
                  <Text size="4xl" as="p" className="!text-gray-900_03">
                    Live Quizzes
                  </Text>
                  <div className="flex flex-col gap-6 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <div className="flex items-center gap-4 p-2 border-deep_purple-50 border-2 border-solid bg-white-A700 flex-1 rounded-[20px]">
                      <Img
                        src="images/img_frame_blue_100.svg"
                        alt="image"
                        className="h-[64px] w-[64px] rounded-[20px]"
                      />
                      <div className="flex flex-col items-start gap-2.5 py-px">
                        <Text size="md" as="p" className="!text-gray-900_03">
                          Statistics Math Quiz
                        </Text>
                        <Text size="xs" as="p" className="!text-blue_gray-400">
                          Math • 12 Quizzes
                        </Text>
                      </div>
                      <Img src="images/img_arrowdown.svg" alt="image_one" className="h-[24px] w-[24px]" />
                    </div>
                    <div className="flex items-center gap-4 p-2 border-deep_purple-50 border-2 border-solid bg-white-A700 flex-1 rounded-[20px]">
                      <Img
                        src="images/img_frame_pink_100_03.svg"
                        alt="image"
                        className="h-[64px] w-[64px] rounded-[20px]"
                      />
                      <div className="flex flex-col items-start gap-2.5 py-px">
                        <Text size="md" as="p" className="!text-gray-900_03">
                          Matrices Quiz
                        </Text>
                        <Text size="xs" as="p" className="!text-blue_gray-400">
                          Math • 6 Quizzes
                        </Text>
                      </div>
                      <Img src="images/img_arrowdown.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
                    </div>
                    <div className="flex items-center gap-4 p-2 border-deep_purple-50 border-2 border-solid bg-white-A700 flex-1 rounded-[20px]">
                      <Img src="images/img_frame.svg" alt="image" className="h-[64px] w-[64px] rounded-[20px]" />
                      <div className="flex flex-col items-start justify-center gap-[9px] py-px">
                        <Text size="md" as="p" className="mt-0.5 !text-gray-900_03">
                          Integers Quiz
                        </Text>
                        <Text size="xs" as="p" className="!text-blue_gray-400">
                          Math • 10 Quizzes
                        </Text>
                      </div>
                      <Img src="images/img_arrowdown.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[24%] md:w-full">
                  <Text size="4xl" as="p" className="!text-gray-900_03">
                    Quiz Points
                  </Text>
                  <div className="flex justify-center w-[68%] md:w-full mt-[29px] gap-[25px] p-[15px] border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <Button color="green_A200_01" size="lg" className="w-full font-medium rounded-lg">
                      +100 QP
                    </Button>
                    <Button color="pink_300" size="lg" className="w-full font-medium rounded-lg">
                      -50 QP
                    </Button>
                  </div>
                  <Text size="4xl" as="p" className="mt-[74px] !text-gray-900_03">
                    Flags
                  </Text>
                  <div className="flex justify-center mt-[25px] p-6 sm:p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex gap-4">
                        <Img src="images/img_group_22.svg" alt="image" className="h-[20px] w-[20px] rounded" />
                        <Img src="images/img_group_24.png" alt="image_one" className="w-[20px] object-cover rounded" />
                        <Img src="images/img_group_25.png" alt="image_two" className="w-[20px] object-cover rounded" />
                        <Img
                          src="images/img_group_26.png"
                          alt="image_three"
                          className="w-[20px] object-cover rounded"
                        />
                        <Img src="images/img_group_27.png" alt="image_four" className="w-[20px] object-cover rounded" />
                        <Img src="images/img_group_28.png" alt="image_five" className="w-[20px] object-cover rounded" />
                        <Img src="images/img_group_29.png" alt="image_six" className="w-[20px] object-cover rounded" />
                      </div>
                      <div className="flex gap-4">
                        <Img
                          src="images/img_group_31.png"
                          alt="image_seven"
                          className="w-[20px] object-cover rounded"
                        />
                        <Img
                          src="images/img_group_32.png"
                          alt="image_eight"
                          className="w-[20px] object-cover rounded"
                        />
                        <Img src="images/img_group_33.png" alt="image_nine" className="w-[20px] object-cover rounded" />
                        <Img src="images/img_group_34.png" alt="image_ten" className="w-[20px] object-cover rounded" />
                        <Img
                          src="images/img_cz_czech_republic.png"
                          alt="czczech_one"
                          className="w-[20px] object-cover rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-start w-[94%] md:w-full mt-[70px] gap-5">
              <div className="flex flex-col w-[29%] md:w-full mt-1.5">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Badge & Medals
                </Text>
                <div className="mt-[25px] p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between gap-5 flex-1">
                      <Button size="8xl" shape="square" className="w-[88px]">
                        <Img src="images/img_group_181.svg" />
                      </Button>
                      <div className="w-[28%]">
                        <div className="h-[88px] w-[88px] relative">
                          <Img
                            src="images/img_mask_group.svg"
                            alt="image"
                            className="justify-center h-[88px] w-full md:w-[88px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Button
                            color="deep_purple_300"
                            size="3xl"
                            shape="circle"
                            className="w-[44px] left-0 bottom-0 right-0 top-0 m-auto border-deep_purple-400 border-[3px] border-solid absolute"
                          >
                            <Img src="images/img_icon_white_a700_44x44.svg" />
                          </Button>
                        </div>
                      </div>
                      <div className="w-[28%]">
                        <div className="h-[88px] w-[88px] relative">
                          <Img
                            src="images/img_mask_group_gray_50_03.svg"
                            alt="image_one"
                            className="justify-center h-[88px] w-full md:w-[88px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Button
                            color="cyan_200"
                            size="3xl"
                            shape="circle"
                            className="w-[44px] left-0 bottom-0 right-0 top-0 m-auto border-green-A200 border-[3px] border-solid absolute"
                          >
                            <Img src="images/img_icon_44x44.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5 flex-1">
                      <div className="w-[28%]">
                        <div className="h-[88px] w-[88px] relative">
                          <Img
                            src="images/img_mask_group_gray_100.svg"
                            alt="image"
                            className="justify-center h-[88px] w-full md:w-[88px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Button
                            color="pink_A100"
                            size="3xl"
                            shape="circle"
                            className="w-[44px] left-0 bottom-0 right-0 top-0 m-auto border-pink-300_01 border-[3px] border-solid absolute"
                          >
                            <Img src="images/img_icon_6.svg" />
                          </Button>
                        </div>
                      </div>
                      <div className="w-[28%]">
                        <div className="h-[88px] w-[88px] relative">
                          <Img
                            src="images/img_mask_group_gray_50_01.svg"
                            alt="image_one"
                            className="justify-center h-[88px] w-full md:w-[88px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Button
                            color="orange_A100"
                            size="3xl"
                            shape="circle"
                            className="w-[44px] left-0 bottom-0 right-0 top-0 m-auto border-amber-A200 border-[3px] border-solid absolute"
                          >
                            <Img src="images/img_icon_7.svg" />
                          </Button>
                        </div>
                      </div>
                      <div className="w-[28%]">
                        <div className="h-[88px] w-[88px] relative">
                          <Img
                            src="images/img_mask_group_gray_50.svg"
                            alt="image_two"
                            className="justify-center h-[88px] w-full md:w-[88px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Button
                            color="blue_200"
                            size="3xl"
                            shape="circle"
                            className="w-[44px] left-0 bottom-0 right-0 top-0 m-auto border-blue-300 border-[3px] border-solid absolute"
                          >
                            <Img src="images/img_icon_8.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row w-[58%] md:w-full mt-6 gap-6 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="flex flex-col w-full">
                    <div className="h-[40px] w-[40px] relative">
                      <Img
                        src="images/img_star.svg"
                        alt="image"
                        className="justify-center h-[40px] w-full md:w-[40px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute rounded"
                      />
                      <Img
                        src="images/img_icon_white_a700_20x20.svg"
                        alt="icon_one"
                        className="justify-center h-[20px] w-[20px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="h-[40px] w-[40px] relative">
                      <Img
                        src="images/img_star_40x40.svg"
                        alt="image"
                        className="justify-center h-[40px] w-full md:w-[40px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute rounded"
                      />
                      <Img
                        src="images/img_icon_white_a700_20x20.svg"
                        alt="icon_one"
                        className="justify-center h-[20px] w-[20px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="h-[40px] w-[40px] relative">
                      <Img
                        src="images/img_star_1.svg"
                        alt="image"
                        className="justify-center h-[40px] w-full md:w-[40px] md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute rounded"
                      />
                      <Img
                        src="images/img_icon_white_a700_20x20.svg"
                        alt="icon_one"
                        className="justify-center h-[20px] w-[20px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                    </div>
                  </div>
                </div>
                <Text size="4xl" as="p" className="mt-[73px] !text-gray-900_03">
                  Quiz Types Icon
                </Text>
                <div className="w-[72%] md:w-full mt-[26px] p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row sm:flex-col gap-6">
                      <div className="flex justify-between gap-5 flex-1">
                        <div className="h-[56px] w-[56px] pt-2 px-2 bg-blue-100 relative rounded-[20px]">
                          <div className="h-[40px] w-[40px] bottom-0 right-0 left-0 m-auto bg-white-A700 absolute rounded-lg" />
                          <div className="flex flex-col w-[70%] gap-1 bottom-[11%] right-0 left-0 m-auto absolute">
                            <div className="flex justify-center gap-1">
                              <Heading
                                size="xs"
                                as="p"
                                className="flex justify-center items-center h-[12px] w-[12px] !text-white-A700 !font-graphik text-center bg-deep_purple-400 rounded-sm"
                              >
                                A
                              </Heading>
                              <Heading
                                size="xs"
                                as="p"
                                className="flex justify-center items-center h-[12px] w-[12px] !text-white-A700 !font-graphik text-center bg-blue-100 rounded-sm"
                              >
                                B
                              </Heading>
                            </div>
                            <div className="flex justify-center gap-1">
                              <Heading
                                size="xs"
                                as="p"
                                className="flex justify-center items-center h-[12px] w-[12px] !text-white-A700 !font-graphik text-center bg-blue-100 rounded-sm"
                              >
                                C
                              </Heading>
                              <Heading
                                size="xs"
                                as="p"
                                className="flex justify-center items-center h-[12px] w-[12px] !text-white-A700 !font-graphik text-center bg-blue-100 rounded-sm"
                              >
                                D
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <Button color="blue_100" size="6xl" shape="round" className="w-[56px]">
                          <Img src="images/img_property_1_voice.svg" />
                        </Button>
                        <Button size="6xl" shape="square" className="w-[56px]">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                      </div>
                      <div className="flex justify-between gap-5 flex-1">
                        <div className="h-[56px] w-[56px] pt-2 px-2 bg-blue-100 relative rounded-[20px]">
                          <div className="h-[40px] w-[40px] bottom-0 right-0 left-0 m-auto bg-white-A700 absolute rounded-lg" />
                          <div className="flex justify-center w-[70%] gap-1 bottom-[11%] right-0 left-0 m-auto absolute">
                            <div className="w-full py-2 bg-deep_purple-400 rounded-sm">
                              <Img
                                src="images/img_icon_white_a700_24x24.svg"
                                alt="icon_one"
                                className="h-[12px] w-full md:w-[12px] md:h-auto rounded-tl-sm rounded-tr-sm"
                              />
                            </div>
                            <div className="w-full py-2 bg-blue-100 rounded-sm">
                              <Img
                                src="images/img_frame_white_a700.svg"
                                alt="image"
                                className="h-[12px] w-full md:w-[12px] md:h-auto rounded-tl-sm rounded-tr-sm"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="h-[56px] w-[56px] pt-2 px-2 bg-blue-100 relative rounded-[20px]">
                          <div className="h-[40px] w-[40px] bottom-0 right-0 left-0 m-auto bg-white-A700 absolute rounded-lg" />
                          <Button
                            color="deep_purple_400"
                            size="xs"
                            className="w-[24px] bottom-[14%] right-0 left-0 m-auto absolute rounded-md"
                          >
                            <Img src="images/img_icon_white_a700_24x24.svg" />
                          </Button>
                        </div>
                        <Button size="6xl" shape="square" className="w-[56px]">
                          <Img src="images/defaultNoData.png" />
                        </Button>
                      </div>
                    </div>
                    <div className="h-[56px] w-[56px] pt-2 px-2 bg-blue-100 relative rounded-[20px]">
                      <div className="h-[40px] w-[40px] bottom-0 right-0 left-0 m-auto bg-white-A700 absolute rounded-lg" />
                      <div className="flex items-start w-[61%] gap-[3px] bottom-[9%] left-[29%] m-auto absolute">
                        <Text as="p" className="!text-deep_purple-400 text-center !font-medium">
                          T
                        </Text>
                        <div className="h-[20px] w-px mt-[3px] bg-blue-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-start w-[60%] md:w-full gap-5">
                <div className="flex flex-col w-[50%] md:w-full gap-[30px]">
                  <Text size="4xl" as="p" className="!text-gray-900_03">
                    Cards
                  </Text>
                  <div className="flex flex-col gap-10 p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <div>
                      <div className="bg-red-100_02 rounded-[20px]">
                        <div className="h-[84px] relative">
                          <Img
                            src="images/img_mask_group_white_a700_84x327.svg"
                            alt="image_eleven"
                            className="justify-center h-[84px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="flex justify-between items-center w-max h-max left-0 bottom-0 right-0 top-0 gap-5 m-auto absolute">
                            <div className="flex flex-col items-start gap-[9px]">
                              <Text size="s" as="p" className="!text-pink-900_87 tracking-[1.12px] opacity-0.5">
                                RECENT QUIZ
                              </Text>
                              <div className="flex items-center gap-2">
                                <Img src="images/img_icon_pink_900.svg" alt="icon_nine" className="h-[24px] w-[24px]" />
                                <Text size="lg" as="p" className="!text-pink-900">
                                  A Basic Music Quiz
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
                                  65%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-deep_purple-400 rounded-[20px]">
                        <div className="h-[232px] relative">
                          <Img
                            src="images/img_group.svg"
                            alt="image_twelve"
                            className="justify-center h-[232px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[20px]"
                          />
                          <Button
                            size="4xl"
                            shape="round"
                            leftIcon={<Img src="images/img_icon_deep_purple_400_20x20.svg" alt="Icon" />}
                            className="gap-2.5 bottom-[14%] right-0 left-0 m-auto font-medium min-w-[146px] absolute"
                          >
                            Find Friends
                          </Button>
                          <Img
                            src="images/img_2.svg"
                            alt="two_one"
                            className="h-[56px] bottom-[18%] right-[5%] m-auto absolute"
                          />
                          <div className="flex justify-between items-center w-[61%] left-[5%] top-[7%] gap-5 m-auto absolute">
                            <Img src="images/img_1.svg" alt="one_one" className="h-[48px] w-[48px]" />
                            <Text
                              size="s"
                              as="p"
                              className="self-end !text-white-A700_99 tracking-[1.12px] opacity-0.7"
                            >
                              FEATURED
                            </Text>
                          </div>
                          <Text
                            size="lg"
                            as="p"
                            className="w-[61%] top-[29%] right-0 left-0 m-auto !text-white-A700 text-center absolute"
                          >
                            Take part in challenges with friends or other players
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 bg-pink-50 rounded-[20px]">
                      <div className="h-[163px] pt-[13px] pl-[13px] bg-red-100 relative rounded-[20px]">
                        <div className="flex justify-center items-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <Text size="md" as="p" className="self-end !text-pink-900 z-[1]">
                            Travel Trivia Quiz
                          </Text>
                          <Img
                            src="images/img_illustration.svg"
                            alt="illustration"
                            className="h-[150px] ml-[-53px] rounded-[20px]"
                          />
                        </div>
                        <Img
                          src="images/img_icon_pink_900_16x16.svg"
                          alt="icon_eleven"
                          className="h-[16px] w-[16px] bottom-[10%] left-[6%] m-auto absolute"
                        />
                        <Text size="xs" as="p" className="bottom-[11%] left-[13%] m-auto !text-pink-900 absolute">
                          Travel • 5 Quizzes
                        </Text>
                        <Button
                          color="pink_A100"
                          size="sm"
                          className="left-[6%] top-[10%] m-auto tracking-[0.48px] uppercase font-medium min-w-[89px] absolute rounded-lg"
                        >
                          TOP PICKS
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[41%] md:w-full gap-[29px]">
                  <Text size="4xl" as="p" className="!text-gray-900_03">
                    Icons
                  </Text>
                  <div className="p-3.5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                    <div className="flex flex-col gap-6">
                      <div className="flex justify-between gap-5 flex-1">
                        <Img src="images/img_property_1_plus.svg" alt="property1plus" className="h-[24px] w-[24px]" />
                        <Img
                          src="images/img_icon_gray_900_03.svg"
                          alt="propertyone_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_home.svg" alt="property1home" className="h-[24px] w-[24px]" />
                        <Img
                          src="images/img_icon_gray_900_03_24x24.svg"
                          alt="property1home"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_icon_4.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img
                          src="images/img_property_1_leaderboard.svg"
                          alt="propertyone"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="flex justify-between gap-5 flex-1">
                        <Img src="images/img_property_1_math.svg" alt="property1math" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_art.svg" alt="property1art" className="h-[24px] w-[24px]" />
                        <Img
                          src="images/img_property_1_science.svg"
                          alt="propertyone_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_history.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_music.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_tech.svg" alt="property1tech" className="h-[24px] w-[24px]" />
                      </div>
                      <div className="flex justify-between gap-5 flex-1">
                        <Img src="images/img_arrow_right.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
                        <Img
                          src="images/img_property_1_image.svg"
                          alt="propertyone_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_clock.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img
                          src="images/img_property_1_microphone.svg"
                          alt="propertyone"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_reorder.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_edit.svg" alt="property1edit" className="h-[24px] w-[24px]" />
                      </div>
                      <div className="flex justify-between gap-5 flex-1">
                        <Img
                          src="images/img_property_1_world.svg"
                          alt="propertyone_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_local.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_volume.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img
                          src="images/img_arrow_right_gray_900_03.svg"
                          alt="arrowright_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_find.svg" alt="property1find" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_delete.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                      </div>
                      <div className="flex justify-between gap-5 flex-1">
                        <Img
                          src="images/img_property_1_clipboard.svg"
                          alt="propertyone_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_puzzle.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_question.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_more.svg" alt="property1more" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_hide.svg" alt="property1hide" className="h-[24px] w-[24px]" />
                      </div>
                      <div className="flex justify-between gap-5 flex-1">
                        <Img
                          src="images/img_property_1_settings.svg"
                          alt="propertyone_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_trophy.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_smile.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_password.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_medal.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_profile.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                      </div>
                      <div className="flex justify-between gap-5 flex-1">
                        <Img
                          src="images/img_property_1_arrow.svg"
                          alt="propertyone_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_property_1_email.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_sports.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_arrow_right.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_star.svg" alt="image" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_travel.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                      </div>
                      <div className="flex justify-between gap-5 flex-1">
                        <Img
                          src="images/img_property_1_see_password.svg"
                          alt="property1see"
                          className="h-[24px] w-[24px]"
                        />
                        <Img src="images/img_icon_5.svg" alt="propertyone_one" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_reorder.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_share.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_copy.svg" alt="property1copy" className="h-[24px] w-[24px]" />
                        <Img src="images/img_property_1_crown.svg" alt="propertyone" className="h-[24px] w-[24px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col items-start mt-[73px]">
              <div className="flex flex-col gap-[26px] flex-1">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Quiz Types
                </Text>
                <div className="p-4 border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="flex flex-col gap-10">
                    <div className="flex justify-between gap-5">
                      <div className="flex flex-col items-center w-[44%] gap-2.5 p-4 bg-deep_purple-50 rounded-[20px]">
                        <div className="w-[32%] md:w-full">
                          <div className="flex flex-col items-center p-1.5 bg-white-A700 rounded-lg">
                            <div className="flex flex-col gap-1">
                              <div className="flex justify-center gap-1">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[12px] w-[12px] !text-white-A700 !font-graphik text-center bg-deep_purple-400 rounded-sm"
                                >
                                  A
                                </Heading>
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[12px] w-[12px] !text-white-A700 !font-graphik text-center bg-blue-100 rounded-sm"
                                >
                                  B
                                </Heading>
                              </div>
                              <div className="flex justify-center gap-1">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[12px] w-[12px] !text-white-A700 !font-graphik text-center bg-blue-100 rounded-sm"
                                >
                                  C
                                </Heading>
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="flex justify-center items-center h-[12px] w-[12px] !text-white-A700 !font-graphik text-center bg-blue-100 rounded-sm"
                                >
                                  D
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Text size="s" as="p" className="!text-deep_purple-400 text-center">
                          Multiple Choices
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[44%] gap-[9px] p-4 bg-deep_purple-50 rounded-[20px]">
                        <div className="w-[33%] md:w-full">
                          <div className="flex justify-center gap-1 p-1.5 bg-white-A700 rounded-lg">
                            <div className="w-full py-2 bg-deep_purple-400 rounded-sm">
                              <Img
                                src="images/img_icon_white_a700_24x24.svg"
                                alt="icon_thirteen"
                                className="h-[12px] w-full md:w-[12px] md:h-auto rounded-tl-sm rounded-tr-sm"
                              />
                            </div>
                            <div className="w-full py-2 bg-blue-100 rounded-sm">
                              <Img
                                src="images/img_frame_white_a700.svg"
                                alt="image_thirteen"
                                className="h-[12px] w-full md:w-[12px] md:h-auto rounded-tl-sm rounded-tr-sm"
                              />
                            </div>
                          </div>
                        </div>
                        <Text size="s" as="p" className="!text-deep_purple-400 text-center">
                          True or False
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5">
                      <div className="flex flex-col items-center justify-center w-[44%] gap-[9px] p-4 bg-deep_purple-50 rounded-[20px]">
                        <Img src="images/img_group_768.svg" alt="image_fourteen" className="h-[40px] w-[40px]" />
                        <Text size="s" as="p" className="!text-deep_purple-400 text-center">
                          Puzzle
                        </Text>
                      </div>
                      <div className="flex flex-col items-center w-[44%] gap-2.5 p-4 bg-deep_purple-50 rounded-[20px]">
                        <div className="w-[33%] md:w-full">
                          <Button size="xl" className="w-full font-medium rounded-lg">
                            T
                          </Button>
                        </div>
                        <Text size="s" as="p" className="!text-deep_purple-400 text-center">
                          Type Answer
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5">
                      <div className="flex flex-col items-center justify-center w-[44%] gap-[9px] p-4 bg-deep_purple-50 rounded-[20px]">
                        <div className="flex flex-col items-center justify-center w-[32%] md:w-full p-1.5 bg-white-A700 rounded-lg">
                          <Img
                            src="images/img_group_763.svg"
                            alt="image_fifteen"
                            className="h-[17px] mt-1.5 mb-[5px]"
                          />
                        </div>
                        <Text size="s" as="p" className="!text-deep_purple-400 text-center">
                          Voice Note
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[44%] gap-[9px] p-4 bg-deep_purple-50 rounded-[20px]">
                        <div className="h-[40px] w-[40px] relative">
                          <div className="justify-center h-[40px] w-[40px] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg" />
                          <div className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <CircularProgressbar
                              value={62}
                              styles={{
                                trail: { strokeWidth: 50 },
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(92deg)",
                                  strokeWidth: 14,
                                },
                              }}
                              className="h-[28px] z-[1] border-white-A700_6c border-4 border-solid"
                            />
                            <CircularProgressbar
                              value={33}
                              styles={{
                                trail: { strokeWidth: 50 },
                                path: { strokeLinecap: "square", strokeWidth: 14 },
                              }}
                              className="h-[28px] mt-[-28px] border-white-A700_6c border-4 border-solid"
                            />
                          </div>
                        </div>
                        <Text size="s" as="p" className="!text-deep_purple-400 text-center">
                          Poll
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[44%] md:w-full gap-[9px] p-4 bg-deep_purple-50 rounded-[20px]">
                      <div className="w-[32%] md:w-full">
                        <div className="p-2 bg-white-A700 rounded-lg">
                          <div className="flex flex-col items-center p-1 bg-deep_purple-400 rounded">
                            <Img
                              src="images/img_icon_white_a700_24x24.svg"
                              alt="icon_fifteen"
                              className="h-[16px] w-[16px]"
                            />
                          </div>
                        </div>
                      </div>
                      <Text size="s" as="p" className="!text-deep_purple-400 text-center">
                        Checkbox
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-[97px] gap-[42px] md:ml-0 flex-1">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Quiz Categories
                </Text>
                <div className="ml-4 gap-10 grid-cols-2 md:grid-cols-[1fr] md:ml-0 grid">
                  <div className="flex flex-col items-center w-full gap-2 p-4 bg-teal-200 rounded-[20px]">
                    <div className="flex flex-col w-[39%] md:w-full">
                      <Button className="w-[48px] rounded-[16px]">
                        <Img src="images/img_icon_48x48.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 py-px">
                      <Text size="md" as="p" className="!text-white-A700 text-center">
                        Math
                      </Text>
                      <Text size="xs" as="p" className="!text-white-A700_cc text-center">
                        21 Quizzes
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full gap-2 p-4 bg-deep_purple-300 rounded-[20px]">
                    <div className="flex flex-col w-[39%] md:w-full">
                      <Button className="w-[48px] rounded-[16px]">
                        <Img src="images/img_icon_9.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-1.5 py-px">
                      <Text size="md" as="p" className="!text-white-A700">
                        Science
                      </Text>
                      <Text size="xs" as="p" className="!text-white-A700_cc">
                        12 Quizzes
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full gap-2 p-4 bg-pink-A100 rounded-[20px]">
                    <div className="flex flex-col w-[39%] md:w-full">
                      <Button className="w-[48px] rounded-[16px]">
                        <Img src="images/img_icon_10.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 py-px">
                      <Text size="md" as="p" className="!text-white-A700">
                        Music
                      </Text>
                      <Text size="xs" as="p" className="!text-white-A700_cc">
                        15 Quizzes
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full gap-2 p-4 bg-indigo-A100_01 rounded-[20px]">
                    <div className="flex flex-col w-[39%] md:w-full">
                      <Button className="w-[48px] rounded-[16px]">
                        <Img src="images/img_icon_11.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[5px] py-px">
                      <Text size="md" as="p" className="!text-white-A700">
                        Sports
                      </Text>
                      <Text size="xs" as="p" className="!text-white-A700_b2">
                        18 Quizzes
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full gap-2 p-4 bg-teal-200 rounded-[20px]">
                    <div className="flex flex-col w-[39%] md:w-full">
                      <Button className="w-[48px] rounded-[16px]">
                        <Img src="images/img_icon_12.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 py-px">
                      <Text size="md" as="p" className="!text-white-A700">
                        Tech
                      </Text>
                      <Text size="xs" as="p" className="!text-white-A700_cc">
                        8 Quizzes
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full gap-2 p-4 bg-pink-A100 rounded-[20px]">
                    <div className="flex flex-col w-[39%] md:w-full">
                      <Button className="w-[48px] rounded-[16px]">
                        <Img src="images/img_icon_13.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 py-px">
                      <Text size="md" as="p" className="!text-white-A700">
                        Travel
                      </Text>
                      <Text size="xs" as="p" className="!text-white-A700_cc">
                        14 Quizzes
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full gap-2 p-4 bg-deep_purple-300 rounded-[20px]">
                    <div className="flex flex-col w-[39%] md:w-full">
                      <Button className="w-[48px] rounded-[16px]">
                        <Img src="images/img_icon_14.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[5px] py-px">
                      <Text size="md" as="p" className="!text-white-A700">
                        History
                      </Text>
                      <Text size="xs" as="p" className="!text-white-A700_b2">
                        7 Quizzes
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full gap-2 p-4 bg-indigo-A100 rounded-[20px]">
                    <div className="flex flex-col w-[39%] md:w-full">
                      <Button className="w-[48px] rounded-[16px]">
                        <Img src="images/img_group_70.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 py-px">
                      <Text size="md" as="p" className="!text-white-A700">
                        Art
                      </Text>
                      <Text size="xs" as="p" className="!text-white-A700_b2">
                        18 Quizzes
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[30%] md:w-full ml-20 gap-[35px] md:ml-0">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  App Logo
                </Text>
                <div className="p-[11px] border-deep_purple-A200 border border-dashed rounded-[5px]">
                  <div className="flex flex-col mt-1 gap-[18px]">
                    <div className="flex flex-col gap-[21px]">
                      <div className="flex justify-between items-start gap-5 flex-1">
                        <div className="flex flex-col items-center w-[43%] gap-[18px]">
                          <Img src="images/img_logo.svg" alt="queezy_one" className="h-[100px] w-[100px]" />
                          <Heading
                            size="3xl"
                            as="h1"
                            className="!text-white-A700 tracking-[-0.36px] !font-nunito text-center"
                          >
                            Queezy
                          </Heading>
                        </div>
                        <div className="w-[35%]">
                          <div>
                            <div>
                              <div className="flex flex-col items-center z-[1]">
                                <div className="flex self-stretch justify-center p-3.5 z-[1] bg-white-A700 rounded-[24px]">
                                  <Img
                                    src="images/img_mask_group_deep_purple_400.svg"
                                    alt="image"
                                    className="h-[62px]"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector_deep_purple_300.svg"
                                  alt="vector_one"
                                  className="h-[80px] mt-[-70px]"
                                />
                              </div>
                              <div className="flex justify-center items-center mt-[-81px]">
                                <Img src="images/img_vector_blue_100.svg" alt="vector_three" className="h-[81px]" />
                                <Img
                                  src="images/img_vector_pink_a100.svg"
                                  alt="vector_five"
                                  className="self-end h-[66px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-start gap-5 flex-1">
                        <div className="flex flex-col items-center w-[43%] gap-[18px]">
                          <Img src="images/img_logo_gray_900_06.svg" alt="logo_one" className="h-[100px] w-[100px]" />
                          <Heading
                            size="3xl"
                            as="h1"
                            className="!text-white-A700 tracking-[-0.36px] !font-nunito text-center"
                          >
                            Queezy
                          </Heading>
                        </div>
                        <div className="w-[35%]">
                          <div>
                            <div>
                              <div className="flex flex-col items-center z-[1]">
                                <div className="flex self-stretch justify-center p-2.5 z-[1] bg-gray-900_06 rounded-[24px]">
                                  <Img
                                    src="images/img_mask_group_white_a700.svg"
                                    alt="image"
                                    className="h-[62px] mt-2"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector_deep_purple_300_81x71.svg"
                                  alt="vector_one"
                                  className="h-[81px] mt-[-73px]"
                                />
                              </div>
                              <div className="flex justify-center items-center mt-[-81px]">
                                <Img
                                  src="images/img_vector_blue_100_81x40.svg"
                                  alt="vector_three"
                                  className="h-[81px]"
                                />
                                <Img
                                  src="images/img_vector_pink_a100_67x64.svg"
                                  alt="vector_five"
                                  className="self-end h-[67px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row sm:flex-col w-[85%] md:w-full gap-[35px]">
                      <div className="flex justify-between items-start gap-5 flex-1">
                        <div className="flex flex-col items-center w-[31%] gap-[13px]">
                          <Img src="images/img_logo.svg" alt="queezy_one" className="h-[56px] w-[56px]" />
                          <Heading
                            size="lg"
                            as="h5"
                            className="!text-white-A700 tracking-[-0.22px] !font-nunito text-center"
                          >
                            Queezy
                          </Heading>
                        </div>
                        <Img src="images/img_logo.svg" alt="propertyone_one" className="h-[56px] w-[56px]" />
                      </div>
                      <div className="flex justify-between items-start gap-5 flex-1">
                        <div className="flex flex-col items-center w-[31%] gap-[13px]">
                          <Img
                            src="images/img_logo_gray_900_06_56x56.svg"
                            alt="logo_one"
                            className="h-[56px] w-[56px]"
                          />
                          <Heading
                            size="lg"
                            as="h5"
                            className="!text-white-A700 tracking-[-0.22px] !font-nunito text-center"
                          >
                            Queezy
                          </Heading>
                        </div>
                        <Img
                          src="images/img_logo_gray_900_06_56x56.svg"
                          alt="property1dark"
                          className="h-[56px] w-[56px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
