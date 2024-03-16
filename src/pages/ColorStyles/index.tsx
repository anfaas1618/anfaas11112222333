import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components";

export default function ColorStylesPage() {
  return (
    <>
      <Helmet>
        <title>Anfaas1618's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[122px] gap-[98px] md:gap-[73px] md:pb-5 sm:gap-[49px] bg-white-A700">
        <header className="flex flex-col" />
        <div className="flex flex-col w-full mx-auto md:p-5 max-w-7xl">
          <div className="flex flex-col gap-[46px]">
            <Text size="6xl" as="p" className="!text-gray-900_03">
              Color Styles
            </Text>
            <div className="h-[4px] bg-deep_purple-50" />
          </div>
          <div className="flex flex-col mt-[90px] gap-[89px]">
            <div className="flex flex-col gap-9 flex-1">
              <Text size="5xl" as="p" className="!text-gray-900_03">
                Primary & Secondary Color Palette
              </Text>
              <div className="flex md:flex-col gap-10">
                <div className="flex flex-col w-full gap-[33px]">
                  <div className="h-[280px] bg-deep_purple-400 rounded-[40px]" />
                  <div className="flex flex-col items-start gap-2.5">
                    <Text size="4xl" as="p" className="!text-gray-900_03">
                      Royal Blue
                    </Text>
                    <div className="flex gap-4">
                      <Text as="p">HEX</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        #6A5AE0
                      </Text>
                    </div>
                    <div className="flex gap-[15px]">
                      <Text as="p">RGB</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        206 90 224
                      </Text>
                    </div>
                    <div className="flex gap-[17px]">
                      <Text as="p">HSL</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        247 68 62
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="h-[280px] bg-deep_purple-300 rounded-[40px]" />
                  <div className="flex flex-col items-start">
                    <Text size="4xl" as="p" className="!text-gray-900_03">
                      Dull Lavender
                    </Text>
                    <div className="flex mt-4 gap-4">
                      <Text as="p">HEX</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        #9087E5
                      </Text>
                    </div>
                    <div className="flex mt-2 gap-[15px]">
                      <Text as="p">RGB</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        144 135 229
                      </Text>
                    </div>
                    <div className="flex mt-2 gap-[17px]">
                      <Text as="p">HSL</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        246 64 71
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[29px]">
                  <div className="h-[280px] bg-pink-A100 rounded-[40px]" />
                  <div className="flex flex-col items-start">
                    <Text size="4xl" as="p" className="!text-gray-900_03">
                      Pink Salmon
                    </Text>
                    <div className="flex mt-4 gap-4">
                      <Text as="p">HEX</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        #FF8FA2
                      </Text>
                    </div>
                    <div className="flex mt-2 gap-[15px]">
                      <Text as="p">RGB</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        255 143 162
                      </Text>
                    </div>
                    <div className="flex mt-[9px] gap-[17px]">
                      <Text as="p">HSL</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        350 100 78
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 flex-1">
              <Text size="5xl" as="p" className="!text-gray-900_03">
                Accent Color Palette
              </Text>
              <div className="flex md:flex-col gap-10">
                <div className="flex flex-col w-full gap-[29px]">
                  <div className="h-[280px] bg-red-100 rounded-[40px]" />
                  <div className="flex flex-col items-start">
                    <Text size="4xl" as="p" className="!text-gray-900_03">
                      Pastel Pink
                    </Text>
                    <div className="flex mt-4 gap-4">
                      <Text as="p">HEX</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        #FFD6DD
                      </Text>
                    </div>
                    <div className="flex mt-2 gap-[15px]">
                      <Text as="p">RGB</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        255 214 221
                      </Text>
                    </div>
                    <div className="flex mt-2 gap-[17px]">
                      <Text as="p">HSL</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        349 100 92
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="h-[280px] bg-blue-100 rounded-[40px]" />
                  <div className="flex flex-col items-start">
                    <Text size="4xl" as="p" className="!text-gray-900_03">
                      Hawkes Blue
                    </Text>
                    <div className="flex mt-4 gap-4">
                      <Text as="p">HEX</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        #C4D0FB
                      </Text>
                    </div>
                    <div className="flex mt-2 gap-[15px]">
                      <Text as="p">RGB</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        196 208 251
                      </Text>
                    </div>
                    <div className="flex mt-2 gap-[17px]">
                      <Text as="p">HSL</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        227 87 88
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[33px]">
                  <div className="h-[280px] bg-teal-50 rounded-[40px]" />
                  <div className="flex flex-col items-start gap-2.5">
                    <Text size="4xl" as="p" className="!text-gray-900_03">
                      Mint Tulip
                    </Text>
                    <div className="flex gap-4">
                      <Text as="p">HEX</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        #C9F2E9
                      </Text>
                    </div>
                    <div className="flex gap-[15px]">
                      <Text as="p">RGB</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        12 9 42
                      </Text>
                    </div>
                    <div className="flex gap-[17px]">
                      <Text as="p">HSL</Text>
                      <Text as="p" className="!text-gray-900_bf">
                        167 61 87
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text size="5xl" as="p" className="mt-[93px] !text-gray-900_03">
            Greyscale Color Palette
          </Text>
          <div className="mt-[35px] gap-10 grid-cols-3 md:grid-cols-[1fr] grid">
            <div className="flex flex-col w-full gap-[30px]">
              <div className="h-[280px] bg-gray-900_03 rounded-[40px]" />
              <div className="flex flex-col items-start">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Black
                </Text>
                <div className="flex mt-4 gap-4">
                  <Text as="p">HEX</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    #49465F
                  </Text>
                </div>
                <div className="flex mt-2 gap-[15px]">
                  <Text as="p">RGB</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    12 9 42
                  </Text>
                </div>
                <div className="flex mt-2 gap-[17px]">
                  <Text as="p">HSL</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    245 65 10
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[33px]">
              <div className="h-[280px] bg-blue_gray-700 rounded-[40px]" />
              <div className="flex flex-col items-start gap-2.5">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Grey 1
                </Text>
                <div className="flex gap-4">
                  <Text as="p">HEX</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    #49465F
                  </Text>
                </div>
                <div className="flex gap-[15px]">
                  <Text as="p">RGB</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    73 70 95
                  </Text>
                </div>
                <div className="flex gap-[17px]">
                  <Text as="p">HSL</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    247 15 32
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[33px]">
              <div className="h-[280px] bg-blue_gray-400 rounded-[40px]" />
              <div className="flex flex-col items-start gap-2.5">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Grey 2
                </Text>
                <div className="flex gap-4">
                  <Text as="p">HEX</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    #858494
                  </Text>
                </div>
                <div className="flex gap-[15px]">
                  <Text as="p">RGB</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    133 132 148
                  </Text>
                </div>
                <div className="flex gap-[17px]">
                  <Text as="p">HSL</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    244 7 55
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[33px]">
              <div className="h-[200px] bg-blue_gray-100 rounded-[40px]" />
              <div className="flex flex-col items-start gap-2.5">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Grey 3
                </Text>
                <div className="flex gap-4">
                  <Text as="p">HEX</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    #CCCCCC
                  </Text>
                </div>
                <div className="flex gap-[15px]">
                  <Text as="p">RGB</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    204 204 204
                  </Text>
                </div>
                <div className="flex gap-[17px]">
                  <Text as="p">HSL</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    0 0 80
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[33px]">
              <div className="h-[200px] bg-gray-300 rounded-[40px]" />
              <div className="flex flex-col items-start gap-2.5">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Grey 4
                </Text>
                <div className="flex gap-4">
                  <Text as="p">HEX</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    #E6E6E6
                  </Text>
                </div>
                <div className="flex gap-[15px]">
                  <Text as="p">RGB</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    230 230 230
                  </Text>
                </div>
                <div className="flex gap-[17px]">
                  <Text as="p">HSL</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    0 0 90
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[33px]">
              <div className="h-[200px] bg-deep_purple-50 rounded-[40px]" />
              <div className="flex flex-col items-start gap-2.5">
                <Text size="4xl" as="p" className="!text-gray-900_03">
                  Grey 5
                </Text>
                <div className="flex gap-4">
                  <Text as="p">HEX</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    #E6E6E6
                  </Text>
                </div>
                <div className="flex gap-[15px]">
                  <Text as="p">RGB</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    239 238 252
                  </Text>
                </div>
                <div className="flex gap-[17px]">
                  <Text as="p">HSL</Text>
                  <Text as="p" className="!text-gray-900_bf">
                    247 68 96
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[200px] w-full bg-white-A700 rounded-[40px]" />
            <div className="flex flex-col items-start w-full">
              <Text size="4xl" as="p" className="!text-gray-900_03">
                White
              </Text>
              <div className="flex mt-4 gap-4">
                <Text as="p">HEX</Text>
                <Text as="p" className="!text-gray-900_bf">
                  #FFFFFF
                </Text>
              </div>
              <div className="flex mt-2 gap-[15px]">
                <Text as="p">RGB</Text>
                <Text as="p" className="!text-gray-900_bf">
                  255 255 255
                </Text>
              </div>
              <div className="flex mt-[9px] gap-[17px]">
                <Text as="p">HSL</Text>
                <Text as="p" className="!text-gray-900_bf">
                  0 0 100
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
