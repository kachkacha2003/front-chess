import React from "react";
import Layout from "../layout";

const Aboutus = () => {
  return (
    <div className="mt-[19vh] px-8 mb-14">
      <h2 className="text-2xl font-semibold mb-4">ჩვენს შესახებ</h2>
      <p className="pl-1 px-4">
       კომპანია ChessStore დაფუნძდა 2024 წლის მარტს.საქართველოში ჭადრაკის პოპულარიზაციის მიზნით,
       გვსურს შევთავაზოთ მომხმარებლებს საუკეთესო სერვისი ქვეყნის მაშტაბით.
      </p>
      <p className="pl-1 px-4">
       ვებ-გვერდის მფლობელი-ლაშა კაჭკაჭიშვილი
      </p>
      <h2 className="text-2xl font-semibold mt-4 my-1">კონტაქტი</h2>
      <p className="pl-1 px-4">
       ტელეფონის ნომერი-593555640
      </p>
      <p className="pl-1 px-4">
       ელფოსტა-chessstoregeorgia@gmail.com
      </p>
     

    </div>
  );
};

const About = () => {
  return <Layout children={<Aboutus />} />;
};

export default About;
