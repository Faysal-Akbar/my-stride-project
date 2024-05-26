import SingleReview from "./SingleReview";

const Reviews = () => {
    const reviews = [
        {
          "review_id": "001",
          "customer_name": "John Doe",
          "rating": 5,
          "title": "Amazing comfort!",
          "comment": "These shoes are incredibly comfortable and perfect for running long distances. The cushioning is just right.",
          "date": "2024-05-01"
        },
        {
          "review_id": "002",
          "customer_name": "Jane Smith",
          "rating": 4,
          "title": "Great for everyday use",
          "comment": "I wear these shoes daily, and they have held up well over the past few months. They are stylish and versatile.",
          "date": "2024-05-03"
        },
        {
          "review_id": "003",
          "customer_name": "Emily Johnson",
          "rating": 3,
          "title": "Good, but not for wide feet",
          "comment": "The shoes are well-made, but they are a bit narrow for my wide feet. I recommend trying them on before purchasing.",
          "date": "2024-05-05"
        },
        {
          "review_id": "004",
          "customer_name": "Michael Brown",
          "rating": 5,
          "title": "Perfect for running!",
          "comment": "I've tried many running shoes, and these are by far the best. They provide excellent support and comfort.",
          "date": "2024-05-07"
        },
        {
          "review_id": "005",
          "customer_name": "Sarah Davis",
          "rating": 4,
          "title": "Very comfortable but pricey",
          "comment": "These shoes are extremely comfortable, but they are a bit on the expensive side. Overall, worth the investment.",
          "date": "2024-05-10"
        },
        {
          "review_id": "006",
          "customer_name": "David Wilson",
          "rating": 2,
          "title": "Not durable",
          "comment": "The shoes were great at first, but they started to wear out after just a couple of months. Disappointed with the durability.",
          "date": "2024-05-12"
        },
        {
          "review_id": "007",
          "customer_name": "Laura Martin",
          "rating": 5,
          "title": "Stylish and comfortable",
          "comment": "Love the design of these shoes. They are very comfortable and look great with almost any outfit.",
          "date": "2024-05-15"
        }
      ];
      console.log(reviews)
    return (
        <div className="mb-10">
            <h1 className="text-center text-4xl font-bold my-16">What Our Customer Say!</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-betweem mx-10">
        {
            reviews.map(review => <SingleReview
            key={review.review_id}
            review={review}
            ></SingleReview>)
        }
        </div>
        </div>
    );
};

export default Reviews;