interface PageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-black">{title}</h1>
      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
