import TitleWithBar from "@components/TitleWithBar";
import { MENU_NAME } from "@constants/constants";
import ContactSubmitForm from "@containers/contact/ContactSubmitForm";

export default function Page() {
  return (
    <main>
      <section>
        <div className="max-w-7xl mx-auto mt-20pxr md:mt-50pxr px-10pxr">
          <TitleWithBar text={MENU_NAME.상담문의} />
        </div>
      </section>
      <section>
        <div className="max-w-4xl mx-auto mt-30pxr md:mt-100pxr md:mb-20pxr lg:mt-100pxr">
          <div className="px-15pxr py-30pxr">
            <ContactSubmitForm />
          </div>
        </div>
      </section>
    </main>
  );
}
