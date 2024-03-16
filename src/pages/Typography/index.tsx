import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  { name: "Heading 1", size: "32px", lineheight: "48px", fontweight: "Bold" },
  { name: "Heading 2", size: "28px", lineheight: "42px", fontweight: "Bold" },
  { name: "Heading 3", size: "24px", lineheight: "36px", fontweight: "Medium" },
  { name: "Body XLarge", size: "20px", lineheight: "28px", fontweight: "Medium" },
  { name: "Body Large", size: "18px", lineheight: "24px", fontweight: "Medium" },
  { name: "Body Large", size: "18px", lineheight: "24px", fontweight: "Regular" },
  { name: "Body Normal", size: "16px", lineheight: "24px", fontweight: "Bold" },
  { name: "Body Normal", size: "16px", lineheight: "24px", fontweight: "Medium" },
  { name: "Body Normal", size: "16px", lineheight: "24px", fontweight: "Regular" },
  { name: "Body Small", size: "14px", lineheight: "20px", fontweight: "Bold" },
  { name: "Body Small", size: "14px", lineheight: "20px", fontweight: "Medium" },
  { name: "Body Small", size: "14px", lineheight: "20px", fontweight: "Regular" },
  { name: "Body XSmall", size: "12px", lineheight: "18px", fontweight: "Medium" },
  { name: "Body XSmall", size: "12px", lineheight: "18px", fontweight: "Regular" },
  { name: "Text Small", size: "14px", lineheight: "20px", fontweight: "Medium" },
  { name: "text xSmall", size: "12px", lineheight: "18px", fontweight: "medium" },
];

type TableRowType = { name: string; size: string; lineheight: string; fontweight: string };

export default function TypographyPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <Heading size="2xl" as="h1">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-[30px] sm:pb-5 !text-gray-900_03 !font-medium">
            Name
          </Text>
        ),
        meta: { width: "326px" },
      }),
      tableColumnHelper.accessor("size", {
        cell: (info) => (
          <Heading size="2xl" as="h2">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="pb-[31px] sm:pb-5 !text-gray-900_03 !font-medium">
            Size
          </Text>
        ),
        meta: { width: "306px" },
      }),
      tableColumnHelper.accessor("lineheight", {
        cell: (info) => (
          <Heading size="2xl" as="h3">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="pt-0.5 pb-7 sm:pb-5 !text-gray-900_03 !font-medium">
            Line Height
          </Text>
        ),
        meta: { width: "392px" },
      }),
      tableColumnHelper.accessor("fontweight", {
        cell: (info) => (
          <Heading size="2xl" as="h4">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="pt-0.5 pb-7 sm:pb-5 !text-gray-900_03 !font-medium">
            Font Weight
          </Text>
        ),
        meta: { width: "256px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Anfaas1618's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pb-[120px] gap-[99px] md:gap-[74px] md:pb-5 sm:gap-[49px] bg-white-A700">
        <header className="flex flex-col" />
        <div className="w-full mx-auto md:p-5 max-w-7xl">
          <div className="flex flex-col gap-[54px] sm:gap-[27px]">
            <Text size="6xl" as="p" className="!text-gray-900_03">
              Typography
            </Text>
            <div className="h-[4px] bg-deep_purple-50" />
            <div className="flex md:flex-col justify-between items-center gap-5">
              <div className="flex self-end justify-center w-[40%] md:w-full">
                <div className="flex flex-col w-full gap-[29px]">
                  <a href="https://fonts.google.com/specimen/Rubik" target="_blank" rel="noreferrer">
                    <Text size="5xl" as="p" className="!text-gray-900_03 tracking-[0.96px] underline">
                      Rubik
                    </Text>
                  </a>
                  <div className="h-[152px] relative">
                    <Text
                      size="3xl"
                      as="p"
                      className="w-[91%] left-0 top-0 m-auto !text-gray-900_03 tracking-[0.64px] absolute"
                    >
                      <>
                        Abcdefghijklmnopqrstuvwxyz
                        <br />
                        0123456789
                        <br />
                        &!?%*@
                      </>
                    </Text>
                    <Text
                      size="3xl"
                      as="p"
                      className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto !text-gray-900_03 tracking-[0.64px] absolute"
                    >
                      <>
                        Abcdefghijklmnopqrstuvwxyz
                        <br />
                        0123456789
                        <br />
                        &!?%*@
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Text size="7xl" as="p" className="!text-gray-900_03">
                AaBb
              </Text>
            </div>
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{ className: "md:flex-wrap" }}
              rowDataProps={{ className: "md:flex-wrap" }}
              className="w-[1280px]"
              columns={tableColumns}
              data={tableData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
