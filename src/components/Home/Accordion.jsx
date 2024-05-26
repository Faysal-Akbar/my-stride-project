const Accordion = () => {
    return (
        <div className="join join-vertical w-full mb-10 mt-10 px-10">
          <h1 className="text-center text-4xl font-bold my-16">Know more about products!</h1>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
      Our Products
    </div>
    <div className="collapse-content"> 
      <p>Our products is the world famous products. We have various brands of collection.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Ensuring
    </div>
    <div className="collapse-content"> 
      <p>Our product quality is standard and it is guaranteed.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      Best Product for you
    </div>
    <div className="collapse-content"> 
      <p>I ensure you that, our product is the best product for you.</p>
    </div>
  </div>
</div>
    );
};

export default Accordion;