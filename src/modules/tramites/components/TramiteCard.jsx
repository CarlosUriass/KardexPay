const TramiteCard = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row border border-gray-300 dark:border-gray-600 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
        src={imageUrl}
        alt="Card image"
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium">{title}</h5>
        <p className="mb-4 text-base">{description}</p>
      </div>
    </div>
  );
};

export default TramiteCard;
