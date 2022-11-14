import { PropsWithChildren } from 'react';

const ContentLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="p-8">
      <div className="items-start gap-8 lg:flex lg:flex-row lg:place-content-around">
        <div className="w-full mx-auto prose max-w-prose">{children}</div>
      </div>
    </section>
  );
};

export default ContentLayout;
