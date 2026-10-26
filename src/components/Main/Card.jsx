import keyIcon from "@/assets/images/icon-key.svg";
import wifiIcon from "@/assets/images/icon-wifi.svg";
import breakfastIcon from "@/assets/images/icon-breakfast.svg";

export default function Card() {
  return (
    <article className="flex flex-col gap-7 lg:flex-row">
      <section className="flex flex-col gap-7 w-full mx-1 bg-neutral-0 rounded-xl p-5 shadow-2xl/20">
        <header className="flex items-center justify-between text-terracotta-600">
          <div className="flex gap-4 items-center">
            <img className="bg-terracotta-600 p-3 rounded-xl" src={keyIcon} />
            <h2 className="font-dm-mono uppercase font-semibold tracking-widest">Arrival</h2>
          </div>
          <p className="text-3xl">01</p>
        </header>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-dm-sans">Check-in from 15:00</h1>
            <time className="text-sm text-neutral-700" datetime="04-25">
              Sat, 25 April
            </time>
          </div>
          <p className="font-dm-sans text-neutral-800">
            Ring the brass bell by the blue door. If we're at the market, the
            key is in the terracotta pot by the olive tree.
          </p>
        </section>
      </section>
      <section className="flex flex-col gap-7 w-full mx-1 bg-neutral-0 rounded-xl p-5 shadow-2xl/20">
        <header className="flex items-center justify-between text-blue-500">
          <div className="flex gap-4 items-center">
            <img className="bg-blue-500 p-3 rounded-xl" src={wifiIcon} />
            <h2 className="font-dm-mono font-semibold uppercase tracking-widest">wifi</h2>
          </div>
          <p className="text-3xl">02</p>
        </header>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-dm-sans">Le Soleil · Guest</h1>
            <p className="text-sm text-neutral-700">Password below</p>
          </div>
          <dl className="flex flex-col gap-2">
            <div className="flex items-center justify-between bg-neutral-900/10 px-2 py-1 rounded-md">
              <dt className="uppercase tracking-wider text-sm text-neutral-600">Network</dt>
              <dd className="text-xs text-neutral-800">Le Soleil · Guest</dd>
            </div>
            <div className="flex items-center justify-between bg-neutral-900/10 px-2 py-1 rounded-md">
              <dt className="uppercase tracking-wider text-sm text-neutral-600">Password</dt>
              <dd className="text-xs flex gap-2 items-center text-neutral-800">
                soleil-2026 <button className="text-neutral-600 uppercase border py-0.5 px-2 rounded-xl text-xs border-neutral-900/10 cursor-pointer">Copy</button>
              </dd>
            </div>
          </dl>
        </section>
      </section>
      <section className="flex flex-col gap-7 w-full mx-1 bg-neutral-0 rounded-xl p-5 shadow-2xl/20">
        <header className="flex items-center justify-between text-rose-500">
          <div className="flex gap-4 items-center">
            <img className="bg-rose-500 p-3 rounded-xl" src={breakfastIcon} />
            <h2 className="font-dm-mono font-semibold uppercase tracking-widest">breakfast</h2>
          </div>
          <p className="text-3xl">03</p>
        </header>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-dm-sans">Served 8 - 10:30</h1>
            <p className="text-sm text-neutral-700">On the terrace</p>
          </div>
          <p className="font-dm-sans text-neutral-800">
            Fresh figs, Marseille honey, pain au levain, and espresso.
            Gluten-free option? Leave a note the night before.
          </p>
        </section>
      </section>
    </article>
  );
}
