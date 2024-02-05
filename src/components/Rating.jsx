import cn from "classnames";
import iconStar from "../../images/icon-star.svg";

export default function Rating({ setIsCompleted, selectedRating, setSelectedRating, isCompleted }) {
  const ratings = [1, 2, 3, 4, 5];
  return (
    <section className="mx-auto mt-20 w-full max-w-sm rounded-2xl bg-darkBlue/40 px-8 py-8 font-overpass md:absolute md:left-1/2 md:top-[20%] md:mt-0 md:-translate-x-1/2">
      <div className="w-full max-w-fit rounded-full bg-darkBlue p-3">
        <img src={iconStar} alt="icon star" className="bg-cover bg-center" />
      </div>
      <div className="mt-5 space-y-4">
        <h3 className="text-3xl font-bold text-white">How did we do?</h3>
        <p className="text-mediumGray">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        {ratings.map((rating) => {
          return (
            <button
              type="button"
              key={rating}
              className={cn(
                "w-full max-w-fit rounded-full px-5 py-3 font-bold transition duration-300 hover:bg-orange hover:text-white",
                {
                  "bg-mediumGray text-white": selectedRating == rating,
                  "bg-darkBlue text-lightGray/60": selectedRating != rating,
                },
              )}
              onClick={() => setSelectedRating(rating)}
            >
              {rating}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className="duraton-300 mt-7 w-full rounded-full bg-orange py-2 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-orange"
        onClick={() => setIsCompleted(!isCompleted)}
      >
        Submit
      </button>
    </section>
  );
}
