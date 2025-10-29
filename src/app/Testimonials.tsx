import AnimationWrapper from "./AnimationWrapper";
import { ExternalLink, Star, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Came to get my Galaxy S6 Lite screen replaced. He found the piece for $35 and charged $65 for the labor. I recommend their services if you're in need.",
      author: "Aaron M.",
      icon: <User className="w-5 h-5 text-solarized-light3" />,
      stars: 5,
    },
    {
      quote:
        "Amazing service provider! If you want the job done right and quickly by a professional, this is it! Technicians know how to quickly identify all types of problems and can resolve all issues related to tech! Have been using them for all tech related issues for a long time!",
      author: "Martin N.",
      icon: <User className="w-5 h-5 text-solarized-light3" />,
      stars: 5,
    },
    {
      quote:
        "Dash Fixes is the best! They fixed my iPhone screen in under an hour and the price was very reasonable. Highly recommend for anyone needing phone repairs in Pasadena.",
      author: "Sarah K.",
      icon: <User className="w-5 h-5 text-solarized-light3" />,
      stars: 5,
    },
    {
      quote:
        "Professional service from start to finish. My MacBook was running slow and they optimized it perfectly. Fast turnaround and great communication throughout the process.",
      author: "David L.",
      icon: <User className="w-5 h-5 text-solarized-light3" />,
      stars: 5,
    },
    {
      quote:
        "Needed my Nintendo Switch repaired and Dash Fixes had it working like new in no time. Fair pricing and excellent customer service. Will definitely use them again!",
      author: "Mike R.",
      icon: <User className="w-5 h-5 text-solarized-light3" />,
      stars: 5,
    },
    {
      quote:
        "Outstanding repair service! They replaced my laptop screen with OEM quality parts and the fit was perfect. Much better than the big box stores. Highly recommended!",
      author: "Jennifer T.",
      icon: <User className="w-5 h-5 text-solarized-light3" />,
      stars: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="section-spacing bg-solarized-light2 dark:bg-solarized-dark2"
    >
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center content-spacing">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 dark:text-solarized-light">
              What Our Customers Say
            </h2>
            <p className="text-lg max-w-2xl mx-auto dark:text-solarized-light3">
              We&apos;re proud of our 5-star service.
            </p>
          </div>
        </AnimationWrapper>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <div className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full mr-4 bg-solarized-light2 dark:bg-solarized-dark2 flex items-center justify-center icon-spacing">
                    {testimonial.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-solarized-dark2 dark:text-solarized-light">
                      {testimonial.author}
                    </p>
                    <div className="flex items-center">
                      {Array.from({ length: testimonial.stars }, (_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg italic text-solarized-dark3 dark:text-solarized-light3 mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
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
