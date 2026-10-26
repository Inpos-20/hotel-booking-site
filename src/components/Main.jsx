import BigCard from "./Main/BigCard";
import Card from "./Main/Card";
import bedIcon from "@/assets/images/icon-bed.svg";
import houseIcon from "@/assets/images/icon-house.svg";
import pinIcon from "@/assets/images/icon-pin.svg";
import breakfastIcon from "@/assets/images/icon-breakfast-outline.svg";
import mailIcon from "@/assets/images/icon-mail.svg";

export default function Main({ isMenuOpen }) {
  return (
    <div className="flex-1 min-h-0 lg:contents">
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} h-full flex-col mx-5 border-t border-neutral-900/20 pt-4 lg:flex lg:col-start-1 lg:row-start-2 lg:border-none`}
      >
        <ul className="flex-1">
          <li className=" cursor-pointer rounded-xl grid grid-cols-[auto_1fr_auto] gap-2 items-center px-4 py-3 hover:bg-neutral-0">
            <img src={bedIcon} alt="" />
            <p>Your Stay</p>
            <p className="font-dm-mono bg-terracotta-600 text-neutral-200 w-5 h-5 text-center rounded-full text-xs">
              1
            </p>
          </li>
          <li className="cursor-pointer rounded-xl grid grid-cols-[auto_1fr_auto] gap-2 items-center px-4 py-3 hover:bg-neutral-0">
            <img src={houseIcon} alt="" />
            The house
          </li>
          <li className="cursor-pointer rounded-xl grid grid-cols-[auto_1fr_auto] gap-2 items-center px-4 py-3 hover:bg-neutral-0">
            <img src={pinIcon} alt="" />
            Around town
          </li>
          <li className="cursor-pointer rounded-xl grid grid-cols-[auto_1fr_auto] gap-2 items-center px-4 py-3 hover:bg-neutral-0">
            <img src={breakfastIcon} alt="" />
            Breakfast
          </li>
          <li className="cursor-pointer rounded-xl grid grid-cols-[auto_1fr_auto] gap-2 items-center px-4 py-3 hover:bg-neutral-0">
            <img src={mailIcon} alt="" />
            Messages
          </li>
        </ul>
        <footer className="flex flex-col gap-7">
          <section className="relative bg-sun-200 rounded-2xl overflow-hidden px-5 py-4">
            <div className="absolute -top-8 -right-3 size-24 rounded-full bg-linear-to-br from-sun-500 to-sun-200" />
            <div className="flex flex-col gap-3">
              <p className="uppercase text-sm tracking-wide text-neutral-800">
                Today in Cassis
              </p>
              <h2 className="font-dm-mono text-5xl">27°</h2>
              <p className="text-sm text-neutral-800">Sunny · light breeze</p>
            </div>
          </section>
          <div className="border-t border-dashed border-neutral-900/20 py-5 text-neutral-600 text-sm flex flex-col gap-3">
            <p className="uppercase">Est. 1987</p>
            <p className="uppercase">
              Maison Soleil · 12 Rue des Oliviers · Cassis
            </p>
            <p className="uppercase">© 2026 Maison Soleil</p>
          </div>
        </footer>
      </div>
      <div
        className={`${isMenuOpen ? "hidden" : "flex"} px-4 py-5 flex-col gap-14 col-start-2 row-span-2`}
      >
        <header className="flex flex-col gap-5 lg:flex lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col gap-5">
            <p className="font-dm-mono font-normal text-neutral-900/70 text-sm tracking-widest uppercase">
              Booking · Confirmed
            </p>
            <h1 className="font-dm-sans font-medium text-neutral-900/95 text-4xl">
              Bienvenue,{" "}
              <span className="font-fraunces italic text-terracotta-700">
                Lucia.
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-[1fr_1fr] gap-5">
            <button className="text-sm font-semibold text-neutral-900/90 p-2 rounded-full border border-neutral-900/20">
              Print receipt
            </button>
            <button className="bg-neutral-900 text-neutral-0 font-semibold text-sm rounded-full border border-neutral-900/20 p-2">
              Add to calendar
            </button>
          </div>
        </header>
        <BigCard />
        <Card />
      </div>
    </div>
  );
}
