import AnimationWrapper from "./AnimationWrapper";
import { ExternalLink } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Came to get my Galaxy S6 Lite screen replaced. He found the piece for $35 and charged $65 for the labor. I recommend their services if you're in need.",
      author: "David C.",
    },
    {
      quote:
        "Amazing service provider! If you want the job done right and quickly by a professional, this is it! Technicians know how to quickly identify all types of problems and can resolve all issues related to tech! Have been using them for all tech related issues for a long time!",
      author: "Martin N.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-solarized-light2 dark:bg-solarized-dark2"
    >
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 dark:text-solarized-light">
              What Our Customers Say ⭐
            </h2>
            <p className="text-lg max-w-2xl mx-auto dark:text-solarized-light3">
              We&apos;re proud of our 5-star service.
            </p>
          </div>
        </AnimationWrapper>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md">
                <p className="text-lg italic text-solarized-dark3 dark:text-solarized-light3 mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="text-right font-medium dark:text-solarized-light">
                  - {testimonial.author}
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.yelp.com/biz/dash-fixes-pasadena"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-solarized-blue text-solarized-blue rounded-lg font-medium text-center hover:bg-solarized-blue hover:bg-opacity-10 transition dark:text-solarized-light dark:border-solarized-light dark:hover:bg-solarized-light dark:hover:bg-opacity-10"
          >
            Read More Reviews on Yelp{" "}
            <ExternalLink className="inline ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
