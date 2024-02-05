import ilusThanks from "../../images/illustration-thank-you.svg";

export default function Complete({ selectedRating }) {
  return (
    <section className="mx-auto mt-20 w-full max-w-sm rounded-2xl bg-darkBlue/40 px-6 py-10 font-overpass md:absolute md:left-1/2 md:top-[20%] md:mt-0 md:-translate-x-1/2">
      <img
        src={ilusThanks}
        alt="ilustration Thank you"
        className="mx-auto bg-cover bg-center"
      />
      <div className="mx-auto mt-7 w-full max-w-fit rounded-full bg-darkBlue px-3 py-[5px] text-sm text-orange/70">
        <p className="">
          You selected <span>{selectedRating}</span> out of 5
        </p>
      </div>
      <div className="mt-7 space-y-4 text-center">
        <h3 className="text-3xl font-bold text-white">Thank you!</h3>
        <p className="text-mediumGray">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </section>
  );
}
