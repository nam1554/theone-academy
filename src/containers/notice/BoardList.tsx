const BoardItem = () => {
  return (
    <div className="flex py-10pxr border-b border-gray-300 space-x-2">
      <div className="grow-0">
        <div className="h-56pxr w-56pxr bg-gray-600"></div>
      </div>
      <div className="grow min-w-0 flex flex-col space-y-1">
        <div className="text-15pxr overflow-ellipsis whitespace-nowrap overflow-hidden">
          게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1게시글1
        </div>
        <div className="flex text-13pxr space-x-2">
          <div>관리자</div>
          <div>2023-09-07</div>
          <div>조회수:30</div>
        </div>
      </div>
    </div>
  );
};

const BoardList = () => {
  return (
    <div className="flex flex-col first:border-t border-gray-500">
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
    </div>
  );
};

export default BoardList;
