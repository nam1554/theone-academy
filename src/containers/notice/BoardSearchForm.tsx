"use client";

import { Input, Select, Option, Button } from "@components/MaterialTailwind";

const BoardSearchForm = () => {
  return (
    <form>
      <div className="flex justify-end space-x-1">
        <div className="w-24 h-full">
          <Select
            className="!border !border-gray-400 bg-white text-gray-900 placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "!min-w-0" }}
          >
            <Option value="0">제목</Option>
            <Option value="1">작성자</Option>
            <Option value="2">내용</Option>
          </Select>
        </div>
        <div className="w-32 h-full">
          <Input
            type="text"
            className="!border !border-gray-400 bg-white text-gray-900 placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "!min-w-[100px]" }}
            crossOrigin=""
          />
        </div>
        <div className="w-20 h-full">
          <Button
            variant="outlined"
            className="!text-16pxr !border !border-gray-400 text-gray-900"
          >
            검색
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BoardSearchForm;
