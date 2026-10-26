import sunIcon from "@/assets/images/icon-sun.svg";
import barcodeIcon from "@/assets/images/icon-barcode.svg";

export default function BigCard() {
  return (
    <article className="flex flex-col gap-10 lg:flex-row lg:gap-0">
      <section className="shadow-xl/50 rotate-2 grid gap-4 p-7 rounded-3xl w-full mx-1 bg-linear-to-tr from-terracotta-700 via-terracotta-600 to-terracotta-400 lg:rotate-4">
        <header className="border-t pt-4 border-dashed border-neutral-0 grid grid-cols-[1fr_auto] gap-8">
          <p className="tracking-normal font-fraunces uppercase text-xs text-neutral-200">
            Welcome Card
          </p>
          <img src={sunIcon} />
          <p className="text-xl font-fraunces italic text-neutral-200">
            A note from your host,
          </p>
        </header>
        <section className="grid grid-rows-[auto_1fr_auto] gap-8">
          <h2 className="font-fraunces italic text-neutral-0 text-4xl">
            Margaux.
          </h2>
          <p className="min-h-40 text-neutral-200 font-medium">
            A note from your host, We're so glad you're coming. The shutters
            will be open, the lemonade cold, and the cat - Poivre - pretending
            not to notice you.
          </p>
          <dl className="flex flex-col gap-2 text-neutral-200">
            <dt className="uppercase text-xs">Room</dt>
            <dd className="font-fraunces text-2xl">La Garrigue</dd>
          </dl>
        </section>
      </section>
      <section className="shadow-xl/50 -rotate-2 grid gap-6 w-full mx-1 bg-neutral-0 p-7 rounded-3xl lg:order-first lg:-rotate-4">
        <header className="flex justify-between border-b border-neutral-900/10 pb-5">
          <div className="flex flex-col justify-between gap-1">
            <p className="uppercase text-sm font-dm-mono text-neutral-600 tracking-widest">Receipt</p>
            <h2 className="text-3xl font-fraunces">Your stay</h2>
          </div>
          <div className="flex flex-col text-right text-sm text-neutral-600 tracking-wider font-dm-mono">
            <p>№ MS-2026</p>
            <p>0421-AH</p>
          </div>
        </header>
        <section className="grid grid-cols-[1fr_1fr] border-b border-dashed border-neutral-900/30 pb-5">
          <div className="text-center flex flex-col gap-2">
            <p className="uppercase text-neutral-700 font-dm-mono">Check in</p>
            <h2 className="text-4xl font-fraunces">25 Apr</h2>
            <p className="text-neutral-700 font-dm-mono">Saturday · 15:00</p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <p className="uppercase text-neutral-700 font-dm-mono">Check out</p>
            <h2 className="text-4xl font-fraunces">29 Apr</h2>
            <p className="text-neutral-700 font-dm-mono">Wednesday · 11:00</p>
          </div>
        </section>
        <section>
          <dl className="grid grid-cols-[1fr_auto] gap-3 border-b pb-7 border-neutral-900/90 font-fraunces">
            <dt>Room · La Garrigue · 4 nights</dt>
            <dd>€ 620.00</dd>
            <dt>Breakfast · 2 guests</dt>
            <dd>€ 96.00</dd>
            <dt>Tourist tax</dt>
            <dd>€ 14.40</dd>
          </dl>
        </section>
        <section className="flex justify-between items-center">
          <p className="uppercase text-neutral-600 text-lg font-dm-mono">Total paid</p>
          <h2 className="text-3xl font-fraunces">€ 730.40</h2>
        </section>
        <aside className="flex justify-between">
          <p className="uppercase text-neutral-600 text-base">Paid · Wise · GBP</p>
          <img className="w-27" src={barcodeIcon} />
        </aside>
      </section>
    </article>
  );
}
