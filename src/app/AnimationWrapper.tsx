"use client";

const AnimationWrapper = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return <div>{children}</div>;
};

export default AnimationWrapper;
