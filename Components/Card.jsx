const Card = () => {
    return (
      <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <img 
          className="w-full h-48 object-cover" 
          src="https://picsum.photos/200/300?random=2" 
          alt="Card Image"
        />
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
          <p className="text-gray-600 mt-2">
            This is a simple card with an image, title, and description.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;
  