// eslint-disable-next-line react/prop-types
const SingleReview = ({review}) => {
    // eslint-disable-next-line react/prop-types
    const {customer_name, rating, title, comment} = review;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl h-[200px]">
        <div className="card-body">
            <h2 className="card-title text-yellow-500">{customer_name}</h2>
            <h3 className="font-bold">{title}</h3>
            <p>{comment}</p>
        </div>
        </div>
    );
};

export default SingleReview;