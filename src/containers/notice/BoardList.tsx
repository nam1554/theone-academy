import { BoardPagination } from "./BoardPagination";

const BoardItem = () => {
  return (
    <>
      <div className="flex py-10pxr border-b border-gray-300 space-x-2 lg:hidden">
        <div className="grow-0">
          <div className="h-56pxr w-56pxr bg-gray-600 md:h-20 md:w-20"></div>
        </div>
        <div className="grow min-w-0 flex flex-col space-y-1 justify-between text-gray-600 h-56pxr md:h-20">
          <div className="overflow-ellipsis whitespace-nowrap overflow-hidden text-15pxr md:text-18pxr">
            게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1
          </div>
          <div className="flex justify-end space-x-2 text-13pxr md:text-15pxr">
            <div>관리자</div>
            <div>2023-09-07</div>
            <div>조회수:30</div>
          </div>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-11 py-10pxr border-b border-gray-300 space-x-2 text-13pxr text-gray-600">
        <div className="col-span-1 text-center">1</div>
        <div className="col-span-7">
          <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">
            게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1
          </div>
        </div>
        <div className="col-span-1 text-center">관리자</div>
        <div className="col-span-1 text-center">2023-09-07</div>
        <div className="col-span-1 text-center">30</div>
      </div>
    </>
  );
};

const BoardHeader = () => (
  <div className="hidden lg:grid grid-cols-11 py-10pxr border-b border-gray-300 space-x-2 text-13pxr">
    <div className="col-span-1 text-center font-medium">번호</div>
    <div className="col-span-7 text-center font-medium">제목</div>
    <div className="col-span-1 text-center font-medium">작성자</div>
    <div className="col-span-1 text-center font-medium">날짜</div>
    <div className="col-span-1 text-center font-medium">조회수</div>
  </div>
);

const BoardList = () => {
  return (
    <>
      <div className="flex flex-col first:border-t border-gray-500">
        <BoardHeader />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </div>
      <div className="w-full pt-15pxr flex justify-center">
        <BoardPagination />
      </div>
    </>
  );
};

export default BoardList;
