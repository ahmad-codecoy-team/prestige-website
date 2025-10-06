interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl md:text-5xl font-bold text-black">{title}</h1>
      <p className="text-base text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};
