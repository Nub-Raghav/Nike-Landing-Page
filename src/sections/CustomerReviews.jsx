import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="text-center font-bold font-palanquin text-4xl">
                What our
                <span className="text-coral-red"> Customers</span> Say
            </h3>
            <p className="text-center text-lg info-text mt-4">Come let's hear genuine stories from our satisfied customers about their exceptional experiences</p>

            <div className="flex flex-1 justify-evenly items-center mt-24 max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard {...review}/>
                ))}
            </div>
        </section>
    );
}

export default CustomerReviews;