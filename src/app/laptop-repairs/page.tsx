import Link from 'next/link';
import Testimonials from '../Testimonials';
import { BugOff, MemoryStick, Keyboard, HardDrive } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const LaptopRepairsPage = () => {
  const laptopServices = [
    {
      icon: <BugOff size={40} />,
      title: 'Virus & Malware Removal',
      description: 'Is your computer running slow or showing strange pop-ups? We can perform a deep clean of your system to remove malicious software and restore performance.',
      link: '/contact',
    },
    {
      icon: <MemoryStick size={40} />,
      title: 'Hardware Upgrades (SSD & RAM)',
      description: 'Give your old laptop a massive speed boost. Upgrading from a traditional hard drive to a Solid State Drive (SSD) is the single best upgrade for performance.',
      link: '/contact',
    },
    {
      icon: <Keyboard size={40} />,
      title: 'Keyboard & Screen Replacement',
      description: 'We replace broken laptop screens and non-responsive or damaged keyboards for a wide variety of MacBook and Windows models.',
      link: '/contact',
    },
    {
      icon: <HardDrive size={40} />,
      title: 'Data Recovery',
      description: "If your laptop has failed and you can&apos;t access your important files, don&apos;t panic. We offer data recovery services to retrieve your valuable information.",
      link: '/contact',
    },
  ];

  return (
    <div className="bg-white dark:bg-darkTeal">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-textDark dark:text-textLight">Nationwide Laptop & MacBook Repair</h1>
              <p className="text-lg max-w-3xl mx-auto text-textSubtleDark dark:text-textSubtleLight">Whether you have a MacBook, Windows laptop, or Chromebook, we provide expert hardware and software repairs through our convenient mail-in service.</p>
            </div>
          </AnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {laptopServices.map((service, index) => (
              <AnimationWrapper key={index} delay={index * 0.1}>
                <div 
                  className="service-card bg-lightOrange-dark dark:bg-darkTeal-light p-8 rounded-lg shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-center mb-4 text-accentMagenta">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold font-heading text-textDark dark:text-textLight mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-textSubtleDark dark:text-textSubtleLight font-sans text-sm text-center">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-center mt-6">
                    <Link href={service.link} passHref>
                      <span className="font-medium text-accentBlue hover:underline cursor-pointer">Get a Quote &rarr;</span>
                    </Link>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default LaptopRepairsPage;