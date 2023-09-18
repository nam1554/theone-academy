import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import BoardList from "@containers/notice/BoardList";
import BoardSearchForm from "@containers/notice/BoardSearchForm";

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr px-10pxr">
          <TitleWithBar text={MENU_NAME.공지사항} />
        </div>
      </section>
      <section>
        <div className="p-15pxr mb-30pxr">
          <BoardSearchForm />
          <div className="mt-10pxr">
            <BoardList />
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
