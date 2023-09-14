import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import ConsultingSubmitForm from "@containers/consulting/ConsultingSubmitForm";
import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  MapPinIcon,
  MegaphoneIcon,
  SwatchIcon,
  TrophyIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { children } from "@/types";
import { ReactElement, cloneElement } from "react";
import { classNames } from "@utils/utils";

interface ProcessItemProps {
  label: string;
  title: string;
  icon: ReactElement;
}

const ProcessItem = ({ label, title, icon }: ProcessItemProps) => (
  <div
    className="flex py-10pxr space-x-20pxr
    md:flex-col md:justify-center md:items-center md:space-x-0 md:space-y-20pxr md:py-0"
  >
    <div className="flex justify-center items-center md:p-20pxr">
      <div
        className="relative flex justify-center items-center rounded-full ring-theone-color15
      w-49pxr h-49pxr md:w-100pxr md:h-100pxr
      ring-[6px] md:ring-[7px]"
      >
        <div
          className="flex justify-center items-center absolute top-0 left-0 text-white bg-black rounded-full
        text-8pxr px-4pxr py-1pxr md:text-13pxr md:px-12pxr md:py-7pxr"
        >
          {label}
        </div>
        {cloneElement(icon, {
          className: "stroke-1 stroke-theone-color15 w-27pxr md:w-50pxr",
        })}
      </div>
    </div>
    <div className="flex items-center text-16pxr md:text-18pxr">{title}</div>
  </div>
);

const Highlight = ({
  children,
  isFirst = false,
  isLast = false,
}: {
  children: children;
  isFirst?: boolean;
  isLast?: boolean;
}) => (
  <div className="flex-1 flex">
    <div
      className={classNames(
        "grow mt-70pxr h-2pxr",
        isFirst ? "bg-transparent" : "bg-gray-300"
      )}
    />
    {children}
    <div
      className={classNames(
        "grow mt-70pxr h-2pxr bg-gray-300",
        isLast ? "bg-transparent" : "bg-gray-300"
      )}
    />
  </div>
);

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr px-10pxr">
          <TitleWithBar text={MENU_NAME.카페컨설팅} />
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col p-15pxr md:hidden">
            <ProcessItem
              label="1"
              title="개설상담"
              icon={<ChatBubbleLeftRightIcon />}
            />
            <ProcessItem
              label="2"
              title="점포선전/상권분석"
              icon={<MapPinIcon />}
            />
            <ProcessItem
              label="3"
              title="계약체결"
              icon={<ClipboardDocumentCheckIcon />}
            />
            <ProcessItem
              label="4"
              title="매장실측/도면설계"
              icon={<SwatchIcon />}
            />
            <ProcessItem
              label="5"
              title="인테리어 시공"
              icon={<WrenchScrewdriverIcon />}
            />
            <ProcessItem label="6" title="가맹점주 교육" icon={<UsersIcon />} />
            <ProcessItem
              label="7"
              title="오픈 리허설"
              icon={<MegaphoneIcon />}
            />
            <ProcessItem label="8" title="오픈" icon={<TrophyIcon />} />
            <ProcessItem
              label="9"
              title="운영지원/사후관리"
              icon={<DocumentChartBarIcon />}
            />
          </div>
          <div className="hidden md:flex md:flex-col md:justify-center space-y-30pxr px-10pxr pt-50pxr">
            <div className="flex justify-center items-center">
              <Highlight isFirst>
                <ProcessItem
                  label="1"
                  title="개설상담"
                  icon={<ChatBubbleLeftRightIcon />}
                />
              </Highlight>

              <Highlight>
                <ProcessItem
                  label="2"
                  title="점포선전/상권분석"
                  icon={<MapPinIcon />}
                />
              </Highlight>
              <Highlight>
                <ProcessItem
                  label="3"
                  title="계약체결"
                  icon={<ClipboardDocumentCheckIcon />}
                />
              </Highlight>
              <Highlight>
                <ProcessItem
                  label="4"
                  title="매장실측/도면설계"
                  icon={<SwatchIcon />}
                />
              </Highlight>
              <Highlight isLast>
                <ProcessItem
                  label="5"
                  title="인테리어 시공"
                  icon={<WrenchScrewdriverIcon />}
                />
              </Highlight>
            </div>
            <div className="flex justify-center items-center">
              <Highlight isFirst>
                <ProcessItem
                  label="6"
                  title="가맹점주 교육"
                  icon={<UsersIcon />}
                />
              </Highlight>
              <Highlight>
                <ProcessItem
                  label="7"
                  title="오픈 리허설"
                  icon={<MegaphoneIcon />}
                />
              </Highlight>
              <Highlight>
                <ProcessItem label="8" title="오픈" icon={<TrophyIcon />} />
              </Highlight>
              <Highlight isLast>
                <ProcessItem
                  label="9"
                  title="운영지원/사후관리"
                  icon={<DocumentChartBarIcon />}
                />
              </Highlight>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-4xl mx-auto mt-30pxr md:mt-100pxr md:mb-20pxr lg:mt-100pxr">
          <div className="flex justify-center items-center text-20pxr md:text-30pxr">
            창업문의하기
          </div>
          <div className="px-15pxr py-30pxr">
            <ConsultingSubmitForm />
          </div>
        </div>
      </section>
    </main>
  );
}
