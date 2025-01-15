import React from "react";
import TypingAnimation from "./text-animatio";

const Page = () => {
  return (
    <div className="h-screen bg-black flex flex-col px-44 justify-center items-start">
      <h3 className="text-[#00FF42] text-lg">
        <TypingAnimation
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
        autem vitae, maiores corporis, voluptas est reiciendis maxime laboriosam
        qui ducimus adipisci dolorem doloribus, possimus blanditiis. Quis
        molestias sapiente sed doloribus nostrum unde eveniet veniam, deserunt
        consectetur repudiandae at suscipit perferendis eum nemo quam molestiae
        a assumenda. Non quae harum eos voluptas, veritatis quisquam, nulla
        mollitia sunt fugit velit voluptatibus vitae? Provident quisquam
        doloribus iste vel harum delectus vitae molestias voluptate accusamus
        nostrum, veritatis natus esse quas atque tenetur at eius dolorem. Porro,
        mollitia? Laudantium quasi aliquam optio blanditiis fugiat, nostrum
        obcaecati qui quae, hic debitis possimus ratione similique illo?"
          speed={20}
        />
      </h3>
    </div>
  );
};

export default Page;
