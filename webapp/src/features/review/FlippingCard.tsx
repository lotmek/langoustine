import "react";
import "twin.macro";
import "./FlippingCard.css";

interface FlippingCardProps {
  isAnswerSubmitted: boolean;
}

export const FlippingCard: React.FC<FlippingCardProps> = ({ isAnswerSubmitted }) => {
  return (
    <div className="flip-card" tw="m-5">
      <div className={`flip-card-inner ${isAnswerSubmitted ? "flip-card-rotate" : ""}`}>
        <div className="flip-card-front" tw="rounded-2xl">
          <div tw="h-full flex flex-col p-4">
            <p tw="text-xl">Bird</p>
            <p tw="p-4 italic">The bird is flying in the sky</p>
            <div tw="h-1/2 sm:h-2/3 md:h-full m-auto p-5">
              <img
                src="https://www.allaboutbirds.org/news/wp-content/uploads/2020/07/STanager-Shapiro-ML.jpg"
                alt="Bird"
                tw="h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flip-card-back" tw="rounded-2xl">
          <div tw="h-full flex flex-col p-4">
            <div>
              <p tw="text-xl">Bird</p>
              <p tw="p-4 italic">The bird is flying in the sky</p>
            </div>
            <div>
              <p tw="text-xl">Bird</p>
              <p tw="p-4 italic">The bird is flying in the sky</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
